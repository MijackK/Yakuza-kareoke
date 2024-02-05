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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/kareoke_player/player.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/kareoke_player/player.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  display: grid;\r\n  grid-template: 1fr 1fr 1fr/1fr;\r\n  height: 100vh;\r\n  min-width: 1920px;\r\n  max-width: 1920px;\r\n  overflow-x: hidden;\r\n  color: var(--primary-color);\r\n  background-color: rgb(0, 0, 0);\r\n  font-family: var(--primary-font);\r\n}\r\n#time {\r\n  font-size: 1.7rem;\r\n  color: rgb(84, 83, 83);\r\n}\r\n.score {\r\n  font-size: 2.5rem;\r\n  letter-spacing: 3px;\r\n  color: var(--score-color);\r\n  font-family: \"Titillium Web\", sans-serif;\r\n  text-shadow: 3px 1px 1px var(--horizontal-line);\r\n}\r\n.score-summary {\r\n  display: flex;\r\n  width: 70%;\r\n  min-width: 400px;\r\n  justify-content: space-between;\r\n  font-size: 2rem;\r\n  padding: 3px;\r\n  border-bottom: solid;\r\n  border-width: thin;\r\n  border-color: gray;\r\n}\r\n#end-options {\r\n  font-size: 2rem;\r\n  margin-top: 40px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n#end-options div {\r\n  cursor: pointer;\r\n  max-width: 300px;\r\n}\r\n#end-options a {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n#end-options div:hover {\r\n  background: linear-gradient(\r\n    90deg,\r\n    rgb(195, 37, 20) 0%,\r\n    rgb(255, 10, 10) 47%,\r\n    rgba(255, 0, 0, 0) 100%\r\n  );\r\n}\r\n#calculate-score {\r\n  z-index: 100;\r\n  justify-content: flex-start;\r\n}\r\n#score-wrapper {\r\n  padding: 10px;\r\n  width: fit-content;\r\n  margin-top: 25px;\r\n  min-width: 400px;\r\n  max-width: 1450px;\r\n}\r\n#score-number {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 40px;\r\n  margin-bottom: 10px;\r\n  margin-top: 35px;\r\n  color: white;\r\n}\r\n#score-letter {\r\n  font-size: 5.5rem;\r\n  color: yellow;\r\n  text-shadow: 5px 3px 1px green;\r\n  font-weight: bold;\r\n}\r\n#high-score {\r\n  background-color: rgba(255, 0, 0, 0.5);\r\n  width: fit-content;\r\n  padding: 3px;\r\n  border-radius: 6px;\r\n}\r\n.background {\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: -10;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n.player {\r\n  grid-area: 2/1/3/2;\r\n  align-self: center;\r\n  display: grid;\r\n  grid-template: 50px 1fr/1fr;\r\n  width: 100vw;\r\n}\r\n.finger_board {\r\n  width: 100%;\r\n  height: 180px;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  display: flex;\r\n  grid-area: 2/1/3/2;\r\n}\r\n.horizontal-lines {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 180px;\r\n  width: 99vw;\r\n  left: 10px;\r\n}\r\n.horizontal-lines > div {\r\n  border-top: solid thin;\r\n  border-bottom: solid thin;\r\n  border-color: var(--horizontal-line);\r\n  box-shadow: 1px 1px 5px var(--horizontal-line);\r\n  flex: 1 1 auto;\r\n}\r\n.input_line {\r\n  position: relative;\r\n  height: 180px;\r\n  width: 3px;\r\n  background: var(--input-line);\r\n  left: 400px;\r\n  box-shadow: 1px 1px 15px var(--input-line);\r\n}\r\n.line-shadow {\r\n  width: 280px;\r\n  height: 180px;\r\n  background-image: var(--fade-color);\r\n  transform: translateX(-280px);\r\n}\r\n.button {\r\n  width: 45px;\r\n  height: 45px;\r\n  background-size: 100% 100%;\r\n}\r\n.click-button {\r\n  position: absolute;\r\n  transition: left 3.9s linear;\r\n  z-index: 10;\r\n  left: 1870.5px;\r\n}\r\n.long-container {\r\n  display: flex;\r\n  position: absolute;\r\n  left: 1870.5px;\r\n  z-index: 10;\r\n  color: red;\r\n  font-size: 2rem;\r\n  align-items: flex-start;\r\n}\r\n#combo-score {\r\n  font-size: 2.5rem;\r\n  letter-spacing: 3px;\r\n  font-family: \"Titillium Web\", sans-serif;\r\n}\r\n#combo-text {\r\n  font-size: 2.1rem;\r\n  font-family: \"Titillium Web\", sans-serif;\r\n}\r\n.combo-container {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  filter: brightness(1.2);\r\n  align-self: end;\r\n  margin-left: 20px;\r\n  width: 150px;\r\n  opacity: 0;\r\n}\r\n.combo-container > div {\r\n  background-color: red; /* For browsers that do not support gradients */\r\n  background-image: var(--combo-color);\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  color: transparent;\r\n  font-weight: bold;\r\n  font-style: italic;\r\n  text-align: center;\r\n  text-shadow: 1px 1px #ffffff38;\r\n  line-height: 1;\r\n}\r\n\r\n.duration-line {\r\n  background-color: white;\r\n  height: 10px;\r\n  align-self: center;\r\n  border-top: solid black;\r\n  border-bottom: solid black;\r\n  text-align: center;\r\n}\r\n.long-container > div {\r\n  position: static;\r\n}\r\n\r\n.visualiser-container {\r\n  position: absolute;\r\n  display: flex;\r\n  gap: 9px;\r\n  flex-direction: column;\r\n  transform: translateY(-18px);\r\n  left: 378px;\r\n}\r\n.visualiser-container > div {\r\n  position: relative;\r\n}\r\n.info-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr /1fr;\r\n}\r\n.input-visualiser {\r\n  border: solid rgb(123, 120, 120);\r\n  opacity: 0;\r\n}\r\n.performance-visualiser {\r\n  position: relative;\r\n  color: green;\r\n  grid-area: 1/1/2/2;\r\n  align-self: end;\r\n  left: 365px;\r\n  background-size: 100% 100%;\r\n  width: 90px;\r\n  height: 40px;\r\n  opacity: 0;\r\n}\r\n.explode-animation {\r\n  animation-name: explode;\r\n  animation-duration: 0.2s;\r\n  animation-timing-function: linear;\r\n}\r\n.popup-animation {\r\n  animation-name: popup;\r\n  animation-duration: 0.2s;\r\n  animation-timing-function: linear;\r\n}\r\n\r\n.jump-animation {\r\n  animation-name: jump;\r\n  animation-duration: 0.1s;\r\n  animation-timing-function: linear;\r\n}\r\n\r\n.cplayer {\r\n  margin-top: 10px;\r\n  width: 100vw;\r\n  height: 215px;\r\n  transform: translateY(22.5px);\r\n  position: absolute;\r\n  z-index: 10;\r\n}\r\n\r\n.heat-mode {\r\n  --combo-color: linear-gradient(yellow, red);\r\n  --input-line: #f7e378;\r\n  --horizontal-line: #7f3e10;\r\n  --score-color: wheat;\r\n  --fade-color: linear-gradient(\r\n    to right,\r\n    rgba(247, 227, 120, 0),\r\n    rgba(247, 227, 120, 0.7)\r\n  );\r\n}\r\n.cold-mode {\r\n  --combo-color: linear-gradient(rgb(255, 255, 255), blue);\r\n  --input-line: rgb(60, 239, 230);\r\n  --horizontal-line: #6579a8a7;\r\n  --score-color: rgb(172, 172, 228);\r\n  --fade-color: linear-gradient(\r\n    to right,\r\n    rgba(60, 239, 230, 0),\r\n    rgba(60, 239, 230, 0.7)\r\n  );\r\n}\r\n#loading-disk {\r\n  width: 15vw;\r\n  height: 15vw;\r\n  border: solid white;\r\n  border-top: solid blue;\r\n  border-radius: 100%;\r\n  animation-name: spin;\r\n  animation-duration: 2s;\r\n  animation-timing-function: initial;\r\n  animation-iteration-count: infinite;\r\n}\r\n#player-menu {\r\n  display: flex;\r\n  gap: 20px;\r\n  align-items: end;\r\n}\r\n#resume-btn {\r\n  cursor: pointer;\r\n  filter: brightness(0.8);\r\n}\r\n#pause-btn {\r\n  cursor: pointer;\r\n  position: fixed;\r\n  color: white;\r\n  background-color: transparent;\r\n\r\n  border: none;\r\n  font-size: 4rem;\r\n  right: 0;\r\n}\r\n.song-name {\r\n  font-size: 4rem;\r\n}\r\n#map-author {\r\n  font-size: 1.2rem;\r\n}\r\n#resume-btn:hover {\r\n  filter: brightness(1);\r\n}\r\n@keyframes explode {\r\n  0% {\r\n    opacity: 1;\r\n    transform: scale(1.1);\r\n  }\r\n  25% {\r\n    transform: scale(1.2);\r\n  }\r\n  50% {\r\n    transform: scale(1.3);\r\n  }\r\n  75% {\r\n    transform: scale(1.4);\r\n  }\r\n  100% {\r\n    transform: scale(1.5);\r\n  }\r\n}\r\n\r\n@keyframes popup {\r\n  0% {\r\n    opacity: 1;\r\n    transform: scale(0.9) translateY(-2px);\r\n  }\r\n  25% {\r\n    transform: scale(1) translateY(-4px);\r\n  }\r\n  50% {\r\n    transform: scale(1.1) translateY(-6px);\r\n  }\r\n  75% {\r\n    transform: scale(1.2) translateY(-8px);\r\n  }\r\n  100% {\r\n    transform: scale(1.5) translateY(-10px);\r\n  }\r\n}\r\n@keyframes jump {\r\n  0% {\r\n    transform: translateY(0px);\r\n  }\r\n  33% {\r\n    transform: translateY(-3.3px);\r\n  }\r\n  66% {\r\n    transform: translateY(-6.6px);\r\n  }\r\n  100% {\r\n    transform: translateY(-10px);\r\n  }\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/kareoke_player/player.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,2BAA2B;EAC3B,8BAA8B;EAC9B,gCAAgC;AAClC;AACA;EACE,iBAAiB;EACjB,sBAAsB;AACxB;AACA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,yBAAyB;EACzB,wCAAwC;EACxC,+CAA+C;AACjD;AACA;EACE,aAAa;EACb,UAAU;EACV,gBAAgB;EAChB,8BAA8B;EAC9B,eAAe;EACf,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE;;;;;GAKC;AACH;AACA;EACE,YAAY;EACZ,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;AACnB;AACA;EACE,sCAAsC;EACtC,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,4BAA4B;EAC5B,2BAA2B;AAC7B;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,2BAA2B;EAC3B,YAAY;AACd;AACA;EACE,WAAW;EACX,aAAa;EACb,oCAAoC;EACpC,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,WAAW;EACX,UAAU;AACZ;AACA;EACE,sBAAsB;EACtB,yBAAyB;EACzB,oCAAoC;EACpC,8CAA8C;EAC9C,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,UAAU;EACV,6BAA6B;EAC7B,WAAW;EACX,0CAA0C;AAC5C;AACA;EACE,YAAY;EACZ,aAAa;EACb,mCAAmC;EACnC,6BAA6B;AAC/B;AACA;EACE,WAAW;EACX,YAAY;EACZ,0BAA0B;AAC5B;AACA;EACE,kBAAkB;EAClB,4BAA4B;EAC5B,WAAW;EACX,cAAc;AAChB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,UAAU;EACV,eAAe;EACf,uBAAuB;AACzB;AACA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,wCAAwC;AAC1C;AACA;EACE,iBAAiB;EACjB,wCAAwC;AAC1C;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,UAAU;AACZ;AACA;EACE,qBAAqB,EAAE,+CAA+C;EACtE,oCAAoC;EACpC,qBAAqB;EACrB,6BAA6B;EAC7B,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,8BAA8B;EAC9B,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,0BAA0B;EAC1B,kBAAkB;AACpB;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,QAAQ;EACR,sBAAsB;EACtB,4BAA4B;EAC5B,WAAW;AACb;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,mCAAmC;AACrC;AACA;EACE,gCAAgC;EAChC,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,0BAA0B;EAC1B,WAAW;EACX,YAAY;EACZ,UAAU;AACZ;AACA;EACE,uBAAuB;EACvB,wBAAwB;EACxB,iCAAiC;AACnC;AACA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,iCAAiC;AACnC;;AAEA;EACE,oBAAoB;EACpB,wBAAwB;EACxB,iCAAiC;AACnC;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,2CAA2C;EAC3C,qBAAqB;EACrB,0BAA0B;EAC1B,oBAAoB;EACpB;;;;GAIC;AACH;AACA;EACE,wDAAwD;EACxD,+BAA+B;EAC/B,4BAA4B;EAC5B,iCAAiC;EACjC;;;;GAIC;AACH;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;EACtB,kCAAkC;EAClC,mCAAmC;AACrC;AACA;EACE,aAAa;EACb,SAAS;EACT,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,uBAAuB;AACzB;AACA;EACE,eAAe;EACf,eAAe;EACf,YAAY;EACZ,6BAA6B;;EAE7B,YAAY;EACZ,eAAe;EACf,QAAQ;AACV;AACA;EACE,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,qBAAqB;AACvB;AACA;EACE;IACE,UAAU;IACV,qBAAqB;EACvB;EACA;IACE,qBAAqB;EACvB;EACA;IACE,qBAAqB;EACvB;EACA;IACE,qBAAqB;EACvB;EACA;IACE,qBAAqB;EACvB;AACF;;AAEA;EACE;IACE,UAAU;IACV,sCAAsC;EACxC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,uCAAuC;EACzC;AACF;AACA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,4BAA4B;EAC9B;AACF;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":["body {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  display: grid;\r\n  grid-template: 1fr 1fr 1fr/1fr;\r\n  height: 100vh;\r\n  min-width: 1920px;\r\n  max-width: 1920px;\r\n  overflow-x: hidden;\r\n  color: var(--primary-color);\r\n  background-color: rgb(0, 0, 0);\r\n  font-family: var(--primary-font);\r\n}\r\n#time {\r\n  font-size: 1.7rem;\r\n  color: rgb(84, 83, 83);\r\n}\r\n.score {\r\n  font-size: 2.5rem;\r\n  letter-spacing: 3px;\r\n  color: var(--score-color);\r\n  font-family: \"Titillium Web\", sans-serif;\r\n  text-shadow: 3px 1px 1px var(--horizontal-line);\r\n}\r\n.score-summary {\r\n  display: flex;\r\n  width: 70%;\r\n  min-width: 400px;\r\n  justify-content: space-between;\r\n  font-size: 2rem;\r\n  padding: 3px;\r\n  border-bottom: solid;\r\n  border-width: thin;\r\n  border-color: gray;\r\n}\r\n#end-options {\r\n  font-size: 2rem;\r\n  margin-top: 40px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n#end-options div {\r\n  cursor: pointer;\r\n  max-width: 300px;\r\n}\r\n#end-options a {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n#end-options div:hover {\r\n  background: linear-gradient(\r\n    90deg,\r\n    rgb(195, 37, 20) 0%,\r\n    rgb(255, 10, 10) 47%,\r\n    rgba(255, 0, 0, 0) 100%\r\n  );\r\n}\r\n#calculate-score {\r\n  z-index: 100;\r\n  justify-content: flex-start;\r\n}\r\n#score-wrapper {\r\n  padding: 10px;\r\n  width: fit-content;\r\n  margin-top: 25px;\r\n  min-width: 400px;\r\n  max-width: 1450px;\r\n}\r\n#score-number {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 40px;\r\n  margin-bottom: 10px;\r\n  margin-top: 35px;\r\n  color: white;\r\n}\r\n#score-letter {\r\n  font-size: 5.5rem;\r\n  color: yellow;\r\n  text-shadow: 5px 3px 1px green;\r\n  font-weight: bold;\r\n}\r\n#high-score {\r\n  background-color: rgba(255, 0, 0, 0.5);\r\n  width: fit-content;\r\n  padding: 3px;\r\n  border-radius: 6px;\r\n}\r\n.background {\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: -10;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n.player {\r\n  grid-area: 2/1/3/2;\r\n  align-self: center;\r\n  display: grid;\r\n  grid-template: 50px 1fr/1fr;\r\n  width: 100vw;\r\n}\r\n.finger_board {\r\n  width: 100%;\r\n  height: 180px;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  display: flex;\r\n  grid-area: 2/1/3/2;\r\n}\r\n.horizontal-lines {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 180px;\r\n  width: 99vw;\r\n  left: 10px;\r\n}\r\n.horizontal-lines > div {\r\n  border-top: solid thin;\r\n  border-bottom: solid thin;\r\n  border-color: var(--horizontal-line);\r\n  box-shadow: 1px 1px 5px var(--horizontal-line);\r\n  flex: 1 1 auto;\r\n}\r\n.input_line {\r\n  position: relative;\r\n  height: 180px;\r\n  width: 3px;\r\n  background: var(--input-line);\r\n  left: 400px;\r\n  box-shadow: 1px 1px 15px var(--input-line);\r\n}\r\n.line-shadow {\r\n  width: 280px;\r\n  height: 180px;\r\n  background-image: var(--fade-color);\r\n  transform: translateX(-280px);\r\n}\r\n.button {\r\n  width: 45px;\r\n  height: 45px;\r\n  background-size: 100% 100%;\r\n}\r\n.click-button {\r\n  position: absolute;\r\n  transition: left 3.9s linear;\r\n  z-index: 10;\r\n  left: 1870.5px;\r\n}\r\n.long-container {\r\n  display: flex;\r\n  position: absolute;\r\n  left: 1870.5px;\r\n  z-index: 10;\r\n  color: red;\r\n  font-size: 2rem;\r\n  align-items: flex-start;\r\n}\r\n#combo-score {\r\n  font-size: 2.5rem;\r\n  letter-spacing: 3px;\r\n  font-family: \"Titillium Web\", sans-serif;\r\n}\r\n#combo-text {\r\n  font-size: 2.1rem;\r\n  font-family: \"Titillium Web\", sans-serif;\r\n}\r\n.combo-container {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  filter: brightness(1.2);\r\n  align-self: end;\r\n  margin-left: 20px;\r\n  width: 150px;\r\n  opacity: 0;\r\n}\r\n.combo-container > div {\r\n  background-color: red; /* For browsers that do not support gradients */\r\n  background-image: var(--combo-color);\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  color: transparent;\r\n  font-weight: bold;\r\n  font-style: italic;\r\n  text-align: center;\r\n  text-shadow: 1px 1px #ffffff38;\r\n  line-height: 1;\r\n}\r\n\r\n.duration-line {\r\n  background-color: white;\r\n  height: 10px;\r\n  align-self: center;\r\n  border-top: solid black;\r\n  border-bottom: solid black;\r\n  text-align: center;\r\n}\r\n.long-container > div {\r\n  position: static;\r\n}\r\n\r\n.visualiser-container {\r\n  position: absolute;\r\n  display: flex;\r\n  gap: 9px;\r\n  flex-direction: column;\r\n  transform: translateY(-18px);\r\n  left: 378px;\r\n}\r\n.visualiser-container > div {\r\n  position: relative;\r\n}\r\n.info-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr /1fr;\r\n}\r\n.input-visualiser {\r\n  border: solid rgb(123, 120, 120);\r\n  opacity: 0;\r\n}\r\n.performance-visualiser {\r\n  position: relative;\r\n  color: green;\r\n  grid-area: 1/1/2/2;\r\n  align-self: end;\r\n  left: 365px;\r\n  background-size: 100% 100%;\r\n  width: 90px;\r\n  height: 40px;\r\n  opacity: 0;\r\n}\r\n.explode-animation {\r\n  animation-name: explode;\r\n  animation-duration: 0.2s;\r\n  animation-timing-function: linear;\r\n}\r\n.popup-animation {\r\n  animation-name: popup;\r\n  animation-duration: 0.2s;\r\n  animation-timing-function: linear;\r\n}\r\n\r\n.jump-animation {\r\n  animation-name: jump;\r\n  animation-duration: 0.1s;\r\n  animation-timing-function: linear;\r\n}\r\n\r\n.cplayer {\r\n  margin-top: 10px;\r\n  width: 100vw;\r\n  height: 215px;\r\n  transform: translateY(22.5px);\r\n  position: absolute;\r\n  z-index: 10;\r\n}\r\n\r\n.heat-mode {\r\n  --combo-color: linear-gradient(yellow, red);\r\n  --input-line: #f7e378;\r\n  --horizontal-line: #7f3e10;\r\n  --score-color: wheat;\r\n  --fade-color: linear-gradient(\r\n    to right,\r\n    rgba(247, 227, 120, 0),\r\n    rgba(247, 227, 120, 0.7)\r\n  );\r\n}\r\n.cold-mode {\r\n  --combo-color: linear-gradient(rgb(255, 255, 255), blue);\r\n  --input-line: rgb(60, 239, 230);\r\n  --horizontal-line: #6579a8a7;\r\n  --score-color: rgb(172, 172, 228);\r\n  --fade-color: linear-gradient(\r\n    to right,\r\n    rgba(60, 239, 230, 0),\r\n    rgba(60, 239, 230, 0.7)\r\n  );\r\n}\r\n#loading-disk {\r\n  width: 15vw;\r\n  height: 15vw;\r\n  border: solid white;\r\n  border-top: solid blue;\r\n  border-radius: 100%;\r\n  animation-name: spin;\r\n  animation-duration: 2s;\r\n  animation-timing-function: initial;\r\n  animation-iteration-count: infinite;\r\n}\r\n#player-menu {\r\n  display: flex;\r\n  gap: 20px;\r\n  align-items: end;\r\n}\r\n#resume-btn {\r\n  cursor: pointer;\r\n  filter: brightness(0.8);\r\n}\r\n#pause-btn {\r\n  cursor: pointer;\r\n  position: fixed;\r\n  color: white;\r\n  background-color: transparent;\r\n\r\n  border: none;\r\n  font-size: 4rem;\r\n  right: 0;\r\n}\r\n.song-name {\r\n  font-size: 4rem;\r\n}\r\n#map-author {\r\n  font-size: 1.2rem;\r\n}\r\n#resume-btn:hover {\r\n  filter: brightness(1);\r\n}\r\n@keyframes explode {\r\n  0% {\r\n    opacity: 1;\r\n    transform: scale(1.1);\r\n  }\r\n  25% {\r\n    transform: scale(1.2);\r\n  }\r\n  50% {\r\n    transform: scale(1.3);\r\n  }\r\n  75% {\r\n    transform: scale(1.4);\r\n  }\r\n  100% {\r\n    transform: scale(1.5);\r\n  }\r\n}\r\n\r\n@keyframes popup {\r\n  0% {\r\n    opacity: 1;\r\n    transform: scale(0.9) translateY(-2px);\r\n  }\r\n  25% {\r\n    transform: scale(1) translateY(-4px);\r\n  }\r\n  50% {\r\n    transform: scale(1.1) translateY(-6px);\r\n  }\r\n  75% {\r\n    transform: scale(1.2) translateY(-8px);\r\n  }\r\n  100% {\r\n    transform: scale(1.5) translateY(-10px);\r\n  }\r\n}\r\n@keyframes jump {\r\n  0% {\r\n    transform: translateY(0px);\r\n  }\r\n  33% {\r\n    transform: translateY(-3.3px);\r\n  }\r\n  66% {\r\n    transform: translateY(-6.6px);\r\n  }\r\n  100% {\r\n    transform: translateY(-10px);\r\n  }\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/audio/bass1drum-43078.mp3":
/*!***************************************!*\
  !*** ./src/audio/bass1drum-43078.mp3 ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "969c855321ac764507533b16adaa3661.mp3");

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

/***/ "./src/kareoke_player/player.css":
/*!***************************************!*\
  !*** ./src/kareoke_player/player.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_player_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./player.css */ "./node_modules/css-loader/dist/cjs.js!./src/kareoke_player/player.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_player_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_player_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_player_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_player_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/canvas/canvas.js":
