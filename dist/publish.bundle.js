/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/kareoke.js":
/*!****************************!*\
  !*** ./src/api/kareoke.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteMap": () => (/* binding */ deleteMap),
/* harmony export */   "deleteMapAdmin": () => (/* binding */ deleteMapAdmin),
/* harmony export */   "editMedia": () => (/* binding */ editMedia),
/* harmony export */   "getBeatMap": () => (/* binding */ getBeatMap),
/* harmony export */   "getBeatMaps": () => (/* binding */ getBeatMaps),
/* harmony export */   "getMaps": () => (/* binding */ getMaps),
/* harmony export */   "getMedia": () => (/* binding */ getMedia),
/* harmony export */   "getUserBeatMaps": () => (/* binding */ getUserBeatMaps),
/* harmony export */   "publishMap": () => (/* binding */ publishMap),
/* harmony export */   "publishRequest": () => (/* binding */ publishRequest),
/* harmony export */   "saveBeatMap": () => (/* binding */ saveBeatMap),
/* harmony export */   "saveHighScore": () => (/* binding */ saveHighScore),
/* harmony export */   "uploadBeatmap": () => (/* binding */ uploadBeatmap)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/api/main.js");


async function uploadBeatmap(formData) {
  // upload map, audio, background.
  const options = {
    method: "post",
    body: formData,
  };
  // make sure to add csrf toekn here
  const headers = {};
  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `kareoke/add_map`,
    options,
    headers,
  });
  const data = await response.json();

  return data;
}
async function editMedia(formData) {
  const options = {
    method: "put",
    body: formData,
  };
  const headers = {};
  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `kareoke/change_media`,
    options,
    headers,
  });
  const data = await response.text();
  return data;
}

async function getBeatMaps(page, search, signal) {
  const options = {
    method: "get",
    signal,
  };
  const headers = {};
  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `kareoke/get_published?page=${page}&search=${search}`,
    options,
    headers,
  });

  const data = await response.json();

  return data;
}
async function getUserBeatMaps() {
  const options = {
    method: "get",
  };
  const headers = {};
  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `kareoke/get_user_maps`,
    options,
    headers,
  });
  const data = await response.json();
  return data;
}

async function getBeatMap(id, signal) {
  const options = {
    method: "get",
    signal,
  };
  const headers = {};
  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `kareoke/get_map?mapID=${id}`,
    options,
    headers,
  });

  const data = await response.json();

  return data;
}
async function getMedia(url, signal) {
  const response = await fetch(url, {
    method: "get",
    signal,
  });

  const data = await response.blob();

  return data;
}

async function saveBeatMap(mapData) {
  const options = {
    method: "put",
    body: JSON.stringify(mapData),
  };
  const headers = { "Content-Type": "application/json" };
  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `kareoke/save_map`,
    options,
    headers,
  });

  const data = await response.text();

  return data;
}
async function deleteMap(id) {
  const options = {
    method: "delete",
    body: JSON.stringify({ id }),
  };
  const headers = { "Content-Type": "application/json" };
  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `kareoke/delete_map`,
    options,
    headers,
  });

  const data = await response.text();

  return data;
}

async function deleteMapAdmin(id) {
  const options = {
    method: "delete",
    body: JSON.stringify({ id }),
  };
  const headers = { "Content-Type": "application/json" };
  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `kareoke/delete_map_admin`,
    options,
    headers,
  });

  const data = await response.text();

  return data;
}
async function saveHighScore(score, beatMapID) {
  const options = {
    method: "put",
    body: JSON.stringify({ score, beatMapID }),
  };
  const headers = { "Content-Type": "application/json" };
  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `kareoke/highscore`,
    options,
    headers,
  });

  const data = await response.text();

  return data;
}

async function publishRequest(beatMapID) {
  const options = {
    method: "post",
    body: JSON.stringify({ beatMapID }),
  };
  const headers = { "Content-Type": "application/json" };
  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `kareoke/publish_request`,
    options,
    headers,
  });

  const data = await response.text();

  return data;
}
async function publishMap(beatMapID, resolution) {
  const options = {
    method: "post",
    body: JSON.stringify({ beatMapID, resolution }),
  };
  const headers = { "Content-Type": "application/json" };
  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `kareoke/publish_map`,
    options,
    headers,
  });

  const data = await response.text();

  return data;
}

