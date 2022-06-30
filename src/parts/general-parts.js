const entryOffset = 3.7;
const widthPerSecond = Number(
  (1544.7 / entryOffset).toFixed(1) // 1544.7 is the distance the button needs to travel for it to align perfectly with the input line, goteen by doing the fingerboard length(1920) - 376px(the left value the prompt needs to be align perfect with input line)
);
const leftValue = 1920 - widthPerSecond * (entryOffset + 0.2);

const kareokeFactory = (images) => {
  const fingerBoard = document.querySelector(".finger_board");
  const buttonPrompt = document.createElement("div");
  buttonPrompt.classList.toggle("button");

  const durationLine = document.createElement("div");
  durationLine.classList.toggle("duration-line");

  const longPrompt = document.createElement("div");
  longPrompt.classList.toggle("long-container");
  longPrompt.appendChild(buttonPrompt.cloneNode(true));
  longPrompt.appendChild(durationLine);
  longPrompt.appendChild(buttonPrompt.cloneNode(true));

  const timeRange = (inputList) => [
    Number((inputList[0].time - 0.1).toFixed(1)),
    inputList[0].time,
    Number((inputList[0].time + 0.1).toFixed(1)),
    Number((inputList[0].time + 0.2).toFixed(1)),
  ];
  const greatRange = (inputList) => [
    Number((inputList[0].time - 0.1).toFixed(1)),
    inputList[0].time,
  ];
  const endRange = (inputList) => [
    inputList[0].duration - 0.1,
    inputList[0].duration,
    inputList[0].duration + 0.1,
    inputList[0].duration + 0.2,
  ];
  // checks if the object should run
  const shouldRun = (inputList) => {
    if (inputList.length === 0) {
      return false;
    }
    return true;
  };
  const addPrompt = (inputList, currentTime) => {
    // Not in use after canvas took over animating prompts
    if (inputList.length === 0) return;

    const promptTime = Number((inputList[0].time - entryOffset).toFixed(1));
    if (currentTime === promptTime) {
      buttonPrompt.setAttribute(
        "id",
        `${(inputList[0].time + 0.2).toFixed(1)}`
      );
      fingerBoard.prepend(buttonPrompt.cloneNode(true));
      fingerBoard.children[0].classList.toggle("click-button");
      fingerBoard.children[0].style.transform = `translateY(${inputList[0].position}px)`;
      fingerBoard.children[0].style.backgroundImage = `url(${inputList[0].symbol})`;
      // eslint-disable-next-line no-unused-expressions
      fingerBoard.offsetTop; // cause the browser to repaint so the animations can happen, otherwise it will imediately move to the given left position.
      fingerBoard.children[0].style.left = `${leftValue}px`;
      inputList.shift();
    }
  };
  const addLongPrompt = (inputList, currentTime) => {
    // Not in use after canvas took over animating prompts
    if (inputList.length === 0) return;
    const promptTime = Number((inputList[0].time - entryOffset).toFixed(1));
    if (currentTime === promptTime) {
      longPrompt.children[0].style.backgroundImage = `url(${inputList[0].symbol})`;
      longPrompt.children[2].style.backgroundImage = `url(${inputList[0].symbol})`;
      longPrompt.children[1].style.width = `${
        widthPerSecond * inputList[0].duration - 49.47
      }px`;
      longPrompt.children[1].textContent = inputList[0].type;
      longPrompt.style.transform = `translateY(${inputList[0].position}px)`;
      longPrompt.setAttribute(
        "id",
        `${inputList[0].duration + inputList[0].time + 0.2}`
      );
      fingerBoard.prepend(longPrompt.cloneNode(true));

      fingerBoard.children[0].style.transition = `left ${(
        entryOffset +
        0.2 +
        inputList[0].duration
      ).toFixed(1)}s linear`;
      // eslint-disable-next-line no-unused-expressions
      fingerBoard.offsetTop;
      // cause the browser to repaint so the animations can restart.

      fingerBoard.children[0].style.left = `${
        leftValue - inputList[0].duration * widthPerSecond
      }px`;

      inputList.shift();
    }
  };
  // removes prompts from array
  const removeInput = (duration, currentTime, inputObject, offset = 0) => {
    const lengthBefore = inputObject.inputList.length;
    // eslint-disable-next-line no-param-reassign
    inputObject.inputList = inputObject.inputList.filter(
      (prompt) => prompt.time + duration - offset > currentTime
    );

    if (lengthBefore - inputObject.inputList.length !== 0) {
      return { Success: true, Performance: images.miss, incrementScore: 0 };
    }

    return { Success: false };
  };
  const removeButton = (selector, currentTime, shouldRemove) => {
    // Not in use after canvas took over animating prompts
    const buttonList = document.querySelectorAll(`${selector}`);
    const arrayLength = buttonList.length;

    if (arrayLength === 0) return;
    // replace the cleaning of computer position with a function
    const buttonTime = Number(buttonList[buttonList.length - 1].id);

    if (currentTime > buttonTime - 0.02 || shouldRemove) {
      // the time will  increment by around 15ms,prompt will always stop a few ms after it removal time, thus i minus 0.02, without doing this the prompt will always stop briefly before being removed.
      buttonList[arrayLength - 1].remove();
    }
  };

  const displayButton = (shouldAdd, prompt) => {
    if (shouldAdd) document.querySelector("body").appendChild(prompt);
  };

  return {
    buttonPrompt,
    longPrompt,
    timeRange,
    greatRange,
    endRange,
    shouldRun,
    removeInput,
    removeButton,
    displayButton,
    addPrompt,
    addLongPrompt,
  };
};

export default kareokeFactory;