/*!******************************!*\
  !*** ./src/canvas/canvas.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "validPrompts": () => (/* binding */ validPrompts)
/* harmony export */ });
/* harmony import */ var _images_hold_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/hold.png */ "./src/images/hold.png");
/* harmony import */ var _images_rapid_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/rapid.png */ "./src/images/rapid.png");
/* harmony import */ var _images_up_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/up.png */ "./src/images/up.png");
/* harmony import */ var _images_left_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/left.png */ "./src/images/left.png");
/* harmony import */ var _images_down_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/down.png */ "./src/images/down.png");
/* harmony import */ var _images_right_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/right.png */ "./src/images/right.png");







const entryOffset = 3.0; // determines the speed of prompt
const widthPerSecond = Number(((1897.5 - 400) / entryOffset).toFixed(3));
let key;

const symbols = {
  ArrowUp: document.createElement("img"),
  ArrowLeft: document.createElement("img"),
  ArrowRight: document.createElement("img"),
  ArrowDown: document.createElement("img"),
};
const yPosition = {
  ArrowUp: 30,
  ArrowRight: 83,
  ArrowLeft: 130,
  ArrowDown: 185,
};
symbols.ArrowUp.src = _images_up_png__WEBPACK_IMPORTED_MODULE_2__;
symbols.ArrowLeft.src = _images_left_png__WEBPACK_IMPORTED_MODULE_3__;
symbols.ArrowDown.src = _images_down_png__WEBPACK_IMPORTED_MODULE_4__;
symbols.ArrowRight.src = _images_right_png__WEBPACK_IMPORTED_MODULE_5__;
let ctx;
let myCanvas;
const textImage = document.createElement("img");
const longPromptText = {
  rapid: _images_rapid_png__WEBPACK_IMPORTED_MODULE_1__,
  hold: _images_hold_png__WEBPACK_IMPORTED_MODULE_0__,
};

