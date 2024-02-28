import diskImage from "../images/disk.png";
import hoverSound from "../audio/menu-selection-102220.mp3";
import selectSound from "../audio/click-menu-app-147357.mp3";
import stray from "../video/Particles-27669.mp4";
import startSound from "../audio/interface-124464.mp3";
import isMobile from "../utility.js/isMobile";

export function initialize() {
  // add the  audio elements
  const audioHover = document.createElement("audio");
  audioHover.id = "hover-sound";
  audioHover.muted = true;
  const audioSelect = document.createElement("audio");
  audioSelect.id = "select-sound";

  audioSelect.setAttribute(
    "data-artist",
    "Sound Effect by Universfield from Pixabay"
  );
  audioHover.src = hoverSound;

  audioSelect.src = selectSound;
  const startAudio = document.querySelector("#start-audio");
  startAudio.src = startSound;
  document.querySelector("body").prepend(audioHover, audioSelect);

  // add background image & audio
  const backgroundImage = document.querySelector(".background_image");
  backgroundImage.src = stray;

  // add disk image
  const Disk = document.querySelector(".disk");
  Disk.style.backgroundImage = `url(${diskImage})`;
}
export function playBackground() {
  const backgroundImage = document.querySelector(".background_image");
  const audioHover = document.querySelector("#hover-sound");
  const entryScreen = document.querySelector("#entry-screen");
  const startAudio = document.querySelector("#start-audio");
  if (!isMobile()) {
    audioHover.muted = false;
  }
  backgroundImage.play();
  startAudio.play();
  entryScreen.style.display = "none";
}

export function removeSongFocus() {
  const items = document.querySelector("#song_list").children;
  Array.from(items).forEach((song) => {
    if (song.classList.contains("selected")) {
      song.classList.remove("selected");
    }
  });
}

export function animateDisk() {
  const Disk = document.querySelector(".disk");

  Disk.classList.toggle("disk_slide");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      Disk.classList.toggle("disk_slide");
    });
  });
}
export function showLoading(id, display) {
  const loadingIndicator = document.querySelector(`#${id}`);
  loadingIndicator.style.display = display;
}
export function clearList(listID) {
  const list = document.querySelector(`#${listID}`);
  while (list.firstChild) {
    list.firstChild.remove();
  }
}
export function generateSong(song) {
  const songList = document.querySelector("#song_list");

  const songItem = document.createElement("li");
  songItem.title = song.name;
  const numberPoint = document.createElement("span");
  numberPoint.className = "list_number";
  numberPoint.textContent = songList.children.length;
  songItem.append(numberPoint);
  const songName = document.createElement("span");
  songName.className = "song-name";
  songName.textContent = song.name;
  songItem.append(songName);
  songList.append(songItem);
  return songItem;
}

export function selectSong(song, listItem) {
  const diskTag = document.querySelector("#tag").children[0];
  removeSongFocus();
  diskTag.textContent = song.name;
  listItem.classList.toggle("selected");
  animateDisk();
  const startSongBtn = document.querySelector("#start-song");
  startSongBtn.parentNode.href = `player.html?song=${song.id}`;
}
export function authenticatedView() {
  const authBtn = document.querySelector(".auth");
  const accountBtn = document.querySelector(".account");
  const logout = document.querySelector("#logout-btn");
  const loginDialog = document.querySelector("#auth-dialog");
  authBtn.style.display = "none";
  accountBtn.style.display = "block";
  loginDialog.style.display = "none";
  logout.style.display = "block";
}
export function notAuthenticatedView() {
  const authBtn = document.querySelector(".auth");
  const accountBtn = document.querySelector(".account");
  const logout = document.querySelector("#logout-btn");
  const accountPage = document.querySelector("#account-dialog");
  accountBtn.style.display = "none";
  authBtn.style.display = "block";
  accountPage.style.display = "none";
  logout.style.display = "none";
}
// switches between login and signup form
export function authSwitch(button) {
  const buttonGroupMember = document.querySelector(".button-group").children;
  const registerForm = document.querySelector("#register");
  const loginForm = document.querySelector("#login");

  Object.keys(buttonGroupMember).forEach((child) => {
    const element = buttonGroupMember[child];

    if (element === button) {
      button.classList.add("active");
      const selectedForm = element.getAttribute("data-form");

      const checkRegsiter = selectedForm === "register";
      const checkLogin = selectedForm === "login";
      // register form style change
      registerForm.style.display = checkRegsiter ? "flex" : "none";

      // login form style change
      loginForm.style.display = checkLogin ? "flex" : "none";

      return;
    }
    element.classList.remove("active");
  });
}
export function handleLoginDialog(open) {
  const loginDialog = document.querySelector("#auth-dialog");
  loginDialog.style.display = open ? "flex" : "none";
}
export function handleAccountPage(open) {
  const accountPage = document.querySelector("#account-dialog");
  accountPage.style.display = open ? "flex" : "none";
}
export function handleSongModal(open) {
  const songModal = document.querySelector("#song_wrapper");
  songModal.style.display = open ? "flex" : "none";
  const startSongBtn = document.querySelector("#start-song");
  // eslint-disable-next-line no-script-url
  startSongBtn.parentNode.href = "javascript:void(0)";
}
export function populateAccountForm(userName, email, verified, used) {
  const userNameValue = document.querySelector("#username-value");
  userNameValue.textContent = userName;
  const emailValue = document.querySelector("#email-value");
  emailValue.textContent = email;
  if (verified === false && used === true) {
    const verifyBtn = document.querySelector("#verify-button");
    verifyBtn.style.display = "inline-block";
  }
  if (used === false) {
    const pendingMessage = document.querySelector("#pending-verify");
    pendingMessage.style.display = "inline-block";
  }
}

export function accountEdit(formID, view, edit) {
  const form = document.querySelector(`#${formID}`);
  const valueView = form.querySelector(".value-view");
  valueView.style.display = view;
  const editView = form.querySelector(".edit-view");
  editView.style.display = edit;
}

export function playHoverSound() {
  const audioHover = document.querySelector("#hover-sound");
  audioHover.currentTime = 0;
  audioHover.play();
}
export function pauseHoverSound() {
  const audioHover = document.querySelector("#hover-sound");
  audioHover.pause();
}
export function playClickSound() {
  const audioSelect = document.querySelector("#select-sound");
  audioSelect.currentTime = 0;
  audioSelect.play();
}

export function showPassword(show, id) {
  const password = document.querySelector(`#${id}`);
  password.type = show ? "text" : "password";
}

export function addErrorMessage(message, id) {
  const error = document.querySelector(`#${id}`);
  error.textContent = message;
}
export function domSettings(settings) {
  const music = document.querySelector("#music-volume");
  const hit = document.querySelector("#hit-sound");
  const offset = document.querySelector("#time-offset");
  const brightness = document.querySelector("#background-opacity");
  music.value = settings.music * 10;
  hit.value = settings.songItem * 10;
  offset.value = settings.offset;
  brightness.value = settings.opacity * 10;
}
