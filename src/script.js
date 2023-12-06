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
  const { userName, email, verified } = userManager.getUserData();
  populateAccountForm(userName, email, verified);
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
  const submitButton = loginForm.querySelector("button");
  submitButton.disabled = true;
  const loginError = loginForm.querySelector("#login-error");

  userManager
    .handleLogin({
      email: loginData.get("email"),
      password: loginData.get("password"),
    })
    .then((res) => {
      loginError.style.display = "none";
      authenticatedView();
      console.log(res);
      const { userName, email, verified } = userManager.getUserData();
      populateAccountForm(userName, email, verified);
    })
    .catch((err) => {
      console.log(err);
      loginError.style.display = "block";
    })
    .finally(() => {
      submitButton.disabled = false;
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
  const data = new FormData(e.target);
  userManager
    .handlePasswordChange(data.get("currentPassword"), data.get("newPassword"))
    .then((res) => {
      console.log(res);
      e.target.reset();
      accountEdit("password-form", "block", "none");
    })
    .catch((err) => console.log(err));
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
  const data = new FormData(e.target);
  userManager
    .handleEditAccount(
      data.get("currentPassword"),
      "username",
      data.get("username")
    )
    .then(() => {
      userManager.setUserData("userName", data.get("username"));
      accountEdit("username-form", "block", "none");
      const { userName, email } = userManager.getUserData();
      populateAccountForm(userName, email);
      e.target.reset();
    })
    .catch((err) => {
      console.log(err);
    });
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
  const data = new FormData(e.target);
  userManager
    .handleEditAccount(data.get("currentPassword"), "email", data.get("email"))
    .then(() => {
      userManager.setUserData("email", data.get("email"));
      accountEdit("email-form", "block", "none");
      const { userName, email } = userManager.getUserData();
      populateAccountForm(userName, email);
      e.target.reset();
    })
    .catch((err) => {
      console.log(err);
    });
});
document
  .querySelector("#email-edit")
  .addEventListener("click", () => accountEdit("email-form", "none", "block"));
document
  .querySelector("#email-close")
  .addEventListener("click", () => accountEdit("email-form", "block", "none"));

document.querySelector("#verify-button").addEventListener("click", (e) => {
  userManager
    .handleEmailVerifyGeneration()
    .then((res) => {
      console.log(res);
      e.target.style.display = "none";
    })
    .catch((err) => {
      console.log(err);
    });
});

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
