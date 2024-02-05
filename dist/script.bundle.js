/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/general.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/general.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --primary-font: \"Courier New\", Courier, monospace;\r\n  --secondary-bg-color: #091126;\r\n  --primary-color: rgba(255, 255, 255, 0.7);\r\n  --fancy-font: \"Titillium Web\", sans-serif;\r\n}\r\n\r\n.general-form {\r\n  display: flex;\r\n  min-height: 400px;\r\n  flex-direction: column;\r\n  padding: 13px;\r\n  color: var(--primary-color);\r\n}\r\n.general-form label {\r\n  font-size: 1.3rem;\r\n}\r\n.general-form input[type=\"text\"],\r\ninput[type=\"email\"],\r\ninput[type=\"password\"] {\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: solid grey;\r\n  border-width: 1px;\r\n  font-family: var(--primary-font);\r\n  color: var(--primary-color);\r\n  height: 35px;\r\n  font-size: 1.4rem;\r\n  outline: none;\r\n  margin-bottom: 20px;\r\n}\r\n.general-form input[type=\"text\"]:focus,\r\ninput[type=\"email\"]:focus,\r\ninput[type=\"password\"]:focus {\r\n  border: solid grey;\r\n  border-width: thin;\r\n  color: var(--primary-color);\r\n}\r\n.general-form select {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  font-family: var(--primary-font);\r\n  color: var(--primary-color);\r\n  font-size: 1.1rem;\r\n  background-color: var(--secondary-bg-color);\r\n  border: none;\r\n  padding: 5px;\r\n}\r\n.general-form input[type=\"file\"] {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n.general-form button {\r\n  border: none;\r\n  background-color: var(--secondary-bg-color);\r\n  color: var(--primary-color);\r\n  font-family: var(--primary-font);\r\n  font-size: 1.3rem;\r\n  padding: 5px;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n.general-form button:hover {\r\n  filter: brightness(1.2);\r\n}\r\n.general-form button:disabled {\r\n  filter: grayscale(1);\r\n  cursor: not-allowed;\r\n}\r\n\r\n.dark_mode {\r\n  --primary-color: rgba(255, 255, 255, 0.811);\r\n  --primary-bg-color: #00000c;\r\n}\r\n\r\n.light_mode {\r\n  --primary-color: #000000;\r\n  --primary-bg-color: #eeeeee;\r\n}\r\n\r\n.dialog {\r\n  display: none;\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: fit-content;\r\n  min-height: 100vh;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: rgba(0, 0, 0, 0.852);\r\n  z-index: 11;\r\n}\r\n.menu-button {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  padding: 10px;\r\n  font-size: 2rem;\r\n}\r\n.menu-button > button {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: transparent;\r\n\r\n  border: none;\r\n  font-size: 4rem;\r\n}\r\n.loading-indicator {\r\n  display: none;\r\n  width: 100%;\r\n  height: 5px;\r\n  background: white;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.loading-indicator > div {\r\n  position: absolute;\r\n  width: 50%;\r\n  height: 100%;\r\n  background-color: #39a6f6;\r\n  animation-name: load;\r\n  animation-duration: 2.5s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: infinite;\r\n}\r\n@keyframes load {\r\n  from {\r\n    left: -50%;\r\n  }\r\n  to {\r\n    left: 100%;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/general.css"],"names":[],"mappings":"AAAA;EACE,iDAAiD;EACjD,6BAA6B;EAC7B,yCAAyC;EACzC,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,sBAAsB;EACtB,aAAa;EACb,2BAA2B;AAC7B;AACA;EACE,iBAAiB;AACnB;AACA;;;EAGE,6BAA6B;EAC7B,YAAY;EACZ,yBAAyB;EACzB,iBAAiB;EACjB,gCAAgC;EAChC,2BAA2B;EAC3B,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,mBAAmB;AACrB;AACA;;;EAGE,kBAAkB;EAClB,kBAAkB;EAClB,2BAA2B;AAC7B;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,gCAAgC;EAChC,2BAA2B;EAC3B,iBAAiB;EACjB,2CAA2C;EAC3C,YAAY;EACZ,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,2CAA2C;EAC3C,2BAA2B;EAC3B,gCAAgC;EAChC,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,2CAA2C;EAC3C,2BAA2B;AAC7B;;AAEA;EACE,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,sCAAsC;EACtC,WAAW;AACb;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;EACb,eAAe;AACjB;AACA;EACE,eAAe;EACf,YAAY;EACZ,6BAA6B;;EAE7B,YAAY;EACZ,eAAe;AACjB;AACA;EACE,aAAa;EACb,WAAW;EACX,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,yBAAyB;EACzB,oBAAoB;EACpB,wBAAwB;EACxB,iCAAiC;EACjC,mCAAmC;AACrC;AACA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF","sourcesContent":[":root {\r\n  --primary-font: \"Courier New\", Courier, monospace;\r\n  --secondary-bg-color: #091126;\r\n  --primary-color: rgba(255, 255, 255, 0.7);\r\n  --fancy-font: \"Titillium Web\", sans-serif;\r\n}\r\n\r\n.general-form {\r\n  display: flex;\r\n  min-height: 400px;\r\n  flex-direction: column;\r\n  padding: 13px;\r\n  color: var(--primary-color);\r\n}\r\n.general-form label {\r\n  font-size: 1.3rem;\r\n}\r\n.general-form input[type=\"text\"],\r\ninput[type=\"email\"],\r\ninput[type=\"password\"] {\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: solid grey;\r\n  border-width: 1px;\r\n  font-family: var(--primary-font);\r\n  color: var(--primary-color);\r\n  height: 35px;\r\n  font-size: 1.4rem;\r\n  outline: none;\r\n  margin-bottom: 20px;\r\n}\r\n.general-form input[type=\"text\"]:focus,\r\ninput[type=\"email\"]:focus,\r\ninput[type=\"password\"]:focus {\r\n  border: solid grey;\r\n  border-width: thin;\r\n  color: var(--primary-color);\r\n}\r\n.general-form select {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  font-family: var(--primary-font);\r\n  color: var(--primary-color);\r\n  font-size: 1.1rem;\r\n  background-color: var(--secondary-bg-color);\r\n  border: none;\r\n  padding: 5px;\r\n}\r\n.general-form input[type=\"file\"] {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n.general-form button {\r\n  border: none;\r\n  background-color: var(--secondary-bg-color);\r\n  color: var(--primary-color);\r\n  font-family: var(--primary-font);\r\n  font-size: 1.3rem;\r\n  padding: 5px;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n.general-form button:hover {\r\n  filter: brightness(1.2);\r\n}\r\n.general-form button:disabled {\r\n  filter: grayscale(1);\r\n  cursor: not-allowed;\r\n}\r\n\r\n.dark_mode {\r\n  --primary-color: rgba(255, 255, 255, 0.811);\r\n  --primary-bg-color: #00000c;\r\n}\r\n\r\n.light_mode {\r\n  --primary-color: #000000;\r\n  --primary-bg-color: #eeeeee;\r\n}\r\n\r\n.dialog {\r\n  display: none;\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: fit-content;\r\n  min-height: 100vh;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: rgba(0, 0, 0, 0.852);\r\n  z-index: 11;\r\n}\r\n.menu-button {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  padding: 10px;\r\n  font-size: 2rem;\r\n}\r\n.menu-button > button {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: transparent;\r\n\r\n  border: none;\r\n  font-size: 4rem;\r\n}\r\n.loading-indicator {\r\n  display: none;\r\n  width: 100%;\r\n  height: 5px;\r\n  background: white;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.loading-indicator > div {\r\n  position: absolute;\r\n  width: 50%;\r\n  height: 100%;\r\n  background-color: #39a6f6;\r\n  animation-name: load;\r\n  animation-duration: 2.5s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: infinite;\r\n}\r\n@keyframes load {\r\n  from {\r\n    left: -50%;\r\n  }\r\n  to {\r\n    left: 100%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --primary-font: \"Courier New\", Courier, monospace;\r\n}\r\nbody {\r\n  margin: 0px;\r\n  padding: 0.1px;\r\n  font-family: var(--primary-font);\r\n  color: var(--primary-color);\r\n}\r\n#song-search {\r\n  padding: 10px;\r\n  font-family: var(--primary-font);\r\n  font-size: 1.3rem;\r\n}\r\na {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n#start-song {\r\n  cursor: pointer;\r\n  background-color: #a2e6ff;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n}\r\n#start-song:hover {\r\n  filter: brightness(1.1);\r\n}\r\n#register {\r\n  display: none;\r\n}\r\n\r\n#logout-btn {\r\n  display: none;\r\n}\r\n#close-account {\r\n  width: fit-content;\r\n  align-self: flex-end;\r\n}\r\n\r\n.button-group {\r\n  display: flex;\r\n  color: var(--primary-color);\r\n  cursor: pointer;\r\n}\r\n.button-group > div {\r\n  width: 50%;\r\n  text-align: center;\r\n  padding-top: 5px;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n[data-form=\"login\"].active {\r\n  background-image: linear-gradient(\r\n    to left,\r\n    rgba(57, 166, 246, 0.1),\r\n    rgb(57, 166, 246)\r\n  );\r\n}\r\n[data-form=\"register\"].active {\r\n  background-image: linear-gradient(\r\n    to right,\r\n    rgba(57, 166, 246, 0.1),\r\n    rgb(57, 166, 246)\r\n  );\r\n}\r\n\r\n.auth-wrapper {\r\n  width: 30vw;\r\n  min-width: 300px;\r\n  background-color: var(--primary-bg-color);\r\n  border: solid grey thin;\r\n}\r\n#settings {\r\n  border-left: solid grey thin;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  font-size: 1.5rem;\r\n}\r\n#settings > label {\r\n  padding: 5px;\r\n}\r\n#settings > input {\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: solid grey;\r\n  border-width: 1px;\r\n  font-family: var(--primary-font);\r\n  color: var(--primary-color);\r\n  font-size: 1.3rem;\r\n}\r\n#account {\r\n  width: 30vw;\r\n  min-width: 300px;\r\n  border-left: solid grey thin;\r\n  padding: 15px;\r\n}\r\n\r\n#account label {\r\n  font-size: 1.6rem;\r\n}\r\n#account .text-value {\r\n  font-size: 1.5rem;\r\n  margin-top: 15px;\r\n}\r\n.add-form {\r\n  display: none;\r\n  flex-direction: column;\r\n  background-color: #ffdbe6;\r\n  height: 350px;\r\n  font-size: 1.4rem;\r\n  gap: 5px;\r\n}\r\n.add-form > input {\r\n  width: 80%;\r\n  align-self: center;\r\n}\r\n#beat_map {\r\n  text-align: center;\r\n}\r\n\r\n.add-form > button {\r\n  background-color: rgb(17, 36, 184);\r\n  border: none;\r\n  color: white;\r\n  font-size: 1.4rem;\r\n  cursor: pointer;\r\n}\r\n.add-form > button:hover {\r\n  filter: brightness(1.2);\r\n}\r\n\r\n.background_image {\r\n  position: fixed;\r\n\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -2;\r\n  filter: brightness(0.6);\r\n  background-size: cover;\r\n}\r\n\r\n.logo {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.cover {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 38px;\r\n}\r\n.menu-options {\r\n  display: flex;\r\n  height: 70vh;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 10px;\r\n}\r\n.menu-options div {\r\n  color: rgba(255, 255, 255, 0.8);\r\n  padding-left: 8vw;\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n  width: 35vw;\r\n}\r\n.menu-options div:hover {\r\n  background: rgb(246, 0, 0);\r\n  background: linear-gradient(\r\n    90deg,\r\n    rgb(195, 37, 20) 0%,\r\n    rgb(255, 10, 10) 47%,\r\n    rgba(255, 0, 0, 0) 100%\r\n  );\r\n}\r\n.background-overlay {\r\n  position: absolute;\r\n  height: 100vh;\r\n  width: 45vw;\r\n  z-index: -1;\r\n  background: linear-gradient(\r\n    90deg,\r\n    rgb(0, 0, 0) 0%,\r\n    rgba(0, 0, 0, 0.8) 80%,\r\n    rgba(255, 0, 0, 0) 100%\r\n  );\r\n}\r\n#song_wrapper {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: none;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(0, 0, 0, 0.452);\r\n}\r\n.song_select {\r\n  background-color: #9b9b99;\r\n  width: 500px;\r\n  height: 500px;\r\n  position: relative;\r\n  z-index: 2;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  border: rgba(3, 3, 3, 0.442) solid;\r\n  padding: 15px;\r\n  color: black;\r\n}\r\n.song-name {\r\n  width: 100%;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n#song_list {\r\n  width: 100%;\r\n  background-color: #ffdbe6;\r\n  padding: 0px;\r\n  margin: 0px;\r\n  height: 330px;\r\n  overflow-y: scroll;\r\n  scrollbar-width: thin;\r\n  scrollbar-color: #e96fdc rgba(0, 0, 0, 0.382);\r\n  font-family: var(--primary-font);\r\n}\r\n#song_list a {\r\n  color: black;\r\n}\r\n#song_list > li {\r\n  list-style: none;\r\n  margin: 0px;\r\n  padding: 7px;\r\n  border: black solid thin;\r\n  cursor: pointer;\r\n  font-size: 2rem;\r\n  display: grid;\r\n  grid-template: 1fr/ 0.2fr 1fr;\r\n}\r\n#song_list > li:hover {\r\n  border: #e96fdc solid;\r\n}\r\n.disk {\r\n  width: 480px;\r\n  height: 480px;\r\n  border-radius: 50%;\r\n  display: grid;\r\n  align-items: center;\r\n  justify-items: right;\r\n  position: absolute;\r\n  background-color: transparent;\r\n  background-size: 100% 100%;\r\n  z-index: 1;\r\n}\r\n.disk_slide {\r\n  animation-name: slide;\r\n  animation-duration: 0.5s;\r\n  animation-timing-function: linear;\r\n  animation-fill-mode: forwards;\r\n}\r\n.selected {\r\n  background-color: #e9bae5;\r\n}\r\n.account {\r\n  display: none;\r\n}\r\n.list_number {\r\n  background: black;\r\n  width: 30px;\r\n  height: 30px;\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  color: white;\r\n  font-size: 1.5rem;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n  padding: 2px;\r\n}\r\n#tag {\r\n  font-size: 1rem;\r\n  background-color: white;\r\n  width: fit-content;\r\n  padding: 5px;\r\n  transform: translate(-55px, -90px) rotate(-39deg);\r\n  border: solid grey thin;\r\n  border-radius: 5px;\r\n  width: 109px;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: clip;\r\n  color: black;\r\n}\r\n.list-title {\r\n  background-color: black;\r\n  color: white;\r\n  font-size: 1.4rem;\r\n  text-align: center;\r\n}\r\n.double-div {\r\n  display: flex;\r\n  border: solid black thin;\r\n  color: white;\r\n  font-family: var(--fancy-font);\r\n}\r\n.double-div > div {\r\n  width: 50%;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.list_type > div:first-child {\r\n  background-color: #dc5858;\r\n  border-right: solid black thin;\r\n}\r\n.list_type > div:last-child {\r\n  background-color: #39a6f6;\r\n}\r\n\r\n.dark_mode {\r\n  --primary-color: #eeeeee;\r\n  --primary-bg-color: #091126;\r\n}\r\n\r\n.light_mode {\r\n  --primary-color: #000000;\r\n  --primary-bg-color: #eeeeee;\r\n}\r\n\r\n@keyframes slide {\r\n  from {\r\n    transform: translateX(0px) rotate(0deg);\r\n  }\r\n  to {\r\n    transform: translateX(270px) rotate(40deg);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iDAAiD;AACnD;AACA;EACE,WAAW;EACX,cAAc;EACd,gCAAgC;EAChC,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,gCAAgC;EAChC,iBAAiB;AACnB;AACA;EACE,cAAc;EACd,qBAAqB;AACvB;AACA;EACE,eAAe;EACf,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,eAAe;AACjB;AACA;EACE,UAAU;EACV,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE;;;;GAIC;AACH;AACA;EACE;;;;GAIC;AACH;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,yCAAyC;EACzC,uBAAuB;AACzB;AACA;EACE,4BAA4B;EAC5B,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,iBAAiB;AACnB;AACA;EACE,YAAY;AACd;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,yBAAyB;EACzB,iBAAiB;EACjB,gCAAgC;EAChC,2BAA2B;EAC3B,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,4BAA4B;EAC5B,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,aAAa;EACb,iBAAiB;EACjB,QAAQ;AACV;AACA;EACE,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,uBAAuB;AACzB;;AAEA;EACE,eAAe;;EAEf,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,+BAA+B;EAC/B,iBAAiB;EACjB,eAAe;EACf,eAAe;EACf,WAAW;AACb;AACA;EACE,0BAA0B;EAC1B;;;;;GAKC;AACH;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,WAAW;EACX;;;;;GAKC;AACH;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,sCAAsC;AACxC;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,kCAAkC;EAClC,aAAa;EACb,YAAY;AACd;AACA;EACE,WAAW;EACX,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,qBAAqB;EACrB,6CAA6C;EAC7C,gCAAgC;AAClC;AACA;EACE,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,wBAAwB;EACxB,eAAe;EACf,eAAe;EACf,aAAa;EACb,6BAA6B;AAC/B;AACA;EACE,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,6BAA6B;EAC7B,0BAA0B;EAC1B,UAAU;AACZ;AACA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,iCAAiC;EACjC,6BAA6B;AAC/B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;AACf;AACA;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,iDAAiD;EACjD,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,wBAAwB;EACxB,YAAY;EACZ,8BAA8B;AAChC;AACA;EACE,UAAU;EACV,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,8BAA8B;AAChC;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA;EACE,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA;EACE;IACE,uCAAuC;EACzC;EACA;IACE,0CAA0C;EAC5C;AACF","sourcesContent":[":root {\r\n  --primary-font: \"Courier New\", Courier, monospace;\r\n}\r\nbody {\r\n  margin: 0px;\r\n  padding: 0.1px;\r\n  font-family: var(--primary-font);\r\n  color: var(--primary-color);\r\n}\r\n#song-search {\r\n  padding: 10px;\r\n  font-family: var(--primary-font);\r\n  font-size: 1.3rem;\r\n}\r\na {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n#start-song {\r\n  cursor: pointer;\r\n  background-color: #a2e6ff;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n}\r\n#start-song:hover {\r\n  filter: brightness(1.1);\r\n}\r\n#register {\r\n  display: none;\r\n}\r\n\r\n#logout-btn {\r\n  display: none;\r\n}\r\n#close-account {\r\n  width: fit-content;\r\n  align-self: flex-end;\r\n}\r\n\r\n.button-group {\r\n  display: flex;\r\n  color: var(--primary-color);\r\n  cursor: pointer;\r\n}\r\n.button-group > div {\r\n  width: 50%;\r\n  text-align: center;\r\n  padding-top: 5px;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n[data-form=\"login\"].active {\r\n  background-image: linear-gradient(\r\n    to left,\r\n    rgba(57, 166, 246, 0.1),\r\n    rgb(57, 166, 246)\r\n  );\r\n}\r\n[data-form=\"register\"].active {\r\n  background-image: linear-gradient(\r\n    to right,\r\n    rgba(57, 166, 246, 0.1),\r\n    rgb(57, 166, 246)\r\n  );\r\n}\r\n\r\n.auth-wrapper {\r\n  width: 30vw;\r\n  min-width: 300px;\r\n  background-color: var(--primary-bg-color);\r\n  border: solid grey thin;\r\n}\r\n#settings {\r\n  border-left: solid grey thin;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  font-size: 1.5rem;\r\n}\r\n#settings > label {\r\n  padding: 5px;\r\n}\r\n#settings > input {\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: solid grey;\r\n  border-width: 1px;\r\n  font-family: var(--primary-font);\r\n  color: var(--primary-color);\r\n  font-size: 1.3rem;\r\n}\r\n#account {\r\n  width: 30vw;\r\n  min-width: 300px;\r\n  border-left: solid grey thin;\r\n  padding: 15px;\r\n}\r\n\r\n#account label {\r\n  font-size: 1.6rem;\r\n}\r\n#account .text-value {\r\n  font-size: 1.5rem;\r\n  margin-top: 15px;\r\n}\r\n.add-form {\r\n  display: none;\r\n  flex-direction: column;\r\n  background-color: #ffdbe6;\r\n  height: 350px;\r\n  font-size: 1.4rem;\r\n  gap: 5px;\r\n}\r\n.add-form > input {\r\n  width: 80%;\r\n  align-self: center;\r\n}\r\n#beat_map {\r\n  text-align: center;\r\n}\r\n\r\n.add-form > button {\r\n  background-color: rgb(17, 36, 184);\r\n  border: none;\r\n  color: white;\r\n  font-size: 1.4rem;\r\n  cursor: pointer;\r\n}\r\n.add-form > button:hover {\r\n  filter: brightness(1.2);\r\n}\r\n\r\n.background_image {\r\n  position: fixed;\r\n\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -2;\r\n  filter: brightness(0.6);\r\n  background-size: cover;\r\n}\r\n\r\n.logo {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.cover {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 38px;\r\n}\r\n.menu-options {\r\n  display: flex;\r\n  height: 70vh;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 10px;\r\n}\r\n.menu-options div {\r\n  color: rgba(255, 255, 255, 0.8);\r\n  padding-left: 8vw;\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n  width: 35vw;\r\n}\r\n.menu-options div:hover {\r\n  background: rgb(246, 0, 0);\r\n  background: linear-gradient(\r\n    90deg,\r\n    rgb(195, 37, 20) 0%,\r\n    rgb(255, 10, 10) 47%,\r\n    rgba(255, 0, 0, 0) 100%\r\n  );\r\n}\r\n.background-overlay {\r\n  position: absolute;\r\n  height: 100vh;\r\n  width: 45vw;\r\n  z-index: -1;\r\n  background: linear-gradient(\r\n    90deg,\r\n    rgb(0, 0, 0) 0%,\r\n    rgba(0, 0, 0, 0.8) 80%,\r\n    rgba(255, 0, 0, 0) 100%\r\n  );\r\n}\r\n#song_wrapper {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: none;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(0, 0, 0, 0.452);\r\n}\r\n.song_select {\r\n  background-color: #9b9b99;\r\n  width: 500px;\r\n  height: 500px;\r\n  position: relative;\r\n  z-index: 2;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  border: rgba(3, 3, 3, 0.442) solid;\r\n  padding: 15px;\r\n  color: black;\r\n}\r\n.song-name {\r\n  width: 100%;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n#song_list {\r\n  width: 100%;\r\n  background-color: #ffdbe6;\r\n  padding: 0px;\r\n  margin: 0px;\r\n  height: 330px;\r\n  overflow-y: scroll;\r\n  scrollbar-width: thin;\r\n  scrollbar-color: #e96fdc rgba(0, 0, 0, 0.382);\r\n  font-family: var(--primary-font);\r\n}\r\n#song_list a {\r\n  color: black;\r\n}\r\n#song_list > li {\r\n  list-style: none;\r\n  margin: 0px;\r\n  padding: 7px;\r\n  border: black solid thin;\r\n  cursor: pointer;\r\n  font-size: 2rem;\r\n  display: grid;\r\n  grid-template: 1fr/ 0.2fr 1fr;\r\n}\r\n#song_list > li:hover {\r\n  border: #e96fdc solid;\r\n}\r\n.disk {\r\n  width: 480px;\r\n  height: 480px;\r\n  border-radius: 50%;\r\n  display: grid;\r\n  align-items: center;\r\n  justify-items: right;\r\n  position: absolute;\r\n  background-color: transparent;\r\n  background-size: 100% 100%;\r\n  z-index: 1;\r\n}\r\n.disk_slide {\r\n  animation-name: slide;\r\n  animation-duration: 0.5s;\r\n  animation-timing-function: linear;\r\n  animation-fill-mode: forwards;\r\n}\r\n.selected {\r\n  background-color: #e9bae5;\r\n}\r\n.account {\r\n  display: none;\r\n}\r\n.list_number {\r\n  background: black;\r\n  width: 30px;\r\n  height: 30px;\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  color: white;\r\n  font-size: 1.5rem;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n  padding: 2px;\r\n}\r\n#tag {\r\n  font-size: 1rem;\r\n  background-color: white;\r\n  width: fit-content;\r\n  padding: 5px;\r\n  transform: translate(-55px, -90px) rotate(-39deg);\r\n  border: solid grey thin;\r\n  border-radius: 5px;\r\n  width: 109px;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: clip;\r\n  color: black;\r\n}\r\n.list-title {\r\n  background-color: black;\r\n  color: white;\r\n  font-size: 1.4rem;\r\n  text-align: center;\r\n}\r\n.double-div {\r\n  display: flex;\r\n  border: solid black thin;\r\n  color: white;\r\n  font-family: var(--fancy-font);\r\n}\r\n.double-div > div {\r\n  width: 50%;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.list_type > div:first-child {\r\n  background-color: #dc5858;\r\n  border-right: solid black thin;\r\n}\r\n.list_type > div:last-child {\r\n  background-color: #39a6f6;\r\n}\r\n\r\n.dark_mode {\r\n  --primary-color: #eeeeee;\r\n  --primary-bg-color: #091126;\r\n}\r\n\r\n.light_mode {\r\n  --primary-color: #000000;\r\n  --primary-bg-color: #eeeeee;\r\n}\r\n\r\n@keyframes slide {\r\n  from {\r\n    transform: translateX(0px) rotate(0deg);\r\n  }\r\n  to {\r\n    transform: translateX(270px) rotate(40deg);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/audio/buttonpress-94482.mp3":
/*!*****************************************!*\
  !*** ./src/audio/buttonpress-94482.mp3 ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ba681e3eb21c90d84b1d36d195566f44.mp3");

/***/ }),

