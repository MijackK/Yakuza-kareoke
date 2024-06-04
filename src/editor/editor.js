import "../kareoke_player/player.css";
import "./editor.css";
import "../general.css";
// import gamePlayerLogic from "../player-parts/map-visualizer";
import { validPrompts, init } from "../canvas/canvas";
import { initMap, drawMap } from "../canvas/time-map";
import { deleteLocalMap, updateSettings } from "../utility.js/storage";
import isMobile from "../utility.js/isMobile";
import compressImage from "../utility.js/compressImage";
import isImage from "../utility.js/isImage";

import {
  autoThumbMovement,
  mapProgressPrompts,
  moveProgressThumb,
  feedBackVisualiserFactory,
} from "../player-parts/display-parts";

import editorFactory from "../managers/editor_manager";
import artificialPlayer from "../player-parts/ai-player";
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
  closeEditorMenu,
  openEditorMenu,
  focusBtn,
  currentAudioTime,
  displaySelectedStatus,
  showHideOption,
  addPromptSrc,
  showEdit,
  addErrorMessage,
  opneNameEditForm,
  changeMapName,
  showLoading,
  handleDurationForm,
  playClick,
  muteHitSound,
  updateDomAudio,
  initialize,
} from "../dom-manipulation/editor-dom";
import beatMapManager from "../managers/map_manager";
import userFactory from "../managers/user-manager";

const audioContext = new AudioContext();
let track;
const editor = editorFactory();
const mapManager = beatMapManager();
const userManager = userFactory();
const computer = artificialPlayer();
const feedBackVisualiser = feedBackVisualiserFactory();
let changingBackground = false;
let changingAudio = false;
let changingName = false;
let shiftPressed = false;
init();
initialize();
initMap("#time-map");
addPromptSrc();

let animationID;

const loadMedia = (audio, background, extension) => {
  computer.setTimeMap(mapManager.getSelectedMap().beatMap);
  mapManager
    .generateBlobUrl({
      audio,
      background,
    })
    .then(() => {
      editor.updateSpeed(1);
      const audioElement = showSelectedSong(
        mapManager.getSelectedMap(),
        extension,
        mapManager.getAudioUrl(),
        mapManager.getBackgroundUrl()
      );
      if (track === undefined) {
        track = audioContext.createMediaElementSource(audioElement);
      }

      track.connect(audioContext.destination);

      showEdit(true);
    })
    .catch((err) => {
      console.log(err);
      console.log("couldn't load media into memory");
    });
};
const setSelectedMap = (beatMap, extension) => {
  mapManager.setSelectedMap(beatMap);
  editor.setBeatMap(mapManager.getSelectedMap().beatMap);
  loadMedia(beatMap.audio, beatMap.background, extension);
};
const updateGraphics = () => {
  validPrompts(editor.getElapsedTime(), editor.getBeatMap());
  drawMap(
    editor.getBeatMap(),
    editor.getElapsedTime(),
    editor.getAudioDuration()
  );

  updateDomTime(editor.getElapsedTime());
  mapProgressPrompts(
    editor.getBeatMap(), // replace with beatMap
    editor.getAudioDuration()
  );
};

const stopEditor = () => {
  // clearInterval(intervalID);
  cancelAnimationFrame(animationID);
  editor.setPlay(false);
  editorPause();
};

