const kareokeFactory = (images) => {
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

    displayButton,
  };
};

export default kareokeFactory;
