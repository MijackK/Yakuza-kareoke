import diskImage from "../images/disk.png";
import hoverSound from "../audio/buttonpress-94482.mp3";
import selectSound from "../audio/interface-124464.mp3";
import stray from "../video/particles-27669.mp4";
import homeSong from "../audio/reflected-light-147979.mp3";

export function initialize(verified) {
  console.log(verified);
  // add the  audio elements
  const audioHover = document.createElement("audio");
  audioHover.id = "hover-sound";
  const audioSelect = document.createElement("audio");
  audioSelect.id = "select-sound";

  audioSelect.setAttribute(
    "data-artist",
    "Sound Effect by Universfield from Pixabay"
  );
  audioHover.src = hoverSound;
  audioSelect.src = selectSound;
  audioSelect.playbackRate = 1;
  document.querySelector("body").prepend(audioHover, audioSelect);

  // add background image & audio
  const backgroundImage = document.querySelector(".background_image");
  const homeAudio = document.querySelector("#home-audio");
  homeAudio.src = homeSong;
  homeAudio.volume = 0.2;
  // homeAudio.play();
  backgroundImage.src = stray;
  backgroundImage.play();

  // add disk image
  const Disk = document.querySelector(".disk");
  Disk.style.backgroundImage = `url(${diskImage})`;
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
export function populateAccountForm(userName, email, verified) {
  const userNameValue = document.querySelector("#username-value");
  userNameValue.textContent = userName;
  const emailValue = document.querySelector("#email-value");
  emailValue.textContent = email;
  if (verified === false) {
    const verifyBtn = document.querySelector("#verify-button");
    verifyBtn.style.display = "inline-block";
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
