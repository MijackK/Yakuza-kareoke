import rapidText from "../images/rapid.png";
import holdText from "../images/hold.png";
import clickText from "../images/click.png";
import hitSound from "../audio/metronome-85688.mp3";

export function showEdit(show) {
  const editBtn = document.querySelector("#exit");

  if (show) {
    editBtn.style.display = "inline-block";
    return;
  }
  editBtn.style.display = "none";
}

export function focusBtn(element) {
  const clickBtn = document.querySelector("#click-image");
  const holdBtn = document.querySelector("#hold-image");
  const rapidBtn = document.querySelector("#rapid-image");
  if ([clickBtn, holdBtn, rapidBtn].includes(element)) {
    clickBtn.classList.remove("active-prompt");
    rapidBtn.classList.remove("active-prompt");
    holdBtn.classList.remove("active-prompt");
    element.classList.toggle("active-prompt");
  }
}
export function closeEditorMenu() {
  const Menu = document.querySelector("#modal");
  const selectedAudio = document.querySelector("#map-audio");
  Menu.style.display = "none";
  selectedAudio.pause();
}
export function openEditorMenu() {
  const Menu = document.querySelector("#modal");
  Menu.style.display = "flex";
}

export function loadingMap() {
  const notSelectedSceen = document.querySelector(".not-selected");
  const selectedSummary = document.querySelector("#selected-summary");
  const selectedStatus = document.querySelector("#selected-status");
  selectedSummary.style.display = "none";
  notSelectedSceen.style.display = "flex";

  selectedStatus.textContent = "Loading...";
}
const stopLoadingMap = () => {
  const notSelectedSceen = document.querySelector(".not-selected");
  const selectedSummary = document.querySelector("#selected-summary");
  notSelectedSceen.style.display = "none";
  selectedSummary.style.display = "flex";
};
export function updateMediaTime(elapsedTime) {
  const Audio = document.querySelector("#editor-audio");
  const backgroundVideo = document.querySelector("#background-video");
  Audio.currentTime = elapsedTime;
  backgroundVideo.currentTime = elapsedTime;
}
export function updateDomTime(elapsedTime) {
  const Audio = document.querySelector("#editor-audio");
  document.querySelector("#ptime").textContent = ` ${elapsedTime.toFixed(
    3
  )} / ${Audio.duration}`;

  const Score = document.querySelector("#score");

  Score.textContent = `${elapsedTime.toFixed(1)} `;
}

export function editorPlay(time) {
  const Audio = document.querySelector("#editor-audio");
  const backgroundVideo = document.querySelector("#background-video");
  const playBtn = document.querySelector("#play");

  Audio.currentTime = time;
  backgroundVideo.currentTime = time;

  Audio.play();
  backgroundVideo.play();

  playBtn.innerHTML = "<span><span>&#10074</span><span>&#10074</span></span>";
}
export function editorPause() {
  const Audio = document.querySelector("#editor-audio");
  const backgroundVideo = document.querySelector("#background-video");
  const playBtn = document.querySelector("#play");

  Audio.pause();
  backgroundVideo.pause();

  playBtn.textContent = "▶";
}