const init = () => {
  myCanvas = document.querySelector(".cplayer");
  myCanvas.width = window.innerWidth;
  myCanvas.height = 215;

  if (myCanvas.getContext) {
    ctx = myCanvas.getContext("2d"); // rendering context
  } else console.log("canvas not supported");
};

const verticleLines = (elapsedTime) => {
  for (let i = 0; i < 3; i += 1) {
    const xCoords = 633 * (i + 1) - ((widthPerSecond * elapsedTime) % 633);

    ctx.beginPath();
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 1;
    ctx.moveTo(xCoords, 15);
    ctx.lineTo(xCoords, 195);
    ctx.stroke();
  }
};
const spawnPrompts = (time, symbol) => {
  const xPosition = 1897.5 - time * widthPerSecond;
  ctx.fillStyle = "blue";
  ctx.beginPath();
  // ctx.arc(xPosition, yPosition, 22.5, 0, 2 * Math.PI);
  ctx.drawImage(
    symbols[symbol],
    xPosition - 22.5,
    yPosition[symbol] - 22.5,
    55,
    55
  );
  ctx.fill();
  ctx.stroke();
};
const spanwLongPrompts = (
  elapsedTime,
  promptTime,
  travelTime,
  duration,
  type,
  symbol
) => {
  textImage.src = longPromptText[type];
  const startArc = 1897.5 - travelTime * widthPerSecond;
  const endArc = startArc + duration * widthPerSecond;
  const textP = startArc + (duration * widthPerSecond) / 2 - 25;
  let size;
  const clicked = symbol === key && elapsedTime >= promptTime - 0.2;

  if (type === "hold") size = clicked ? 50 : 55;
  if (type === "rapid") size = clicked ? 50 : 55;
  ctx.font = "40px serif";
  ctx.strokeStyle = type === "rapid" ? "blue" : "#add8e6";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(startArc, yPosition[symbol], 15.5, 0, 2 * Math.PI);
  ctx.arc(endArc, yPosition[symbol], 15.5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.drawImage(
    symbols[symbol],
    startArc - 22.5,
    yPosition[symbol] - 22.5,
    size,
    size
  );
  ctx.drawImage(textImage, textP, yPosition[symbol] - 22.5, 75, 35);
  ctx.drawImage(
    symbols[symbol],
    endArc - 22.5,
    yPosition[symbol] - 22.5,
    size,
    size
  );
  ctx.stroke();
};
const validPrompts = (time, buttons) => {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  verticleLines(time);
  for (let i = 0; i < buttons.length; i += 1) {
    const prompt = buttons[i];
    const valid =
      prompt.time + prompt.duration + 0.2 >= time &&
      time >= prompt.time - entryOffset;
    if (valid) {
      switch (prompt.type) {
        case "click":
          spawnPrompts(time + entryOffset - prompt.time, prompt.key);
          break;
        default:
          spanwLongPrompts(
            time,
            prompt.time,
            time + entryOffset - prompt.time,
            prompt.duration,
            prompt.type,
            prompt.key
          );
      }
    }
  }
};

window.addEventListener("resize", () => {
  myCanvas.width = window.innerWidth;
});

window.addEventListener("keydown", (e) => {
  key = e.key;
});
window.addEventListener("keyup", () => {
  key = null;
});


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

/***/ "./src/dom-manipulation/player-dom.js":
/*!********************************************!*\
  !*** ./src/dom-manipulation/player-dom.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAudio": () => (/* binding */ addAudio),