/***/ "./src/audio/interface-124464.mp3":
/*!****************************************!*\
  !*** ./src/audio/interface-124464.mp3 ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b6ba29659cf55d571cc0af85dc3d5bf7.mp3");

/***/ }),

/***/ "./src/audio/reflected-light-147979.mp3":
/*!**********************************************!*\
  !*** ./src/audio/reflected-light-147979.mp3 ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "2c68c874f03aea4d3bc1e8674dbf6199.mp3");

/***/ }),

/***/ "./src/video/particles-27669.mp4":
/*!***************************************!*\
  !*** ./src/video/particles-27669.mp4 ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ed36aa123702ef6b3ad4cf58b9fdc731.mp4");

/***/ }),

/***/ "./src/general.css":
/*!*************************!*\
  !*** ./src/general.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./general.css */ "./node_modules/css-loader/dist/cjs.js!./src/general.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

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

/***/ "./src/dom-manipulation/home-dom.js":
/*!******************************************!*\
  !*** ./src/dom-manipulation/home-dom.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountEdit": () => (/* binding */ accountEdit),
/* harmony export */   "addErrorMessage": () => (/* binding */ addErrorMessage),
/* harmony export */   "animateDisk": () => (/* binding */ animateDisk),
/* harmony export */   "authSwitch": () => (/* binding */ authSwitch),
/* harmony export */   "authenticatedView": () => (/* binding */ authenticatedView),
/* harmony export */   "clearList": () => (/* binding */ clearList),
/* harmony export */   "domSettings": () => (/* binding */ domSettings),
/* harmony export */   "generateSong": () => (/* binding */ generateSong),
/* harmony export */   "handleAccountPage": () => (/* binding */ handleAccountPage),
/* harmony export */   "handleLoginDialog": () => (/* binding */ handleLoginDialog),
/* harmony export */   "handleSongModal": () => (/* binding */ handleSongModal),
/* harmony export */   "initialize": () => (/* binding */ initialize),
/* harmony export */   "notAuthenticatedView": () => (/* binding */ notAuthenticatedView),
/* harmony export */   "pauseHoverSound": () => (/* binding */ pauseHoverSound),
/* harmony export */   "playClickSound": () => (/* binding */ playClickSound),
/* harmony export */   "playHoverSound": () => (/* binding */ playHoverSound),
/* harmony export */   "populateAccountForm": () => (/* binding */ populateAccountForm),
/* harmony export */   "removeSongFocus": () => (/* binding */ removeSongFocus),
/* harmony export */   "selectSong": () => (/* binding */ selectSong),
/* harmony export */   "showLoading": () => (/* binding */ showLoading),
/* harmony export */   "showPassword": () => (/* binding */ showPassword)
/* harmony export */ });
/* harmony import */ var _images_disk_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/disk.png */ "./src/images/disk.png");
/* harmony import */ var _audio_buttonpress_94482_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../audio/buttonpress-94482.mp3 */ "./src/audio/buttonpress-94482.mp3");
/* harmony import */ var _audio_interface_124464_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio/interface-124464.mp3 */ "./src/audio/interface-124464.mp3");
/* harmony import */ var _video_particles_27669_mp4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../video/particles-27669.mp4 */ "./src/video/particles-27669.mp4");
/* harmony import */ var _audio_reflected_light_147979_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../audio/reflected-light-147979.mp3 */ "./src/audio/reflected-light-147979.mp3");






