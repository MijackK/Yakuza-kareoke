const greatScore = 100;
const goodScore = 60;

export const click = (inputList, kareokeFactory, images) => {
  const prototype = kareokeFactory(images);
  const greatTimeWindow = 0.075;

  const checkInput = (key, inputTime, inputs) => {
    let Success = false;
    const Key = inputs[0].key;
    let Performance = images.bad;
    let incrementScore = 0;
    const convert = Number(inputTime.toFixed(1));

    if (prototype.timeRange(inputs).includes(convert)) {
      Success = true;
      if (key === inputs[0].key) {
        [Performance, incrementScore] =
          inputTime >= inputs[0].time - greatTimeWindow &&
          inputTime <= inputs[0].time + greatTimeWindow
            ? [images.great, greatScore]
            : [images.good, goodScore];
      }

      inputs.shift();
    }
    return { Success, Key, Performance, incrementScore };
  };
  return { checkInput, inputList, prototype };
};

export const hold = (inputList, kareokeFactory, images) => {
  const prototype = kareokeFactory(images);
  let clickTime;
  const checkDown = (key, time, inputs) => {
    const inputTime = Number(time).toFixed(1);
    const validRange =
      inputs[0].time - 0.1 <= inputTime &&
      inputs[0].time + inputs[0].duration > inputTime;
    let Success = false;
    const Performance = images.bad;
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
    return { Success, Performance, Key };
  };
  const checkUp = (key, releaseTime, inputs) => {
    const difference = Number((releaseTime - clickTime).toFixed(1));
    const endRange = prototype.endRange(inputs);
    let Performance = images.bad;
    let Success = false;
    const Key = inputs[0].key;
    let incrementScore = 0;

    // condition for great release
    if (endRange.includes(difference) && key === inputs[0].key) {
      incrementScore = greatScore;
      inputs.shift();
      Success = true;
      Performance = images.great;
    } else if (
      // condition for good release
      clickTime < releaseTime &&
      releaseTime >= inputs[0].time + inputs[0].duration / 2
    ) {
      incrementScore = goodScore;
      inputs.shift();
      Success = true;
      Performance = images.good;
    } else if (
      // condition for bad release
      clickTime < releaseTime &&
      releaseTime < inputs[0].time + inputs[0].duration / 2
    ) {
      inputs.shift();
      Success = true;
    }
    clickTime = Infinity;

    return { Success, Key, Performance, incrementScore };
  };

  return { checkDown, checkUp, inputList, prototype };
};

export const rapid = (inputList, kareokeFactory, images) => {
  let clicks = 0;
  const clickPerSecond = 6;
  const prototype = kareokeFactory(images);

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
    let Performance = images.bad;
    const Key = inputs[0].key;
    let incrementScore = 0;
    if (currentTime >= totalDuration) {
      if (clicks >= neededClicks) {
        incrementScore = greatScore;
        inputs.shift();
        Success = true;
        Performance = images.great;
      }
      if (clicks > 0 && clicks < neededClicks) {
        if (clicks >= neededClicks / 2) {
          Performance = images.good;
          incrementScore = goodScore;
        }
        inputs.shift();
        Success = true;
      }

      clicks = 0;
    }

    return { Success, Key, Performance, incrementScore };
  };
  return { checkInput, countInputs, inputList, prototype };
};
