import "../kareoke_player/player.css";
import "./editor.css";
import "../general.css";
// import gamePlayerLogic from "../player-parts/map-visualizer";
import { validPrompts, init } from "../canvas/canvas";
import { initMap, drawMap } from "../canvas/time-map";
import { deleteLocalMap } from "../utility.js/storage";

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
} from "../dom-manipulation/editor-dom";
import beatMapManager from "../managers/map_manager";
import userFactory from "../managers/user-manager";

const editor = editorFactory();
const mapManager = beatMapManager();
const userManager = userFactory();
let changingBackground = false;
let changingAudio = false;
let changingName = false;
init();
initMap("#time-map");
addPromptSrc();
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
      showEdit(true);
    });
};
const setSelectedMap = (beatMap, extension) => {
  mapManager.setSelectedMap(beatMap);
  editor.setBeatMap(mapManager.getSelectedMap().beatMap);
  loadMedia(beatMap.audio, beatMap.background, extension);
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
    editor.setPreviousTime(0);
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
          alert(res);
        })
        .finally(() => {
          saveMap.textContent = "Save";
          loadingSave = false;
        });
    });
  }

  deleteMap.addEventListener("click", () => {
    if (loadingDelete) return;
    // eslint-disable-next-line no-restricted-globals
    const acceptDelete = confirm("All map data will be deleted");
    if (!acceptDelete) return;
    loadingDelete = true;
    deleteMap.textContent = "Deleting...";
    mapManager
      .deleteBeatMap(beatMap.id)
      .then((res) => {
        listItem.remove();
        if (mapManager.getSelectedMap() === null) {
          displaySelectedStatus("No map selected");
        }
        alert(res);
      })
      .finally(() => {
        loadingDelete = false;
        deleteMap.textContent = "delete";
      });
  });
  clearLocal.addEventListener("click", () => {
    // eslint-disable-next-line no-restricted-globals
    const acceptDelete = confirm(
      "Local data will be deleted (will revert to remote data)"
    );
    if (!acceptDelete) return;

    deleteLocalMap(beatMap.id);
    editor.setBeatMap(JSON.parse(beatMap.beatMap));
    alert("local data deleted");
  });
  publishMap.addEventListener("click", () => {
    if (loadingPublish) return;
    const message = {
      draft:
        "Map will be put up for review and you wont be able to edit it during this period",
      pending: "Map will be removed from publish queue",
      published: "Map will no longer be publicly available",
    };

    // eslint-disable-next-line no-restricted-globals
    const accept = confirm(message[beatMap.status]);
    if (accept) {
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
    }
  });
};

const stopEditor = () => {
  // clearInterval(intervalID);
  cancelAnimationFrame(animationID);
  editor.setPlay(false);
  editorPause();
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
const timeController = () => {
  const elapsedTime = editor.getElapsedTime();

  const audioDuration = editor.getAudioDuration();

  const previousTime = editor.getPreviousTime();
  const playRate = editor.getPlayRate();

  if (elapsedTime >= audioDuration) {
    stopEditor();
    return;
  }
  const currentTime = Number((Date.now() - editor.getStartTime()) / 1000);

  editor.setPreviousTime(currentTime);
  editor.setElapsedTime(previousTime * playRate);
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
  editor.setStartTime(Date.now() - editor.getPreviousTime() * 1000);
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
      submitButton.disabled = false;
    });
});

document.querySelector("#time_guage").addEventListener("change", (e) => {
  editor.updateSpeed(Number(e.target.value));
  updatePlaySpeed(editor.getPlayBackRate());
});

document.querySelector("#play").addEventListener("click", () => {
  console.log(editor.getPlay());
  if (editor.getPlay() === false) {
    console.log("hi");
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

  updateGraphics();
});

document.querySelector("#click-image").addEventListener("click", (e) => {
  editor.switchPrompt("click", 0);
  focusBtn(e.target);
});
document.querySelector("#hold-image").addEventListener("click", (e) => {
  editor.switchPrompt("hold", editor.getHoldDuration());
  focusBtn(e.target);
});
document.querySelector("#rapid-image").addEventListener("click", (e) => {
  editor.switchPrompt("rapid", editor.getRapidDuration());
  focusBtn(e.target);
});

document.querySelector("#r-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const rapidForm = new FormData(e.target);
  editor.setRapidDuration(Number(rapidForm.get("duration")));
  const promptType = editor.getPromptType();
  if (promptType === "rapid") {
    editor.setPromptDuration(editor.getRapidDuration());
  }
});

document.querySelector("#h-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const holdForm = new FormData(e.target);
  editor.setHoldDuration(Number(holdForm.get("duration")));
  if (editor.getPromptType === "hold") {
    editor.setPromptDuration(editor.getHoldDuration());
  }
});

const progressBar = document.querySelector(".progress_section");
progressBar.addEventListener("mousedown", (e) => {
  editor.setMoveThumb(true);
  const timePosition = moveProgressThumb(e);
  editor.progressBarTimeUpdate(timePosition);
  updateGraphics();
  updateMediaTime(editor.getElapsedTime());
});

progressBar.addEventListener("mouseup", () => {
  editor.setMoveThumb(false);
});

progressBar.addEventListener("mousemove", (e) => {
  if (editor.getMoveThumb()) {
    const timePosition = moveProgressThumb(e);
    editor.progressBarTimeUpdate(timePosition);
    updateGraphics();
    updateMediaTime(editor.getElapsedTime());
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
  autoThumbMovement(currentAudioTime() / editor.getAudioDuration());
  updateGraphics();
  updateMediaTime(editor.getElapsedTime());
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
  console.log(submitButton);

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
  const file = e.target.files[0];
  changingBackground = true;
  // check on frontend if changing the size go over the maximum allowed beatMap size
  showLoading("background-indicator", "block");
  mapManager
    .changeMedia("background", file)
    .then(({ reload, extension }) => {
      addErrorMessage("", "editbackground-error");
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
      addErrorMessage(err, "editbackground-error");
      console.log(err);
    })
    .finally(() => {
      showLoading("background-indicator", "none");
      changingBackground = false;
    });
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
      console.log(err);
    })
    .finally(() => {
      showLoading("audio-indicator", "none");
      changingAudio = false;
    });
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