function initialize(verified) {
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
  audioHover.src = _audio_buttonpress_94482_mp3__WEBPACK_IMPORTED_MODULE_1__["default"];
  audioSelect.src = _audio_interface_124464_mp3__WEBPACK_IMPORTED_MODULE_2__["default"];
  audioSelect.playbackRate = 1;
  document.querySelector("body").prepend(audioHover, audioSelect);

  // add background image & audio
  const backgroundImage = document.querySelector(".background_image");
  const homeAudio = document.querySelector("#home-audio");
  homeAudio.src = _audio_reflected_light_147979_mp3__WEBPACK_IMPORTED_MODULE_4__["default"];
  homeAudio.volume = 0.2;
  // homeAudio.play();
  backgroundImage.src = _video_particles_27669_mp4__WEBPACK_IMPORTED_MODULE_3__["default"];
  backgroundImage.play();

  // add disk image
  const Disk = document.querySelector(".disk");
  Disk.style.backgroundImage = `url(${_images_disk_png__WEBPACK_IMPORTED_MODULE_0__})`;
}

function removeSongFocus() {
  const items = document.querySelector("#song_list").children;
  Array.from(items).forEach((song) => {
    if (song.classList.contains("selected")) {
      song.classList.remove("selected");
    }
  });
}

function animateDisk() {
  const Disk = document.querySelector(".disk");

  Disk.classList.toggle("disk_slide");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      Disk.classList.toggle("disk_slide");
    });
  });
}
function showLoading(id, display) {
  const loadingIndicator = document.querySelector(`#${id}`);
  loadingIndicator.style.display = display;
}
function clearList(listID) {
  const list = document.querySelector(`#${listID}`);
  while (list.firstChild) {
    list.firstChild.remove();
  }
}
function generateSong(song) {
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

function selectSong(song, listItem) {
  const diskTag = document.querySelector("#tag").children[0];
  removeSongFocus();
  diskTag.textContent = song.name;
  listItem.classList.toggle("selected");
  animateDisk();
  const startSongBtn = document.querySelector("#start-song");
  startSongBtn.parentNode.href = `player.html?song=${song.id}`;
}
function authenticatedView() {
  const authBtn = document.querySelector(".auth");
  const accountBtn = document.querySelector(".account");
  const logout = document.querySelector("#logout-btn");
  const loginDialog = document.querySelector("#auth-dialog");
  authBtn.style.display = "none";
  accountBtn.style.display = "block";
  loginDialog.style.display = "none";
  logout.style.display = "block";
}
function notAuthenticatedView() {
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
function authSwitch(button) {
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
function handleLoginDialog(open) {
  const loginDialog = document.querySelector("#auth-dialog");
  loginDialog.style.display = open ? "flex" : "none";
}
function handleAccountPage(open) {
  const accountPage = document.querySelector("#account-dialog");
  accountPage.style.display = open ? "flex" : "none";
}
function handleSongModal(open) {
  const songModal = document.querySelector("#song_wrapper");
  songModal.style.display = open ? "flex" : "none";
  const startSongBtn = document.querySelector("#start-song");
  // eslint-disable-next-line no-script-url
  startSongBtn.parentNode.href = "javascript:void(0)";
}
function populateAccountForm(userName, email, verified) {
  const userNameValue = document.querySelector("#username-value");
  userNameValue.textContent = userName;
  const emailValue = document.querySelector("#email-value");
  emailValue.textContent = email;
  if (verified === false) {
    const verifyBtn = document.querySelector("#verify-button");
    verifyBtn.style.display = "inline-block";
  }
}
function accountEdit(formID, view, edit) {
  const form = document.querySelector(`#${formID}`);
  const valueView = form.querySelector(".value-view");
  valueView.style.display = view;
  const editView = form.querySelector(".edit-view");
  editView.style.display = edit;
}

function playHoverSound() {
  const audioHover = document.querySelector("#hover-sound");

  audioHover.currentTime = 0;
  audioHover.play();
}
function pauseHoverSound() {
  const audioHover = document.querySelector("#hover-sound");
  audioHover.pause();
}
function playClickSound() {
  const audioSelect = document.querySelector("#select-sound");
  audioSelect.currentTime = 0;
  audioSelect.play();
}

function showPassword(show, id) {
  const password = document.querySelector(`#${id}`);
  password.type = show ? "text" : "password";
}

function addErrorMessage(message, id) {
  const error = document.querySelector(`#${id}`);
  error.textContent = message;
}
function domSettings(settings) {
  const music = document.querySelector("#music-volume");
  const hit = document.querySelector("#hit-sound");
  const offset = document.querySelector("#time-offset");
  const brightness = document.querySelector("#background-opacity");
  music.value = settings.music * 10;
  hit.value = settings.songItem * 10;
  offset.value = settings.offset;
  brightness.value = settings.opacity * 10;
}


/***/ }),

/***/ "./src/managers/map_manager.js":
/*!*************************************!*\
  !*** ./src/managers/map_manager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ beatMapManager)
/* harmony export */ });
/* harmony import */ var _api_kareoke__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/kareoke */ "./src/api/kareoke.js");
/* harmony import */ var _utility_js_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility.js/storage */ "./src/utility.js/storage.js");




