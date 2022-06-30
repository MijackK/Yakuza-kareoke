let stoppedPrompts = [];

const feedBackVisualiser = () => {
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
    }
  };
  const showIndicator = (showInfo) => {
    if (showInfo.Success) {
      performanceIndicator.style.backgroundImage = `url(${showInfo.Performance})`;
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
const autoThumbMovement = (position) => {
  if (position > 1) return;
  const thumb = document.querySelector(".progress_thumb");
  const leftValue = position * 100;
  thumb.style.left = `${leftValue}%`;
};
const moveProgressThumb = (event) => {
  const progressBar = document.querySelector(".p_container");
  const thumb = document.querySelector(".progress_thumb");
  const coords = progressBar.getBoundingClientRect();
  if (event.pageX < coords.left || event.pageX > coords.width + coords.left)
    return;

  thumb.style.left = `${((event.pageX - coords.left) / coords.width) * 100}%`;

  // eslint-disable-next-line consistent-return
  return (event.pageX - coords.left) / coords.width;
};
const mapProgressPrompts = (beatMap, time, offSet) => {
  const prompMap = document.querySelector("#prompt_location");
  const ctx = prompMap.getContext("2d");
  ctx.clearRect(0, 0, prompMap.width, prompMap.height);

  for (let i = 0; i < beatMap.length; i += 1) {
    const xPosition = ((beatMap[i].time - offSet) / time) * prompMap.width;
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

const stopAnimation = (container, classArr) => {
  // Not in use after canvas took over animating prompts
  for (let i = 0; i < container.childElementCount; i += 1) {
    // we do childcontainer minus two to excluded the inputline and the feedback visualizer
    const { className } = container.children[i];
    if (classArr.includes(className)) {
      const prompt = container.children[i];
      stoppedPrompts.push(prompt.style.left);
      const leftValue = window.getComputedStyle(prompt).left;
      prompt.style.transition = "";
      prompt.style.left = leftValue;
    }
  }
};

const restartAnimation = (container, elapsedTime, classArr) => {
  // Not in use after canvas took over animating prompts
  if (stoppedPrompts.length === 0) return;

  for (let i = container.childElementCount; i > 0; i -= 1) {
    const { className } = container.children[i - 1];
    if (classArr.includes(className)) {
      const prompt = container.children[i - 1];
      prompt.style.transition = `left ${
        Number(prompt.id) - elapsedTime
      }s linear`;
      // eslint-disable-next-line no-unused-expressions
      container.offsetTop;
      [prompt.style.left] = stoppedPrompts;
      stoppedPrompts.shift();
    }
  }
  stoppedPrompts = [];
};

export default {
  feedBackVisualiser,
  moveProgressThumb,
  mapProgressPrompts,
  autoThumbMovement,
};
