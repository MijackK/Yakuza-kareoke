export default function artificialPlayer() {
  let timeMap = {};
  const setTimeMap = (beatMap) => {
    timeMap = beatMap.reduce((acc, current) => {
      acc[current.time] = {
        Key: current.key,
        Success: current.duration === 0,
        performance: "great",
        hit: false,
      };
      if (current.duration > 0) {
        acc[current.time + current.duration] = {
          Key: current.key,
          Success: true,
          performance: "great",
          hit: false,
        };
      }
      return acc;
    }, {});
  };
  const resetMap = () => {
    Object.keys(timeMap).forEach((value) => {
      timeMap[value].hit = false;
    });
  };

  const checkForInput = (time) => !timeMap[time]?.hit && timeMap[time];

  return { checkForInput, setTimeMap, resetMap };
}
