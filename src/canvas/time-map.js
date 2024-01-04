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
let canvaswidth = 0;

const symbols = {
  ArrowUp: new Image(),
  ArrowLeft: new Image(),
  ArrowRight: new Image(),
  ArrowDown: new Image(),
};
const longPromptText = {
  rapid: rapidText,
  hold: holdText,
};

symbols.ArrowUp.src = upImg;
symbols.ArrowLeft.src = leftImg;
symbols.ArrowDown.src = downImg;
symbols.ArrowRight.src = rightImg;

const textImage = new Image();

export function initMap(id) {
  myCanvas = document.querySelector(id);
  myCanvas.width = window.innerWidth;
  myCanvas.height = 150;
  canvaswidth = myCanvas.width;
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
  // ctx.arc(xPosition, 50, 22.5, 0, 2 * Math.PI);
  ctx.drawImage(symbols[arrowDirection], xPosition - 20.5, 10, 40, 40);
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
}

function drawIndicators(seconds, offSet) {
  // total seconds to the center of the map.
  const fractionalPart = seconds * 10 - Math.floor(seconds * 10);

  for (let i = 0; i < numberOfIndicators; i += 1) {
    const time = numberOfIndicators - i + (seconds - offSet) * 10;

    const xCoords = Math.floor(
      myCanvas.width -
        ((i + fractionalPart) / numberOfIndicators) * myCanvas.width
    );

    const isInteger = Number(time.toFixed(0)) % 10 === 0 || true;

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "white";
    ctx.fillStyle = "rgba(38, 199, 151, 0.741)";
    ctx.font = "12px serif";
    ctx.moveTo(xCoords, 0);
    ctx.lineTo(xCoords, isInteger ? 100 : 60);
    ctx.fillText(Number(time.toFixed(0)), xCoords - 3, isInteger ? 112 : 72);
    ctx.stroke();
  }
}
function drawPrompts(seconds, prompts, offSet) {
  // how many seconds before time the prompt should appear

  for (let i = 0; i < prompts.length; i += 1) {
    const prompt = prompts[i];
    const valid =
      prompt.time + prompt.duration + offSet >= seconds &&
      seconds >= prompt.time - offSet;
    if (valid) {
      // if (prompt.time === 3) console.log(prompt.time - seconds - offSet);
      // time passed affter prompt appears
      const timePassed = Number(seconds + offSet - prompt.time);
      const travelDistance = timePassed * pixelsPerIndicator * 10;
      const xCoords = Math.floor(canvaswidth - travelDistance);

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
  const offSet = numberOfIndicators / 2 / 10;
  drawIndicators(seconds, offSet);
  drawPrompts(seconds, prompts, offSet);

  // draw triangle
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
  canvaswidth = myCanvas.width;
});
