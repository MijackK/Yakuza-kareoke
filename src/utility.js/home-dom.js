import diskImage from "../images/disk.png";
import hoverSound from "../audio/hover-sound.mp3";
import selectSound from "../audio/select-sound.mp3";
import stray from "../video/stray.mp4";

const backgroundImage = document.querySelector(".background_image");
let hoverDebounce = null;
let userManager;
let mapManager;

const Disk = document.querySelector(".disk");
const menuOptions = document.querySelector(".menu-options");
Disk.style.backgroundImage = `url(${diskImage})`;
// backgroundImage.style.backgroundImage = `url(${surviveBar})`;
backgroundImage.src = stray;
backgroundImage.play();

const diskTag = document.querySelector("#tag").children[0];
const songList = document.querySelector(".song_list");
const songModal = document.querySelector(".song_wrapper");
const playBtn = document.querySelector(".play");
const startSongBtn = document.querySelector("#start-song");
const authBtn = document.querySelector(".auth");
const accountBtn = document.querySelector(".account");
const loginDialog = document.querySelector("#auth-dialog");
const loginForm = document.querySelector("#login");
const registerForm = document.querySelector("#register");
const accountForm = document.querySelector("#account");
const authButtonGroup = document.querySelector(".button-group");
const accountPage = document.querySelector("#account-dialog");
const accountPageClose = document.querySelector("#close-account");
const logoutBtn = document.querySelector("#logout-btn");

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

const animateDisk = () => {
  Disk.classList.toggle("disk_slide");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      Disk.classList.toggle("disk_slide");
    });
  });
};
const generateList = (songs) => {
  for (let i = 0; i < songs.length; i += 1) {
    const songItem = document.createElement("li");
    songItem.title = songs[i].name;
    songItem.dataset.song = songs[i].name;
    const numberPoint = document.createElement("span");
    numberPoint.className = "list_number";
    numberPoint.textContent = i;
    songItem.append(numberPoint);
    const songName = document.createElement("span");
    songName.className = "song-name";
    songName.textContent = songs[i].name;

    songItem.append(songName);
    songItem.addEventListener("click", () => {
      startSongBtn.parentNode.href = `player.html?song=${songs[i].id}`;
    });
    songList.append(songItem);
  }
};

const selectSong = (song) => {
  removeSongFocus();
  diskTag.textContent = song.dataset.song;
  // selectedSong = song.dataset.song;
  song.classList.toggle("selected");
  animateDisk();
};
const authenticatedView = () => {
  authBtn.style.display = "none";
  accountBtn.style.display = "block";
  loginDialog.style.display = "none";
};
const notAuthenticatedView = () => {
  accountBtn.style.display = "none";
  authBtn.style.display = "block";
  accountPage.style.display = "none";
};
// switches between login and signup form
const authSwitch = (button) => {
  const buttonGroupMember = authButtonGroup.children;

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
};
export default function initialize(user, map) {
  userManager = user;
  mapManager = map;

  mapManager.handleGetBeatMaps().then((songs) => {
    generateList(songs);
  });

  if (user.getUserData()?.isLogin) {
    authenticatedView();
  }
  songList.addEventListener("click", (e) => {
    if (e.target.nodeName !== "LI" && e.target.parentNode.nodeName === "LI") {
      selectSong(e.target.parentNode);
      return;
    }
    if (e.target === songList) return;

    selectSong(e.target);
  });
  // auto populate account

  // modals
  songModal.addEventListener("click", (e) => {
    if (e.target === songModal) {
      songModal.style.display = "none";
      // eslint-disable-next-line no-script-url
      startSongBtn.parentNode.href = "javascript:void(0)";
      removeSongFocus();
    }
  });
  loginDialog.addEventListener("click", (e) => {
    if (e.target === loginDialog) {
      loginDialog.style.display = "none";
    }
  });
  // add events to menu options

  playBtn.addEventListener("click", () => {
    songModal.style.display = "flex";
  });

  authBtn.addEventListener("click", () => {
    loginDialog.style.display = "flex";
  });
  accountBtn.addEventListener("click", () => {
    accountPage.style.display = "grid";
    accountForm.elements.username.value = userManager.getUserData().userName;
    accountForm.elements.email.value = userManager.getUserData().email;
  });
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const loginData = new FormData(loginForm);

    userManager
      .handleLogin({
        email: loginData.get("email"),
        password: loginData.get("password"),
      })
      .then((res) => {
        if (res.success) {
          authenticatedView();
        } else {
          console.log(res.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const registerData = new FormData(registerForm);
    userManager
      .handleRegister({
        email: registerData.get("email"),
        password: registerData.get("password"),
        userName: registerData.get("username"),
      })
      .then((res) => {
        if (res.success) {
          alert("registration sucessfull");
          loginDialog.style.display = "none";
          return;
        }
        console.log(res.message);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  accountPageClose.addEventListener("click", () => {
    accountPage.style.display = "none";
  });
  logoutBtn.addEventListener("click", () => {
    userManager
      .handleLogout()
      .then((res) => {
        console.log(res);
        notAuthenticatedView();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // authentication button group
  const buttonGroupMember = authButtonGroup.children;
  Object.keys(buttonGroupMember).forEach((button) => {
    buttonGroupMember[button].addEventListener("click", (e) => {
      authSwitch(e.target);
    });
  });

  // add audio to menu options
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
}