const timeController = () => {
  const elapsedTime = editor.getElapsedTime();

  const audioDuration = editor.getAudioDuration();

  const playRate = editor.getPlayRate();

  if (elapsedTime >= audioDuration) {
    stopEditor();
    return;
  }

  const currentTime = Number(
    (performance.now() - editor.getStartTime()) / 1000
  );

  editor.setElapsedTime(currentTime * playRate);

  // computer

  const check = computer.checkForInput(
    Number(editor.getElapsedTime().toFixed(1))
  );
  if (check) {
    check.hit = true;
    feedBackVisualiser.inputFeedback(check);
    feedBackVisualiser.showIndicator(check);
    playClick();
  }
};
const AnimatePrompts = () => {
  const elapsedTime = editor.getElapsedTime();

  const audioDuration = editor.getAudioDuration();

  if (elapsedTime >= audioDuration) {
    stopEditor();
    return;
  }
  // enable this when computer player is working is working
  // gamePlayerLogic(elapsedTime);
  autoThumbMovement(elapsedTime / audioDuration);
  updateDomTime(elapsedTime);
  validPrompts(elapsedTime, editor.getBeatMap());
  drawMap(editor.getBeatMap(), elapsedTime, audioDuration);
  timeController();
  animationID = requestAnimationFrame(AnimatePrompts);
};
const startEditor = () => {
  animationID = requestAnimationFrame(AnimatePrompts);
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
  editor.updateStartTime();
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
        showEdit(true);
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
const uploadImage = (file) => {
  changingBackground = true;
  // check on frontend if changing the size go over the maximum allowed beatMap size
  showLoading("background-indicator", "block");
  mapManager
    .changeMedia("background", file)
    .then(({ reload, extension }) => {
      addErrorMessage("", "editbackground-error");
      if (reload) {
        loadMedia(
          mapManager.getSelectedMap().audio,
          mapManager.getSelectedMap().background,
          extension
        );
      }
    })
    .catch((err) => {
      addErrorMessage(err, "editbackground-error");
      setTimeout(() => {
        addErrorMessage("", "editbackground-error");
      }, 5000);
      console.log(err);
    })
    .finally(() => {
      showLoading("background-indicator", "none");
      changingBackground = false;
    });
};

const addMapToList = (beatMap) => {
  const mediaExtension = mapManager.getExtension(beatMap.background);
  const mediaSource = beatMap.background;
  let loadingDelete = false;
  let loadingPublish = false;
  let loadingSave = false;
  const {
    listItem,
    optionButton,
    optionsList,
    saveMap,
    deleteMap,
    clearLocal,
    publishMap,
    mapStatus,
    reset,
    confirmDelete,
    confirmPublish,
    confirmReset,
    confirmClearLocal,
  } = listBeatMap(beatMap, mediaExtension, mediaSource);
  listItem.addEventListener("click", () => {
    const selectedMap = mapManager.getSelectedMap();
    if (selectedMap?.id === beatMap.id) {
      return;
    }
    showEdit(false);
    loadingMap();
    mapManager.abortSelection();
    setSelectedMap(beatMap, mediaExtension);
    editor.setElapsedTime(0);
  });
  optionButton.addEventListener("click", (e) => {
    e.stopPropagation();
    showHideOption(optionsList);
  });
  optionsList.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  if (beatMap.status === "draft") {
    saveMap.addEventListener("click", (e) => {
      e.stopPropagation();
      if (loadingSave) return;
      saveMap.textContent = "Saving...";
      loadingSave = true;

      const { id } = beatMap;
      mapManager
        .saveMapRemote(id)
        .then((res) => {
          console.log(res);
          saveMap.textContent = "Saved";
        })
        .catch((err) => {
          console.log(err);
          saveMap.textContent = "Error";
        })
        .finally(() => {
          setTimeout(() => {
            saveMap.textContent = "Save";
          }, 1000);

          loadingSave = false;
        });
    });
  }

  // delete
  deleteMap.addEventListener("click", () => {
    if (loadingDelete) return;
    confirmDelete.style.display = "flex";
    deleteMap.style.display = "none";
  });

  confirmDelete.addEventListener("click", (e) => {
    if (e.target.className === "yes-confirm") {
      confirmDelete.style.display = "none";
      deleteMap.style.display = "list-item";
      loadingDelete = true;
      deleteMap.textContent = "Deleting...";
      mapManager
        .deleteBeatMap(beatMap.id)
        .then((res) => {
          listItem.remove();
          if (mapManager.getSelectedMap() === null) {
            displaySelectedStatus("No map selected");
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          deleteMap.textContent = "Error";
        })
        .finally(() => {
          loadingDelete = false;
          setTimeout(() => {
            deleteMap.textContent = "delete";
          }, 1000);
        });
      return;
    }
    if (e.target.className === "no-confirm") {
      confirmDelete.style.display = "none";
      deleteMap.style.display = "list-item";
    }
  });

  // clear local option
  clearLocal.addEventListener("click", () => {
    confirmClearLocal.style.display = "flex";
    clearLocal.style.display = "none";
  });
  confirmClearLocal.addEventListener("click", (e) => {
    if (e.target.className === "yes-confirm") {
      deleteLocalMap(beatMap.id);
      editor.setBeatMap(JSON.parse(beatMap.beatMap));
      computer.setTimeMap(editor.getBeatMap());
      updateGraphics();
      confirmClearLocal.style.display = "none";
      clearLocal.style.display = "list-item";
      return;
    }
    if (e.target.className === "no-confirm") {
      confirmClearLocal.style.display = "none";
      clearLocal.style.display = "list-item";
    }
  });

  // reset
  reset.addEventListener("click", () => {
    confirmReset.style.display = "flex";
    reset.style.display = "none";
  });

  confirmReset.addEventListener("click", (e) => {
    if (e.target.className === "yes-confirm") {
      deleteLocalMap(beatMap.id);
      editor.setBeatMap([]);
      computer.setTimeMap([]);
      // eslint-disable-next-line no-param-reassign
      beatMap.beatMap = "[]";
      updateGraphics();
      confirmReset.style.display = "none";
      reset.style.display = "list-item";
      return;
    }
    if (e.target.className === "no-confirm") {
      confirmReset.style.display = "none";
      reset.style.display = "list-item";
    }
  });

  // publish
  publishMap.addEventListener("click", () => {
    if (loadingPublish) return;
    confirmPublish.style.display = "flex";
    publishMap.style.display = "none";
  });

  confirmPublish.addEventListener("click", (e) => {
    if (e.target.className === "yes-confirm") {
      confirmPublish.style.display = "none";
      publishMap.style.display = "list-item";
      loadingPublish = true;
      publishMap.textContent = "....";
      mapManager
        .publishMap(beatMap.id)
        .then((res) => {
          // eslint-disable-next-line no-param-reassign
          beatMap.status = res;
        })
        .finally(() => {
          loadingPublish = false;
          publishMap.textContent =
            beatMap.status === "draft" ? "publish" : "unpublish";
          mapStatus.textContent =
            beatMap.status === "draft" ? "" : beatMap.status;
          mapStatus.className = `${beatMap.status}-status`;
        });
      return;
    }
    if (e.target.className === "no-confirm") {
      confirmPublish.style.display = "none";
      publishMap.style.display = "list-item";
    }
  });
};
const addMap = (mapData, addMapForm, submitButton) => {
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
      viewSwitch("selected");
      addErrorMessage("", "addmap-error");
    })
    .catch((error) => {
      console.log(error);
      addErrorMessage(error, "addmap-error");
    })
    .finally(() => {
      // eslint-disable-next-line no-param-reassign
      submitButton.disabled = false;
    });
};
// add event listners

