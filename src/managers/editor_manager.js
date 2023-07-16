import up from "../images/up1.png";
import down from "../images/down1.png";
import left from "../images/left1.png";
import right from "../images/right1.png";

import { saveLocalMap } from "../utility.js/storage";

export default function editorFactory() {
  const timeOffset = 3.0;
  let elapsedTime = timeOffset;
  let previousTime = 0;
  let startTime;
  let Play = false;
  let moveThumb = false;
  let audioDuration;
  let playbackRate = 1;
  let beatMap = [];

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
  const getPlayBackRate = () => playbackRate;
  // setters

  const setBeatMap = (map) => {
    beatMap = map;
  };
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
  const removePrompt = (identifier, mapID) => {
    beatMap = beatMap.filter((prompt) => prompt.time !== identifier);
    saveLocalMap({ id: mapID, beatMap });

    // eslint-disable-next-line no-param-reassign
  };
  const addPrompt = (time, place, mapID) => {
    // check if prompt is there
    const check = beatMap.find((beat) => beat.time === time);
    if (check) {
      removePrompt(time, mapID);
      return;
    }
    const promptObject = contructPrompt(
      time,
      promptType,
      promptDuration,
      place
    );

    beatMap.push(promptObject);
    beatMap.sort((a, b) => a.time - b.time);
    saveLocalMap({ id: mapID, beatMap });
  };

  const timeStep = (direction) => {
    const timePassed = Number(elapsedTime.toFixed(1));
    if (Play) {
      return;
    }
    if (previousTime - 0.1 < 0 && direction === "backward") {
      return;
    }
    const move = direction === "foward" ? 0.1 : -0.1;
    previousTime = (timePassed + move - offSet) / playbackRate;
    elapsedTime = previousTime * playbackRate + timeOffset;
  };

  const pickTime = (time) => {
    if (time < timeOffset) {
      return false;
    }
    previousTime = (time - timeOffset) / playbackRate;
    elapsedTime = previousTime * playbackRate + timeOffset;

    return true;
  };

  const updateSpeed = (speed) => {
    playbackRate = speed;
    previousTime = (elapsedTime - offSet) / playbackRate;
    elapsedTime = previousTime * playbackRate + timeOffset;
  };
  const progressBarTimeUpdate = (timePosition) => {
    if (timePosition === undefined) {
      console.log("undefined");
      return;
    }
    previousTime = ((audioDuration - timeOffset) * timePosition) / playbackRate;
    elapsedTime = previousTime * playbackRate + timeOffset;
  };

  return {
    getBeatMap,
    setBeatMap,
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
    getPlayBackRate,
    setStartTime,
    setMoveThumb,
  };
}