function beatMapManager() {
  let audioUrl;
  let backgroundUrl;
  let selectedMap;
  let controller = new AbortController();
  let searchController = new AbortController();

  const getBackgroundUrl = () => backgroundUrl;
  const getAudioUrl = () => audioUrl;
  const getSelectedMap = () => selectedMap;

  const setSelectedMap = (map) => {
    selectedMap = map;
    localStorage.setItem("selectedMap", JSON.stringify(map));
    const localMap = (0,_utility_js_storage__WEBPACK_IMPORTED_MODULE_1__.getLocalMap)(selectedMap.id);

    if (localMap) {
      selectedMap.beatMap = localMap;
    }
    if (!localMap) {
      const remoteMap = JSON.parse(selectedMap.beatMap);
      selectedMap.beatMap = remoteMap;
      (0,_utility_js_storage__WEBPACK_IMPORTED_MODULE_1__.saveLocalMap)({ id: selectedMap.id, beatMap: remoteMap });
    }
  };

  const clearSelectedMap = () => {
    localStorage.removeItem("selectedMap");
    selectedMap = null;
  };

  const abortSelection = () => {
    controller.abort();
    controller = new AbortController();
  };
  const abortSearch = () => {
    searchController.abort();
    searchController = new AbortController();
  };

  const generateBlobUrl = async ({ audio, background }) => {
    URL.revokeObjectURL(backgroundUrl);
    URL.revokeObjectURL(audioUrl);
    const [audioBlob, backgroundBloB] = await Promise.all([
      (0,_api_kareoke__WEBPACK_IMPORTED_MODULE_0__.getMedia)(audio, controller.signal),
      (0,_api_kareoke__WEBPACK_IMPORTED_MODULE_0__.getMedia)(background, controller.signal),
    ]);
    audioUrl = URL.createObjectURL(audioBlob);
    backgroundUrl = URL.createObjectURL(backgroundBloB);
  };
  const getExtension = (name) => name.split(".").pop();

  const checkSelectedSong = async () => {
    const map = JSON.parse(localStorage.getItem("selectedMap"));
    if (map) {
      const getMap = await (0,_api_kareoke__WEBPACK_IMPORTED_MODULE_0__.getBeatMap)(map.id, controller.signal);
      setSelectedMap(getMap);
      await generateBlobUrl(selectedMap);
      return true;
    }
    return false;
  };
  const addBeatMap = (formData) => {
    const response = (0,_api_kareoke__WEBPACK_IMPORTED_MODULE_0__.uploadBeatmap)(formData);
    return response;
  };
  const changeMedia = async (type, file) => {
    // check if changing media will exceed maximum file size
    if (!selectedMap) {
      throw new Error("No map selected");
    }
    const currentMap = selectedMap;
    const formData = new FormData();
    formData.append("type", type);
    formData.append("media", file);
    formData.append("mapID", selectedMap.id);
    const newURL = await (0,_api_kareoke__WEBPACK_IMPORTED_MODULE_0__.editMedia)(formData);
    selectedMap[type] = newURL;
    return {
      newURL,
      reload: selectedMap === currentMap,
      extension: getExtension(newURL),
    };
  };
  const deleteBeatMap = async (id) => {
    const response = await (0,_api_kareoke__WEBPACK_IMPORTED_MODULE_0__.deleteMap)(id);
    URL.revokeObjectURL(backgroundUrl);
    URL.revokeObjectURL(audioUrl);
    if (id === selectedMap?.id) {
      clearSelectedMap();
    }
    (0,_utility_js_storage__WEBPACK_IMPORTED_MODULE_1__.deleteLocalMap)(id);

    return response;
  };
  const publishMap = async (mapID) => {
    const response = await (0,_api_kareoke__WEBPACK_IMPORTED_MODULE_0__.publishRequest)(mapID);
    return response;
  };

  const saveMapRemote = async (id) => {
    const response = await (0,_api_kareoke__WEBPACK_IMPORTED_MODULE_0__.saveBeatMap)({
      id,
      column: "beatMap",
      value: (0,_utility_js_storage__WEBPACK_IMPORTED_MODULE_1__.getLocalMap)(id) || [],
    });

    return response;
  };

  const saveMapName = async (value) => {
    if (!selectedMap) {
      throw new Error("No map selected");
    }
    const currentMap = selectedMap;
    const response = await (0,_api_kareoke__WEBPACK_IMPORTED_MODULE_0__.saveBeatMap)({
      id: selectedMap.id,
      column: "name",
      value,
    });
    currentMap.name = value;
    // fix this so that updating the selected map(dom) doesnt need the extension
    return {
      response,
      reload: currentMap === selectedMap,
      extension: getExtension(currentMap.background),
    };
  };
  const handleGetUserBeatMaps = async () => {
    const beatMaps = await (0,_api_kareoke__WEBPACK_IMPORTED_MODULE_0__.getUserBeatMaps)();
    return beatMaps;
  };
  const handleGetBeatMaps = async (page, search) => {
    const searchKeys = search
      .split(" ")
      .filter((key) => key !== "")
      .join(",");
    abortSearch();
    const response = await (0,_api_kareoke__WEBPACK_IMPORTED_MODULE_0__.getBeatMaps)(
      page,
      searchKeys,
      searchController.signal
    );
    return response;
  };
  const loadMap = async (id) => {
    const mapInfo = await (0,_api_kareoke__WEBPACK_IMPORTED_MODULE_0__.getBeatMap)(id);
    await generateBlobUrl(mapInfo);

    return {
      mapInfo,
      audioUrl,
      backgroundUrl,
      extension: getExtension(mapInfo.background),
    };
  };

  return {
    saveMapRemote,
    handleGetUserBeatMaps,
    handleGetBeatMaps,
    getBackgroundUrl,
    getAudioUrl,
    generateBlobUrl,
    getSelectedMap,
    setSelectedMap,
    addBeatMap,
    checkSelectedSong,
    getExtension,
    abortSelection,
    clearSelectedMap,
    loadMap,
    deleteBeatMap,
    publishMap,
    saveMapName,
    changeMedia,
  };
}