const highLightSelected = (id) => {
  const beatMaps = document.querySelectorAll(".beat-map");
  beatMaps.forEach((listItem) => {
    if (listItem.id === `map-${id}`) {
      listItem.classList.add("active");
      return;
    }
    listItem.classList.remove("active");
  });
};
export function viewSwitch(buttonID) {
  const buttonGroup = document.querySelector(".button-group");
  const addMapForm = document.querySelector("#add-map-form");
  const summaryWrapper = document.querySelector("#summary-wrapper");
  const buttonGroupMember = buttonGroup.children;

  Object.keys(buttonGroupMember).forEach((child) => {
    const element = buttonGroupMember[child];

    if (element.id === buttonID) {
      element.classList.add("active");

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
}

export function updatePlaySpeed(playBackRate) {
  const Audio = document.querySelector("#editor-audio");
  const backgroundVideo = document.querySelector("#background-video");
  Audio.playbackRate = playBackRate;
  backgroundVideo.playbackRate = playBackRate;
}

export function showSelectedSong(
  beatMap,
  previewExtension,
  audioURL,
  backgroundURL
) {
  const Audio = document.querySelector("#editor-audio");
  const backgroundVideo = document.querySelector("#background-video");
  const backgroundImage = document.querySelector("#background-image");
  const selectedAudio = document.querySelector("#map-audio");
  const selectName = document.querySelector("#select-name ");
  const nameEdit = document.querySelector("#name-edit>input[type='text']");
  const selectVideo = document.querySelector("#map-video");
  const selectImage = document.querySelector("#map-image");
  // remove no selected message
  stopLoadingMap();
  highLightSelected(beatMap.id);
  // add audio src
  Audio.src = audioURL;

  selectVideo.style.display = "none";
  selectImage.style.display = "none";
  backgroundVideo.style.display = "none";
  backgroundImage.style.display = "none";
  selectName.textContent = beatMap.name;
  nameEdit.value = beatMap.name;

  selectedAudio.src = audioURL;
  const extension = previewExtension;
  // show either video or image based on background extension

  if (["mp4", "webm"].includes(extension)) {
    backgroundVideo.src = backgroundURL;
    backgroundVideo.style.display = "block";

    // for the summary
    selectVideo.src = backgroundURL;
    selectVideo.style.display = "block";
    selectVideo.play();
  } else {
    backgroundImage.style.backgroundImage = `url(${backgroundURL})`;
    selectImage.src = backgroundURL;
    selectImage.style.display = "block";
    backgroundImage.style.display = "block";
  }

  const rateSelector = document.querySelector("#time_guage");
  rateSelector.value = 1;
  return Audio;
}

export function displaySelectedStatus(text) {
  const notSelected = document.querySelector(".not-selected");
  notSelected.style.display = "block";
  const selectSummary = document.querySelector("#selected-summary");
  selectSummary.style.display = "none";

  const selectedStatus = document.querySelector("#selected-status");
  selectedStatus.textContent = text;
  showEdit(false);
}

export function changeMapName(id, value) {
  const mapName = document.querySelector(`#map-${id} .map-name`);
  mapName.textContent = value;
}
export function areYouSure(id) {
  const listItem = document.createElement("li");
  listItem.id = id;
  listItem.classList.add("are-you-sure");
  const yes = document.createElement("button");
  yes.classList.add("yes-confirm");
  yes.textContent = "Yes";
  listItem.append(yes);
  const no = document.createElement("button");
  no.classList.add("no-confirm");
  no.textContent = "No";
  listItem.append(no);
  return listItem;
}

export function listBeatMap(beatMap, extension, source) {
  const mapList = document.querySelector("#map-list");
  const listItem = document.createElement("li");
  listItem.id = `map-${beatMap.id}`;
  listItem.classList.add("beat-map");
  const optionButton = document.createElement("span");
  optionButton.innerHTML = "&#x22EF";
  optionButton.classList.add("map-option");
  const optionsList = document.createElement("ul");
  optionsList.classList.add("option-list");

  listItem.append(optionsList);

  // create the options
  const play = document.createElement("a");
  play.textContent = "Play";
  play.href = `player.html?song=${beatMap.id}`;
  play.target = "_blank” attribute";
  optionsList.append(play);

  const saveMap = document.createElement("li");
  saveMap.textContent = "Save";
  if (beatMap.status === "draft") {
    optionsList.append(saveMap);
  }

  const publishMap = document.createElement("li");
  publishMap.textContent = beatMap.status !== "draft" ? "unpublish" : "publish";
  optionsList.append(publishMap);
  const confirmPublish = areYouSure("confirm-publish");
  optionsList.append(confirmPublish);

  const deleteMap = document.createElement("li");
  deleteMap.textContent = "Delete";
  optionsList.append(deleteMap);
  const confirmDelete = areYouSure("confirm-delete");
  optionsList.append(confirmDelete);

  const clearLocal = document.createElement("li");
  clearLocal.textContent = " Clear local";
  optionsList.append(clearLocal);
  const confirmClearLocal = areYouSure("confirm-clear-local");
  optionsList.append(confirmClearLocal);

  const reset = document.createElement("li");
  reset.textContent = "Reset";
  optionsList.append(reset);
  const confirmReset = areYouSure("confirm-clear-local");
  optionsList.append(confirmReset);

  let mapBackground;

  if (["mp4", "webm"].includes(extension)) {
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
  mapBackground.src = source;
  listItem.appendChild(mapBackground);
  const mapInfo = document.createElement("div");
  mapInfo.classList.add("beat-map-text");
  listItem.appendChild(mapInfo);
  const nameContainer = document.createElement("div");
  const mapName = document.createElement("span");
  mapName.classList.add("map-name");
  mapName.textContent = beatMap.name;
  const mapStatus = document.createElement("span");
  mapStatus.className = `${beatMap.status}-status`;
  if (beatMap.status !== "draft") {
    mapStatus.textContent = beatMap.status;
  }
  nameContainer.append(mapName, mapStatus);

  const mapUpdateDate = document.createElement("span");
  mapUpdateDate.style.marginTop = "10px";
  mapUpdateDate.textContent = `last updated: ${beatMap.dateUpdated}`;
  mapInfo.append(nameContainer, mapUpdateDate);

  listItem.append(optionButton);
  mapList.prepend(listItem);
  return {
    listItem,
    optionsList,
    optionButton,
    deleteMap,
    saveMap,
    publishMap,
    clearLocal,
    mapName,
    mapStatus,
    reset,
    confirmDelete,
    confirmPublish,
    confirmReset,
    confirmClearLocal,
  };
}

export function showHideOption(optionList) {
  const element = optionList;
  const { display } = getComputedStyle(element);
  element.style.display = display === "none" ? "block" : "none";
}

export function authenicatedView() {
  const loginForm = document.querySelector("#login");
  const addMapArea = document.querySelector("#add-map");
  const userMaps = document.querySelector("#map-list");
  userMaps.style.display = "block";
  addMapArea.style.display = "grid";
  loginForm.style.display = "none";
}
export function notAuthenticatedView() {
  const loginForm = document.querySelector("#login");
  const addMapArea = document.querySelector("#add-map");
  const userMaps = document.querySelector("#map-list");
  loginForm.style.display = "flex";
  addMapArea.style.display = "none";
  userMaps.style.display = "none";
}
export function currentAudioTime() {
  const Audio = document.querySelector("#editor-audio");
  return Audio.currentTime;
}

export function addPromptSrc() {
  const rapidButton = document.querySelector("#rapid-image");
  rapidButton.src = rapidText;
  const holdButton = document.querySelector("#hold-image");
  holdButton.src = holdText;
  const clickButton = document.querySelector("#click-image");
  clickButton.src = clickText;
  // add hit audio
  const click = document.querySelector("#hit-audio");
  click.src = hitSound;
  const isMuted = document.querySelector("#mute-hit").checked;
  click.muted = isMuted;
  // reset playback speed
  const rateSelector = document.querySelector("#time_guage");
  rateSelector.value = 1;
}

export function addErrorMessage(message, id) {
  const error = document.querySelector(`#${id}`);
  error.textContent = message;
}
export function opneNameEditForm(open) {
  const nameEditOpen = document.querySelector("#name-edit-open");
  const nameEditForm = document.querySelector("#name-edit");
  nameEditForm.style.display = open ? "flex" : "none";
  nameEditOpen.style.display = open ? "none" : "inline";
}

export function showLoading(id, display) {
  const loadingIndicator = document.querySelector(`#${id}`);
  loadingIndicator.style.display = display;
}

export function handleDurationForm(id, button, expand) {
  const section = document.querySelector(`#${id}`);
  const form = section.querySelector("form");
  form.style.display = expand ? "flex" : "none";
  // eslint-disable-next-line no-param-reassign
  button.innerHTML = expand ? "&#8595" : "&#8593";
}
export function playClick() {
  const click = document.querySelector("#hit-audio");
  click.currentTime = 0;
  click.play();
}

export function muteHitSound(mute) {
  const hit = document.querySelector("#hit-audio");
  hit.muted = mute;
}
