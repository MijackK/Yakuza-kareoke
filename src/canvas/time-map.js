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
  numberOfIndicators = Number(
    (myCanvas.clientWidth / pixelsPerIndicator).toFixed(0)
  );

  if (myCanvas.getContext) {
    ctx = myCanvas.getContext("2d"); // rendering context
  } else console.log("canvas not supported");
}

function drawClickPrompt(arrowDirection, xPosition) {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  // ctx.arc(xPosition, 120, 22.5, 0, 2 * Math.PI);
  ctx.drawImage(symbols[arrowDirection], xPosition - 20.5, 10, 40, 40);
  ctx.fill();
}
function drawLongPrompt(arrowDirection, startArc, endArc, type) {
  const size = 45;
  textImage.src = longPromptText[type];
  const textP = startArc + 100;

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
  ctx.fill();
}

function drawTimeIndicators(seconds) {
  const fractionalPart = seconds * 10 - Math.floor(seconds * 10);
  const offset = (fractionalPart / numberOfIndicators) * myCanvas.width;

  for (let i = 0; i < numberOfIndicators; i += 1) {
    const indicatedTime = Math.floor(seconds * 10 + i);

    const xCoords = Math.floor(
      (i / numberOfIndicators) * myCanvas.width - offset
    );

    ctx.beginPath();
    ctx.lineWidth = 2;

    ctx.moveTo(xCoords, 0);

    switch (indicatedTime % 10) {
      case 0:
        ctx.lineTo(xCoords, 100);
        ctx.fillText(indicatedTime / 10, xCoords - 3, 110);
        break;
      default:
        ctx.lineTo(xCoords, 60);
        ctx.fillText(indicatedTime / 10, xCoords - 3, 70);
    }
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
}

function test(seconds, prompts) {
  // how many seconds before time the prompt should appear
  const offSet = numberOfIndicators / 2 / 10;

  for (let i = 0; i < prompts.length; i += 1) {
    const prompt = prompts[i];
    const valid =
      prompt.time + prompt.duration + offSet >= seconds &&
      seconds >= prompt.time - offSet;
    if (valid) {
      const travelDistance =
        (prompt.time - seconds - offSet) * pixelsPerIndicator * 10;

      const xCoords = Math.floor(myCanvas.width + travelDistance);
      if (prompt.type === "click") {
        drawClickPrompt(prompt.key, xCoords);
      } else {
        const endDistance =
          (prompt.time + prompt.duration - seconds - offSet) *
          pixelsPerIndicator *
          10;
        const endCoords = Math.floor(myCanvas.width + endDistance);
        drawLongPrompt(prompt.key, xCoords, endCoords, prompt.type);
      }
    }
  }
}
export function drawMap(prompts = [], seconds = 0) {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  const halfWayTime = numberOfIndicators / 2 / 10;
  // drawTimeIndicators(Number(seconds - halfWayTime));
  // drawPrompts(prompts, seconds);

  test(seconds, prompts);

  // draw triangleww

  const center = myCanvas.width / 2;
  ctx.beginPath();
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