/* harmony export */   "addMapInfo": () => (/* binding */ addMapInfo),
/* harmony export */   "addSettings": () => (/* binding */ addSettings),
/* harmony export */   "closeMenu": () => (/* binding */ closeMenu),
/* harmony export */   "initialize": () => (/* binding */ initialize),
/* harmony export */   "openFinalScore": () => (/* binding */ openFinalScore),
/* harmony export */   "openMenu": () => (/* binding */ openMenu),
/* harmony export */   "pauseMap": () => (/* binding */ pauseMap),
/* harmony export */   "playClick": () => (/* binding */ playClick),
/* harmony export */   "playMap": () => (/* binding */ playMap),
/* harmony export */   "resetMap": () => (/* binding */ resetMap),
/* harmony export */   "startLoading": () => (/* binding */ startLoading),
/* harmony export */   "stopLoading": () => (/* binding */ stopLoading),
/* harmony export */   "updateScore": () => (/* binding */ updateScore)
/* harmony export */ });
/* harmony import */ var _images_great_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/great.png */ "./src/images/great.png");
/* harmony import */ var _images_miss_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/miss.png */ "./src/images/miss.png");
/* harmony import */ var _images_bad_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/bad.png */ "./src/images/bad.png");
/* harmony import */ var _images_good_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/good.png */ "./src/images/good.png");
/* harmony import */ var _utility_js_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility.js/storage */ "./src/utility.js/storage.js");






function addAudio(songSrc, backgroundSRC, clickSrc, extension) {
  const settings = (0,_utility_js_storage__WEBPACK_IMPORTED_MODULE_4__.getSettings)();
  console.log(settings);
  const song = document.querySelector("#song");
  const click = document.querySelector("#click-audio");
  const backgroundVideo = document.querySelector("#background-video");
  backgroundVideo.style.filter = `brightness(${settings.opacity})`;

  const backgroundImage = document.querySelector("#background-image");
  backgroundImage.style.filter = `brightness(${settings.opacity})`;
  song.src = songSrc;
  song.volume = settings.music;
  click.src = clickSrc;
  click.volume = settings.hit;
  song.currentTime = 0;
  if (extension === "mp4") {
    backgroundVideo.src = backgroundSRC;
    backgroundVideo.currentTime = 0;

    return;
  }
  backgroundImage.style.backgroundImage = `url(${backgroundSRC})`;
}
function addSettings() {}