document.querySelector("#add").addEventListener("click", (e) => {
  viewSwitch(e.target.id);
});
document.querySelector("#selected").addEventListener("click", (e) => {
  viewSwitch(e.target.id);
});
const addMapForm = document.querySelector("#add-map-form");
addMapForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const submitButton = e.submitter;
  submitButton.disabled = true;

  const mapData = new FormData(addMapForm);
  if (isImage(mapData.get("background").type)) {
    const url = URL.createObjectURL(mapData.get("background"));
    compressImage({ url })
      .then((info) => {
        URL.revokeObjectURL(info.url);
        mapData.set("background", info.file);
        addMap(mapData, addMapForm, submitButton);
      })
      .catch((err) => {
        console.log("problem comrpressing file");
        console.log(err);
      });
    return;
  }
  addMap(mapData, addMapForm, submitButton);
});

document.querySelector("#time_guage").addEventListener("change", (e) => {
  editor.updateSpeed(Number(e.target.value));
  updatePlaySpeed(editor.getPlayBackRate());
});

document.querySelector("#play").addEventListener("click", () => {
  if (editor.getPlay() === false) {
    startEditor();
    return;
  }
  if (editor.getPlay()) {
    stopEditor();
  }
});

document.querySelector("#menu").addEventListener("click", () => {
  openEditorMenu();
  stopEditor();
});
document.querySelector("#exit").addEventListener("click", () => {
  closeEditorMenu();
});

const promptPosition = document.querySelector(".get-prompt");
promptPosition.addEventListener("click", (e) => {
  if (e.target === promptPosition) return;
  const time = editor.getElapsedTime().toFixed(1);

  if (editor.checkOccupation(Number(time))) {
    console.log("space is occupied by a long prompt");
    return;
  }
  if (editor.canPlace(Number(time))) {
    console.log("cant place that prompt here");
    return;
  }

  editor.addPrompt(Number(time), e.target.id, mapManager.getSelectedMap());
  computer.setTimeMap(editor.getBeatMap());

  updateGraphics();
});

