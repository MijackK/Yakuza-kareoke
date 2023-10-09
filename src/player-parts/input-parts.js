import kareokeFactory from "./general-parts";

export const click = (inputList) => {
  const general = kareokeFactory();
  const greatTimeWindow = 0.075;

  const checkInput = (key, inputTime, inputs) => {
    let Success = false;
    const Key = inputs[0].key;
    let performance = "bad";

    const convert = Number(inputTime.toFixed(1));

    if (general.timeRange(inputs).includes(convert)) {
      Success = true;
      if (key === inputs[0].key) {
        performance =
          inputTime >= inputs[0].time - greatTimeWindow &&
          inputTime <= inputs[0].time + greatTimeWindow
            ? "great"
            : "good";
      }

      inputs.shift();
    }
    return { Success, Key, performance };
  };
  return { checkInput, inputList, ...general };
};

export const hold = (inputList) => {
  const general = kareokeFactory();
  let clickTime;
  const checkDown = (key, time, inputs) => {
    const inputTime = Number(time).toFixed(1);
    const validRange =
      inputs[0].time - 0.1 <= inputTime &&
      inputs[0].time + inputs[0].duration > inputTime;
    let Success = false;
    const performance = "bad";
    const Key = inputs[0].key;
    if (validRange) {
      if (key === inputs[0].key) {
        // eslint-disable-next-line no-param-reassign
        inputs[0].held = true;
        clickTime = inputTime;
      } else {
        inputs.shift();
        Success = true;
      }
    }
    // eslint-disable-next-line consistent-return
    return { Success, performance, Key };
  };
  const checkUp = (key, releaseTime, inputs) => {
    const difference = Number((releaseTime - clickTime).toFixed(1));
    const endRange = general.endRange(inputs);
    let performance = "bad";
    let Success = false;
    const Key = inputs[0].key;

    // condition for great release
    if (endRange.includes(difference) && key === inputs[0].key) {
      inputs.shift();
      Success = true;
      performance = "great";
    } else if (
      // condition for good release
      clickTime < releaseTime &&
      releaseTime >= inputs[0].time + inputs[0].duration / 2
    ) {
      inputs.shift();
      Success = true;
      performance = "good";
    } else if (
      // condition for bad release
      clickTime < releaseTime &&
      releaseTime < inputs[0].time + inputs[0].duration / 2
    ) {
      inputs.shift();
      Success = true;
    }
    clickTime = Infinity;

    return { Success, Key, performance };
  };

  return { checkDown, checkUp, inputList, ...general };
};

export const rapid = (inputList) => {
  let clicks = 0;
  const clickPerSecond = 6;
  const checkInput = (key, inputs, inputTime) => {
    const totalDuration = inputs[0].time + inputs[0].duration;
    if (
      inputTime >= inputs[0].time &&
      inputTime < totalDuration &&
      key === inputs[0].key
    ) {
      clicks += 1;
      // eslint-disable-next-line no-param-reassign
      inputs[0].click = clicks;
    }
  };
  const countInputs = (inputs, currentTime) => {
    const totalDuration = inputs[0].time + inputs[0].duration;
    const neededClicks = inputs[0].duration * clickPerSecond;
    let Success = false;
    let performance = "bad";
    const Key = inputs[0].key;

    if (currentTime >= totalDuration) {
      if (clicks >= neededClicks) {
        inputs.shift();
        Success = true;
        performance = "great";
      }
      if (clicks > 0 && clicks < neededClicks) {
        if (clicks >= neededClicks / 2) {
          performance = "good";
        }
        inputs.shift();
        Success = true;
      }

      clicks = 0;
    }

    return { Success, Key, performance };
  };
  return { checkInput, countInputs, inputList, ...kareokeFactory() };
};