function resetMap() {
  const song = document.querySelector("#song");
  const backgroundVideo = document.querySelector("#background-video");
  const comboContainer = document.querySelector(".combo-container");
  const score = document.querySelector("#score");
  const scoreMenu = document.querySelector("#calculate-score");
  scoreMenu.style.display = "none";
  score.textContent = "";
  comboContainer.style.opacity = "0";
  song.currentTime = 0;
  backgroundVideo.currentTime = 0;
}
function pauseMap() {
  const song = document.querySelector("#song");
  const backgroundVideo = document.querySelector("#background-video");
  song.pause();
  backgroundVideo.pause();
}
function playMap() {
  const settings = (0,_utility_js_storage__WEBPACK_IMPORTED_MODULE_4__.getSettings)();
  const song = document.querySelector("#song");
  song.volume = settings.music;
  const backgroundVideo = document.querySelector("#background-video");
  song.play();
  backgroundVideo.play();
}
function playClick() {
  const click = document.querySelector("#click-audio");
  click.currentTime = 0;
  click.play();
}
function startLoading() {
  const loading = document.querySelector("#loading-map");
  loading.style.display = "flex";
}
function stopLoading() {
  const loading = document.querySelector("#loading-map");
  loading.style.display = "none";
}
function openMenu() {
  const pauseBtn = document.querySelector("#pause-btn");
  pauseBtn.style.display = "none";
  const menu = document.querySelector("#menu-dialog");
  menu.style.display = "flex";
}
function closeMenu() {
  const pauseBtn = document.querySelector("#pause-btn");
  pauseBtn.style.display = "block";
  const menu = document.querySelector("#menu-dialog");
  menu.style.display = "none";
}
function addMapInfo(name, author) {
  const songName = document.querySelector("#menu-name");
  const highScoreName = document.querySelector("#highscore-name");
  const mapAutor = document.querySelector("#map-author");
  songName.textContent = name;
  highScoreName.textContent = name;
  mapAutor.textContent = `Mapped by ${author}`;
}
function openFinalScore(score, scoreSummary, highscore, rankInfo) {
  // decrease volume
  const song = document.querySelector("#song");
  song.volume = 0.1;

  const total = Object.keys(scoreSummary).reduce(
    (acc, cur) => acc + scoreSummary[cur],
    0
  );
  // show highscore
  const highscoreElement = document.querySelector("#high-score");
  highscoreElement.style.display = highscore ? "block" : "none";

  const scoreMenu = document.querySelector("#calculate-score");
  scoreMenu.style.display = "flex";
  // add the score
  const finalScore = document.querySelector("#final-score");
  finalScore.innerHTML = `Scored: <span class="score"> ${score}</span>`;

  // add the score letter
  const scoreLetter = document.querySelector("#score-letter");
  scoreLetter.src = rankInfo.image;
  scoreLetter.alt = rankInfo.rank;
  scoreLetter.style.color = rankInfo.color;
  scoreLetter.style.textShadow = `5px 3px 1px ${rankInfo.shadow}`;
  // clean this up later
  // update great
  const great = document.querySelector("#great-hits");
  great.innerHTML = `
  <div style="display:flex; align-items:center;" >
    <img style="width:117px; height:35px"  src=${_images_great_png__WEBPACK_IMPORTED_MODULE_0__} alt="Great" > 
    <span>: ${scoreSummary.great}</span> 
  </div>
  <span>${((scoreSummary.great / total) * 100).toFixed(1) || "0"}%</span>`;
  // update good
  const good = document.querySelector("#good-hits");
  good.innerHTML = `
  <div align-items:center>

    <img style="width:117px; height:35px" src=${_images_good_png__WEBPACK_IMPORTED_MODULE_3__} alt="Good" /> 
    <span>: ${scoreSummary.good}</span> 
  </div>
  <span>${((scoreSummary.good / total) * 100).toFixed(1) || "0"}%</span>`;

  // update bad
  const bad = document.querySelector("#bad-hits");
  bad.innerHTML = `
  <div  style="display:flex;align-items:center" >
    <img style="width:117px; height:35px"  src=${_images_bad_png__WEBPACK_IMPORTED_MODULE_2__} alt="Bad" /> 
    <span>: ${scoreSummary.bad}</span> 
  </div>
  <span>${((scoreSummary.bad / total) * 100).toFixed(1) || "0"}%</span>`;
  // update miss
  const miss = document.querySelector("#miss-hits");
  miss.innerHTML = `
  <div style="display:flex;align-items:center" >
    <img style="width:117px; height:35px"  src=${_images_miss_png__WEBPACK_IMPORTED_MODULE_1__} alt="Miss" /> 
    <span>: ${scoreSummary.miss}</span> 
  </div>
  <span>${((scoreSummary.miss / total) * 100).toFixed(1) || "0"}%</span>`;
}
function updateScore(score, combo) {
  const comboContainer = document.querySelector(".combo-container");
  const scoreText = document.querySelector("#score");
  const comboText = document.querySelector("#combo-score");
  scoreText.textContent = score;
  comboText.textContent = combo;

  if (combo === 0) {
    comboContainer.style.opacity = "0";
    document.body.className = "cold-mode";
    return;
  }
  if (combo === 1) {
    comboContainer.style.opacity = 1;
  }
  if (combo === 20) {
    document.body.className = "heat-mode";
  }

  comboContainer.classList.toggle("jump-animation");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      comboContainer.classList.toggle("jump-animation");
    });
  });
}

function initialize() {}


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

/***/ "./src/managers/player_manager.js":
/*!****************************************!*\
  !*** ./src/managers/player_manager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerManager)
/* harmony export */ });
/* harmony import */ var _utility_js_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility.js/storage */ "./src/utility.js/storage.js");
// add data and function having to do with the player here


function PlayerManager() {
  const offset = (0,_utility_js_storage__WEBPACK_IMPORTED_MODULE_0__.getSettings)().offset / 1000;
  console.log(offset);

  let timeElapsed = 0 + offset;
  let previousTime = 0 + offset;
  let play = false;
  let startTime;
  let score = 0;

  // getters

  const getTimeElapsed = () => timeElapsed;
  const getPreviousTime = () => previousTime;
  const getPlay = () => play;
  const getStartTime = () => startTime;
  const getScore = () => score;

  // setters
  const setTimeElapsed = (value) => {
    timeElapsed = value + offset;
  };
  const setPreviousTime = (value) => {
    previousTime = value + offset;
  };
  const setPlay = (value) => {
    play = value;
  };
  const startMap = () => {
    startTime = Date.now() - timeElapsed * 1000;
    play = true;
  };

  return {
    getTimeElapsed,
    getPreviousTime,
    getPlay,
    getStartTime,
    getScore,
    setPreviousTime,
    setTimeElapsed,
    setPlay,
    startMap,
  };
}


/***/ }),

/***/ "./src/player-parts/display-parts.js":
/*!*******************************************!*\
  !*** ./src/player-parts/display-parts.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "autoThumbMovement": () => (/* binding */ autoThumbMovement),
/* harmony export */   "feedBackVisualiserFactory": () => (/* binding */ feedBackVisualiserFactory),
/* harmony export */   "mapProgressPrompts": () => (/* binding */ mapProgressPrompts),
/* harmony export */   "moveProgressThumb": () => (/* binding */ moveProgressThumb)
/* harmony export */ });
/* harmony import */ var _images_great_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/great.png */ "./src/images/great.png");
/* harmony import */ var _images_miss_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/miss.png */ "./src/images/miss.png");
/* harmony import */ var _images_bad_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/bad.png */ "./src/images/bad.png");
/* harmony import */ var _images_good_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/good.png */ "./src/images/good.png");





const performanceImage = {
  great: _images_great_png__WEBPACK_IMPORTED_MODULE_0__,
  miss: _images_miss_png__WEBPACK_IMPORTED_MODULE_1__,
  bad: _images_bad_png__WEBPACK_IMPORTED_MODULE_2__,
  good: _images_good_png__WEBPACK_IMPORTED_MODULE_3__,
};

