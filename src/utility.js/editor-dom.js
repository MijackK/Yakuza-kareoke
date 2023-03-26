import {
  moveProgressThumb,
  mapProgressPrompts,
  autoThumbMovement,
} from "../player-parts/display-parts";
import surviveBar from "../images/survive_bar.png";
import { validPrompts } from "../canvas/canvas";
import config from "../config";
import audiomp3 from "../audio/judgment.mp3";

let editorManager;
const backgroundImage = document.querySelector("#background-image");
const backgroundVideo = document.querySelector("#background-video");
const selectedSummary = document.querySelector("#selected-summary");

const Audio = document.querySelector("#editor-audio");
const playBtn = document.querySelector("#play");
playBtn.id = "play";
const timePicker = document.querySelector("#time-picker");
const jumpInput = document.querySelector("#jump-to");
const setBtn = document.querySelector("#set");
const Score = document.querySelector("#score");
const Map = document.querySelector(".map");
const addMapForm = document.querySelector("#add-map-form");
const addMapArea = document.querySelector("#add-map");
const loginForm = document.querySelector("#login");
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
const songSelect = document.querySelector("#song-select");
const userMaps = document.querySelector("#map-list");
const buttonGroup = document.querySelector(".button-group");
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
const selectedInfoButton = document.querySelector("#selected");
const addMapButton = document.querySelector("#add");
const summaryWrapper = document.querySelector("#summary-wrapper");
const selectedAudio = document.querySelector("#map-audio");
selectedAudio.src = audiomp3;
const selectName = document.querySelector("#map-name");
const selectVideo = document.querySelector("#map-video");
const selectImage = document.querySelector("#map-image");
selectImage.src = surviveBar;
const mapSection = document.querySelector("#map-section");

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
          clickPrompt(
            Map.children[Map.childElementCount - 1],
            images[promptInfo.key]
          );
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
      backgroundVideo.currentTime = editor.getElapsedTime();
      console.log("hi");
      Audio.play();
      backgroundVideo.play();
    }
  }
  if (action === "pause") {
    const position = editor.stopTimeLine();
    Audio.pause();
    backgroundVideo.pause();
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

const progressBarTimeUpdate = (newPosition, elapsedTime) => {
  const positionValue = newPosition.value;
  Audio.currentTime = elapsedTime;
  backgroundVideo.currentTime = elapsedTime;
  switch (newPosition.Play) {
    case false:
      stopTimeLine(positionValue);
      break;
    default:
      moveTimelineProgress(positionValue);
  }
  updateDomTime(elapsedTime);
};

const clearSongList = () => {};

const getMetaData = () => {
  editorManager.setAudioDuration(Audio.duration);
  // clear previous time points
  // eslint-disable-next-line no-restricted-syntax

  while (Map.firstChild) {
    Map.removeChild(Map.firstChild);
  }

  fillTimeline(
    Audio.duration * 10,
    editorManager.getBeatMap(),
    editorManager.getImages()
  );
  const timeOffset = editorManager.getTimeOffset();
  mapProgressPrompts(
    editorManager.getBeatMap(),
    Audio.duration - timeOffset,
    timeOffset
  );
  Audio.removeEventListener("loadedmetadata", getMetaData);
};
const showSelectedSong = (beatMap, map) => {
  // remove no selected message
  const notSelectedSceen = document.querySelector(".not-selected");
  notSelectedSceen.style.display = "none";
  selectedSummary.style.display = "flex";
  // add audio src
  Audio.src = map.getAudioUrl();
  selectVideo.style.display = "none";
  selectImage.style.display = "none";
  backgroundVideo.style.display = "none";
  backgroundImage.style.display = "none";

  selectedAudio.src = map.getAudioUrl();
  const extension = map.getExtension(beatMap.background);
  // show either video or image based on background extension
  if (extension === "mp4") {
    backgroundVideo.src = map.getBackgroundUrl();
    backgroundVideo.style.display = "block";

    // for the summary
    selectVideo.src = map.getBackgroundUrl();
    selectVideo.style.display = "block";
    selectVideo.play();
  } else {
    backgroundImage.style.backgroundImage = `url(${map.getBackgroundUrl()})`;
    selectImage.src = map.getBackgroundUrl();
    selectImage.style.display = "block";
    backgroundImage.style.display = "block";
  }
  Audio.addEventListener("loadedmetadata", getMetaData);
  console.log("there is a selected map, load its assets");
};

const loadMedia = ({ mapBackground, mapAudio, map }) => {
  map
    .generateBlobUrl({
      audio: mapAudio,
      background: mapBackground,
    })
    .then(() => {
      showSelectedSong(map.getSelectedMap(), map);
    });
};

const listBeatMaps = (beatMaps, editor, map) => {
  beatMaps.forEach((beatMap) => {
    const listItem = document.createElement("li");
    listItem.classList.add("beat-map");
    const backgroundType = map.getExtension(beatMap.background);
    let mapBackground;
    if (backgroundType === "mp4") {
      mapBackground = document.createElement("video");
      mapBackground.addEventListener("mouseenter", (e) => {
        e.target.play();
      });
      mapBackground.addEventListener("mouseleave", (e) => {
        e.target.pause();
      });
    } else {
      mapBackground = document.createElement("img");
    }

    mapBackground.classList.add("beat-map-image");
    mapBackground.src = map.directUrl(beatMap.background);
    listItem.appendChild(mapBackground);
    const mapInfo = document.createElement("div");
    mapInfo.classList.add("beat-map-text");
    listItem.appendChild(mapInfo);
    const mapName = document.createElement("span");
    mapName.textContent = beatMap.name;
    const mapUpdateDate = document.createElement("span");
    mapUpdateDate.textContent = `last updated: 1/1/2001`;
    mapInfo.append(mapName, mapUpdateDate);

    // add event listner
    listItem.addEventListener("click", () => {
      const selectedMap = map.getSelectedMap();
      if (selectedMap.id === beatMap.id) {
        return;
      }
      map.setSelectedMap(beatMap);
      loadMedia({
        mapBackground: beatMap.background,
        mapAudio: beatMap.audio,
        map,
        editor,
      });
    });

    userMaps.append(listItem);
  });
};
const viewSwitch = (button) => {
  const buttonGroupMember = buttonGroup.children;

  Object.keys(buttonGroupMember).forEach((child) => {
    const element = buttonGroupMember[child];

    if (element === button) {
      button.classList.add("active");

      const selectedButton = element.getAttribute("id");

      const checkSelected = selectedButton === "selected";
      const checkCreate = selectedButton === "add";
      // add form style change
      addMapForm.style.display = checkCreate ? "flex" : "none";

      // login form style change
      summaryWrapper.style.display = checkSelected ? "flex" : "none";

      return;
    }
    element.classList.remove("active");
  });
};
const authenicatedView = () => {
  userMaps.style.display = "block";
  addMapArea.style.display = "grid";
  loginForm.style.display = "none";
};
const notAuthenticatedView = () => {
  loginForm.style.display = "flex";
  addMapArea.style.display = "none";
  userMaps.style.display = "none";
};

export function initialize({ editor, map, user }) {
  editorManager = editor;
  // set attributes and stuff
  console.log();

  const selectedMap = map.getSelectedMap();

  if (selectedMap) {
    showSelectedSong(selectedMap, map);
  }

  Audio.currentTime = editor.getTimeOffset();
  Map.style.left = `${editor.getStartPosition()}px`;
  Audio.src = map.getAudioUrl();
  selectPlaySpeed.value = editor.getPlayBackRate();
  // alows editor to get the audio current time
  editor.getAudioCurrentTime = () => Audio.currentTime;

  // fcheck if user isn't logged in, a
  if (user.getUserData().isLogin === false) {
    notAuthenticatedView();
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const loginData = new FormData(loginForm);

      user
        .handleLogin({
          email: loginData.get("email"),
          password: loginData.get("password"),
        })
        .then(async (res) => {
          if (res.success) {
            loginForm.style.display = "none";
            // get user songs and display them on my map.
            const beatMaps = await map.handleGetUserBeatMaps();
            authenicatedView();
            map.checkSelectedSong().then((isSelected) => {
              if (isSelected) {
                showSelectedSong(map.getSelectedMap(), map);
              }
            });

            listBeatMaps(beatMaps, editor, map);
            alert("succesfully logged in");
          } else {
            console.log(res.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  // start loadings for song list
  map.getSongsList().then((songList) => {
    console.log(songList);
    // stop song list loading ui
    songList.forEach((song) => {
      const option = document.createElement("option");
      option.value = song.id;
      option.textContent = song.name;
      songSelect.append(option);
    });
  });
  // get user beat maps
  map.handleGetUserBeatMaps().then((beatMaps) => {
    listBeatMaps(beatMaps, editor, map);
  });

  // add event listners
  addMapButton.addEventListener("click", (e) => {
    viewSwitch(e.target);
  });
  selectedInfoButton.addEventListener("click", (e) => {
    viewSwitch(e.target);
  });
  addMapForm.addEventListener("submit", (e) => {
    console.log(map);
    e.preventDefault();
    const mapData = new FormData(addMapForm);
    map.addBeatMap(mapData).then(async (res) => {
      console.log(res);
      const beatMap = res.map;
      listBeatMaps([beatMap], editor, map);
      // make the selected map the added map
      map.setSelectedMap(beatMap);
      // load the assets for the added maps.
      loadMedia({
        mapBackground: beatMap.background,
        mapAudio: beatMap.audio,
        map,
        editor,
      });
      addMapForm.reset();
      alert("beatmap added");
    });
  });
  selectPlaySpeed.addEventListener("change", (e) => {
    const position = editor.updateSpeed(Number(e.target.value));
    if (position) {
      Audio.playbackRate = editor.getPlayBackRate();
      backgroundVideo.playbackRate = editor.getPlayBackRate();
      moveTimelineProgress(position);
    }
  });
  playBtn.addEventListener("click", () => {
    playPause(playBtn.id, editor);
    playBtn.textContent = editor.getPlay() ? "Pause" : "Play";
    playBtn.id = editor.getPlay() ? "pause" : "play";
  });

  timePicker.addEventListener("submit", (e) => {
    e.preventDefault();

    const validTime = editor.pickTime(Number(jumpInput.value));
    if (validTime) {
      validPrompts(editor.getElapsedTime(), editor.getBeatMap());
      const postion = editor.stopTimeLine();
      stopTimeLine(postion);
      updateDomTime(editor.getElapsedTime());
      timePicker.style.display = "none";
      jumpInput.value = "";
    }
  });

  setBtn.addEventListener("click", () => {
    timePicker.style.display = "flex";
    playPause("pause", editor);
    playBtn.id = "play";
    playBtn.textContent = "Play";
  });
  menuBtn.addEventListener("click", () => {
    Menu.style.display = "grid";
  });
  menuExit.addEventListener("click", () => {
    Menu.style.display = "none";
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
      editor.removePrompt(Number(timePoint.id));
      const timeOffset = editor.getTimeOffset();
      mapProgressPrompts(
        editor.getBeatMap(),
        Audio.duration - timeOffset,
        timeOffset
      );
      timePoint.textContent = "";
      return;
    }

    editor.addPrompt(Number(timePoint.id), e.target.id);
    const timeOffset = editor.getTimeOffset();
    mapProgressPrompts(
      editor.getBeatMap(),
      Audio.duration - timeOffset,
      timeOffset
    );
    const promptImages = editor.getImages();
    switch (editor.getPromptType()) {
      case "click":
        clickPrompt(timePoint, promptImages[promptKey]);
        break;
      default:
        longPrompt(
          timePoint,
          promptImages[promptKey],
          editor.getPromptDuration(),
          editor.getPromptType()
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

    const position = editor.progressBarTimeUpdate(timePosition);
    if (position) {
      progressBarTimeUpdate(position, editor.getElapsedTime());
    }
  });
  progressBar.addEventListener("mouseup", () => {
    editor.setMoveThumb(false);
  });

  progressBar.addEventListener("mousemove", (e) => {
    if (editor.getMoveThumb()) {
      const timePosition = moveProgressThumb(e);
      const position = editor.progressBarTimeUpdate(timePosition);
      if (position) {
        progressBarTimeUpdate(position, editor.getElapsedTime());
      }
    }
  });
  document.querySelector("body").addEventListener("keydown", (e) => {
    if (editor.getPlay()) {
      return;
    }
    if (["ArrowRight", "ArrowLeft"].includes(e.key) === false) {
      return;
    }

    const direction = e.key === "ArrowRight" ? "foward" : "backward";
    const movePosition = editor.timeStep(direction);
    if (direction) {
      const timeOffset = editor.getTimeOffset();
      validPrompts(editor.getElapsedTime(), editor.getBeatMap());
      Audio.currentTime = editor.getElapsedTime();
      backgroundVideo.currentTime = editor.getElapsedTime();
      autoThumbMovement(
        (Audio.currentTime - timeOffset) / (Audio.duration - timeOffset)
      );
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

export { fillTimeline, updateDomTime };
