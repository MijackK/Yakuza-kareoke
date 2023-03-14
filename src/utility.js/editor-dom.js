import { moveProgressThumb } from "../player-parts/display-parts";

const background = document.querySelector(".background");

const Audio = document.querySelector("#editor-audio");
const playBtn = document.querySelector("#play");
playBtn.id = "play";
const timePicker = document.querySelector("#time-picker");
const jumpInput = document.querySelector("#jump-to");
const setBtn = document.querySelector("#set");
const Score = document.querySelector("#score");
const Map = document.querySelector(".map");

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
fullLine.className = "timemarker second";
halfLine.className = "timemarker mili-second";

const promptPosition = document.querySelector(".get-prompt");
const toolBar = document.querySelector(".tool-bar");
const clickBtn = document.querySelector("#click");
const holdBtn = document.querySelector("#hold");
const rapidBtn = document.querySelector("#rapid");
const rapidForm = document.querySelector("#r-form");
rapidForm.children[1].value = 1;
const holdForm = document.querySelector("#h-form");
holdForm.children[1].value = 1;
const progressBar = document.querySelector(".progress_section");
const selectPlaySpeed = document.querySelector("#time_guage");

const menuBtn = document.querySelector("#menu");
const Menu = document.querySelector("#modal");
const menuExit = document.querySelector("#exit");
const downloadMap = document.querySelector("#download-map");
let downloadUrl;

const removeBtnFocus = () => {
  clickBtn.classList.remove("active-prompt");
  rapidBtn.classList.remove("active-prompt");
  holdBtn.classList.remove("active-prompt");
};

const clickPrompt = (timePoint, imageURL) => {
  clickMarker.style.backgroundImage = `url(${imageURL})`;
  timePoint.appendChild(clickMarker.cloneNode(true));
};

const longPrompt = (timePoint, imageURl, duration, type) => {
  longContainer.title = `Duration: ${duration} Seconds`;
  longContainer.children[0].style.backgroundImage = `url(${imageURl})`;
  longContainer.children[2].style.backgroundImage = `url(${imageURl})`;
  longContainer.children[1].style.width = `${29 * duration * 10 - 45}px`;
  longContainer.children[1].textContent = type;
  timePoint.appendChild(longContainer.cloneNode(true));
};

const fillTimeline = (duration, beatMap, images) => {
  for (let i = 0; i < duration; i += 1) {
    const timeId = (i * 0.1).toFixed(1);
    const promptInfo = beatMap.find((prompt) => prompt.time === Number(timeId));
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
          clickPrompt(Map.children[Map.childElementCount - 1], promptInfo.key);
          break;
        default:
          longPrompt(
            Map.children[Map.childElementCount - 1],
            images[promptInfo.key],
            promptInfo.duration,
            promptInfo.type
          );
      }
    }
  }
};
const updateDomTime = (elapsedTime) => {
  document.querySelector("#ptime").textContent = ` ${Audio.currentTime.toFixed(
    3
  )} / ${Audio.duration}`;
  Score.textContent = elapsedTime.toFixed(1);
};

const timeStep = (leftPosition) => {
  Map.style.transition = "";
  Map.style.left = leftPosition;
};

const moveTimeLine = ({ transitionValue, leftValue }) => {
  Map.style.transition = transitionValue;
  // eslint-disable-next-line no-unused-expressions
  Map.offSet;
  Map.style.left = leftValue;
};

const stopTimeLine = (newPosition) => {
  Map.style.transition = "";
  Map.style.left = newPosition;
  // Map.style.left = `-${(timePassed - offSet) * 10 * 29}px`;
};
const playPause = (action, editor) => {
  if (action === "play") {
    const position = editor.moveTimeLine(Number(Audio.duration).toFixed(1));
    if (position) {
      moveTimeLine(position);
      Audio.currentTime = editor.getElapsedTime();
      Audio.play();
    }
  }
  if (action === "pause") {
    const position = editor.stopTimeLine();
    Audio.pause();
    stopTimeLine(position);
  }
};

const moveTimelineProgress = ({ leftStart, leftEnd, transition }) => {
  Map.style.transition = "";
  Map.style.left = leftStart;
  // review this
  setTimeout(() => {
    Map.style.transition = transition;
    // eslint-disable-next-line no-unused-expressions
    Map.offSet;
    Map.style.left = leftEnd;
  }, 10);
};

const progressBarTimeUpdate = (newPosition) => {
  const positionValue = newPosition.value;
  switch (newPosition.Play) {
    case false:
      stopTimeLine(positionValue);
      break;
    default:
      moveTimelineProgress(positionValue);
  }
  updateDomTime();
};

