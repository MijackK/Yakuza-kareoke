export function focusBtn(button) {
  const clickBtn = document.querySelector("#click");
  const holdBtn = document.querySelector("#hold");
  const rapidBtn = document.querySelector("#rapid");
  if ([clickBtn, holdBtn, rapidBtn].includes(button)) {
    clickBtn.classList.remove("active-prompt");
    rapidBtn.classList.remove("active-prompt");
    holdBtn.classList.remove("active-prompt");
    button.classList.toggle("active-prompt");
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
  document.querySelector("#ptime").textContent = ` ${Audio.currentTime.toFixed(
    3
  )} / ${Audio.duration}`;

  const Score = document.querySelector("#score");
  Score.textContent = elapsedTime.toFixed(1);
}

export function editorPlay(time) {
  const Audio = document.querySelector("#editor-audio");
  const backgroundVideo = document.querySelector("#background-video");
  const playBtn = document.querySelector("#play");

  Audio.currentTime = time;
  backgroundVideo.currentTime = time;
  Audio.play();
  backgroundVideo.play();

  playBtn.textContent = "⏸";
  playBtn.id = "pause";
}
export function editorPause() {
  const Audio = document.querySelector("#editor-audio");
  const backgroundVideo = document.querySelector("#background-video");
  const playBtn = document.querySelector("#pause");

  Audio.pause();
  backgroundVideo.pause();

  playBtn.textContent = "▶";
  playBtn.id = "play";
}

const highLightSelected = (id) => {
  const beatMaps = document.querySelectorAll(".beat-map");
  beatMaps.forEach((listItem) => {
    if (Number(listItem.id) === Number(id)) {
      listItem.classList.add("active");
      return;
    }
    listItem.classList.remove("active");
  });
};
export function viewSwitch(button) {
  const buttonGroup = document.querySelector(".button-group");
  const addMapForm = document.querySelector("#add-map-form");
  const summaryWrapper = document.querySelector("#summary-wrapper");
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

  selectedAudio.src = audioURL;
  const extension = previewExtension;
  // show either video or image based on background extension
  if (extension === "mp4") {
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
}
export function displaySelectedStatus(text) {
  const selectedStatus = document.querySelector("#selected-status");
  selectedStatus.textContent = text;
}

export function listBeatMap(beatMap, extension, source) {
  const mapList = document.querySelector("#map-list");
  const listItem = document.createElement("li");
  listItem.id = beatMap.id;
  listItem.classList.add("beat-map");
  const mapOptions = document.createElement("span");
  mapOptions.innerHTML = "&#x22EF";
  mapOptions.classList.add("map-option");
  const backgroundType = extension;
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
  mapBackground.src = source;
  listItem.appendChild(mapBackground);
  const mapInfo = document.createElement("div");
  mapInfo.classList.add("beat-map-text");
  listItem.appendChild(mapInfo);
  const mapName = document.createElement("span");
  mapName.textContent = beatMap.name;
  const mapUpdateDate = document.createElement("span");
  mapUpdateDate.textContent = `last updated: 1/1/2001`;
  mapInfo.append(mapName, mapUpdateDate);
  listItem.append(mapOptions);
  mapList.prepend(listItem);
  return listItem;
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
