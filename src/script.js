import "./style.css";
import "./general.css";
import {
  initialize,
  handleLoginDialog,
  selectSong,
  handleSongModal,
  removeSongFocus,
  handleAccountPage,
  populateAccountForm,
  authenticatedView,
  notAuthenticatedView,
  authSwitch,
  playHoverSound,
  pauseHoverSound,
  playClickSound,
  generateSong,
  accountEdit,
} from "./dom-manipulation/home-dom";
import user from "./managers/user-manager";
import map from "./managers/map_manager";

const userManager = user();
const mapManager = map();
let hoverDebounce = null;
initialize();

userManager.isLogin().then(() => {
  if (userManager.getUserData()?.isLogin) {
    authenticatedView();
  }
  const { userName, email } = userManager.getUserData();
  populateAccountForm(userName, email);
});
mapManager
  .handleGetBeatMaps()
  .then((songs) => {
    songs.forEach((song) => {
      const listItem = generateSong(song);
      listItem.addEventListener("click", () => {
        selectSong(song, listItem);
      });
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("Problem getting user beat maps");
  });

// event lsiteners
document.querySelector("#auth-dialog").addEventListener("click", (e) => {
  if (e.target.id === "auth-dialog") {
    handleLoginDialog(false);
  }
});

const songModal = document.querySelector("#song_wrapper");
songModal.addEventListener("click", (e) => {
  if (e.target.id === "song_wrapper") {
    handleSongModal(false);
    // eslint-disable-next-line no-script-url
    removeSongFocus();
  }
});

document.querySelector("#auth-dialog").addEventListener("click", (e) => {
  if (e.target.id === "auth-dialog") {
    handleLoginDialog(false);
  }
});

document.querySelector(".play").addEventListener("click", () => {
  handleSongModal(true);
});

document.querySelector(".auth").addEventListener("click", () => {
  handleLoginDialog(true);
});

const accountBtn = document.querySelector(".account");
accountBtn.addEventListener("click", () => {
  handleAccountPage(true);
});

const loginForm = document.querySelector("#login");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const loginData = new FormData(loginForm);

  userManager
    .handleLogin({
      email: loginData.get("email"),
      password: loginData.get("password"),
    })
    .then((res) => {
      authenticatedView();
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

const registerForm = document.querySelector("#register");
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
      handleLoginDialog(false);

      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

const accountPageClose = document.querySelector("#account-dialog");
accountPageClose.addEventListener("click", (e) => {
  if (e.target.id !== "account-dialog") return;
  handleAccountPage(false);
});

document.querySelector("#logout-btn").addEventListener("click", () => {
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

// account details edit
document.querySelector("#password-form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
});
document
  .querySelector("#password-edit")
  .addEventListener("click", () =>
    accountEdit("password-form", "none", "block")
  );
document
  .querySelector("#password-close")
  .addEventListener("click", () =>
    accountEdit("password-form", "block", "none")
  );

document.querySelector("#username-form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
});
document
  .querySelector("#username-edit")
  .addEventListener("click", () =>
    accountEdit("username-form", "none", "block")
  );
document
  .querySelector("#username-close")
  .addEventListener("click", () =>
    accountEdit("username-form", "block", "none")
  );

document.querySelector("#email-form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
});
document
  .querySelector("#email-edit")
  .addEventListener("click", () => accountEdit("email-form", "none", "block"));
document
  .querySelector("#email-close")
  .addEventListener("click", () => accountEdit("email-form", "block", "none"));

// authentication button group
const buttonGroupMember = document.querySelector(".button-group").children;
Object.keys(buttonGroupMember).forEach((button) => {
  buttonGroupMember[button].addEventListener("click", (e) => {
    authSwitch(e.target);
  });
});

// add audio to menu options
const optionElements = document.querySelector(".menu-options").children;

Object.keys(optionElements).forEach((option) => {
  optionElements[option].addEventListener("mouseover", () => {
    hoverDebounce = setTimeout(() => {
      playHoverSound();
    }, 50);
  });
  optionElements[option].addEventListener("mouseout", () => {
    pauseHoverSound();
    clearTimeout(hoverDebounce);
  });

  optionElements[option].addEventListener("click", () => {
    playClickSound();
  });
});

// buttons
// forms
// modals
