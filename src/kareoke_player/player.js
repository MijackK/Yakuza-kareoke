import "./player.css";
import "../general.css";
import clickSound from "../audio/bass1drum-43078.mp3";
import sScore from "../images/s-score.png";
import aScore from "../images/a-score.png";
import bScore from "../images/b-score.png";
import cScore from "../images/c-score.png";
import dScore from "../images/d-score.png";

import { click, hold, rapid } from "../player-parts/input-parts";
import { feedBackVisualiserFactory } from "../player-parts/display-parts";
import { validPrompts, init } from "../canvas/canvas";
import beatMapManager from "../managers/map_manager";
import {
  addAudio,
  playMap,
  pauseMap,
  playClick,
  stopLoading,
  startLoading,
  openMenu,
  closeMenu,
  initialize,
  resetMap,
  addMapInfo,
  openFinalScore,
  updateScore,
} from "../dom-manipulation/player-dom";

import { saveHighScore } from "../api/kareoke";

initialize();
init();
const mapManager = beatMapManager();

// give song an src
let play = false;

// give background an src

let timeElapsed = 0;
let previousTime = 0;
let startTime = Date.now();
let gameLoop;
const scoreSummary = { great: 0, good: 0, bad: 0, miss: 0 };
const incrementValue = { great: 100, good: 60, bad: 0, miss: 0 };

let score = 0;
let combo = 0;

let keydown = false;
let animationID;

let buttons;
let clickInput;

let holdInput;

let rapidInput;
let highScore;
let mapID;
const scoreMultiplier = 1.5;
// const finalScoreCalculator = () => {};

const calculateRank = (promtsLength, userScore) => {
  const multiplier = promtsLength > 20 ? 1.5 : 1;
  // the score removed from the total, since the user wont have heatmode till combo 20
  const first20 =
    promtsLength > 20 ? 20 * multiplier * incrementValue.great : 0;
  const totalScore = promtsLength * incrementValue.great * multiplier - first20;

  const accuracy = userScore / totalScore;

  if (accuracy > 0.9)
    return { rank: "S", color: "#ffd700", shadow: "#ffd700ab", image: sScore };
  if (accuracy > 0.8)
    return { rank: "A", color: "#0ed145", shadow: "#0ed145ab", image: aScore };
  if (accuracy > 0.7)
    return { rank: "B", color: "#00a8f3", shadow: "#00a8f3ab", image: bScore };
  if (accuracy > 0.6)
    return { rank: "C", color: "#ff6c00", shadow: "#ff6c00ab", image: cScore };
  return { rank: "D", color: "#ffffff", shadow: "#ffffffab", image: dScore };
};
const incrementScore = (info) => {
  if (!info.Success) return;
  scoreSummary[info.performance] += 1;

  if (["bad", "miss"].includes(info.performance)) {
    combo = 0;
    updateScore(score, combo);
    return;
  }

  score +=
    incrementValue[info.performance] * (combo >= 20 ? scoreMultiplier : 1);
  combo += 1;

  updateScore(score, combo);
};

const feedBackVisualiser = feedBackVisualiserFactory();

const handleKeyDown = (key, inputObject, methodName) => {
  let Success = false;
  if (inputObject.inputList.length !== 0) {
    // eslint-disable-next-line dot-notation
    const Info = inputObject[methodName](
      key,
      timeElapsed,
      inputObject.inputList
    );
    feedBackVisualiser.inputFeedback(Info);
    feedBackVisualiser.showIndicator(Info);
    incrementScore(Info);
    Success = Info.Success;
  }
  return Success;
};
const rapidInputHandler = (key) => {
  if (rapidInput.inputList.length !== 0) {
    rapidInput.checkInput(
      key,
      rapidInput.inputList,
      Number(((Date.now() - startTime) / 1000).toFixed(1))
    );
  }
};

const removeGameInputs = (duration, inputObject, elapsedTime) => {
  const info = inputObject.removeInput(duration, elapsedTime, inputObject);
  feedBackVisualiser.showIndicator(info);
  incrementScore(info);
};
const stopMap = () => {
  clearInterval(gameLoop);
  cancelAnimationFrame(animationID);
  play = false;

  validPrompts(
    timeElapsed,
    [...clickInput.inputList, ...rapidInput.inputList, ...holdInput.inputList],
    play
  );
};

