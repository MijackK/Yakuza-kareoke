// add data and function having to do with the player here
import { getSettings } from "../utility.js/storage";

export default function PlayerManager() {
  const offset = getSettings().offset / 1000;
  console.log(offset);

  let timeElapsed = 0 + offset;

  let play = false;
  let startTime;
  let score = 0;

  // getters

  const getTimeElapsed = () => timeElapsed;

  const getPlay = () => play;
  const getStartTime = () => startTime;
  const getScore = () => score;

  // setters
  const setTimeElapsed = (value) => {
    timeElapsed = value + offset;
  };

  const setPlay = (value) => {
    play = value;
  };
  const startMap = () => {
    startTime = performance.now() - timeElapsed * 1000;
    play = true;
  };

  return {
    getTimeElapsed,
    getPlay,
    getStartTime,
    getScore,
    setTimeElapsed,
    setPlay,
    startMap,
  };
}
