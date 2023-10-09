const kareokeFactory = () => {
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
      return { Success: true, performance: "miss", incrementScore: 0 };
    }

    return { Success: false };
  };

  return {
    timeRange,
    greatRange,
    endRange,
    shouldRun,
    removeInput,
  };
};

export default kareokeFactory;
