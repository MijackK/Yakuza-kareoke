import holdText from "../images/hold.png";
import rapidText from "../images/rapid.png";
import upImg from "../images/up.png";
import leftImg from "../images/left.png";
import downImg from "../images/down.png";
import rightImg from "../images/right.png";

const entryOffset = 3; // determines the speed of prompt
const widthPerSecond = Number(((1897.5 - 400) / entryOffset).toFixed(3));
let key;
const normal = 55;
const clicked = 50;

// offscreen canvas for the up prompts
const upPrompt = new OffscreenCanvas(normal, normal);
const upClickedPrompt = new OffscreenCanvas(clicked, clicked);
const upPromptImage = document.createElement("img");
upPromptImage.src = upImg;
upPromptImage.onload = () => {
  upPrompt.getContext("2d").drawImage(upPromptImage, 0, 0, normal, normal);
  upClickedPrompt
    .getContext("2d")
    .drawImage(upPromptImage, 0, 0, clicked, clicked);
};

// offscreen canvas for left prompt
const leftPrompt = new OffscreenCanvas(normal, normal);
const leftClickedPrompt = new OffscreenCanvas(clicked, clicked);
const leftPromptImage = document.createElement("img");
leftPromptImage.src = leftImg;
leftPromptImage.onload = () => {
  leftPrompt.getContext("2d").drawImage(leftPromptImage, 0, 0, normal, normal);
  leftClickedPrompt
    .getContext("2d")
    .drawImage(leftPromptImage, 0, 0, clicked, clicked);
};

// offscreen canvas for right prompt

const rightPrompt = new OffscreenCanvas(normal, normal);
const rightClickedPrompt = new OffscreenCanvas(clicked, clicked);
const rightPromptImage = document.createElement("img");
rightPromptImage.src = rightImg;
rightPromptImage.onload = () => {
  rightPrompt
    .getContext("2d")
    .drawImage(rightPromptImage, 0, 0, normal, normal);
  rightClickedPrompt
    .getContext("2d")
    .drawImage(rightPromptImage, 0, 0, clicked, clicked);
};

// offscreen canvas for down prompt
const downPrompt = new OffscreenCanvas(normal, normal);
const downClickedPrompt = new OffscreenCanvas(clicked, clicked);
const downPromptImage = document.createElement("img");
downPromptImage.src = downImg;
downPromptImage.onload = () => {
  downPrompt.getContext("2d").drawImage(downPromptImage, 0, 0, normal, normal);
  downClickedPrompt
    .getContext("2d")
    .drawImage(downPromptImage, 0, 0, clicked, clicked);
};
const symbols = {
  ArrowUp: [upPrompt, upClickedPrompt],
  ArrowDown: [downPrompt, downClickedPrompt],
  ArrowLeft: [leftPrompt, leftClickedPrompt],
  ArrowRight: [rightPrompt, rightClickedPrompt],
};
const wasd = {
  w: "ArrowUp",
  s: "ArrowDown",
  a: "ArrowLeft",
  d: "ArrowRight",
};

const yPosition = {
  ArrowUp: 30,
  ArrowRight: 83,
  ArrowLeft: 130,
  ArrowDown: 185,
};
let ctx;
let myCanvas;

const longPromptText = {
  rapid: document.createElement("img"),
  hold: document.createElement("img"),
};
longPromptText.rapid.src = rapidText;
longPromptText.hold.src = holdText;

export const init = () => {
  myCanvas = document.querySelector(".cplayer");
  myCanvas.width = myCanvas.scrollWidth;
  myCanvas.height = 220;

  if (myCanvas.getContext) {
    ctx = myCanvas.getContext("2d"); // rendering context
  } else console.log("canvas not supported");
};

const verticleLines = (elapsedTime) => {
  for (let i = 0; i < 3; i += 1) {
    const xCoords = Math.round(
      633 * (i + 1) - ((widthPerSecond * elapsedTime) % 633)
    );

    ctx.beginPath();
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 1;
    ctx.moveTo(xCoords, 15);
    ctx.lineTo(xCoords, 195);
    ctx.stroke();
  }
};
const spawnPrompts = (time, symbol) => {
  const xPosition = Math.round(1897.5 - time * widthPerSecond);
  ctx.fillStyle = "blue";
  ctx.beginPath();
  // ctx.arc(xPosition, yPosition, 22.5, 0, 2 * Math.PI);
  ctx.drawImage(symbols[symbol][0], xPosition - 22, yPosition[symbol] - 22);
  ctx.fill();
  ctx.stroke();
};
const spanwLongPrompts = (
  elapsedTime,
  promptTime,
  travelTime,
  duration,
  type,
  symbol
) => {
  const startArc = Math.round(1897.5 - travelTime * widthPerSecond);
  const endArc = Math.round(startArc + duration * widthPerSecond);
  const textP = Math.round(startArc + (duration * widthPerSecond) / 2 - 25);

  const held = symbol === key && elapsedTime >= promptTime - 0.1 ? 1 : 0;

  ctx.strokeStyle = type === "rapid" ? "blue" : "#add8e6";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(startArc, yPosition[symbol], 15, 0, 2 * Math.PI);
  ctx.arc(endArc, yPosition[symbol], 15, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.drawImage(symbols[symbol][held], startArc - 22, yPosition[symbol] - 22);
  ctx.drawImage(longPromptText[type], textP, yPosition[symbol] - 22, 75, 35);
  ctx.drawImage(symbols[symbol][held], endArc - 22, yPosition[symbol] - 22);
  ctx.stroke();
};
export const validPrompts = (time, buttons) => {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  verticleLines(time);
  for (let i = 0; i < buttons.length; i += 1) {
    const prompt = buttons[i];
    const valid =
      prompt.time + prompt.duration + 0.2 >= time &&
      time >= prompt.time - entryOffset;
    if (valid) {
      switch (prompt.type) {
        case "click":
          spawnPrompts(time + entryOffset - prompt.time, prompt.key);
          break;
        default:
          spanwLongPrompts(
            time,
            prompt.time,
            time + entryOffset - prompt.time,
            prompt.duration,
            prompt.type,
            prompt.key
          );
      }
    }
  }
};

window.addEventListener("resize", () => {
  myCanvas.width = myCanvas.scrollWidth;
});

window.addEventListener("keydown", (e) => {
  key = wasd[e.key] || e.key;
});
window.addEventListener("keyup", () => {
  key = null;
});
