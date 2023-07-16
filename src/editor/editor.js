import "../kareoke_player/player.css";
import "./editor.css";
import "../general.css";
// import gamePlayerLogic from "../player-parts/map-visualizer";
import { validPrompts, init } from "../canvas/canvas";
import { initMap, drawMap } from "../canvas/time-map";

import {
  autoThumbMovement,
  mapProgressPrompts,
  moveProgressThumb,
} from "../player-parts/display-parts";

import editorFactory from "../managers/editor_manager";
import {
  authenicatedView,
  notAuthenticatedView,
  updateDomTime,
  updateMediaTime,
  viewSwitch,
  listBeatMap,
  loadingMap,
  showSelectedSong,
  updatePlaySpeed,
  editorPlay,
  editorPause,
  closeTimePicker,
  openTimePicker,
  closeEditorMenu,
  openEditorMenu,
  focusBtn,
  currentAudioTime,
  displaySelectedStatus,
} from "../utility.js/editor-dom";
import beatMapManager from "../managers/map_manager";
import userFactory from "../managers/user-manager";

const editor = editorFactory();
const mapManager = beatMapManager();
const userManager = userFactory();
init();
initMap("#time-map");

let intervalID;
let animationID;

const loadMedia = (audio, background, extension) => {
  mapManager
    .generateBlobUrl({
      audio,
      background,
    })
    .then(() => {
      showSelectedSong(
        mapManager.getSelectedMap(),
        extension,
        mapManager.getAudioUrl(),
        mapManager.getBackgroundUrl()
      );
    });
};
const setSelectedMap = (beatMap, extension) => {
  mapManager.setSelectedMap(beatMap);
  editor.setBeatMap(mapManager.getSelectedMap().beatMap);
  loadMedia(beatMap.audio, beatMap.background, extension);
};

const addMapToList = (beatMap) => {
  const mediaExtension = mapManager.getExtension(beatMap.background);
  const mediaSource = mapManager.directUrl(beatMap.background);
  const listItem = listBeatMap(beatMap, mediaExtension, mediaSource);
  listItem.addEventListener("click", () => {
    const selectedMap = mapManager.getSelectedMap();
    if (selectedMap?.id === beatMap.id) {
      return;
    }
    loadingMap();
    mapManager.abortSelection();
    setSelectedMap(beatMap, mediaExtension);
  });
};
const stopEditor = () => {
  clearInterval(intervalID);
  cancelAnimationFrame(animationID);
  editor.setPlay(false);
  editorPause();
};
const timeController = () => {
  console.log("hi");
  const elapsedTime = editor.getElapsedTime();
  const Play = editor.getPlay();
  const audioDuration = editor.getAudioDuration();

  const timeOffset = editor.getTimeOffset();
  const previousTime = editor.getPreviousTime();
  const playRate = editor.getPlayRate();
  const AudioCurrentTime = currentAudioTime();

  if (elapsedTime > audioDuration) {
    if (Play === true) {
      stopEditor();
    }
    return;
  }
  if (Play === false) {
    return;
  }
  if (!editor.getStartTime()) {
    editor.setStartTime(Date.now());
  }

  let currentTime = Number((Date.now() - editor.getStartTime()) / 1000);

  if (Math.abs(elapsedTime - currentTime * playRate - timeOffset) > 0.1) {
    const startIncrease = currentTime - previousTime;

    editor.setStartTime(editor.getStartTime() + startIncrease * 1000);
    currentTime = Number((Date.now() - editor.getStartTime()) / 1000);
  }

  // elapsedTime += currentTime - previousTime;
  editor.setElapsedTime(previousTime * playRate + timeOffset);
  editor.setPreviousTime(currentTime);
  autoThumbMovement(
    (AudioCurrentTime - timeOffset) / (audioDuration - timeOffset)
  );

  updateDomTime(elapsedTime);
  drawMap(editor.getBeatMap(), elapsedTime);
};
const AnimatePrompts = () => {
  timeController();
  // enable this when computer player is working is working
  // gamePlayerLogic(elapsedTime);
  // drawMap(editor.getBeatMap(), editor.getElapsedTime());
  validPrompts(
    editor.getPreviousTime() * editor.getPlayRate() + editor.getTimeOffset(),
    editor.getBeatMap(), // repl;ace with beatmap
    editor.getPlay()
  );
  animationID = requestAnimationFrame(AnimatePrompts);
};
const startEditor = () => {
  animationID = requestAnimationFrame(AnimatePrompts);
  intervalID = setInterval(timeController, 0);
  editor.setPlay(true);
  editorPlay(editor.getElapsedTime());
};
const checkSelectedSong = () => {
  mapManager
    .checkSelectedSong()
    .then((isSelected) => {
      if (isSelected) {
        const beatMap = mapManager.getSelectedMap();
        const extension = mapManager.getExtension(beatMap.background);
        loadMedia(beatMap.audio, beatMap.background, extension);
        editor.setBeatMap(mapManager.getSelectedMap().beatMap);
        return;
      }
      displaySelectedStatus("No map selected");
    })
    .catch((error) => {
      console.log(error);
      displaySelectedStatus("Error while fetching map");

      mapManager.clearSelectedMap();
    });
};

