import upImg from "../images/up1.png";
import leftImg from "../images/left1.png";
import downImg from "../images/down1.png";
import rightImg from "../images/right1.png";
import holdText from "../images/hold.png";
import rapidText from "../images/rapid.png";

let myCanvas;
let ctx;
// a time point every x pixels of the canvas
const pixelsPerIndicator = 29;

// each indicator represent 100 miliseconds
let numberOfIndicators = 0;

const symbols = {
  ArrowUp: document.createElement("img"),
  ArrowLeft: document.createElement("img"),
  ArrowRight: document.createElement("img"),
  ArrowDown: document.createElement("img"),
};
const longPromptText = {
  rapid: rapidText,
  hold: holdText,
};
symbols.ArrowUp.src = upImg;
symbols.ArrowLeft.src = leftImg;
symbols.ArrowDown.src = downImg;
symbols.ArrowRight.src = rightImg;

const textImage = document.createElement("img");

export function initMap(id) {
  myCanvas = document.querySelector(id);
  myCanvas.width = window.innerWidth;
  myCanvas.height = 150;
  numberOfIndicators = myCanvas.width / pixelsPerIndicator;

  if (myCanvas.getContext) {
    ctx = myCanvas.getContext("2d"); // rendering context
  } else console.log("canvas not supported");
}

function drawClickPrompt(arrowDirection, xPosition) {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  // ctx.arc(xPosition, yPosition, 22.5, 0, 2 * Math.PI);
  ctx.drawImage(symbols[arrowDirection], xPosition - 20.5, 10, 40, 40);
  ctx.fill();
  ctx.stroke();
}
function drawLongPrompt(arrowDirection, startArc, endArc, type) {
  const size = 45;
  textImage.src = longPromptText[type];
  const textP = startArc + 100;
  ctx.font = "40px serif";
  ctx.strokeStyle = type === "rapid" ? "blue" : "#add8e6";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(startArc, 30, 15.5, 0, 2 * Math.PI);
  ctx.arc(endArc, 30, 15.5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.drawImage(symbols[arrowDirection], startArc - 22.5, 10, size, size);
  ctx.drawImage(textImage, textP, 10, 75, 35);
  ctx.drawImage(symbols[arrowDirection], endArc - 22.5, 10, size, size);
  ctx.stroke();
}

function drawTimeIndicators(seconds) {
  console.log(seconds);
  const fractionalPart = seconds * 10 - Math.floor(seconds * 10);
  const offset = (fractionalPart / numberOfIndicators) * myCanvas.width;

  for (let i = 0; i < numberOfIndicators; i += 1) {
    const indicatedTime = Math.floor(seconds * 10 + i);

    const xCoords = (i / numberOfIndicators) * myCanvas.width - offset;

    ctx.beginPath();
    ctx.lineWidth = 2;

    ctx.moveTo(xCoords, 0);

    switch (indicatedTime % 10) {
      case 0:
        ctx.lineTo(xCoords, 100);
        break;
      default:
        ctx.lineTo(xCoords, 60);
    }
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.fillText(indicatedTime / 10, xCoords, 10);
  }
}
function drawPrompts(prompts, time) {
  // determines how many seconds before click time should the prompt appear
  const entryOffset = numberOfIndicators / 10;
  console.log(entryOffset);

  for (let i = 0; i < prompts.length; i += 1) {
    const prompt = prompts[i];
    const valid =
      prompt.time + prompt.duration >= time &&
      time >= prompt.time - entryOffset;
    if (valid) {
      const xCoords = prompt.time;
      console.log(prompt);
    }
  }
}
export function drawMap(prompts = [], seconds = 0) {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  const halfWayTime = numberOfIndicators / 2 / 10;
  drawTimeIndicators(seconds - Number(halfWayTime.toFixed(3)));
  // drawPrompts(prompts, seconds);
  const center = myCanvas.width / 2;

  // draw triangle
  ctx.moveTo(center, 30);
  ctx.lineTo(center - 15, 0);
  ctx.lineTo(center + 15, 0);
  ctx.fillStyle = "rgba(38, 199, 151, 0.741)";
  ctx.fill();
}

window.addEventListener("resize", () => {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  myCanvas.width = window.innerWidth;
  numberOfIndicators = Number(
    (myCanvas.clientWidth / pixelsPerIndicator).toFixed(0)
  );
  console.log(numberOfIndicators);
});