const feedBackVisualiserFactory = () => {
  const performanceIndicator = document.querySelector(
    ".performance-visualiser"
  );
  const first = document.querySelector("#first");
  const second = document.querySelector("#second");
  const third = document.querySelector("#third");
  const fourth = document.querySelector("#fourth");

  const clearAnimation = (elements, newClass) => {
    for (let i = 0; i < elements.length; i += 1) {
      // eslint-disable-next-line no-param-reassign
      elements[i].className = newClass;
    }
    // eslint-disable-next-line no-unused-expressions
    // performanceIndicator.offsetTop; // cause the browser to repaint so the animations can restart.
  };

  const inputFeedback = (showInfo) => {
    if (showInfo.Success) {
      clearAnimation([first, second, third, fourth], "button input-visualiser");
      switch (showInfo.Key) {
        case "ArrowUp":
          first.classList.toggle("explode-animation");

          break;
        case "ArrowRight":
          second.classList.toggle("explode-animation");

          break;
        case "ArrowLeft":
          third.classList.toggle("explode-animation");

          break;
        case "ArrowDown":
          fourth.classList.toggle("explode-animation");

          break;
        default:
      }
    }
  };
  const showIndicator = (showInfo) => {
    if (showInfo.Success) {
      performanceIndicator.style.backgroundImage = `url(${
        performanceImage[showInfo.performance]
      })`;
      clearAnimation([performanceIndicator], "performance-visualiser");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          performanceIndicator.classList.toggle("popup-animation");
        });
      });
    }
  };

  return { inputFeedback, showIndicator, clearAnimation };
};
const autoThumbMovement = (position) => {
  if (position > 1) return;
  const thumb = document.querySelector(".progress_thumb");
  const leftValue = position * 100;
  thumb.style.left = `${leftValue}%`;
};
const moveProgressThumb = (event) => {
  const progressBar = document.querySelector(".p_container");
  const thumb = document.querySelector(".progress_thumb");
  const coords = progressBar.getBoundingClientRect();
  if (event.pageX < coords.left || event.pageX > coords.width + coords.left)
    return;

  thumb.style.left = `${((event.pageX - coords.left) / coords.width) * 100}%`;

  // eslint-disable-next-line consistent-return
  return (event.pageX - coords.left) / coords.width;
};
const mapProgressPrompts = (beatMap, duration) => {
  const prompMap = document.querySelector("#prompt_location");
  const ctx = prompMap.getContext("2d");
  ctx.clearRect(0, 0, prompMap.width, prompMap.height);

  for (let i = 0; i < beatMap.length; i += 1) {
    const xPosition = (beatMap[i].time / duration) * prompMap.width;
    const yPosition = beatMap[i].type === "click" ? 40 : 0;
    ctx.strokeStyle =
      // eslint-disable-next-line no-nested-ternary
      beatMap[i].type === "click"
        ? "red"
        : beatMap[i].type === "hold"
        ? "rgb(12, 240, 240)"
        : "blue";
    ctx.beginPath();
    ctx.lineTo(xPosition, yPosition);
    ctx.lineTo(xPosition, 80);
    ctx.stroke();
  }
};


/***/ }),

/***/ "./src/player-parts/general-parts.js":
/*!*******************************************!*\
  !*** ./src/player-parts/general-parts.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const kareokeFactory = () => {
  const timeRange = (inputList) => [
    Number((inputList[0].time - 0.1).toFixed(1)),
    inputList[0].time,
    Number((inputList[0].time + 0.1).toFixed(1)),
    Number((inputList[0].time + 0.2).toFixed(1)),
  ];
  const greatRange = (inputList) => [
    Number((inputList[0].time - 0.1).toFixed(1)),
    inputList[0].time,
  ];
  const endRange = (inputList) => [
    inputList[0].duration - 0.1,
    inputList[0].duration,
    inputList[0].duration + 0.1,
    inputList[0].duration + 0.2,
  ];
  // checks if the object should run
  const shouldRun = (inputList) => {
    if (inputList.length === 0) {
      return false;
    }
    return true;
  };

  // removes prompts from array
  const removeInput = (duration, currentTime, inputObject, offset = 0) => {
    const lengthBefore = inputObject.inputList.length;
    // eslint-disable-next-line no-param-reassign
    inputObject.inputList = inputObject.inputList.filter(
      (prompt) => prompt.time + duration - offset > currentTime
    );

    if (lengthBefore - inputObject.inputList.length !== 0) {
      return { Success: true, performance: "miss", incrementScore: 0 };
    }

    return { Success: false };
  };

  return {
    timeRange,
    greatRange,
    endRange,
    shouldRun,
    removeInput,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (kareokeFactory);


/***/ }),

/***/ "./src/player-parts/input-parts.js":
/*!*****************************************!*\
  !*** ./src/player-parts/input-parts.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "click": () => (/* binding */ click),
/* harmony export */   "hold": () => (/* binding */ hold),
/* harmony export */   "rapid": () => (/* binding */ rapid)
/* harmony export */ });
/* harmony import */ var _general_parts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general-parts */ "./src/player-parts/general-parts.js");


const click = (inputList) => {
  const general = (0,_general_parts__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const greatTimeWindow = 0.075;

  const checkInput = (key, inputTime, inputs) => {
    let Success = false;
    const Key = inputs[0].key;
    let performance = "bad";

    const convert = Number(inputTime.toFixed(1));

    if (general.timeRange(inputs).includes(convert)) {
      Success = true;
      if (key === inputs[0].key) {
        performance =
          inputTime >= inputs[0].time - greatTimeWindow &&
          inputTime <= inputs[0].time + greatTimeWindow
            ? "great"
            : "good";
      }

      inputs.shift();
    }
    return { Success, Key, performance };
  };
  return { checkInput, inputList, ...general };
};

const hold = (inputList) => {
  const general = (0,_general_parts__WEBPACK_IMPORTED_MODULE_0__["default"])();
  let clickTime;
  const checkDown = (key, time, inputs) => {
    const inputTime = Number(time).toFixed(1);
    const validRange =
      inputs[0].time - 0.1 <= inputTime &&
      inputs[0].time + inputs[0].duration > inputTime;
    let Success = false;
    const performance = "bad";
    const Key = inputs[0].key;
    if (validRange) {
      if (key === inputs[0].key) {
        // eslint-disable-next-line no-param-reassign
        clickTime = inputTime;
      } else {
        inputs.shift();
        Success = true;
      }
    }
    // eslint-disable-next-line consistent-return
    return { Success, performance, Key };
  };
  const checkUp = (key, releaseTime, inputs) => {
    const difference = Number((releaseTime - clickTime).toFixed(1));
    const endRange = general.endRange(inputs);
    let performance = "bad";
    let Success = false;
    const Key = inputs[0].key;

    // condition for great release
    if (endRange.includes(difference) && key === inputs[0].key) {
      inputs.shift();
      Success = true;
      performance = "great";
    } else if (
      // condition for good release
      clickTime < releaseTime &&
      releaseTime >= inputs[0].time + inputs[0].duration / 2
    ) {
      inputs.shift();
      Success = true;
      performance = "good";
    } else if (
      // condition for bad release
      clickTime < releaseTime &&
      releaseTime < inputs[0].time + inputs[0].duration / 2
    ) {
      inputs.shift();
      Success = true;
    }
    clickTime = Infinity;

    return { Success, Key, performance };
  };

  return { checkDown, checkUp, inputList, ...general };
};

const rapid = (inputList) => {
  let clicks = 0;
  const clickPerSecond = 6;
  const checkInput = (key, inputs, inputTime) => {
    const totalDuration = inputs[0].time + inputs[0].duration;
    if (
      inputTime >= inputs[0].time &&
      inputTime < totalDuration &&
      key === inputs[0].key
    ) {
      clicks += 1;
      // eslint-disable-next-line no-param-reassign
      inputs[0].click = clicks;
    }
  };
  const countInputs = (inputs, currentTime) => {
    const totalDuration = inputs[0].time + inputs[0].duration;
    const neededClicks = inputs[0].duration * clickPerSecond;
    let Success = false;
    let performance = "bad";
    const Key = inputs[0].key;

    if (currentTime >= totalDuration) {
      if (clicks >= neededClicks) {
        inputs.shift();
        Success = true;
        performance = "great";
      }
      if (clicks > 0 && clicks < neededClicks) {
        if (clicks >= neededClicks / 2) {
          performance = "good";
        }
        inputs.shift();
        Success = true;
      }

      clicks = 0;
    }

    return { Success, Key, performance };
  };
  return { checkInput, countInputs, inputList, ...(0,_general_parts__WEBPACK_IMPORTED_MODULE_0__["default"])() };
};


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

/***/ "./src/images/a-score.png":
/*!********************************!*\
  !*** ./src/images/a-score.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb7782a9e210ce6eadae.png";

/***/ }),