const timeController = () => {
  if (play === false) return;
  let timeNow = Number((Date.now() - startTime) / 1000);

  if (Math.abs(timeElapsed - timeNow) > 0.1) {
    const startIncrease = timeNow - previousTime;
    startTime += startIncrease * 1000;
    timeNow = Number((Date.now() - startTime) / 1000);
  }

  timeElapsed += timeNow - previousTime;

  if (
    clickInput.inputList.length === 0 &&
    holdInput.inputList.length === 0 &&
    rapidInput.inputList.length === 0
  ) {
    stopMap();
    const rank = calculateRank(buttons.length, score);
    openFinalScore(score, scoreSummary, score > highScore, rank);
    if (score > highScore) {
      highScore = score;
      saveHighScore(score, mapID)
        .then((res) => {
          alert(res);
        })
        .error((err) => {
          console.log(err);
          console.log("Could not update highscore");
        });
    }
    return;
  }
  // check the number of clicks for a rapid prompt
  if (rapidInput.inputList.length !== 0) {
    const rapidInfo = rapidInput.countInputs(
      rapidInput.inputList,
      Number(timeElapsed.toFixed(1))
    );
    feedBackVisualiser.inputFeedback(rapidInfo);
    feedBackVisualiser.showIndicator(rapidInfo);
    incrementScore(rapidInfo);
  }
  // removing inputs prompts from array.
  if (clickInput.inputList.length !== 0)
    removeGameInputs(0.2, clickInput, timeElapsed);
  if (holdInput.inputList.length !== 0)
    removeGameInputs(
      holdInput.inputList[0].duration + 0.2,
      holdInput,
      timeElapsed
    );
  if (rapidInput.inputList.length !== 0)
    removeGameInputs(
      rapidInput.inputList[0].duration + 0.2,
      rapidInput,
      timeElapsed
    );
  previousTime = timeNow;

  document.querySelector("#time").textContent = timeElapsed.toFixed(3);
};
const AnimatePrompts = () => {
  timeController();
  const promptArrays = clickInput.inputList
    .concat(rapidInput.inputList)
    .concat(holdInput.inputList);

  // adding prompts to the Canvas
  validPrompts(timeElapsed, promptArrays, play);
  animationID = requestAnimationFrame(AnimatePrompts);
};
const startMap = () => {
  animationID = requestAnimationFrame(AnimatePrompts);
  gameLoop = setInterval(timeController, 0);
  play = true;
  playMap();
  closeMenu();
};
const initalizeButtons = () => {
  clickInput = click(buttons.filter((element) => element.type === "click"));

  holdInput = hold(buttons.filter((element) => element.type === "hold"));

  rapidInput = rapid(buttons.filter((element) => element.type === "rapid"));
};
const pause = () => {
  stopMap();
  pauseMap();
  openMenu();
};
const restart = () => {
  timeElapsed = 0;
  previousTime = 0;
  score = 0;
  combo = 0;
  scoreSummary.great = 0;
  scoreSummary.good = 0;
  scoreSummary.bad = 0;
  scoreSummary.miss = 0;
  resetMap();
  // reload them
  initalizeButtons();

  startMap();
};

// Eventlistners and logic for getting
document.querySelector("body").addEventListener("keydown", (e) => {
  if (!keydown) {
    if (handleKeyDown(e.key, clickInput, "checkInput") !== true) {
      // sometimes hold and click inputs can be valid in the same time frame,
      // this will make sure that they dont trigger at the same time.
      handleKeyDown(e.key, holdInput, "checkDown");
    }
    rapidInputHandler(e.key);
    playClick();
    keydown = true;
  }
});

document.querySelector("body").addEventListener("keyup", (e) => {
  keydown = false;

  if (holdInput.inputList.length !== 0) {
    const holdInfo = holdInput.checkUp(
      e.key,
      Number(((Date.now() - startTime) / 1000).toFixed(1)),
      holdInput.inputList
    );
    feedBackVisualiser.inputFeedback(holdInfo);
    feedBackVisualiser.showIndicator(holdInfo);

    if (holdInfo.Success === true) {
      playClick();
    }
    incrementScore(holdInfo);
  }
});
document.querySelector("body").addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    if (play) {
      pause();
      return;
    }
    startMap();
  }
});
document.querySelector("#resume-btn").addEventListener("click", () => {
  startMap();
});
document.querySelector("#home-btn").addEventListener("click", () => {
  window.location.href = "http://localhost:8080/index.html";
  // change this to be dynamic instead of static
});

document
  .querySelector("#restart-btn")
  .addEventListener("click", () => restart());
document.querySelector("#pause-btn").addEventListener("click", () => pause());
document
  .querySelector("#play-again")
  .addEventListener("click", () => restart());
const songID = document.location.search.split("?song=")[1];
startLoading();

mapManager
  .loadMap(songID)
  .then(({ mapInfo, audioUrl, backgroundUrl, extension }) => {
    buttons = JSON.parse(mapInfo.beatMap);
    highScore = mapInfo.highScore || 0;
    mapID = mapInfo.id;

    addMapInfo(mapInfo.name, mapInfo.author);

    // load them
    initalizeButtons();
    // add media sources
    addAudio(audioUrl, backgroundUrl, clickSound, extension);
    openMenu();
  })
  .catch((err) => {
    console.log(err);
    // open dialog to allow user to pick a song
  })
  .finally(() => {
    stopLoading();
  });