export default function initialize(editor) {
  // set attributes and stuff
  background.style.backgroundImage = `url(${editor.getBackGround})`;
  Audio.currentTime = editor.getTimeOffset();
  Map.style.left = `${editor.getStartPosition()}px`;
  Audio.src = editor.getAudio();
  selectPlaySpeed.value = editor.getPlayBackRate();

  // fill timeline
  fillTimeline(editor.getDuration(), editor.getMap(), editor.getImages());
  // add event listners
  selectPlaySpeed.addEventListener("change", (e) => {
    const position = editor.updateSpeed(Number(e.target.value), Audio.duration);
    if (position) {
      moveTimelineProgress(position);
    }
  });
  playBtn.addEventListener("click", () => {
    playPause(playBtn.id, editor);
    playBtn.textContent = playBtn.textContent === "Play" ? "Pause" : "Play";
    playBtn.id = playBtn.id === "play" ? "pause" : "play";
  });

  timePicker.addEventListener("submit", (e) => {
    e.preventDefault();
    editor.pickTime(Number(jumpInput.value));
    stopTimeLine(Number(editor.getElapsedTime().toFixed(1)));
    updateDomTime();
    timePicker.style.display = "none";
    jumpInput.value = "";
  });

  setBtn.addEventListener("click", () => {
    timePicker.style.display = "flex";
    playPause("pause", editor);
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
    downloadUrl = editor.beatMapDownload();
    downloadMap.href = downloadUrl;
  });

  promptPosition.addEventListener("click", (e) => {
    if (e.target === promptPosition) return;
    const timePoint = document.querySelector(
      `[id='${editor.getElapsedTime().toFixed(1)}']`
    );
    const promptKey = editor.translateToKey(e.target.id);
    if (editor.checkOccupation(Number(timePoint.id))) {
      console.log("space is occupied by a long prompt");
      return;
    }
    if (editor.canPlace(Number(timePoint.id), editor.getPromptDuration())) {
      console.log("cant place that prompt here");
      return;
    }
    console.log(`${e.target.id}  time: ${editor.getElapsedTime().toFixed(1)}`);

    if (timePoint.childElementCount !== 0) {
      editor.removePrompt(Number(timePoint.id), Audio.duration);
      timePoint.textContent = "";
      return;
    }

    editor.addPrompt(Number(timePoint.id), e.target.id, Audio.duration);
    switch (editor.getPromptType) {
      case "click":
        clickPrompt(timePoint, promptKey);
        break;
      default:
        longPrompt(
          timePoint,
          promptKey,
          editor.getPromptDuration,
          editor.getPromptType
        );
    }
  });

  toolBar.addEventListener("click", (e) => {
    if (![clickBtn, rapidBtn, holdBtn].includes(e.target)) return;
    removeBtnFocus();
    e.target.classList.toggle("active-prompt");
    switch (e.target) {
      case clickBtn:
        editor.switchPrompt(e.target.id, 0);
        break;
      case rapidBtn:
        editor.switchPrompt(e.target.id, editor.getRapidDuration());
        break;
      case holdBtn:
        editor.switchPrompt(e.target.id, editor.getHoldDuration());
        break;
      default:
        console.log("error in selection");
    }
  });

  rapidForm.addEventListener("submit", (e) => {
    e.preventDefault();
    editor.setRapidDuration(Number(rapidForm.children[1].value));
    if (editor.getPromptType() === "rapid") {
      editor.setRapidDuration(editor.getRapidDuration());
    }
    console.log(editor.getPromptDuration());
  });
  holdForm.addEventListener("submit", (e) => {
    e.preventDefault();
    editor.setHoldDuration(Number(holdForm.children[1].value));
    if (editor.getPromptType === "hold") {
      editor.setPromptDuration(editor.getHoldDuration());
    }
  });
  progressBar.addEventListener("mousedown", (e) => {
    editor.setMoveThumb(true);
    const timePosition = moveProgressThumb(e);

    const position = editor.progressBarTimeUpdate(timePosition, Audio.duration);
    if (position) {
      progressBarTimeUpdate(position);
    }
  });
  progressBar.addEventListener("mouseup", () => {
    editor.setMoveThumb(false);
  });

  progressBar.addEventListener("mousemove", (e) => {
    if (editor.getMoveThumb()) {
      const timePosition = moveProgressThumb(e);
      const position = editor.progressBarTimeUpdate(
        timePosition,
        Audio.duration
      );
      if (position) {
        progressBarTimeUpdate(position);
      }
    }
  });
  document.querySelector("body").addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" || e.key !== "ArrowLeft") {
      return;
    }

    const direction = e.key === "ArrowRight" ? "foward" : "backward";
    const movePosition = editor.timeStep(direction);
    if (direction) {
      timeStep(movePosition);
    }

    updateDomTime(editor.getElapsedTime());
  });

  document.querySelector("body").addEventListener("keydown", (e) => {
    if (e.key !== " ") return; // if the key pressed is not spacebar
    // prevents play when the timepicker modal is opened
    if (!["", "none"].includes(timePicker.style.display)) return;

    playPause(playBtn.id, editor);
    playBtn.textContent = editor.getPlay() === "Play" ? "Pause" : "Play";
    playBtn.id = editor.getPlay() ? "pause" : "play";
  });
}