/***/ "./src/images/b-score.png":
/*!********************************!*\
  !*** ./src/images/b-score.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c34da397dab6c00e6af8.png";

/***/ }),

/***/ "./src/images/bad.png":
/*!****************************!*\
  !*** ./src/images/bad.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4027a74e047421e26d88.png";

/***/ }),

/***/ "./src/images/c-score.png":
/*!********************************!*\
  !*** ./src/images/c-score.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a03db81d0ad202171084.png";

/***/ }),

/***/ "./src/images/d-score.png":
/*!********************************!*\
  !*** ./src/images/d-score.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0d5ba29aedd42c62ff02.png";

/***/ }),

/***/ "./src/images/down.png":
/*!*****************************!*\
  !*** ./src/images/down.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b694b7e059e6fbe710b6.png";

/***/ }),

/***/ "./src/images/good.png":
/*!*****************************!*\
  !*** ./src/images/good.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "454c4c133c9e21a54a40.png";

/***/ }),

/***/ "./src/images/great.png":
/*!******************************!*\
  !*** ./src/images/great.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e570ee80df343546e637.png";

/***/ }),

/***/ "./src/images/hold.png":
/*!*****************************!*\
  !*** ./src/images/hold.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66ad1dbd7ca0dbc79a26.png";

/***/ }),

/***/ "./src/images/left.png":
/*!*****************************!*\
  !*** ./src/images/left.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a20d8fb54006780b071.png";

/***/ }),

/***/ "./src/images/miss.png":
/*!*****************************!*\
  !*** ./src/images/miss.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb3d063b37b3303b0b8e.png";

/***/ }),

/***/ "./src/images/rapid.png":
/*!******************************!*\
  !*** ./src/images/rapid.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54905605f6af4abba1e1.png";

/***/ }),

/***/ "./src/images/right.png":
/*!******************************!*\
  !*** ./src/images/right.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38350e147f119113734c.png";

/***/ }),

/***/ "./src/images/s-score.png":
/*!********************************!*\
  !*** ./src/images/s-score.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24e994cc06e31ff30ebf.png";

/***/ }),

/***/ "./src/images/up.png":
/*!***************************!*\
  !*** ./src/images/up.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "978028f3533655a2d87e.png";

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
/*!**************************************!*\
  !*** ./src/kareoke_player/player.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.css */ "./src/kareoke_player/player.css");
/* harmony import */ var _general_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../general.css */ "./src/general.css");
/* harmony import */ var _audio_bass1drum_43078_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio/bass1drum-43078.mp3 */ "./src/audio/bass1drum-43078.mp3");
/* harmony import */ var _images_s_score_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/s-score.png */ "./src/images/s-score.png");
/* harmony import */ var _images_a_score_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/a-score.png */ "./src/images/a-score.png");
/* harmony import */ var _images_b_score_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/b-score.png */ "./src/images/b-score.png");
/* harmony import */ var _images_c_score_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/c-score.png */ "./src/images/c-score.png");
/* harmony import */ var _images_d_score_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/d-score.png */ "./src/images/d-score.png");
/* harmony import */ var _player_parts_input_parts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../player-parts/input-parts */ "./src/player-parts/input-parts.js");
/* harmony import */ var _player_parts_display_parts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../player-parts/display-parts */ "./src/player-parts/display-parts.js");
/* harmony import */ var _canvas_canvas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../canvas/canvas */ "./src/canvas/canvas.js");
/* harmony import */ var _managers_map_manager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../managers/map_manager */ "./src/managers/map_manager.js");
/* harmony import */ var _managers_player_manager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../managers/player_manager */ "./src/managers/player_manager.js");
/* harmony import */ var _dom_manipulation_player_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../dom-manipulation/player-dom */ "./src/dom-manipulation/player-dom.js");
/* harmony import */ var _api_kareoke__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../api/kareoke */ "./src/api/kareoke.js");



















(0,_dom_manipulation_player_dom__WEBPACK_IMPORTED_MODULE_13__.initialize)();
(0,_canvas_canvas__WEBPACK_IMPORTED_MODULE_10__.init)();
const mapManager = (0,_managers_map_manager__WEBPACK_IMPORTED_MODULE_11__["default"])();
const player = (0,_managers_player_manager__WEBPACK_IMPORTED_MODULE_12__["default"])();

// give song an src

// give background an src

const scoreSummary = { great: 0, good: 0, bad: 0, miss: 0 };
const incrementValue = { great: 100, good: 60, bad: 0, miss: 0 };

let score = 0;
let combo = 0;

let keydown = false;
let animationID;

let buttons = [];
let clickInput = [];

let holdInput = [];

let rapidInput = [];
let highScore;
let mapID;
const scoreMultiplier = 1.5;
// const finalScoreCalculator = () => {};

const calculateRank = (promtsLength, userScore) => {
  const multiplier = promtsLength > 20 ? 1.5 : 1;
  // the score removed from the total, since the user wont have heatmode till combo 20
  const first20 =
    promtsLength > 20 ? 20 * multiplier * incrementValue.great : 0;
  const totalScore = promtsLength * incrementValue.great * multiplier - first20;

  const accuracy = userScore / totalScore;

  if (accuracy > 0.9)
    return { rank: "S", color: "#ffd700", shadow: "#ffd700ab", image: _images_s_score_png__WEBPACK_IMPORTED_MODULE_3__ };
  if (accuracy > 0.8)
    return { rank: "A", color: "#0ed145", shadow: "#0ed145ab", image: _images_a_score_png__WEBPACK_IMPORTED_MODULE_4__ };
  if (accuracy > 0.7)
    return { rank: "B", color: "#00a8f3", shadow: "#00a8f3ab", image: _images_b_score_png__WEBPACK_IMPORTED_MODULE_5__ };
  if (accuracy > 0.6)
    return { rank: "C", color: "#ff6c00", shadow: "#ff6c00ab", image: _images_c_score_png__WEBPACK_IMPORTED_MODULE_6__ };
  return { rank: "D", color: "#ffffff", shadow: "#ffffffab", image: _images_d_score_png__WEBPACK_IMPORTED_MODULE_7__ };
};
const incrementScore = (info) => {
  if (!info.Success) return;
  scoreSummary[info.performance] += 1;

  if (["bad", "miss"].includes(info.performance)) {
    combo = 0;
    (0,_dom_manipulation_player_dom__WEBPACK_IMPORTED_MODULE_13__.updateScore)(score, combo);
    return;
  }

  score +=
    incrementValue[info.performance] * (combo >= 20 ? scoreMultiplier : 1);
  combo += 1;

  (0,_dom_manipulation_player_dom__WEBPACK_IMPORTED_MODULE_13__.updateScore)(score, combo);
};

const feedBackVisualiser = (0,_player_parts_display_parts__WEBPACK_IMPORTED_MODULE_9__.feedBackVisualiserFactory)();

const handleKeyDown = (key, inputObject, methodName) => {
  let Success = false;
  if (inputObject.inputList.length !== 0) {
    // eslint-disable-next-line dot-notation
    const Info = inputObject[methodName](
      key,
      player.getTimeElapsed(),
      inputObject.inputList
    );
    feedBackVisualiser.inputFeedback(Info);
    feedBackVisualiser.showIndicator(Info);
    incrementScore(Info);
    Success = Info.Success;
  }
  return Success;
};
const rapidInputHandler = (key) => {
  if (rapidInput.inputList.length !== 0) {
    rapidInput.checkInput(
      key,
      rapidInput.inputList,
      player.getTimeElapsed().toFixed(1)
    );
  }
};