document.querySelector("#click-image").addEventListener("click", (e) => {
  editor.switchPrompt("click", 0);
  focusBtn(e.target);
});
document.querySelector("#hold-image").addEventListener("click", (e) => {
  editor.switchPrompt("hold");
  focusBtn(e.target);
});
document.querySelector("#rapid-image").addEventListener("click", (e) => {
  editor.switchPrompt("rapid");
  focusBtn(e.target);
});

document.querySelector("#r-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const rapidForm = new FormData(e.target);
  editor.setDurations("rapid", Number(rapidForm.get("duration")));
});

document.querySelector("#h-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const holdForm = new FormData(e.target);
  editor.setDurations("hold", Number(holdForm.get("duration")));
});

const progressBar = document.querySelector(".progress_section");
progressBar.addEventListener("mousedown", (e) => {
  editor.setMoveThumb(true);
  const timePosition = moveProgressThumb(e);
  editor.progressBarTimeUpdate(timePosition);
  updateMediaTime(editor.getElapsedTime());
  updateGraphics();

  computer.resetMap();
});

progressBar.addEventListener("mouseup", () => {
  editor.setMoveThumb(false);
});

progressBar.addEventListener("mousemove", (e) => {
  if (editor.getMoveThumb()) {
    const timePosition = moveProgressThumb(e);
    editor.progressBarTimeUpdate(timePosition);
    updateMediaTime(editor.getElapsedTime());
    updateGraphics();

    computer.resetMap();
  }
});

document.querySelector("body").addEventListener("keydown", (e) => {
  if (editor.getPlay() || shiftPressed) {
    return;
  }
  if (["ArrowRight", "ArrowLeft"].includes(e.key) === false) {
    return;
  }

  const direction = e.key === "ArrowRight" ? "foward" : "backward";
  editor.timeStep(direction);
  autoThumbMovement(currentAudioTime() / editor.getAudioDuration());
  updateMediaTime(editor.getElapsedTime());
  updateGraphics();

  if (direction === "backward") {
    computer.resetMap();
  }
});
document.querySelector("#name-edit-open").addEventListener("click", () => {
  opneNameEditForm(true);
});
document.querySelector("#name-edit-close").addEventListener("click", () => {
  opneNameEditForm(false);
});
document.querySelector("#name-edit").addEventListener("submit", (e) => {
  e.preventDefault();
  if (changingName) return;

  changingName = true;
  const { name, status, id } = mapManager.getSelectedMap();
  if (status !== "draft") {
    addErrorMessage("Only draft posts can be edited", "editname-error");
    return;
  }
  const formData = new FormData(e.target);
  if (formData.get("map-name") === name) return;
  const submitButton = document.querySelector("#name-edit button");
  submitButton.disabled = true;

  mapManager
    .saveMapName(formData.get("map-name"))
    .then(({ reload, extension }) => {
      changeMapName(id, formData.get("map-name"));
      opneNameEditForm(false);
      addErrorMessage("", "editname-error");
      if (reload) {
        // update selectedMap value
        showSelectedSong(
          mapManager.getSelectedMap(),
          extension,
          mapManager.getAudioUrl(),
          mapManager.getBackgroundUrl()
        );
      }
    })
    .catch((err) => {
      console.log(err);
      addErrorMessage(err, "editname-error");
    })
    .finally(() => {
      changingName = false;
      submitButton.disabled = false;
    });
});
document.querySelector("#background-edit").addEventListener("change", (e) => {
  if (changingBackground) return;
  let file = e.target.files[0];
  // compress file if its an image
  if (isImage(file.type)) {
    const url = URL.createObjectURL(file);
    compressImage({ url })
      .then((info) => {
        URL.revokeObjectURL(info.url);
        file = info.file;
        uploadImage(file);
      })
      .catch((err) => {
        console.log(err);
        console.log("issue compressing file");
      });
    return;
  }
  uploadImage(file);
});
document.querySelector("#audio-edit").addEventListener("change", (e) => {
  if (changingAudio) return;
  const file = e.target.files[0];
  changingAudio = true;
  // check on frontend if changing the size go over the maximum allowed beatMap size
  showLoading("audio-indicator", "block");
  mapManager
    .changeMedia("audio", file)
    .then(({ reload, extension }) => {
      addErrorMessage("", "editaudio-error");
      if (reload) {
        console.log("reloading");
        loadMedia(
          mapManager.getSelectedMap().audio,
          mapManager.getSelectedMap().background,
          extension
        );
      }
    })
    .catch((err) => {
      addErrorMessage(err, "editaudio-error");
      setTimeout(() => {
        addErrorMessage("", "editaudio-error");
      }, 5000);
      console.log(err);
    })
    .finally(() => {
      showLoading("audio-indicator", "none");
      changingAudio = false;
    });
});
document.querySelector("#open-rapid").addEventListener("click", (e) => {
  if (e.target.dataset.expand === "") {
    handleDurationForm("rapid", e.target, true);
    e.target.dataset.expand = "true";
    return;
  }
  if (e.target.dataset.expand !== "") {
    handleDurationForm("rapid", e.target, false);
    e.target.dataset.expand = "";
  }
});
document.querySelector("#open-hold").addEventListener("click", (e) => {
  if (e.target.dataset.expand === "") {
    handleDurationForm("hold", e.target, true);
    e.target.dataset.expand = "true";
    return;
  }
  if (e.target.dataset.expand !== "") {
    handleDurationForm("hold", e.target, false);
    e.target.dataset.expand = "";
  }
});
document.querySelector("body").addEventListener("keydown", (e) => {
  if (e.key !== " ") return; // if the key pressed is not spacebar

  if (getComputedStyle(document.querySelector("#modal")).display === "flex")
    return;
  if (editor.getPlay() === false) {
    startEditor();
    return;
  }
  if (editor.getPlay() === true) {
    stopEditor();
  }
});
document.querySelector("#mute-hit").addEventListener("change", (e) => {
  muteHitSound(e.target.checked);
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
      authenicatedView();
      checkSelectedSong();
      const beatMaps = await mapManager.handleGetUserBeatMaps();
      // get user songs and display them on my map.
      beatMaps.forEach((beatMap) => {
        addMapToList(beatMap);
      });

      console.log(res);
      viewSwitch("selected");
    })
    .catch((err) => {
      console.log(err);
      addErrorMessage(err, "login-error");
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});
document
  .querySelector("#editor-audio")
  .addEventListener("loadedmetadata", (e) => {
    editor.setAudioDuration(e.target.duration);
    updateGraphics();
  });
