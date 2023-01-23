import "./style.css";
import surviveBar from "./images/survive_bar.png";
import diskImage from "./images/disk.png";
import hoverSound from "./audio/hover-sound.mp3";
import selectSound from "./audio/select-sound.mp3";
import stray from "./video/stray.mp4";
import { login } from "./api/authentication";

const backgroundImage = document.querySelector(".background_image");
let hoverDebounce = null;

const Disk = document.querySelector(".disk");
const menuOptions = document.querySelector(".menu-options");
Disk.style.backgroundImage = `url(${diskImage})`;
// backgroundImage.style.backgroundImage = `url(${surviveBar})`;
backgroundImage.src = stray;
backgroundImage.play();

const diskTag = document.querySelector("#tag").children[0];
diskTag.textContent = "Empty disk";
const songList = document.querySelector(".song_list");
const selectModal = document.querySelector(".song_wrapper");
const playBtn = document.querySelector(".play");
const editBtn = document.querySelector(".editor");
const executeBtn = document.querySelector("#execute");
const createBtn = document.querySelector("#new_song");
const menuContianer = document.querySelector(".menu_container");
const addForm = document.querySelector(".add-form");
const authBtn = document.querySelector(".auth");
const loginDialog = document.querySelector("#auth-dialog");
const loginForm = document.querySelector("#login");

// add audio
const audioHover = document.createElement("audio");
const audioSelect = document.createElement("audio");

audioSelect.setAttribute(
  "data-artist",
  "Sound Effect by Universfield from Pixabay"
);
audioHover.src = hoverSound;
audioSelect.src = selectSound;
audioSelect.playbackRate = 1;
document.querySelector("body").prepend(audioHover, audioSelect);

const removeSongFocus = () => {
  const items = songList.children;
  Array.from(items).forEach((song) => {
    if (song.classList.contains("selected")) {
      song.classList.remove("selected");
    }
  });
};
const newSong = () => {};
const animateDisk = () => {
  Disk.classList.toggle("disk_slide");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      Disk.classList.toggle("disk_slide");
    });
  });
};
const generateList = (songs) => {
  const songItem = document.createElement("li");
  const numberPoint = document.createElement("span");
  numberPoint.className = "list_number";
  const songName = document.createElement("span");
  songName.className = "song-name";
};

const selectSong = (song) => {
  removeSongFocus();
  diskTag.textContent = song.dataset.song;
  // selectedSong = song.dataset.song;
  song.classList.toggle("selected");
  animateDisk();
};

songList.addEventListener("click", (e) => {
  if (e.target.nodeName !== "LI" && e.target.parentNode.nodeName === "LI") {
    selectSong(e.target.parentNode);
    return;
  }
  if (e.target === songList) return;

  selectSong(e.target);
});
selectModal.addEventListener("click", (e) => {
  if (e.target === selectModal) {
    selectModal.style.display = "none";
  }
});
playBtn.addEventListener("click", () => {
  selectModal.style.display = "flex";
  executeBtn.children[0].textContent = "Play";
  executeBtn.style.width = "100%";
  executeBtn.children[0].href = "/player.html";
  createBtn.style.display = "none";
});
editBtn.addEventListener("click", () => {
  selectModal.style.display = "flex";
  executeBtn.children[0].textContent = "Edit";
  executeBtn.style.width = "50%";
  executeBtn.children[0].href = "/editor.html";
  createBtn.style.display = "block";
});
authBtn.addEventListener("click", () => {
  loginDialog.style.display = "flex";
});

createBtn.addEventListener("click", () => {
  if (createBtn.textContent === "Add") {
    createBtn.textContent = "Back";
    addForm.style.display = "flex";
    menuContianer.style.display = "none";
    return;
  }
  if (createBtn.textContent === "Back") {
    createBtn.textContent = "Add";
    addForm.style.display = "none";
    menuContianer.style.display = "block";
  }
});

loginDialog.addEventListener("click", (e) => {
  if (e.target === loginDialog) {
    loginDialog.style.display = "none";
  }
});
const optionElements = menuOptions.children;

Object.keys(optionElements).forEach((option) => {
  optionElements[option].addEventListener("mouseover", () => {
    hoverDebounce = setTimeout(() => {
      audioHover.currentTime = 0;
      audioHover.play();
    }, 50);
  });
  optionElements[option].addEventListener("mouseout", () => {
    audioHover.pause();
    clearTimeout(hoverDebounce);
  });

  optionElements[option].addEventListener("click", () => {
    audioSelect.currentTime = 0;
    audioSelect.play();
  });
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const loginData = new FormData(loginForm);

  login({ email: loginData.get("email"), password: loginData.get("password") });
});
