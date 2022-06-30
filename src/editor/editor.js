import judgment from "../audio/judgment.mp3";
import "../kareoke_player/player.css";
import "./editor.css";
import up from "../images/up1.png";
import down from "../images/down1.png";
import left from "../images/left1.png";
import right from "../images/right1.png";
import player from "../parts/map-visualizer";
import canvasP from "../canvas/canvas";
import displayParts from "../parts/display-parts";
import surviveBar from "../images/survive_bar.png";

const timeOffset = 3.0;
let elapsedTime = timeOffset;
let previousTime = 0;
let startTime;
let Play = false;
let moveThumb = false;
let editorLoop;
canvasP.init();

const editor = (() => {
  const background = document.querySelector(".background");
  background.style.backgroundImage = `url(${surviveBar})`;
  let beatMap = JSON.parse(localStorage.getItem("judgment"));
  let playbackRate = 1;
  const Audio = document.querySelector("#editor-audio");
  Audio.currentTime = timeOffset;
  const playBtn = document.querySelector("#play");
  playBtn.id = "play";
  const timePicker = document.querySelector("#time-picker");
  const jumpInput = document.querySelector("#jump-to");
  const setBtn = document.querySelector("#set");
  const Score = document.querySelector("#score");
  const Map = document.querySelector(".map");
  const startPosition = (3.3 - timeOffset) * 10 * 29;
  Map.style.left = `${startPosition}px`;
  const clickMarker = document.createElement("div");
  clickMarker.classList.toggle("click-placement");
  const durationLine = document.createElement("div");
  durationLine.classList.toggle("duration-line");
  const longContainer = document.createElement("div");
  longContainer.classList.toggle("long-container");
  longContainer.appendChild(clickMarker.cloneNode(true));
  longContainer.appendChild(durationLine.cloneNode(true));
  longContainer.appendChild(clickMarker.cloneNode(true));
  const fullLine = document.createElement("div");
  const halfLine = document.createElement("div");
  const offSet = timeOffset;
  fullLine.className = "timemarker second";
  halfLine.className = "timemarker mili-second";
  Audio.src = judgment;
  const promptPosition = document.querySelector(".get-prompt");
  const toolBar = document.querySelector(".tool-bar");
  const clickBtn = document.querySelector("#click");
  const holdBtn = document.querySelector("#hold");
  const rapidBtn = document.querySelector("#rapid");
  const rapidForm = document.querySelector("#r-form");
  rapidForm.children[1].value = 1;
  const holdForm = document.querySelector("#h-form");
  holdForm.children[1].value = 1;
  const Board = document.querySelector(".finger_board");
  let promptType = "click";
  let promptDuration = 0;
  let holdDuration = 1;
  let rapidDuration = 1;
  const progressBar = document.querySelector(".progress_section");
  const selectPlaySpeed = document.querySelector("#time_guage");
  selectPlaySpeed.value = playbackRate;
  const menuBtn = document.querySelector("#menu");
  const Menu = document.querySelector("#modal");
  const menuExit = document.querySelector("#exit");
  const downloadMap = document.querySelector("#download-map");
  let downloadUrl;

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
  const getBeatMap = () => beatMap;
  const getPlayRate = () => playbackRate;
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
    downloadMap.href = blobURL;
    return blobURL;
  };
  downloadUrl = beatMapDownload([JSON.stringify(beatMap)]);
  const removeBtnFocus = () => {
    clickBtn.classList.remove("active-prompt");
    rapidBtn.classList.remove("active-prompt");
    holdBtn.classList.remove("active-prompt");
  };

  const switchPrompt = (type, duration) => {
    promptType = type;
    promptDuration = duration;
  };

  const clickPrompt = (timePoint, key) => {
    clickMarker.style.backgroundImage = `url(${image[key]})`;
    timePoint.appendChild(clickMarker.cloneNode(true));
  };

  const longPrompt = (timePoint, key, duration, type) => {
    longContainer.title = `Duration: ${duration} Seconds`;
    longContainer.children[0].style.backgroundImage = `url(${image[key]})`;
    longContainer.children[2].style.backgroundImage = `url(${image[key]})`;
    longContainer.children[1].style.width = `${29 * duration * 10 - 45}px`;
    longContainer.children[1].textContent = type;
    timePoint.appendChild(longContainer.cloneNode(true));
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
  const fillTimeline = (duration) => {
    for (let i = 0; i < duration; i += 1) {
      const timeId = (i * 0.1).toFixed(1);
      const promptInfo = beatMap.find(
        (prompt) => prompt.time === Number(timeId)
      );
      switch (i % 10) {
        case 0:
          fullLine.id = timeId;
          fullLine.title = timeId;
          Map.appendChild(fullLine.cloneNode(true));
          break;
        default:
          halfLine.id = timeId;
          halfLine.title = timeId;
          Map.appendChild(halfLine.cloneNode(true));
      }
      if (promptInfo) {
        switch (promptInfo.type) {
          case "click":
            clickPrompt(
              Map.children[Map.childElementCount - 1],
              promptInfo.key
            );
            break;
          default:
            longPrompt(
              Map.children[Map.childElementCount - 1],
              promptInfo.key,
              promptInfo.duration,
              promptInfo.type
            );
        }
      }
    }
  };
  const updateDomTime = () => {
    document.querySelector(
      "#ptime"
    ).textContent = ` ${editor.Audio.currentTime.toFixed(3)} / ${
      Audio.duration
    }`;
    editor.Score.textContent = elapsedTime.toFixed(3);
  };

  const timeStep = (direction, timePassed) => {
    if (Play) {
      return;
    }
    if (previousTime - 0.1 < 0 && direction === "backward") {
      return;
    }
    const move = direction === "foward" ? 0.1 : -0.1;
    previousTime = (timePassed + move - offSet) / playbackRate;
    elapsedTime = previousTime * playbackRate + timeOffset;
    Map.style.transition = "";
    const position = (timePassed - offSet + move) * 10 * 29;
    // Map.style.left = `-${(timePassed - offSet + move) * 10 * 29}px`;
    Map.style.left = `${startPosition - position}px`;
    canvasP.validPrompts(elapsedTime, beatMap);
  };

  const pickTime = (time) => {
    if (time < timeOffset) {
      return;
    }
    previousTime = (time - timeOffset) / playbackRate;
    elapsedTime = previousTime * playbackRate + timeOffset;
    canvasP.validPrompts(elapsedTime, beatMap);
  };
  const moveTimeLine = (songTime, timePassed) => {
    if (timePassed >= songTime) {
      Play = true;
      return;
    }

    Play = !Play;
    Map.style.transition = `left ${
      (songTime - timePassed) / playbackRate
    }s linear`;

    // eslint-disable-next-line no-unused-expressions
    Map.offSet;
    const position = (songTime - offSet) * 10 * 29;
    Map.style.left = `${startPosition - position}px`;
    // Map.style.left = `-${(songTime - offSet) * 10 * 29}px`;
  };

  const stopTimeLine = (timePassed) => {
    Play = false;
    Map.style.transition = "";
    const position = (timePassed - offSet) * 10 * 29;
    Map.style.left = `${startPosition - position}px`;
    // Map.style.left = `-${(timePassed - offSet) * 10 * 29}px`;
  };
  const playPause = (action) => {
    if (action === "play") {
      moveTimeLine(
        Number(editor.Audio.duration.toFixed(1)),
        Number(elapsedTime.toFixed(1))
      );
      editor.Audio.currentTime = elapsedTime;
      editor.Audio.play();
    }
    if (action === "pause") {
      editor.Audio.pause();
      stopTimeLine(Number(elapsedTime.toFixed(1)));
    }
  };

  const removePrompt = (timePoint, identifier) => {
    beatMap = beatMap.filter((prompt) => prompt.time !== identifier);
    // eslint-disable-next-line no-param-reassign
    timePoint.textContent = "";
    saveChanges();
    displayParts.mapProgressPrompts(
      beatMap,
      Audio.duration - timeOffset,
      timeOffset
    );
  };
  const addPrompt = (type, time, place) => {
    const promptObject = contructPrompt(time, type, promptDuration, place);
    beatMap.push(promptObject);
    beatMap.sort((a, b) => a.time - b.time);
    saveChanges();
    displayParts.mapProgressPrompts(
      beatMap,
      Audio.duration - timeOffset,
      timeOffset
    );
  };
  const moveTimelineProgress = (songTime, timePassed) => {
    if (Play === false) return;
    Map.style.transition = "";
    const position = (timePassed - offSet) * 10 * 29;
    Map.style.transition = "";
    Map.style.left = `${startPosition - position}px`;

    setTimeout(() => {
      Map.style.transition = `left ${
        (songTime - timePassed) / playbackRate
      }s linear`;
      Map.offSet;
      Map.style.left = `${startPosition - (songTime - offSet) * 10 * 29}px`;
    }, 10);
  };
  const updateSpeed = (speed) => {
    playbackRate = speed;
    previousTime = (elapsedTime - offSet) / playbackRate;
    elapsedTime = previousTime * playbackRate + timeOffset;
    editor.Audio.playbackRate = playbackRate;
    moveTimelineProgress(
      editor.Audio.duration.toFixed(1),
      elapsedTime.toFixed(1)
    );
  };
  const progressBarTimeUpdate = (timePosition) => {
    if (timePosition === undefined) {
      console.log("undefined");
      return;
    }
    previousTime =
      ((Audio.duration - timeOffset) * timePosition) / playbackRate;
    elapsedTime = previousTime * playbackRate + timeOffset;
    editor.Audio.currentTime = elapsedTime;
    switch (Play) {
      case false:
        stopTimeLine(elapsedTime.toFixed(1));
        break;
      default:
        moveTimelineProgress(
          editor.Audio.duration.toFixed(1),
          elapsedTime.toFixed(1)
        );
    }
    updateDomTime();
  };

  selectPlaySpeed.addEventListener("change", (e) => {
    updateSpeed(Number(e.target.value));
  });
  playBtn.addEventListener("click", () => {
    playPause(playBtn.id);
    playBtn.textContent = playBtn.textContent === "Play" ? "Pause" : "Play";
    playBtn.id = playBtn.id === "play" ? "pause" : "play";
  });

  timePicker.addEventListener("submit", (e) => {
    e.preventDefault();
    pickTime(Number(jumpInput.value));
    stopTimeLine(Number(elapsedTime.toFixed(1)));
    updateDomTime();
    timePicker.style.display = "none";
    jumpInput.value = "";
  });

  setBtn.addEventListener("click", () => {
    timePicker.style.display = "flex";
    playPause("pause");
    playBtn.id = "play";
    playBtn.textContent = "Play";
  });
  menuBtn.addEventListener("click", () => {
    Menu.style.display = "flex";
  });
  menuExit.addEventListener("click", () => {
    Menu.style.display = "none";
  });
  downloadMap.addEventListener("click", () => {
    URL.revokeObjectURL(downloadUrl);
    downloadUrl = beatMapDownload([JSON.stringify(beatMap)]);
  });

  promptPosition.addEventListener("click", (e) => {
    if (e.target === promptPosition) return;
    const timePoint = document.querySelector(
      `[id='${elapsedTime.toFixed(1)}']`
    );
    const promptKey = translateToKey(e.target.id);
    if (checkOccupation(Number(timePoint.id))) {
      return;
    }
    if (canPlace(Number(timePoint.id), promptDuration)) {
      return;
    }
    console.log(`${e.target.id}  time: ${elapsedTime.toFixed(1)}`);

    if (timePoint.childElementCount !== 0) {
      removePrompt(timePoint, Number(timePoint.id));
      return;
    }
    addPrompt(promptType, Number(timePoint.id), e.target.id);
    switch (promptType) {
      case "click":
        clickPrompt(timePoint, promptKey);
        break;
      default:
        longPrompt(timePoint, promptKey, promptDuration, promptType);
    }
  });

  toolBar.addEventListener("click", (e) => {
    if (![clickBtn, rapidBtn, holdBtn].includes(e.target)) return;
    removeBtnFocus();
    e.target.classList.toggle("active-prompt");
    switch (e.target) {
      case clickBtn:
        switchPrompt(e.target.id, 0);
        break;
      case rapidBtn:
        switchPrompt(e.target.id, rapidDuration);
        break;
      case holdBtn:
        switchPrompt(e.target.id, holdDuration);
        break;
      default:
        console.log("error in selection");
    }
  });

  rapidForm.addEventListener("submit", (e) => {
    e.preventDefault();
    rapidDuration = Number(rapidForm.children[1].value);
    if (promptType === "rapid") promptDuration = rapidDuration;
    console.log(promptDuration);
  });
  holdForm.addEventListener("submit", (e) => {
    e.preventDefault();
    holdDuration = Number(holdForm.children[1].value);
    if (promptType === "hold") promptDuration = holdDuration;
  });
  progressBar.addEventListener("mousedown", (e) => {
    moveThumb = true;
    const timePosition = displayParts.moveProgressThumb(e);
    progressBarTimeUpdate(timePosition);
  });
  progressBar.addEventListener("mouseup", () => {
    moveThumb = false;
  });

  progressBar.addEventListener("mousemove", (e) => {
    if (moveThumb) {
      const timePosition = displayParts.moveProgressThumb(e);
      progressBarTimeUpdate(timePosition);
    }
  });
  document.querySelector("body").addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      timeStep("foward", Number(elapsedTime.toFixed(1)));
    }
    if (e.key === "ArrowLeft") {
      timeStep("backward", Number(elapsedTime.toFixed(1)));
    }
    updateDomTime();
  });

  document.querySelector("body").addEventListener("keydown", (e) => {
    if (e.key !== " ") return;
    if (!["", "none"].includes(timePicker.style.display)) return;

    playPause(playBtn.id);
    playBtn.textContent = playBtn.textContent === "Play" ? "Pause" : "Play";
    playBtn.id = playBtn.id === "play" ? "pause" : "play";
  });

  return {
    Audio,
    Score,
    fillTimeline,
    moveTimeLine,
    stopTimeLine,
    updateDomTime,
    getBeatMap,
    getPlayRate,
  };
})();