/***/ }),

/***/ "./src/managers/user-manager.js":
/*!**************************************!*\
  !*** ./src/managers/user-manager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ userFactory)
/* harmony export */ });
/* harmony import */ var _api_authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/authentication */ "./src/api/authentication.js");
/* harmony import */ var _utility_js_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility.js/storage */ "./src/utility.js/storage.js");



function userFactory() {
  let userData = { isLogin: false };
  const getUserData = () => userData;
  const setUserData = (property, value) => {
    userData[property] = value;
  };
  const handleLogin = async (authData) => {
    const loginResponse = await (0,_api_authentication__WEBPACK_IMPORTED_MODULE_0__.login)(authData);
    userData = { ...loginResponse, isLogin: true };
    sessionStorage.setItem("csrfToken", userData.csrfToken);
    (0,_utility_js_storage__WEBPACK_IMPORTED_MODULE_1__.saveUserInfo)(userData);
  };
  const handleRegister = async (data) => {
    const registerResponse = await (0,_api_authentication__WEBPACK_IMPORTED_MODULE_0__.register)(data);

    return registerResponse;
  };
  const isLogin = async () => {
    const userInfo = (0,_utility_js_storage__WEBPACK_IMPORTED_MODULE_1__.getUserInfo)();
    if (!userInfo) {
      return;
    }

    const response = await (0,_api_authentication__WEBPACK_IMPORTED_MODULE_0__.check)(userInfo);
    const responseData = await response.json();
    userData = { ...responseData, isLogin: true };
    sessionStorage.setItem("csrfToken", userData.csrfToken);
    (0,_utility_js_storage__WEBPACK_IMPORTED_MODULE_1__.saveUserInfo)(responseData);
  };
  const handleLogout = async () => {
    const userInfo = (0,_utility_js_storage__WEBPACK_IMPORTED_MODULE_1__.getUserInfo)();
    const logoutResponse = await (0,_api_authentication__WEBPACK_IMPORTED_MODULE_0__.logout)(userInfo);
    return logoutResponse;
  };
  const handlePasswordChange = async (currentPassword, newPassword) => {
    const response = await (0,_api_authentication__WEBPACK_IMPORTED_MODULE_0__.changePassword)(
      userData.email,
      currentPassword,
      newPassword
    );
    return response;
  };

  const handleEditAccount = async (password, column, value) => {
    const response = await (0,_api_authentication__WEBPACK_IMPORTED_MODULE_0__.editAccountInfo)(
      password,
      userData.email,
      column,
      value
    );
    return response;
  };
  const handleEmailVerifyGeneration = async () => {
    const response = await (0,_api_authentication__WEBPACK_IMPORTED_MODULE_0__.generateEmailVerifyToken)();
    return response;
  };

  return {
    getUserData,
    setUserData,
    handleLogin,
    handleRegister,
    isLogin,
    handleLogout,
    handlePasswordChange,
    handleEditAccount,
    handleEmailVerifyGeneration,
  };
}


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


