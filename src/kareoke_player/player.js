import "./player.css";
import "../general.css";
import clickSound from "../audio/metronome-85688.mp3";
import sScore from "../images/s-score.png";
import aScore from "../images/a-score.png";
import bScore from "../images/b-score.png";
import cScore from "../images/c-score.png";
import dScore from "../images/d-score.png";

import { click, hold, rapid } from "../player-parts/input-parts";
import { feedBackVisualiserFactory } from "../player-parts/display-parts";
import { validPrompts, init } from "../canvas/canvas";
import beatMapManager from "../managers/map_manager";
import PlayerManager from "../managers/player_manager";

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
  addTouchControls,
} from "../dom-manipulation/player-dom";

import { saveHighScore } from "../api/kareoke";

initialize();
init();
addTouchControls();
const mapManager = beatMapManager();
const player = PlayerManager();
const time = document.querySelector("#time");
const audioContext = new AudioContext();
const song = document.querySelector("#song");
const desync = document.querySelector("#desync");

const wasd = {
  w: "ArrowUp",
  s: "ArrowDown",
  a: "ArrowLeft",
  d: "ArrowRight",
};

// give song an src

// give background an src

const scoreSummary = { great: 0, good: 0, bad: 0, miss: 0 };
const incrementValue = { great: 100, good: 60, bad: 0, miss: 0 };

let score = 0;
let combo = 0;

let keydown = false;
let animationID;

let buttons = [];
let clickInput = [];

let holdInput = [];

let rapidInput = [];
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
      player.getTimeElapsed(),
      inputObject.inputList
    );
    feedBackVisualiser.inputFeedback(Info);
    feedBackVisualiser.showIndicator(Info);
    incrementScore(Info);
    Success = Info.Success;
    if (Info.Success || Info.correct) {
      playClick();
    }
  }
  return Success;
};
const rapidInputHandler = (key) => {
  if (rapidInput.inputList.length !== 0) {
    const correct = rapidInput.checkInput(
      key,
      rapidInput.inputList,
      player.getTimeElapsed().toFixed(1)
    );
    if (correct) {
      playClick();
    }
  }
};

const removeGameInputs = (duration, inputObject, elapsedTime) => {
  const info = inputObject.removeInput(duration, elapsedTime, inputObject);
  feedBackVisualiser.showIndicator(info);
  incrementScore(info);
};
const stopMap = () => {
  cancelAnimationFrame(animationID);
  player.setPlay(false);
  validPrompts(player.getTimeElapsed(), [
    ...clickInput.inputList,
    ...rapidInput.inputList,
    ...holdInput.inputList,
  ]);
};

const timeController = () => {
  if (player.getPlay() === false) return;
  const currentTime = Number(
    (performance.now() - player.getStartTime()) / 1000
  );

  player.setTimeElapsed(currentTime);

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
          console.log(res);
        })
        .catch((err) => {
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
      Number(player.getTimeElapsed().toFixed(1))
    );
    feedBackVisualiser.inputFeedback(rapidInfo);
    feedBackVisualiser.showIndicator(rapidInfo);
    incrementScore(rapidInfo);
  }
  // removing inputs prompts from array.
  if (clickInput.inputList.length !== 0)
    removeGameInputs(0.2, clickInput, player.getTimeElapsed());
  if (holdInput.inputList.length !== 0)
    removeGameInputs(
      holdInput.inputList[0].duration + 0.2,
      holdInput,
      player.getTimeElapsed()
    );
  if (rapidInput.inputList.length !== 0)
    removeGameInputs(
      rapidInput.inputList[0].duration + 0.2,
      rapidInput,
      player.getTimeElapsed()
    );
  time.textContent = player.getTimeElapsed().toFixed(3);
};
const AnimatePrompts = () => {
  timeController();
  const promptArrays = clickInput.inputList
    .concat(rapidInput.inputList)
    .concat(holdInput.inputList);

  // adding prompts to the Canvas
  validPrompts(player.getTimeElapsed(), promptArrays, player.getPlay());
  animationID = requestAnimationFrame(AnimatePrompts);
};
const startMap = () => {
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
  animationID = requestAnimationFrame(AnimatePrompts);
  player.startMap();
  playMap(player.getTimeElapsed());
  closeMenu();
};
const initalizeButtons = () => {
  const buttonsCopy = buttons.map((button) => ({ ...button }));
  clickInput = click(buttonsCopy.filter((element) => element.type === "click"));

  holdInput = hold(buttonsCopy.filter((element) => element.type === "hold"));

  rapidInput = rapid(buttonsCopy.filter((element) => element.type === "rapid"));
};
const pause = () => {
  stopMap();
  pauseMap();
  openMenu();
  desync.textContent = `desync: ${(
    player.getTimeElapsed() - song.currentTime
  ).toFixed(3)}`;
};
const restart = () => {
  player.setTimeElapsed(0);

  score = 0;
  combo = 0;
  scoreSummary.great = 0;
  scoreSummary.good = 0;
  scoreSummary.bad = 0;
  scoreSummary.miss = 0;
  resetMap();
  updateScore(0, 0);
  // reload them
  initalizeButtons();

  startMap();
};

const checkDownInput = (key) => {
  if (!keydown) {
    if (handleKeyDown(key, clickInput, "checkInput") !== true) {
      // sometimes hold and click inputs can be valid in the same time frame,
      // this will make sure that they dont trigger at the same time.
      handleKeyDown(key, holdInput, "checkDown");
    }
    rapidInputHandler(key);

    keydown = true;
  }
};
const checkUpInput = (key) => {
  keydown = false;

  if (holdInput.inputList.length !== 0) {
    const holdInfo = holdInput.checkUp(
      key,
      player.getTimeElapsed().toFixed(1),
      holdInput.inputList
    );
    feedBackVisualiser.inputFeedback(holdInfo);
    feedBackVisualiser.showIndicator(holdInfo);

    if (holdInfo.Success === true) {
      playClick();
    }
    incrementScore(holdInfo);
  }
};
// Eventlistners and logic for getting
document.querySelector("body").addEventListener("keydown", (e) => {
  checkDownInput(wasd[e.key] || e.key);
});

document.querySelector("body").addEventListener("keyup", (e) => {
  checkUpInput(wasd[e.key] || e.key);
});

// touc controls
document
  .querySelector("#touch-controls")
  .addEventListener("touchstart", (e) => {
    if (e.target.id === "touch-controls") return;
    checkDownInput(e.target.dataset.key);
  });
document.querySelector("#touch-controls").addEventListener("touchend", (e) => {
  checkUpInput(e.target.dataset.key);
});
document.querySelector("body").addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    if (player.getPlay()) {
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
  window.location.href = "index.html";
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
    highScore = mapInfo.highscore || 0;
    mapID = mapInfo.id;

    addMapInfo(mapInfo.name, mapInfo.author);

    // load them
    initalizeButtons();
    // add media sources
    const audioElement = addAudio(
      audioUrl,
      backgroundUrl,
      clickSound,
      extension
    );
    const track = audioContext.createMediaElementSource(audioElement);
    track.connect(audioContext.destination);
    openMenu();
  })
  .catch((err) => {
    console.log(err);
    // open dialog to allow user to pick a song
  })
  .finally(() => {
    stopLoading();
  });
