import holdText from "../images/hold.png";
import rapidText from "../images/rapid.png";
import upImg from "../images/up.png";
import leftImg from "../images/left.png";
import downImg from "../images/down.png";
import rightImg from "../images/right.png";

const entryOffset = 3.0; // determines the speed of prompt
const widthPerSecond = Number(((1897.5 - 400) / entryOffset).toFixed(3));
const lineArr = [1.3, 2.6, 3.9];
const increase = 1.3;

const symbols = {
  ArrowUp: document.createElement("img"),
  ArrowLeft: document.createElement("img"),
  ArrowRight: document.createElement("img"),
  ArrowDown: document.createElement("img"),
};
const yPosition = {
  ArrowUp: 30,
  ArrowRight: 83,
  ArrowLeft: 130,
  ArrowDown: 185,
};
symbols.ArrowUp.src = upImg;
symbols.ArrowLeft.src = leftImg;
symbols.ArrowDown.src = downImg;
symbols.ArrowRight.src = rightImg;
let ctx;
let myCanvas;
const textImage = document.createElement("img");
const longPromptText = {
  rapid: rapidText,
  hold: holdText,
};

export const init = () => {
  myCanvas = document.querySelector(".cplayer");
  myCanvas.width = window.innerWidth;
  myCanvas.height = 215;

  if (myCanvas.getContext) {
    ctx = myCanvas.getContext("2d"); // rendering context
  } else console.log("canvas not supported");
};

const verticleLines = (elapsedTime, lines, play) => {
  const time = elapsedTime + entryOffset;

  for (let i = 0; i < lines; i += 1) {
    if (lineArr[i] + entryOffset < time) {
      lineArr[i] += increase * 3;
    }
    const xCoords =
      lineArr[i] * widthPerSecond - (time - entryOffset) * widthPerSecond;
    if (play === false) return;
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.fillStyle = "white";
    ctx.lineWidth = 1;
    ctx.moveTo(xCoords, 15);
    ctx.lineTo(xCoords, 195);
    ctx.stroke();
  }
};
const spawnPrompts = (time, symbol) => {
  const xPosition = 1897.5 - time * widthPerSecond;
  ctx.fillStyle = "blue";
  ctx.beginPath();
  // ctx.arc(xPosition, yPosition, 22.5, 0, 2 * Math.PI);
  ctx.drawImage(
    symbols[symbol],
    xPosition - 22.5,
    yPosition[symbol] - 22.5,
    55,
    55
  );
  ctx.fill();
  ctx.stroke();
};
const spanwLongPrompts = (time, duration, type, symbol, held, clicks) => {
  textImage.src = longPromptText[type];
  const startArc = 1897.5 - time * widthPerSecond;
  const endArc = startArc + duration * widthPerSecond;
  const textP = startArc + (duration * widthPerSecond) / 2 - 25;
  let size;
  if (type === "hold") size = held ? 45 : 55;
  if (type === "rapid") size = clicks % 2 === 0 ? 50 : 55;
  ctx.font = "40px serif";
  ctx.strokeStyle = type === "rapid" ? "blue" : "#add8e6";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(startArc, yPosition[symbol], 15.5, 0, 2 * Math.PI);
  ctx.arc(endArc, yPosition[symbol], 15.5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.drawImage(
    symbols[symbol],
    startArc - 22.5,
    yPosition[symbol] - 22.5,
    size,
    size
  );
  ctx.drawImage(textImage, textP, yPosition[symbol] - 22.5, 75, 35);
  ctx.drawImage(
    symbols[symbol],
    endArc - 22.5,
    yPosition[symbol] - 22.5,
    size,
    size
  );
  ctx.stroke();
};
export const validPrompts = (time, buttons, play) => {
  console.log(time);
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  verticleLines(time, lineArr.length, play);
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
            time + entryOffset - prompt.time,
            prompt.duration,
            prompt.type,
            prompt.key,
            prompt.held,
            prompt.click
          );
      }
    }
  }
};

window.addEventListener("resize", () => {
  myCanvas.width = window.innerWidth;
});
