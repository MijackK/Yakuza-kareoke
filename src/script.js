import "./style.css";
import surviveBar from "./images/survive_bar.png";
import diskImage from "./images/disk.png";
import header from "./images/header.png";
import leftOne from "./images/left_one.png";
import footer from "./images/footer.png";

const backgroundImage = document.querySelector(".background_image");
const headerImage = document.querySelector(".header");
const leftImage = document.querySelector(".logo");
const lastSection = document.querySelector(".last_section");
const Disk = document.querySelector(".disk");
Disk.style.backgroundImage = `url(${diskImage})`;
backgroundImage.style.backgroundImage = `url(${surviveBar})`;
headerImage.style.backgroundImage = `url(${header})`;
leftImage.style.backgroundImage = `url(${leftOne})`;
lastSection.style.backgroundImage = `url(${footer})`;
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

let selectedSong;
let direction;
const initializeStorage = () => {
  const songs = "songs";
  const songArr = localStorage.getItem(songs);
  if (songArr === null) {
    console.log("no songs");
  }
};
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
  Disk.offsetTop;
  Disk.classList.toggle("disk_slide");
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
  selectedSong = song.dataset.song;
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
  executeBtn.children[0].href = "/player.html";
});
editBtn.addEventListener("click", () => {
  selectModal.style.display = "flex";
  executeBtn.children[0].textContent = "Edit";
  executeBtn.children[0].href = "/editor.html";
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
initializeStorage();