async function getMaps() {
  const options = {
    method: "get",
  };
  const headers = { "Content-Type": "application/json" };

  const response = await (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `kareoke/get_maps`,
    options,
    headers,
  });

  const data = await response.json();

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
/*!********************************!*\
  !*** ./src/publish/publish.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_kareoke__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/kareoke */ "./src/api/kareoke.js");


let resolving = false;

const createListItem = (request) => {
  const listItem = document.createElement("li");
  listItem.style.padding = "5px";
  const link = document.createElement("a");
  link.target = "_blank";
  link.textContent = request.name;
  link.href = `player.html?song=${request.id}`;
  listItem.append(link);
  const userName = document.createElement("span");
  userName.textContent = ` by ${request.userName}`;
  listItem.append(userName);
  return listItem;
};
const handlePublishRequest = async (id, resolution, button, item) => {
  if (resolving) return;
  resolving = false;
  // eslint-disable-next-line no-param-reassign
  button.textContent = "....";
  (0,_api_kareoke__WEBPACK_IMPORTED_MODULE_0__.publishMap)(id, resolution)
    .then((res) => {
      console.log(res);
      item.remove();
    })
    .catch((err) => {
      console.log(err);
      // eslint-disable-next-line no-param-reassign
      button.textContent = "accept";
      alert("unable to publish map");
    });
};

const deleteMap = (id, button, item) => {
  // eslint-disable-next-line no-restricted-globals
  const acceptDelete = confirm("are you sure you want to delete this map?");
  if (!acceptDelete) return;
  // eslint-disable-next-line no-param-reassign
  button.disabled = true;
  (0,_api_kareoke__WEBPACK_IMPORTED_MODULE_0__.deleteMapAdmin)(id)
    .then((res) => {
      console.log(res);
      item.remove();
    })
    .catch((err) => {
      // eslint-disable-next-line no-param-reassign
      button.disabled = false;
      console.log(err);
    });
};
(0,_api_kareoke__WEBPACK_IMPORTED_MODULE_0__.getMaps)()
  .then((maps) => {
    const requestList = document.querySelector("#request-list");
    const publishedList = document.querySelector("#published-list");
    const unPublishedList = document.querySelector("#unpublished-list");

    const publishRequests = maps.filter((map) => map.status === "pending");
    const publishedMaps = maps.filter((map) => map.status === "published");
    const unpublished = maps.filter((map) => map.status === "draft");

    publishRequests.forEach((map) => {
      const listItem = createListItem(map);
      const publishButton = document.createElement("button");
      publishButton.textContent = "accept";
      listItem.append(publishButton);
      publishButton.addEventListener("click", () => {
        handlePublishRequest(
          map.id,
          "published",
          publishButton,
          listItem,
          requestList
        );
      });
      const rejectButton = document.createElement("button");
      rejectButton.textContent = "reject";
      rejectButton.addEventListener("click", () => {
        handlePublishRequest(
          map.id,
          "draft",
          rejectButton,
          listItem,
          requestList
        );
      });
      listItem.append(rejectButton);
      requestList.append(listItem);
    });
    publishedMaps.forEach((map) => {
      const listItem = createListItem(map);
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "delete";
      deleteButton.addEventListener("click", () => {
        deleteMap(map.id, deleteButton, listItem, publishedList);
      });
      listItem.append(deleteButton);
      publishedList.append(listItem);
    });
    unpublished.forEach((map) => {
      const listItem = createListItem(map);
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "delete";
      deleteButton.addEventListener("click", () => {
        deleteMap(map.id, deleteButton, listItem, unPublishedList);
      });
      listItem.append(deleteButton);
      unPublishedList.append(listItem);
    });
  })
  .catch((err) => {
    console.log(err);
  });

})();

/******/ })()
;
//# sourceMappingURL=publish.bundle.js.map