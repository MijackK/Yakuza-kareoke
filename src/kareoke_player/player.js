import "./player.css";
import "../general.css";
import clickSound from "../audio/bass1drum-43078.mp3";
import greatImg from "../images/great.png";
import missImg from "../images/miss.png";
import badImg from "../images/bad.png";
import goodImg from "../images/good.png";
import kareokeFactory from "../player-parts/general-parts";
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
} from "../dom-manipulation/player-dom";

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
let score = 0;
let combo = 0;
let heat = false;
let keydown = false;
let animationID;
const imageIndicator = {
  great: greatImg,
  miss: missImg,
  bad: badImg,
  good: goodImg,
};
let buttons;
let clickInput;

let holdInput;

let rapidInput;

const heatMode = (info) => {
  if (info.Success === true && info.incrementScore === 0 && heat === true) {
    heat = false;
    document.body.className = "cold-mode";
  }
  if (heat === false && combo >= 20) {
    heat = true;
    document.body.className = "heat-mode";
  }
};

// const finalScoreCalculator = () => {};
const incrementScore = (info) => {
  const multiplier = heat ? 1.5 : 1;
  const container = document.querySelector(".combo-container");
  if (info.incrementScore > 0) {
    score += info.incrementScore * multiplier;
    combo += 1;
    if (combo === 1) {
      container.style.opacity = 1;
    }
    document.querySelector("#score").textContent = score;
    document.querySelector(".combo-score").textContent = combo;
    container.classList.toggle("jump-animation");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        container.classList.toggle("jump-animation");
      });
    });
  }
  if (info.incrementScore === 0 && info.Success === true) {
    combo = 0;
    container.style.opacity = 0;
  }
  heatMode(info);
};

const feedBackVisualiser = feedBackVisualiserFactory();

const eventHandler = (key, inputObject, methodName) => {
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
  const info = inputObject.prototype.removeInput(
    duration,
    elapsedTime,
    inputObject
  );
  feedBackVisualiser.showIndicator(info);
  incrementScore(info);
};
const stopMap = () => {
  clearInterval(gameLoop);
  cancelAnimationFrame(animationID);
  play = false;
  pauseMap();
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
  clickInput = click(
    buttons.filter((element) => element.type === "click"),
    kareokeFactory,
    imageIndicator
  );

  holdInput = hold(
    buttons.filter((element) => element.type === "hold"),
    kareokeFactory,
    imageIndicator
  );

  rapidInput = rapid(
    buttons.filter((element) => element.type === "rapid"),
    kareokeFactory,
    imageIndicator
  );
};
const pause = () => {
  stopMap();
  openMenu();
};
const restart = () => {
  timeElapsed = 0;
  previousTime = 0;
  score = 0;
  combo = 0;
  resetMap();
  // reload them
  initalizeButtons();

  startMap();
};

// Eventlistners and logic for getting
document.querySelector("body").addEventListener("keydown", (e) => {
  if (!keydown) {
    if (eventHandler(e.key, clickInput, "checkInput") !== true) {
      // sometimes hold and click inputs can be valid in the same time frame,
      // this will make sure that they dont trigger at the same time.
      eventHandler(e.key, holdInput, "checkDown");
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
const songID = document.location.search.split("?song=")[1];
startLoading();

mapManager
  .loadMap(songID)
  .then(({ mapInfo, audioUrl, backgroundUrl, extension }) => {
    buttons = JSON.parse(mapInfo.beatMap);
    // separate button types

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