/***/ }),

/***/ "./src/utility.js/storage.js":
/*!***********************************!*\
  !*** ./src/utility.js/storage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteLocalMap": () => (/* binding */ deleteLocalMap),
/* harmony export */   "getLocalMap": () => (/* binding */ getLocalMap),
/* harmony export */   "getSettings": () => (/* binding */ getSettings),
/* harmony export */   "getUserInfo": () => (/* binding */ getUserInfo),
/* harmony export */   "saveLocalMap": () => (/* binding */ saveLocalMap),
/* harmony export */   "saveUserInfo": () => (/* binding */ saveUserInfo),
/* harmony export */   "updateSettings": () => (/* binding */ updateSettings)
/* harmony export */ });
function saveUserInfo(info) {
  localStorage.setItem("info", JSON.stringify(info));
}
function getUserInfo() {
  const info = localStorage.getItem("info");
  return JSON.parse(info);
}
const getMaps = () => {
  let maps = JSON.parse(localStorage.getItem("maps"));
  if (!maps) {
    localStorage.setItem("maps", JSON.stringify([]));
    maps = JSON.parse(localStorage.getItem("maps"));
  }
  return maps;
};
function getLocalMap(id) {
  const maps = getMaps();
  const found = maps.find((map) => map.id === id);
  return found?.beatMap;
}