const timeController = () => {
  if (elapsedTime > editor.Audio.duration) {
    // clearInterval(editorLoop);
    if (Play === true) {
      Play = false;
      const playBtn = document.querySelector(".tool-bar").children[0];
      playBtn.id = "play";
      playBtn.textContent = "Play";
    }
    return;
  }
  if (Play === false) {
    return;
  }
  if (!startTime) {
    startTime = Date.now();
  }
  const playRate = editor.getPlayRate();
  let currentTime = Number((Date.now() - startTime) / 1000);

  if (Math.abs(elapsedTime - currentTime * playRate - timeOffset) > 0.1) {
    const startIncrease = currentTime - previousTime;

    startTime += startIncrease * 1000;
    currentTime = Number((Date.now() - startTime) / 1000);
  }

  // elapsedTime += currentTime - previousTime;
  elapsedTime = previousTime * playRate + timeOffset;
  previousTime = currentTime;
  displayParts.autoThumbMovement(
    (editor.Audio.currentTime - timeOffset) /
      (editor.Audio.duration - timeOffset)
  );
  editor.updateDomTime();
};
const AnimatePrompts = () => {
  timeController();
  canvasP.validPrompts(
    previousTime * editor.getPlayRate() + timeOffset,
    editor.getBeatMap(),
    Play
  );
  player.gamePlayerLogic(elapsedTime);

  requestAnimationFrame(AnimatePrompts);
};
editor.Audio.onloadedmetadata = () => {
  editor.Audio.playbackRate = editor.getPlayRate();
  displayParts.mapProgressPrompts(
    editor.getBeatMap(),
    editor.Audio.duration - timeOffset,
    timeOffset
  );
  editor.fillTimeline(editor.Audio.duration * 10);
  requestAnimationFrame(AnimatePrompts);
  editorLoop = setInterval(timeController, 0);
};
