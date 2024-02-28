import { saveLocalMap } from "../utility.js/storage";

export default function editorFactory() {
  let elapsedTime = 0;
  let previousTime = 0;
  let startTime;
  let Play = false;
  let moveThumb = false;
  let audioDuration;
  let playbackRate = 1;
  let beatMap = [];

  let promptType = "click";
  const durations = {
    hold: 1,
    rapid: 1,
    click: 0,
  };

  const input = {
    one: "ArrowUp",
    two: "ArrowRight",
    three: "ArrowLeft",
    four: "ArrowDown",
  };

  // getters
  const getBeatMap = () => beatMap;
  const getPlayRate = () => playbackRate;
  const getElapsedTime = () => elapsedTime;
  const getStartTime = () => startTime;
  const getDurations = (property) => durations[property];

  const getPromptType = () => promptType;
  const getMoveThumb = () => moveThumb;

  const getPreviousTime = () => previousTime;
  const getAudioDuration = () => audioDuration;
  const getPlay = () => Play;

  const getPlayBackRate = () => playbackRate;
  // setters

  const setBeatMap = (map) => {
    beatMap = map;
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
  const setDurations = (property, value) => {
    durations[property] = value;
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

  const switchPrompt = (type) => {
    promptType = type;
  };

  const contructPrompt = (time, type, duration, place) => {
    const key = input[place];

    return { time, type, duration, key };
  };

  const canPlace = (time) => {
    // here we're  checking if adding a long prompt will overlap any other prompts in the beatMap
    const check = beatMap.find(
      (prompt) =>
        prompt.time > time && prompt.time <= time + durations[promptType]
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
  const removePrompt = (identifier, map) => {
    beatMap = beatMap.filter((prompt) => prompt.time !== identifier);
    saveLocalMap({ id: map.id, beatMap, name: map.name });

    // eslint-disable-next-line no-param-reassign
  };
  const addPrompt = (time, place, map) => {
    // check if prompt is there
    const check = beatMap.find((beat) => beat.time === time);

    if (check) {
      removePrompt(time, map);
      if (check.key === input[place]) {
        return;
      }
    }

    const promptObject = contructPrompt(
      time,
      promptType,
      durations[promptType],
      place
    );

    beatMap.push(promptObject);
    beatMap.sort((a, b) => a.time - b.time);
    saveLocalMap({ id: map.id, beatMap, name: map.name });
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
    previousTime = (timePassed + move) / playbackRate;
    elapsedTime = previousTime * playbackRate;
  };

  const pickTime = (time) => {
    previousTime = time / playbackRate;
    elapsedTime = previousTime * playbackRate;

    return true;
  };

  const updateSpeed = (speed) => {
    playbackRate = speed;
    previousTime = elapsedTime / playbackRate;
    elapsedTime = previousTime * playbackRate;
    startTime = Date.now() - previousTime * 1000;
  };
  const progressBarTimeUpdate = (timePosition) => {
    if (timePosition === undefined) {
      console.log("undefined");
      return;
    }
    previousTime = (audioDuration * timePosition) / playbackRate;
    elapsedTime = previousTime * playbackRate;
    startTime = Date.now() - previousTime * 1000;
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
    getPromptType,
    beatMapDownload,
    setMoveThump,
    getMoveThumb,
    getPreviousTime,
    setPreviousTime,
    getAudioDuration,
    setAudioDuration,
    getPlay,
    setPlay,
    setElapsedTime,
    getPlayBackRate,
    setStartTime,
    setMoveThumb,
    getDurations,
    setDurations,
  };
}
