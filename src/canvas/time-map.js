import upImg from "../images/up1.png";
import leftImg from "../images/left1.png";
import downImg from "../images/down1.png";
import rightImg from "../images/right1.png";
import holdText from "../images/hold.png";
import rapidText from "../images/rapid.png";

let myCanvas;
let ctx;
const timePointsAmount = 66;

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
export function drawMap(prompts = [], seconds = 0) {
  const currentTime = seconds * 10; // miliseconds
  const time = Number(currentTime.toFixed(0));
  const firstPoint = time - timePointsAmount / 2;

  const center = myCanvas.width / 2;
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

  const offSet = ((time - currentTime) / timePointsAmount) * myCanvas.width;

  for (let i = 0; i < timePointsAmount; i += 1) {
    const indicatedTime = i + firstPoint;
    ctx.beginPath();
    ctx.lineWidth = 4.992;
    const xCoords = (i / timePointsAmount) * myCanvas.width + offSet;
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
    const promptTime = Number((indicatedTime / 10).toFixed(1));
    const gotPrompt = prompts.find((prompt) => prompt.time === promptTime);
    if (gotPrompt) {
      switch (gotPrompt.type) {
        case "click": {
          drawClickPrompt(gotPrompt.key, xCoords);
          break;
        }
        default: {
          const start = xCoords;
          const end =
            ((i + gotPrompt.duration * 10) / timePointsAmount) *
              myCanvas.width +
            offSet;
          drawLongPrompt(gotPrompt.key, start, end, gotPrompt.type);
        }
      }
    }
  }
  // draw triangle
  ctx.moveTo(center, 30);
  ctx.lineTo(center - 15, 0);
  ctx.lineTo(center + 15, 0);
  ctx.fillStyle = "rgba(38, 199, 151, 0.741)";
  ctx.fill();
}