// add event listners
document.querySelector("#upload-map").addEventListener("click", () => {
  mapManager.saveMapRemote("beatMap").then((res) => {
    alert(res);
  });
});
document.querySelector("#add").addEventListener("click", (e) => {
  viewSwitch(e.target);
});
document.querySelector("#selected").addEventListener("click", (e) => {
  viewSwitch(e.target);
});
const addMapForm = document.querySelector("#add-map-form");
addMapForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const submitButton = e.submitter;
  submitButton.disabled = true;

  const mapData = new FormData(addMapForm);
  mapManager
    .addBeatMap(mapData)
    .then(async (res) => {
      console.log(res);
      const beatMap = res.map;

      // put the map on the list of maps
      addMapToList(beatMap);

      // make the selected map the added map
      setSelectedMap(beatMap, mapManager.getExtension(beatMap.background));

      addMapForm.reset();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});

document.querySelector("#time_guage").addEventListener("change", (e) => {
  editor.updateSpeed(Number(e.target.value));
  updatePlaySpeed(editor.getPlayBackRate());
});

document.querySelector("#play").addEventListener("click", (e) => {
  if (e.target.id === "play") {
    startEditor();
    return;
  }
  if (e.target.id === "pause") {
    stopEditor();
  }
});

document.querySelector("#time-picker").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const validTime = editor.pickTime(formData.get("time"));
  if (validTime) {
    validPrompts(editor.getElapsedTime(), editor.getBeatMap());
    drawMap(editor.getBeatMap(), editor.getElapsedTime());
    updateDomTime(editor.getElapsedTime());
    updateMediaTime(editor.getElapsedTime());
    closeTimePicker();
  }
});

document.querySelector("#set").addEventListener("click", () => {
  openTimePicker();
  stopEditor();
});
document.querySelector("#menu").addEventListener("click", () => {
  openEditorMenu();
});
document.querySelector("#exit").addEventListener("click", () => {
  closeEditorMenu();
});

const promptPosition = document.querySelector(".get-prompt");
promptPosition.addEventListener("click", (e) => {
  if (e.target === promptPosition) return;
  const time = editor.getElapsedTime().toFixed(1);

  if (editor.checkOccupation(Number(time), mapManager.getSelectedMap().id)) {
    console.log("space is occupied by a long prompt");
    return;
  }
  if (
    editor.canPlace(
      Number(time),
      editor.getPromptDuration(),
      mapManager.getSelectedMap().id
    )
  ) {
    console.log("cant place that prompt here");
    return;
  }
  console.log(`${e.target.id}  time: ${editor.getElapsedTime().toFixed(1)}`);

  editor.addPrompt(Number(time), e.target.id, mapManager.getSelectedMap().id);
  const timeOffset = editor.getTimeOffset();
  mapProgressPrompts(
    editor.getBeatMap(),
    Audio.duration - timeOffset,
    timeOffset
  );
  drawMap(editor.getBeatMap(), editor.getElapsedTime());
});