function saveLocalMap({ id, beatMap }) {
  const maps = getMaps();
  // find the map
  const target = maps.find((map) => map.id === id);
  if (target) {
    target.beatMap = beatMap;
  } else {
    maps.push({ id, beatMap });
  }
  localStorage.setItem("maps", JSON.stringify(maps));
}
function deleteLocalMap(id) {
  const maps = getMaps();
  const filtered = maps.filter((map) => map.id !== id);
  localStorage.setItem("maps", JSON.stringify(filtered));
}
function updateSettings(property, value) {
  let settings = JSON.parse(localStorage.getItem("settings"));
  if (!settings) {
    localStorage.setItem(
      "settings",
      JSON.stringify({
        music: 0.5,
        hit: 0.5,
        offset: 0,
        opacity: 0.7,
      })
    );
    settings = JSON.parse(localStorage.getItem("settings"));
  }
  settings[property] = value;
  localStorage.setItem("settings", JSON.stringify(settings));
}

function getSettings() {
  const defaultSettings = {
    music: 0.5,
    hit: 0.7,
    offset: 0,
    opacity: 1,
  };

  const settings = JSON.parse(localStorage.getItem("settings"));
  return settings || defaultSettings;
}


/***/ }),

/***/ "./src/images/disk.png":
/*!*****************************!*\
  !*** ./src/images/disk.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57e7c34b48708d08be3f.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _general_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general.css */ "./src/general.css");
/* harmony import */ var _dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-manipulation/home-dom */ "./src/dom-manipulation/home-dom.js");
/* harmony import */ var _managers_user_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./managers/user-manager */ "./src/managers/user-manager.js");
/* harmony import */ var _managers_map_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./managers/map_manager */ "./src/managers/map_manager.js");
/* harmony import */ var _utility_js_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utility.js/storage */ "./src/utility.js/storage.js");







const userManager = (0,_managers_user_manager__WEBPACK_IMPORTED_MODULE_3__["default"])();
const mapManager = (0,_managers_map_manager__WEBPACK_IMPORTED_MODULE_4__["default"])();
let hoverDebounce = null;
let page = 1;
let end = false;
let searchKey = "";
let searching = false;

