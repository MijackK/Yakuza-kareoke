import "./player.css";
import click from "../audio/hitsound02.mp3";
import greatImg from "../images/great.png";
import missImg from "../images/miss.png";
import badImg from "../images/bad.png";
import goodImg from "../images/good.png";
import kareokeFactory from "../parts/general-parts";
import inputHandler from "../parts/input-parts";
import Visualiser from "../parts/display-parts";
import { validPrompts, init } from "../canvas/canvas";
import video from "../video/judgment.mp4";

init();
const audio = document.createElement("audio");

// const song = document.createElement("audio");
audio.src = click;
// song.src = judgment;
audio.playbackRate = 1;
let play = true;

document.querySelector("body").prepend(audio);
// document.querySelector("body").prepend(song);
const backgroundVideo = document.querySelector(".background");
backgroundVideo.src = video;
// song.play();
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
const buttons = JSON.parse(localStorage.getItem("judgment"));

const clickBtns = buttons.filter((element) => element.type === "click");
const holdBtns = buttons.filter((element) => element.type === "hold");
const rapidBtns = buttons.filter((element) => element.type === "rapid");

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

const finalScoreCalculator = () => {};
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

const clickInput = inputHandler.click(
  clickBtns.slice(),
  kareokeFactory,
  imageIndicator
);

const holdInput = inputHandler.hold(
  holdBtns.slice(),
  kareokeFactory,
  imageIndicator
);

const rapidInput = inputHandler.rapid(
  rapidBtns.slice(),
  kareokeFactory,
  imageIndicator
);

const feedBackVisualiser = Visualiser.feedBackVisualiser();

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

const timeController = () => {
  let timeNow = Number((Date.now() - startTime) / 1000);

  if (Math.abs(timeElapsed - timeNow) > 0.1 && play === false) {
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
    play = false;
    clearInterval(gameLoop);
    cancelAnimationFrame(animationID);
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
backgroundVideo.onloadedmetadata = () => {
  backgroundVideo.play();
  animationID = requestAnimationFrame(AnimatePrompts);
  gameLoop = setInterval(timeController, 0);
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
    // eventHandler(e.key, clickInput, "checkInput");
    // eventHandler(e.key, holdInput, "checkDown");
    /** 
    if (rapidInput.inputList.length !== 0) {
      rapidInput.checkInput(
        e.key,
        rapidInput.inputList,
        Number(((Date.now() - startTime) / 1000).toFixed(1))
      );
    }
*/
    audio.currentTime = 0;
    audio.play();

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
      audio.currentTime = 0;
      audio.play();
    }
    incrementScore(holdInfo);
  }
});