document.querySelector("#click").addEventListener("click", (e) => {
  editor.switchPrompt(e.target.id, 0);
  focusBtn(e.target);
});
document.querySelector("#hold").addEventListener("click", (e) => {
  editor.switchPrompt(e.target.id, editor.getHoldDuration());
  focusBtn(e.target);
});
document.querySelector("#rapid").addEventListener("click", (e) => {
  editor.switchPrompt(e.target.id, editor.getRapidDuration());
  focusBtn(e.target);
});

document.querySelector("#r-form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();
  editor.setRapidDuration(Number(e.target.children[1].value));
  if (editor.getPromptType() === "rapid") {
    editor.setRapidDuration(editor.getRapidDuration());
  }
});

document.querySelector("#h-form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();
  editor.setHoldDuration(Number(e.target.children[1].value));
  if (editor.getPromptType === "hold") {
    editor.setPromptDuration(editor.getHoldDuration());
  }
});

const progressBar = document.querySelector(".progress_section");
progressBar.addEventListener("mousedown", (e) => {
  editor.setMoveThumb(true);
  const timePosition = moveProgressThumb(e);
  editor.progressBarTimeUpdate(timePosition);
  updateDomTime(editor.getElapsedTime());
  updateMediaTime(editor.getElapsedTime());
  drawMap(editor.getBeatMap(), editor.getElapsedTime());
});

progressBar.addEventListener("mouseup", () => {
  editor.setMoveThumb(false);
});

progressBar.addEventListener("mousemove", (e) => {
  if (editor.getMoveThumb()) {
    const timePosition = moveProgressThumb(e);
    editor.progressBarTimeUpdate(timePosition);
    updateDomTime(editor.getElapsedTime());
    updateMediaTime(editor.getElapsedTime());
    drawMap(editor.getBeatMap(), editor.getElapsedTime());
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
  editor.timeStep(direction);
  const timeOffset = editor.getTimeOffset();
  validPrompts(editor.getElapsedTime(), editor.getBeatMap());
  autoThumbMovement(
    (Audio.currentTime - timeOffset) / (Audio.duration - timeOffset)
  );
  drawMap(editor.getBeatMap(), editor.getElapsedTime());

  updateDomTime(editor.getElapsedTime());
  updateMediaTime(editor.getElapsedTime());
});

document.querySelector("body").addEventListener("keydown", (e) => {
  if (e.key !== " ") return; // if the key pressed is not spacebar
  // prevents play when the timepicker modal is opened
  if (editor.getPlay() === false) {
    startEditor();
    console.log("hi spacebar");
    return;
  }
  if (editor.getPlay() === true) {
    stopEditor();
  }
});
document.querySelector("#login").addEventListener("submit", (e) => {
  e.preventDefault();
  const submitButton = e.submitter;
  submitButton.disabled = true;
  const loginData = new FormData(e.target);

  userManager
    .handleLogin({
      email: loginData.get("email"),
      password: loginData.get("password"),
    })
    .then(async (res) => {
      if (res.success) {
        authenicatedView();
        checkSelectedSong();
        const beatMaps = await mapManager.handleGetUserBeatMaps();
        // get user songs and display them on my map.
        beatMaps.forEach((beatMap) => {
          addMapToList(beatMap);
        });
      } else {
        console.log(res.message);
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});
document
  .querySelector("#editor-audio")
  .addEventListener("loadedmetadata", (e) => {
    editor.setAudioDuration(e.target.duration);
    const timeOffset = editor.getTimeOffset();
    mapProgressPrompts(
      editor.getBeatMap(), // replace with beatMap
      e.target.duration - timeOffset,
      timeOffset
    );
  });
userManager
  .isLogin()
  .then(async () => {
    if (userManager.getUserData().isLogin === false) {
      notAuthenticatedView();
    }
    if (userManager.getUserData().isLogin) {
      authenicatedView();
      checkSelectedSong();
      const beatMaps = await mapManager.handleGetUserBeatMaps();
      // get user songs and display them on my map.
      beatMaps.forEach((beatMap) => {
        addMapToList(beatMap);
      });
    }
  })
  .catch((e) => {
    console.log(e);
  });
