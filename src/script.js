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
  showPassword,
  addErrorMessage,
  clearList,
  showLoading,
  domSettings,
  playBackground,
} from "./dom-manipulation/home-dom";
import user from "./managers/user-manager";
import map from "./managers/map_manager";
import { updateSettings, getSettings } from "./utility/storage";

const userManager = user();
const mapManager = map();
let hoverDebounce = null;
let page = 1;
let end = false;
let searchKey = "";
let searching = false;

const infiniteLoad = (search = false) => {
  if (searching || end) return;

  showLoading("search-indicator", "block");

  mapManager
    .handleGetBeatMaps(page, searchKey)
    .then((songs) => {
      if (search) clearList("song_list");

      if (songs.length === 0) {
        end = true;
        return;
      }
      page += 1;

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
    })
    .finally(() => {
      searching = false;
      showLoading("search-indicator", "none");
    });
};
const searchSong = (newKey) => {
  page = 1;
  end = false;
  searching = false;
  searchKey = newKey;
  infiniteLoad(true);
};

initialize();
domSettings(getSettings());

userManager.isLogin().then(() => {
  if (userManager.getUserData()?.isLogin) {
    authenticatedView();
  }
  const { userName, email, verified, used } = userManager.getUserData();
  populateAccountForm(userName, email, verified, used);
});
infiniteLoad();
document.querySelector("#song-search").addEventListener("keyup", (e) => {
  console.log(e.key);
  if (e.key !== "Enter") return;
  searchSong(e.target.value);
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

const mapList = document.querySelector("#song_list");
mapList.addEventListener("scroll", () => {
  if (searching || end) return;
  if (
    Math.abs(mapList.scrollHeight - mapList.clientHeight - mapList.scrollTop) <
    1
  ) {
    infiniteLoad();
  }
});
const loginForm = document.querySelector("#login");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const loginData = new FormData(loginForm);
  const submitButton = loginForm.querySelector("button");
  submitButton.disabled = true;

  userManager
    .handleLogin({
      email: loginData.get("email"),
      password: loginData.get("password"),
    })
    .then((res) => {
      authenticatedView();
      console.log(res);
      const { userName, email, verified } = userManager.getUserData();
      populateAccountForm(userName, email, verified);
      addErrorMessage("", "login-error");
      loginForm.reset();
    })
    .catch((err) => {
      console.log(err);
      addErrorMessage(err, "login-error");
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});

const registerForm = document.querySelector("#register");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const registerData = new FormData(registerForm);
  const submitButton = registerForm.querySelector("button");
  submitButton.disabled = true;
  userManager
    .handleRegister({
      email: registerData.get("email"),
      password: registerData.get("password"),
      userName: registerData.get("username"),
    })
    .then((res) => {
      registerForm.reset();
      console.log(res);
      addErrorMessage("", "register-error");
      authSwitch(document.querySelector(".button-group").children[0]);
    })
    .catch((err) => {
      console.log(err);
      addErrorMessage(err, "register-error");
    })
    .finally(() => {
      submitButton.disabled = false;
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
  e.target.disabled = true;
  userManager
    .handleEmailVerifyGeneration()
    .then((res) => {
      console.log(res);
      e.target.style.display = "none";
      const pendingMessage = document.querySelector("#pending-verify");
      pendingMessage.style.display = "inline-block";
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      e.target.disabled = true;
    });
});

document
  .querySelector("#show-password-register")
  .addEventListener("click", (e) => {
    showPassword(e.target.checked, "password-register");
  });
document
  .querySelector("#show-password-login")
  .addEventListener("click", (e) => {
    showPassword(e.target.checked, "password-login");
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
    }, 100);
  });
  optionElements[option].addEventListener("mouseout", () => {
    pauseHoverSound();
    clearTimeout(hoverDebounce);
  });

  optionElements[option].addEventListener("click", () => {
    playClickSound();
  });
});

document.querySelector("#music-volume").addEventListener("change", (e) => {
  updateSettings("music", Number(e.target.value));
});
document.querySelector("#hit-sound").addEventListener("change", (e) => {
  updateSettings("hit", Number(e.target.value));
});

document.querySelector("#time-offset").addEventListener("click", (e) => {
  updateSettings("offset", e.target.value);
});
document.querySelector("#time-offset").addEventListener("keyup", (e) => {
  updateSettings("offset", e.target.value);
});

document
  .querySelector("#background-opacity")
  .addEventListener("change", (e) => {
    updateSettings("opacity", Number(e.target.value));
  });

document.querySelector("#setting-dialog").addEventListener("click", (e) => {
  if (e.target.id !== "setting-dialog") return;
  e.target.style.display = "none";
});
document.querySelector(".settings").addEventListener("click", () => {
  document.querySelector("#setting-dialog").style.display = "flex";
});
// buttons
// forms
// modals

document.querySelector("#entry-screen").addEventListener("click", () => {
  playBackground();
});
const params = new URLSearchParams(document.location.search);
const noBanner = params.has("banner");
if (noBanner) {
  playBackground(false);
}