const infiniteLoad = (search = false) => {
  if (searching || end) return;

  (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.showLoading)("search-indicator", "block");

  mapManager
    .handleGetBeatMaps(page, searchKey)
    .then((songs) => {
      if (search) (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.clearList)("song_list");

      if (songs.length === 0) {
        end = true;
        return;
      }
      page += 1;

      songs.forEach((song) => {
        const listItem = (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.generateSong)(song);
        listItem.addEventListener("click", () => {
          (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.selectSong)(song, listItem);
        });
      });
    })
    .catch((err) => {
      console.log(err);
      console.log("Problem getting user beat maps");
    })
    .finally(() => {
      searching = false;
      (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.showLoading)("search-indicator", "none");
    });
};
const searchSong = (newKey) => {
  page = 1;
  end = false;
  searching = false;
  searchKey = newKey;
  infiniteLoad(true);
};

(0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.initialize)();
(0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.domSettings)((0,_utility_js_storage__WEBPACK_IMPORTED_MODULE_5__.getSettings)());

userManager.isLogin().then(() => {
  if (userManager.getUserData()?.isLogin) {
    (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.authenticatedView)();
  }
  const { userName, email, verified } = userManager.getUserData();
  (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.populateAccountForm)(userName, email, verified);
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
    (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.handleLoginDialog)(false);
  }
});

const songModal = document.querySelector("#song_wrapper");
songModal.addEventListener("click", (e) => {
  if (e.target.id === "song_wrapper") {
    (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.handleSongModal)(false);
    // eslint-disable-next-line no-script-url
    (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.removeSongFocus)();
  }
});

document.querySelector("#auth-dialog").addEventListener("click", (e) => {
  if (e.target.id === "auth-dialog") {
    (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.handleLoginDialog)(false);
  }
});

document.querySelector(".play").addEventListener("click", () => {
  (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.handleSongModal)(true);
});

document.querySelector(".auth").addEventListener("click", () => {
  (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.handleLoginDialog)(true);
});

const accountBtn = document.querySelector(".account");
accountBtn.addEventListener("click", () => {
  (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.handleAccountPage)(true);
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
      (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.authenticatedView)();
      console.log(res);
      const { userName, email, verified } = userManager.getUserData();
      (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.populateAccountForm)(userName, email, verified);
      (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.addErrorMessage)("", "login-error");
    })
    .catch((err) => {
      console.log(err);
      (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.addErrorMessage)(err, "login-error");
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
      (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.handleLoginDialog)(false);
      console.log(res);
      (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.addErrorMessage)("", "register-error");
    })
    .catch((err) => {
      console.log(err);
      (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.addErrorMessage)(err, "register-error");
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});

const accountPageClose = document.querySelector("#account-dialog");
accountPageClose.addEventListener("click", (e) => {
  if (e.target.id !== "account-dialog") return;
  (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.handleAccountPage)(false);
});

document.querySelector("#logout-btn").addEventListener("click", () => {
  userManager
    .handleLogout()
    .then((res) => {
      console.log(res);
      (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.notAuthenticatedView)();
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
      (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.accountEdit)("password-form", "block", "none");
    })
    .catch((err) => console.log(err));
});
document
  .querySelector("#password-edit")
  .addEventListener("click", () =>
    (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.accountEdit)("password-form", "none", "block")
  );
document
  .querySelector("#password-close")
  .addEventListener("click", () =>
    (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.accountEdit)("password-form", "block", "none")
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
      (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.accountEdit)("username-form", "block", "none");
      const { userName, email } = userManager.getUserData();
      (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.populateAccountForm)(userName, email);
      e.target.reset();
    })
    .catch((err) => {
      console.log(err);
    });
});
document
  .querySelector("#username-edit")
  .addEventListener("click", () =>
    (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.accountEdit)("username-form", "none", "block")
  );
document
  .querySelector("#username-close")
  .addEventListener("click", () =>
    (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.accountEdit)("username-form", "block", "none")
  );

document.querySelector("#email-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  userManager
    .handleEditAccount(data.get("currentPassword"), "email", data.get("email"))
    .then(() => {
      userManager.setUserData("email", data.get("email"));
      (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.accountEdit)("email-form", "block", "none");
      const { userName, email } = userManager.getUserData();
      (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.populateAccountForm)(userName, email);
      e.target.reset();
    })
    .catch((err) => {
      console.log(err);
    });
});
document
  .querySelector("#email-edit")
  .addEventListener("click", () => (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.accountEdit)("email-form", "none", "block"));
document
  .querySelector("#email-close")
  .addEventListener("click", () => (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.accountEdit)("email-form", "block", "none"));

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

document
  .querySelector("#show-password-register")
  .addEventListener("click", (e) => {
    (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.showPassword)(e.target.checked, "password-register");
  });
document
  .querySelector("#show-password-login")
  .addEventListener("click", (e) => {
    (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.showPassword)(e.target.checked, "password-login");
  });
// authentication button group
const buttonGroupMember = document.querySelector(".button-group").children;
Object.keys(buttonGroupMember).forEach((button) => {
  buttonGroupMember[button].addEventListener("click", (e) => {
    (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.authSwitch)(e.target);
  });
});

// add audio to menu options
const optionElements = document.querySelector(".menu-options").children;

Object.keys(optionElements).forEach((option) => {
  optionElements[option].addEventListener("mouseover", () => {
    hoverDebounce = setTimeout(() => {
      (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.playHoverSound)();
    }, 50);
  });
  optionElements[option].addEventListener("mouseout", () => {
    (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.pauseHoverSound)();
    clearTimeout(hoverDebounce);
  });

  optionElements[option].addEventListener("click", () => {
    (0,_dom_manipulation_home_dom__WEBPACK_IMPORTED_MODULE_2__.playClickSound)();
  });
});

document.querySelector("#music-volume").addEventListener("change", (e) => {
  (0,_utility_js_storage__WEBPACK_IMPORTED_MODULE_5__.updateSettings)("music", Number(e.target.value) / 10);
});
document.querySelector("#hit-sound").addEventListener("change", (e) => {
  (0,_utility_js_storage__WEBPACK_IMPORTED_MODULE_5__.updateSettings)("hit", Number(e.target.value) / 10);
});

document.querySelector("#time-offset").addEventListener("click", (e) => {
  (0,_utility_js_storage__WEBPACK_IMPORTED_MODULE_5__.updateSettings)("offset", e.target.value);
});
document.querySelector("#time-offset").addEventListener("keyup", (e) => {
  (0,_utility_js_storage__WEBPACK_IMPORTED_MODULE_5__.updateSettings)("offset", e.target.value);
});

document
  .querySelector("#background-opacity")
  .addEventListener("change", (e) => {
    (0,_utility_js_storage__WEBPACK_IMPORTED_MODULE_5__.updateSettings)("opacity", Number(e.target.value) / 10);
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

})();

/******/ })()
;
//# sourceMappingURL=script.bundle.js.map