const removeGameInputs = (duration, inputObject, elapsedTime) => {
  const info = inputObject.removeInput(duration, elapsedTime, inputObject);
  feedBackVisualiser.showIndicator(info);
  incrementScore(info);
};
const stopMap = () => {
  cancelAnimationFrame(animationID);
  player.setPlay(false);

  (0,_canvas_canvas__WEBPACK_IMPORTED_MODULE_10__.validPrompts)(player.getTimeElapsed(), [
    ...clickInput.inputList,
    ...rapidInput.inputList,
    ...holdInput.inputList,
  ]);
};

const timeController = () => {
  if (player.getPlay() === false) return;
  const timeNow = Number((Date.now() - player.getStartTime()) / 1000);
  const elapsedTime =
    player.getTimeElapsed() + (timeNow - player.getPreviousTime());

  player.setTimeElapsed(elapsedTime);

  if (
    clickInput.inputList.length === 0 &&
    holdInput.inputList.length === 0 &&
    rapidInput.inputList.length === 0
  ) {
    stopMap();
    const rank = calculateRank(buttons.length, score);
    (0,_dom_manipulation_player_dom__WEBPACK_IMPORTED_MODULE_13__.openFinalScore)(score, scoreSummary, score > highScore, rank);
    if (score > highScore) {
      highScore = score;

      (0,_api_kareoke__WEBPACK_IMPORTED_MODULE_14__.saveHighScore)(score, mapID)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          console.log("Could not update highscore");
        });
    }
    return;
  }
  // check the number of clicks for a rapid prompt
  if (rapidInput.inputList.length !== 0) {
    const rapidInfo = rapidInput.countInputs(
      rapidInput.inputList,
      Number(player.getTimeElapsed().toFixed(1))
    );
    feedBackVisualiser.inputFeedback(rapidInfo);
    feedBackVisualiser.showIndicator(rapidInfo);
    incrementScore(rapidInfo);
  }
  // removing inputs prompts from array.
  if (clickInput.inputList.length !== 0)
    removeGameInputs(0.2, clickInput, player.getTimeElapsed());
  if (holdInput.inputList.length !== 0)
    removeGameInputs(
      holdInput.inputList[0].duration + 0.2,
      holdInput,
      player.getTimeElapsed()
    );
  if (rapidInput.inputList.length !== 0)
    removeGameInputs(
      rapidInput.inputList[0].duration + 0.2,
      rapidInput,
      player.getTimeElapsed()
    );
  player.setPreviousTime(timeNow);

  document.querySelector("#time").textContent = player
    .getTimeElapsed()
    .toFixed(3);
};
const AnimatePrompts = () => {
  timeController();
  const promptArrays = clickInput.inputList
    .concat(rapidInput.inputList)
    .concat(holdInput.inputList);

  // adding prompts to the Canvas
  (0,_canvas_canvas__WEBPACK_IMPORTED_MODULE_10__.validPrompts)(player.getTimeElapsed(), promptArrays, player.getPlay());
  animationID = requestAnimationFrame(AnimatePrompts);
};
const startMap = () => {
  animationID = requestAnimationFrame(AnimatePrompts);
  player.startMap();
  (0,_dom_manipulation_player_dom__WEBPACK_IMPORTED_MODULE_13__.playMap)();
  (0,_dom_manipulation_player_dom__WEBPACK_IMPORTED_MODULE_13__.closeMenu)();
};
const initalizeButtons = () => {
  const buttonsCopy = buttons.map((button) => ({ ...button }));
  clickInput = (0,_player_parts_input_parts__WEBPACK_IMPORTED_MODULE_8__.click)(buttonsCopy.filter((element) => element.type === "click"));

  holdInput = (0,_player_parts_input_parts__WEBPACK_IMPORTED_MODULE_8__.hold)(buttonsCopy.filter((element) => element.type === "hold"));

  rapidInput = (0,_player_parts_input_parts__WEBPACK_IMPORTED_MODULE_8__.rapid)(buttonsCopy.filter((element) => element.type === "rapid"));
};
const pause = () => {
  stopMap();
  (0,_dom_manipulation_player_dom__WEBPACK_IMPORTED_MODULE_13__.pauseMap)();
  (0,_dom_manipulation_player_dom__WEBPACK_IMPORTED_MODULE_13__.openMenu)();
};
const restart = () => {
  player.setTimeElapsed(0);
  player.setPreviousTime(0);

  score = 0;
  combo = 0;
  scoreSummary.great = 0;
  scoreSummary.good = 0;
  scoreSummary.bad = 0;
  scoreSummary.miss = 0;
  (0,_dom_manipulation_player_dom__WEBPACK_IMPORTED_MODULE_13__.resetMap)();
  (0,_dom_manipulation_player_dom__WEBPACK_IMPORTED_MODULE_13__.updateScore)(0, 0);
  // reload them
  initalizeButtons();

  startMap();
};

// Eventlistners and logic for getting
document.querySelector("body").addEventListener("keydown", (e) => {
  if (!keydown) {
    if (handleKeyDown(e.key, clickInput, "checkInput") !== true) {
      // sometimes hold and click inputs can be valid in the same time frame,
      // this will make sure that they dont trigger at the same time.
      handleKeyDown(e.key, holdInput, "checkDown");
    }
    rapidInputHandler(e.key);
    (0,_dom_manipulation_player_dom__WEBPACK_IMPORTED_MODULE_13__.playClick)();
    keydown = true;
  }
});

document.querySelector("body").addEventListener("keyup", (e) => {
  keydown = false;

  if (holdInput.inputList.length !== 0) {
    const holdInfo = holdInput.checkUp(
      e.key,
      player.getTimeElapsed().toFixed(1),
      holdInput.inputList
    );
    feedBackVisualiser.inputFeedback(holdInfo);
    feedBackVisualiser.showIndicator(holdInfo);

    if (holdInfo.Success === true) {
      (0,_dom_manipulation_player_dom__WEBPACK_IMPORTED_MODULE_13__.playClick)();
    }
    incrementScore(holdInfo);
  }
});
document.querySelector("body").addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    if (player.getPlay()) {
      pause();
      return;
    }
    startMap();
  }
});
document.querySelector("#resume-btn").addEventListener("click", () => {
  startMap();
});
document.querySelector("#home-btn").addEventListener("click", () => {
  window.location.href = "index.html";
  // change this to be dynamic instead of static
});

document
  .querySelector("#restart-btn")
  .addEventListener("click", () => restart());
document.querySelector("#pause-btn").addEventListener("click", () => pause());
document
  .querySelector("#play-again")
  .addEventListener("click", () => restart());

const songID = document.location.search.split("?song=")[1];
(0,_dom_manipulation_player_dom__WEBPACK_IMPORTED_MODULE_13__.startLoading)();

mapManager
  .loadMap(songID)
  .then(({ mapInfo, audioUrl, backgroundUrl, extension }) => {
    buttons = JSON.parse(mapInfo.beatMap);
    highScore = mapInfo.highscore || 0;
    console.log(highScore);
    mapID = mapInfo.id;

    (0,_dom_manipulation_player_dom__WEBPACK_IMPORTED_MODULE_13__.addMapInfo)(mapInfo.name, mapInfo.author);

    // load them
    initalizeButtons();
    // add media sources
    (0,_dom_manipulation_player_dom__WEBPACK_IMPORTED_MODULE_13__.addAudio)(audioUrl, backgroundUrl, _audio_bass1drum_43078_mp3__WEBPACK_IMPORTED_MODULE_2__["default"], extension);
    (0,_dom_manipulation_player_dom__WEBPACK_IMPORTED_MODULE_13__.openMenu)();
  })
  .catch((err) => {
    console.log(err);
    // open dialog to allow user to pick a song
  })
  .finally(() => {
    (0,_dom_manipulation_player_dom__WEBPACK_IMPORTED_MODULE_13__.stopLoading)();
  });

})();

/******/ })()
;
//# sourceMappingURL=player.bundle.js.map