document.querySelector("body").addEventListener("keydown", (e) => {
  if (e.key !== "Shift" || shiftPressed) {
    return;
  }
  shiftPressed = true;
});
document.querySelector("body").addEventListener("keyup", (e) => {
  if (e.key !== "Shift") {
    return;
  }
  shiftPressed = false;
});
document.querySelector("body").addEventListener("keydown", (e) => {
  if (editor.getPlay()) {
    return;
  }

  if (["ArrowRight", "ArrowLeft"].includes(e.key) === false) {
    return;
  }

  if (shiftPressed) {
    const move = e.key === "ArrowRight" ? 0.1 : -0.1;
    editor.moveAll(move, mapManager.getSelectedMap());
    updateGraphics();
    computer.setTimeMap(editor.getBeatMap());
  }
});
document.querySelector("#music-volume").addEventListener("change", (e) => {
  updateSettings("editorMusic", Number(e.target.value));
  updateDomAudio("music", Number(e.target.value));
});
document.querySelector("#hit-volume").addEventListener("change", (e) => {
  updateSettings("editorHit", Number(e.target.value));
  updateDomAudio("hit", Number(e.target.value));
});

userManager
  .isLogin()
  .then(async () => {
    if (userManager.getUserData().isLogin) {
      authenicatedView();
      checkSelectedSong();
      const beatMaps = await mapManager.handleGetUserBeatMaps();
      // get user songs and display them on my map.
      beatMaps.forEach((beatMap) => {
        addMapToList(beatMap);
      });
      return;
    }
    notAuthenticatedView();
  })
  .catch((e) => {
    console.log(e);
    notAuthenticatedView();
  });

if (isMobile()) {
  const getPrompts = document.querySelector(".get-prompt");
  getPrompts.style.color = "var(--primary-color)";
  getPrompts.style.textAlign = "start";
  getPrompts.style.paddingLeft = "15px";
}
