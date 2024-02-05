/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/authentication.js":
/*!***********************************!*\
  !*** ./src/api/authentication.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changePassword": () => (/* binding */ changePassword),
/* harmony export */   "check": () => (/* binding */ check),
/* harmony export */   "editAccountInfo": () => (/* binding */ editAccountInfo),
/* harmony export */   "forgotPassword": () => (/* binding */ forgotPassword),
/* harmony export */   "generateEmailVerifyToken": () => (/* binding */ generateEmailVerifyToken),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "recoverPassword": () => (/* binding */ recoverPassword),
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "verifyEmail": () => (/* binding */ verifyEmail)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/api/main.js");


async function login({ email, password }) {
  const options = {
    body: JSON.stringify({ email, password }),
    method: "post",
  };
  const headers = {
    "Content-Type": "application/json",
  };

  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({ url: "auth/login", options, headers });

  const data = await response.json();

  return data;
}
async function check({ csrfToken }) {
  const options = { method: "get" };
  const headers = {
    "Content-Type": "application/json",
    CSRF_TOKEN: csrfToken,
  };
  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({ url: "auth/check", options, headers });
  return response;
}
async function logout({ csrfToken }) {
  const options = { method: "post" };
  const headers = {
    CSRF_TOKEN: csrfToken,
  };
  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({ url: "auth/logout", options, headers });
  const data = await response.text();

  return data;
}

async function register({ email, password, userName }) {
  const options = {
    body: JSON.stringify({ email, password, userName }),
    method: "post",
  };
  const headers = {
    "Content-Type": "application/json",
  };

  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({ url: "auth/register", options, headers });

  const data = await response.text();

  return data;
}
async function editAccountInfo(password, email, column, value) {
  const options = {
    body: JSON.stringify({ email, password, column, value }),
    method: "post",
  };
  const headers = {
    "Content-Type": "application/json",
  };

  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "auth/change_acount_info",
    options,
    headers,
  });

  const data = await response.text();

  return data;
}

async function generateEmailVerifyToken() {
  const options = {
    method: "post",
  };

  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "auth/generate_verify_url",
    options,
  });

  const data = await response.text();

  return data;
}
async function verifyEmail(token) {
  const options = {
    body: JSON.stringify({ token }),
    method: "post",
  };
  const headers = {
    "Content-Type": "application/json",
  };

  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "auth/verify_email",
    options,
    headers,
  });

  const data = await response.text();

  return data;
}

async function forgotPassword(form) {
  const options = {
    body: form,
    method: "post",
  };

  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "auth/generate_reset_url",
    options,
  });

  const data = await response.text();
  return data;
}

async function recoverPassword(form) {
  const options = {
    body: form,
    method: "post",
  };

  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "auth/recover_password",
    options,
  });

  const data = await response.text();
  return data;
}
async function changePassword(email, currentPassword, newPassword) {
  const options = {
    body: JSON.stringify({ email, currentPassword, newPassword }),
    method: "post",
  };
  const headers = {
    "Content-Type": "application/json",
  };

  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "auth/change_password",
    options,
    headers,
  });

  const data = await response.text();

  return data;
}


/***/ }),

/***/ "./src/api/main.js":
/*!*************************!*\
  !*** ./src/api/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ apiRequest)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var _utility_js_responseText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility.js/responseText */ "./src/utility.js/responseText.js");



const { apiDomain } = _config__WEBPACK_IMPORTED_MODULE_0__["default"];

async function apiRequest({ url, options, headers }) {
  const location = ["localhost", "127.0.0.1"].includes(window.location.hostname)
    ? apiDomain.development
    : apiDomain.production;
  const response = await fetch(`${location}/${url}`, {
    mode: "cors",
    credentials: "include",
    headers: {
      CSRF_TOKEN: sessionStorage.getItem("csrfToken"),
      ...headers,
    },
    ...options,
  });

  if (response.ok === false) {
    const message = await response.text();
    throw new Error((0,_utility_js_responseText__WEBPACK_IMPORTED_MODULE_1__["default"])(message));
  }

  if (response.status === 401) {
    // delete session data and storage, and logout from front end
  }
  return response;
}


/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const config = {
  dealy: 3,
  timingWindowEarly: 0.2,
  timingWindowLate: 0.1,
  pointWidth: 10,
  pointSpacing: 10,
  startTime: 3,
  apiDomain: {
    development: "http://localhost:5000",
    production: "https://shark-app-uuvcm.ondigitalocean.app/",
  },
  // for fetch requests
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);


/***/ }),

/***/ "./src/utility.js/responseText.js":
/*!****************************************!*\
  !*** ./src/utility.js/responseText.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ responseText)
/* harmony export */ });
// gets the response text from an http error

function responseText(html) {
  const container = document.createElement("div");
  container.innerHTML = html;
  const text =
    container.querySelector("p")?.textContent ||
    "error could not compelte request";
  return text;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./src/verify/verify-email.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/authentication */ "./src/api/authentication.js");


const params = new URLSearchParams(window.location.search);
const token = params.get("token");
console.log(params);
const message = document.querySelector("#message");

if (token) {
  (0,_api_authentication__WEBPACK_IMPORTED_MODULE_0__.verifyEmail)(token)
    .then((res) => {
      console.log(res);
      message.textContent =
        "Email succesfully verified, redirecting to home page..";
      setTimeout(() => {
        window.location.pathname = "";
      }, 1000);
    })
    .catch((err) => {
      console.log(err);
      message.textContent = err.message;
    });
}

})();

/******/ })()
;
//# sourceMappingURL=verify.bundle.js.map