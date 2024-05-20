import { saveLocalMap } from "../utility.js/storage";

export default function editorFactory() {
  let elapsedTime = 0;

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

  const setAudioDuration = (value) => {
    audioDuration = value;
  };
  const setPlay = (value) => {
    Play = value;
  };
  const setElapsedTime = (value) => {
    elapsedTime = value;
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

  const moveAll = (move, map) => {
    if (Number((beatMap[0].time + move).toFixed(1)) < 0 && move < 0) {
      return false;
    }
    if (
      Number((beatMap[beatMap.length - 1].time + move).toFixed(1)) >
        audioDuration &&
      move > 0
    ) {
      return false;
    }

    const newBeatMap = beatMap.map((value) => ({
      ...value,
      time: Number((value.time + move).toFixed(1)),
    }));

    beatMap = newBeatMap;
    saveLocalMap({ id: map.id, beatMap, name: map.name });
    return true;
  };
  const updateStartTime = () => {
    startTime = performance.now() - (elapsedTime / playbackRate) * 1000;
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
    if (elapsedTime - 0.1 < 0 && direction === "backward") {
      return;
    }
    const move = direction === "foward" ? 0.1 : -0.1;
    elapsedTime = timePassed + move;
  };

  const updateSpeed = (speed) => {
    playbackRate = speed;
    updateStartTime();
  };
  const progressBarTimeUpdate = (timePosition) => {
    if (timePosition === undefined) {
      return;
    }
    elapsedTime = audioDuration * timePosition;

    updateStartTime();
  };

  return {
    getBeatMap,
    setBeatMap,
    progressBarTimeUpdate,
    getElapsedTime,
    updateSpeed,
    addPrompt,
    removePrompt,
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
    getAudioDuration,
    setAudioDuration,
    getPlay,
    setPlay,
    setElapsedTime,
    getPlayBackRate,
    setMoveThumb,
    getDurations,
    setDurations,
    updateStartTime,
    moveAll,
  };
}
