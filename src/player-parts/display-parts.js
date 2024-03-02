import greatImg from "../images/great.png";
import missImg from "../images/miss.png";
import badImg from "../images/bad.png";
import goodImg from "../images/good.png";

const performanceImage = {
  great: greatImg,
  miss: missImg,
  bad: badImg,
  good: goodImg,
};

export const feedBackVisualiserFactory = () => {
  const performanceIndicator = document.querySelector(
    ".performance-visualiser"
  );
  const first = document.querySelector("#first");
  const second = document.querySelector("#second");
  const third = document.querySelector("#third");
  const fourth = document.querySelector("#fourth");

  const clearAnimation = (elements, newClass) => {
    for (let i = 0; i < elements.length; i += 1) {
      // eslint-disable-next-line no-param-reassign
      elements[i].className = newClass;
    }
    // eslint-disable-next-line no-unused-expressions
    // performanceIndicator.offsetTop; // cause the browser to repaint so the animations can restart.
  };

  const inputFeedback = (showInfo) => {
    if (showInfo.Success) {
      clearAnimation([first, second, third, fourth], "button input-visualiser");
      setTimeout(() => {
        switch (showInfo.Key) {
          case "ArrowUp":
            first.classList.toggle("explode-animation");

            break;
          case "ArrowRight":
            second.classList.toggle("explode-animation");

            break;
          case "ArrowLeft":
            third.classList.toggle("explode-animation");

            break;
          case "ArrowDown":
            fourth.classList.toggle("explode-animation");

            break;
          default:
        }
      }, 10);
    }
  };
  const showIndicator = (showInfo) => {
    if (showInfo.Success) {
      performanceIndicator.style.backgroundImage = `url(${
        performanceImage[showInfo.performance]
      })`;
      clearAnimation([performanceIndicator], "performance-visualiser");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          performanceIndicator.classList.toggle("popup-animation");
        });
      });
    }
  };

  return { inputFeedback, showIndicator, clearAnimation };
};
export const autoThumbMovement = (position) => {
  if (position > 1) return;
  const thumb = document.querySelector(".progress_thumb");
  const leftValue = position * 100;
  thumb.style.left = `${leftValue}%`;
};
export const moveProgressThumb = (event) => {
  const progressBar = document.querySelector(".p_container");
  const thumb = document.querySelector(".progress_thumb");
  const coords = progressBar.getBoundingClientRect();
  if (event.pageX < coords.left || event.pageX > coords.width + coords.left)
    return;

  thumb.style.left = `${((event.pageX - coords.left) / coords.width) * 100}%`;

  // eslint-disable-next-line consistent-return
  return (event.pageX - coords.left) / coords.width;
};
export const mapProgressPrompts = (beatMap, duration) => {
  const prompMap = document.querySelector("#prompt_location");
  const ctx = prompMap.getContext("2d");
  ctx.clearRect(0, 0, prompMap.width, prompMap.height);

  for (let i = 0; i < beatMap.length; i += 1) {
    const xPosition = (beatMap[i].time / duration) * prompMap.width;
    const yPosition = beatMap[i].type === "click" ? 40 : 0;
    ctx.strokeStyle =
      // eslint-disable-next-line no-nested-ternary
      beatMap[i].type === "click"
        ? "red"
        : beatMap[i].type === "hold"
        ? "rgb(12, 240, 240)"
        : "blue";
    ctx.beginPath();
    ctx.lineTo(xPosition, yPosition);
    ctx.lineTo(xPosition, 80);
    ctx.stroke();
  }
};
