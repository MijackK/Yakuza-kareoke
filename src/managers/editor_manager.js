import up from "../images/up1.png";
import down from "../images/down1.png";
import left from "../images/left1.png";
import right from "../images/right1.png";

import { validPrompts } from "../canvas/canvas";
import { mapProgressPrompts } from "../player-parts/display-parts";

export default function editorFactory() {
  const timeOffset = 3.0;
  let elapsedTime = timeOffset;
  let previousTime = 0;
  let startTime;
  let Play = false;
  let moveThumb = false;
  let beatMap = JSON.parse(localStorage.getItem("judgment"));
  let audioDuration;
  const getAudioCurrentTime = () => timeOffset;
  let playbackRate = 1;

  const timePointsPerSecond = 10;
  const distanceBetweenTimePoints = 29;
  const startPosition =
    (3.3 - timeOffset) * timePointsPerSecond * distanceBetweenTimePoints;

  const offSet = timeOffset;
  let promptType = "click";
  let promptDuration = 0;
  let holdDuration = 1;
  let rapidDuration = 1;

  const input = {
    one: "ArrowUp",
    two: "ArrowRight",
    three: "ArrowLeft",
    four: "ArrowDown",
  };

  const image = {
    ArrowUp: up,
    ArrowLeft: left,
    ArrowRight: right,
    ArrowDown: down,
  };
  // getters
  const getBeatMap = () => beatMap;
  const getPlayRate = () => playbackRate;
  const getElapsedTime = () => elapsedTime;
  const getStartTime = () => startTime;
  const getHoldDuration = () => holdDuration;
  const getRapidDuration = () => rapidDuration;
  const getPromptDuration = () => promptDuration;
  const getPromptType = () => promptType;
  const getMoveThumb = () => moveThumb;
  const getImages = () => image;
  const getPreviousTime = () => previousTime;
  const getAudioDuration = () => audioDuration;
  const getPlay = () => Play;
  const getTimeOffset = () => timeOffset;
  const getStartPosition = () => startPosition;
  const getPlayBackRate = () => playbackRate;
  // setters
  const setRapidDuration = (value) => {
    rapidDuration = value;
  };
  const setPromptDuration = (value) => {
    promptDuration = value;
  };
  const setHoldDuration = (value) => {
    holdDuration = value;
  };
  const setMoveThump = (value) => {
    moveThumb = value;
  };
  const setPreviousTime = (value) => {
    previousTime = value;
  };
  const setAudioDuration = (value) => {
    audioDuration = value;
  };
  const setPlay = (value) => {
    Play = value;
  };
  const setElapsedTime = (value) => {
    elapsedTime = value;
  };
  const setStartTime = (value) => {
    startTime = value;
  };
  const setMoveThumb = (value) => {
    moveThumb = value;
  };

  const translateToKey = (position) => {
    let key;
    switch (position) {
      case "one":
        key = "ArrowUp";
        break;
      case "two":
        key = "ArrowLeft";
        break;
      case "three":
        key = "ArrowRight";
        break;
      case "four":
        key = "ArrowDown";
        break;
      default:
        break;
    }
    return key;
  };

  const beatMapDownload = (map) => {
    const myBlob = new Blob(map, { type: "text/plain" });
    const blobURL = URL.createObjectURL(myBlob);
    return blobURL;
  };

  const switchPrompt = (type, duration) => {
    promptType = type;
    promptDuration = duration;
  };

  const contructPrompt = (time, type, duration, place) => {
    const position = Location[place];
    const key = input[place];

    return { time, type, duration, position, key };
  };
  const saveChanges = () => {
    localStorage.setItem("judgment", JSON.stringify(beatMap));
  };
  const canPlace = (time, duration) => {
    // here we're  checking if adding a long prompt will overlap any other prompts in the beatMap
    const check = beatMap.find(
      (prompt) => prompt.time > time && prompt.time <= time + duration
    );
    return check;
  };
  const checkOccupation = (time) => {
    // here we check if a user is trying to add a prompt within a long prompt.
    const occupied = beatMap.find(
      (prompt) => prompt.time < time && prompt.time + prompt.duration >= time
    );

    return occupied;
  };

  const timeStep = (direction) => {
    const timePassed = elapsedTime.toFixed(1);
    if (Play) {
      return false;
    }
    if (previousTime - 0.1 < 0 && direction === "backward") {
      return false;
    }
    const move = direction === "foward" ? 0.1 : -0.1;
    previousTime = (timePassed + move - offSet) / playbackRate;
    elapsedTime = previousTime * playbackRate + timeOffset;
    const position =
      (timePassed - offSet + move) *
      timePointsPerSecond *
      distanceBetweenTimePoints;

    validPrompts(elapsedTime, beatMap);
    return `${startPosition - position}px`;
  };

  const pickTime = (time) => {
    if (time < timeOffset) {
      return false;
    }
    previousTime = (time - timeOffset) / playbackRate;
    elapsedTime = previousTime * playbackRate + timeOffset;
    validPrompts(elapsedTime, beatMap);
    return true;
  };
  const moveTimeLine = (songTime) => {
    const timePassed = Number(elapsedTime).toFixed(1);
    if (timePassed >= Number(songTime)) {
      Play = true;
      return false;
    }
    Play = !Play;
    const position =
      (songTime - offSet) * timePointsPerSecond * distanceBetweenTimePoints;

    return {
      transitionValue: `left ${(songTime - timePassed) / playbackRate}s linear`,
      leftValue: `${startPosition - position}px`,
    };
  };

  const stopTimeLine = () => {
    const timePassed = Number(elapsedTime).toFixed(1);
    Play = false;
    const position = (timePassed - offSet) * 10 * 29;
    return `${startPosition - position}px`;
  };

  const removePrompt = (identifier) => {
    beatMap = beatMap.filter((prompt) => prompt.time !== identifier);
    // eslint-disable-next-line no-param-reassign
    saveChanges();
    mapProgressPrompts(beatMap, audioDuration - timeOffset, timeOffset);
  };
  const addPrompt = (time, place) => {
    const promptObject = contructPrompt(
      time,
      promptType,
      promptDuration,
      place
    );
    beatMap.push(promptObject);
    beatMap.sort((a, b) => a.time - b.time);
    saveChanges();
    mapProgressPrompts(beatMap, audioDuration - timeOffset, timeOffset);
  };
  const moveTimelineProgress = (songTime) => {
    const timePassed = elapsedTime.toFixed(1);
    if (Play === false) return false;
    const position =
      (timePassed - offSet) * timePointsPerSecond * distanceBetweenTimePoints;

    return {
      leftStart: `${startPosition - position}px`,
      leftEnd: `${
        startPosition -
        (songTime - offSet) * timePointsPerSecond * distanceBetweenTimePoints
      }px`,
      transition: `left ${(songTime - timePassed) / playbackRate}s linear`,
    };
  };
  const updateSpeed = (speed) => {
    playbackRate = speed;
    previousTime = (elapsedTime - offSet) / playbackRate;
    elapsedTime = previousTime * playbackRate + timeOffset;
    const position = moveTimelineProgress(audioDuration.toFixed(1));
    return position;
  };
  const progressBarTimeUpdate = (timePosition) => {
    if (timePosition === undefined) {
      console.log("undefined");
      return false;
    }
    previousTime = ((audioDuration - timeOffset) * timePosition) / playbackRate;
    elapsedTime = previousTime * playbackRate + timeOffset;
    switch (Play) {
      case false:
        return { value: stopTimeLine(), Play };
      default:
        return {
          value: moveTimelineProgress(
            audioDuration.toFixed(1),
            elapsedTime.toFixed(1)
          ),
          Play,
        };
    }
  };

  return {
    progressBarTimeUpdate,
    getElapsedTime,
    updateSpeed,
    addPrompt,
    removePrompt,
    pickTime,
    checkOccupation,
    canPlace,
    timeStep,
    switchPrompt,
    translateToKey,
    moveTimeLine,
    stopTimeLine,
    getBeatMap,
    getPlayRate,
    getStartTime,
    getHoldDuration,
    getRapidDuration,
    getPromptType,
    beatMapDownload,
    getPromptDuration,
    setRapidDuration,
    setPromptDuration,
    setHoldDuration,
    setMoveThump,
    getMoveThumb,
    getImages,
    getPreviousTime,
    setPreviousTime,
    getAudioDuration,
    setAudioDuration,
    getPlay,
    setPlay,
    getTimeOffset,
    setElapsedTime,
    getStartPosition,
    getPlayBackRate,
    getAudioCurrentTime,
    setStartTime,
    setMoveThumb,
  };
}
