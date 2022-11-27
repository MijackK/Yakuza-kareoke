import kareokeFactory from "./general-parts";
import { click, hold, rapid } from "./input-parts";
import { feedBackVisualiserFactory } from "./display-parts";
import greatImg from "../images/great.png";
import missImg from "../images/miss.png";
import badImg from "../images/bad.png";
import goodImg from "../images/good.png";

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

const clickInput = click(clickBtns.slice(), kareokeFactory, imageIndicator);

const holdInput = hold(holdBtns.slice(), kareokeFactory, imageIndicator);

const rapidInput = rapid(rapidBtns.slice(), kareokeFactory, imageIndicator);

const feedBackVisualiser = feedBackVisualiserFactory();

const removeGameInputs = (duration, inputObject, elapsedTime) => {
  feedBackVisualiser.showIndicator(
    inputObject.prototype.removeInput(duration, elapsedTime, inputObject)
  );
};
const gamePlayerLogic = (timeElapsed) => {
  if (
    clickInput.inputList.length === 0 &&
    holdInput.inputList.length === 0 &&
    rapidInput.inputList.length === 0
  ) {
    return true;
  }
  // check the number of clicks for a rapid prompt
  if (rapidInput.inputList.length !== 0) {
    const rapidInfo = rapidInput.countInputs(
      rapidInput.inputList,
      Number(timeElapsed.toFixed(1))
    );
    feedBackVisualiser.inputFeedback(rapidInfo);
    feedBackVisualiser.showIndicator(rapidInfo);
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
  return false;
};

export default gamePlayerLogic;
