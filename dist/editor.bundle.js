/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/editor/editor.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/editor/editor.css ***!
  \*********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --highlight: rgb(12, 80, 128);\r\n  --primary-font: \"Courier New\", Courier, monospace;\r\n  --secondary-bg-color: #091126;\r\n}\r\n\r\nbody {\r\n  grid-template: 1fr 1fr 1fr/1fr;\r\n  background-color: black;\r\n  font-family: var(--primary-font);\r\n  color: var(--primary-color);\r\n}\r\n#map-list-container {\r\n  overflow-y: auto;\r\n  border-left: solid;\r\n  border-width: thin;\r\n  border-color: var(--secondary-bg-color);\r\n  width: 70%;\r\n}\r\n#exit {\r\n  cursor: pointer;\r\n  border: none;\r\n  font-size: 2rem;\r\n  color: rgba(255, 255, 255, 0.815);\r\n  width: 150px;\r\n  font-family: var(--primary-font);\r\n  background-color: rgb(12, 80, 128);\r\n  border-radius: 6px;\r\n  display: none;\r\n}\r\n\r\n.player {\r\n  align-self: end;\r\n}\r\n.player > span {\r\n  color: white;\r\n  background-color: rgba(0, 0, 0, 0.63);\r\n  width: fit-content;\r\n}\r\n.editor-grid {\r\n  display: grid;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  grid-template: 1fr 5fr/1fr;\r\n  width: 90vw;\r\n  height: 90vh;\r\n\r\n  margin: auto;\r\n  gap: 5px;\r\n  background-color: black;\r\n}\r\n.editor-grid > div {\r\n  background-color: white;\r\n}\r\n.map-container {\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  width: 100vw;\r\n  height: 230px;\r\n}\r\n\r\nh1 {\r\n  color: var(--primary-color);\r\n  font-family: var(--primary-font);\r\n  font-weight: normal;\r\n}\r\n\r\n.second {\r\n  height: 100px;\r\n}\r\n\r\n.tool-bar {\r\n  min-width: none;\r\n  display: flex;\r\n  position: fixed;\r\n  width: fit-content;\r\n  justify-content: space-around;\r\n  font-size: 2.5rem;\r\n  align-items: baseline;\r\n  gap: 35px;\r\n  background-color: rgba(3, 3, 3, 0.8);\r\n  height: fit-content;\r\n  align-self: end;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 20;\r\n}\r\n.tool-bar > div {\r\n  cursor: pointer;\r\n}\r\n.tool-bar img {\r\n  width: 96px;\r\n  filter: grayscale(100%);\r\n}\r\n\r\n.player {\r\n  color: black;\r\n}\r\n\r\nimg.active-prompt {\r\n  color: rgb(12, 240, 240);\r\n  filter: grayscale(0);\r\n}\r\n\r\n.get-prompt {\r\n  position: absolute;\r\n  width: 1520px;\r\n  height: 180px;\r\n  left: 400px;\r\n  display: grid;\r\n  grid-template: repeat(4, 1fr) / 1fr;\r\n  cursor: pointer;\r\n  color: transparent;\r\n  text-align: center;\r\n  line-height: 2.6;\r\n  z-index: 20;\r\n}\r\n.get-prompt > div:hover {\r\n  background-color: rgba(0, 0, 255, 0.5);\r\n  color: white;\r\n}\r\n.tool-bar > div:hover > form {\r\n  opacity: 1;\r\n}\r\n\r\n.duration-form {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 1.5rem;\r\n  gap: 4px;\r\n  color: white;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  padding: 5px;\r\n  opacity: 0;\r\n  bottom: 70px;\r\n}\r\n.duration-form > button {\r\n  background-color: black;\r\n  background-color: rgb(94, 93, 93);\r\n  border: solid black;\r\n  color: white;\r\n  letter-spacing: 3px;\r\n  cursor: pointer;\r\n}\r\n.duration-form > button:hover {\r\n  background-color: rgb(0, 0, 0);\r\n}\r\n.cplayer {\r\n  margin-top: 10px;\r\n  width: 100vw;\r\n  height: 215px;\r\n  transform: translateY(22.5px);\r\n  position: absolute;\r\n  z-index: 10;\r\n}\r\n.progress_section {\r\n  display: flex;\r\n  align-items: flex-end;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n}\r\n.input_line {\r\n  background-color: aqua;\r\n}\r\n#prompt_location {\r\n  position: absolute;\r\n  width: 90vw;\r\n  height: 80px;\r\n  z-index: 1;\r\n}\r\n.p_container {\r\n  height: 45px;\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n.progression-bar {\r\n  width: 90vw;\r\n  height: 5px;\r\n  background-color: rgba(166, 162, 162, 0.683);\r\n}\r\n.progress_thumb {\r\n  width: 6px;\r\n  height: 45px;\r\n  position: absolute;\r\n  background-color: white;\r\n  transform: translateY(-22px);\r\n  cursor: pointer;\r\n}\r\n#time_guage {\r\n  background: rgba(0, 0, 0, 0.79);\r\n  border: transparent;\r\n  color: rgb(231, 225, 225);\r\n  margin-top: 7px;\r\n  padding: 5px;\r\n  font-weight: bold;\r\n}\r\n#background-image {\r\n  filter: brightness(0.6);\r\n  opacity: 0.7;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n#background-video {\r\n  height: 100vh;\r\n  filter: brightness(0.6);\r\n}\r\n\r\n#modal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  width: 100vw;\r\n  min-height: 100vh;\r\n  z-index: 100;\r\n  background-color: var(--primary-bg-color);\r\n  overflow-x: auto;\r\n}\r\n\r\n.editor-header {\r\n  display: flex;\r\n  align-items: baseline;\r\n  justify-content: space-between;\r\n  background-image: linear-gradient(\r\n    to top,\r\n    rgba(0, 0, 0, 0),\r\n    var(--secondary-bg-color)\r\n  );\r\n  padding-left: 20px;\r\n}\r\n\r\n#add-map {\r\n  display: none;\r\n  grid-template: 0.3fr 5fr/1fr;\r\n  height: 100%;\r\n}\r\n\r\n#login {\r\n  display: None;\r\n}\r\na {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  color: rgba(255, 255, 255, 0.861);\r\n  width: 100%;\r\n}\r\n.button-group {\r\n  display: flex;\r\n  color: var(--primary-color);\r\n  cursor: pointer;\r\n  height: 50px;\r\n}\r\n.button-group > div {\r\n  width: 50%;\r\n  text-align: center;\r\n  padding-top: 5px;\r\n  font-size: 1.5rem;\r\n}\r\n#add.active {\r\n  background-image: linear-gradient(\r\n    to top,\r\n    rgba(57, 166, 246, 0),\r\n    rgb(12, 80, 128)\r\n  );\r\n}\r\n#selected.active {\r\n  background-image: linear-gradient(\r\n    to top,\r\n    rgba(57, 166, 246, 0),\r\n    rgb(12, 80, 128)\r\n  );\r\n}\r\n#add-map-form {\r\n  display: none;\r\n}\r\n#selected-summary {\r\n  display: none;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n}\r\n#select-name {\r\n  font-size: 2rem;\r\n}\r\n\r\n#map-video {\r\n  width: 100%;\r\n  height: auto;\r\n  max-height: 313px;\r\n}\r\n#map-image {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n#summary-wrapper {\r\n  display: flex;\r\n}\r\n#map-section {\r\n  padding: 20px;\r\n  width: 30%;\r\n}\r\n.not-selected {\r\n  align-self: center;\r\n  width: 100%;\r\n}\r\n#selected-status {\r\n  text-align: center;\r\n}\r\n.beat-map {\r\n  display: flex;\r\n  height: 100px;\r\n  gap: 50px;\r\n  border-bottom: solid;\r\n  border-width: thin;\r\n  border-color: var(--primary-color);\r\n  width: 90%;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n}\r\n.beat-map.active {\r\n  background-image: linear-gradient(\r\n    to left,\r\n    rgba(57, 166, 246, 0),\r\n    rgb(12, 80, 128)\r\n  );\r\n}\r\n.beat-map:hover {\r\n  background-image: linear-gradient(\r\n    to left,\r\n    rgba(57, 166, 246, 0),\r\n    rgba(12, 80, 128, 0.638)\r\n  );\r\n}\r\n#time-map {\r\n  width: 100vw;\r\n  height: 150px;\r\n}\r\n\r\n.beat-map-text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n.beat-map-image {\r\n  width: 177px;\r\n  height: 99px;\r\n  object-fit: cover;\r\n}\r\n.map-option {\r\n  margin-left: auto;\r\n  height: fit-content;\r\n  padding: 2px;\r\n  padding-left: 4px;\r\n  padding-right: 4px;\r\n  border-radius: 50%;\r\n}\r\n#menu-body {\r\n  display: flex;\r\n  height: 80vh;\r\n  width: 99%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  min-width: 932px;\r\n}\r\n.map-option:hover {\r\n  background-color: rgba(255, 255, 255, 0.4);\r\n}\r\n.option-list {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: var(--primary-bg-color);\r\n  border: solid var(--primary-color);\r\n  border-width: thin;\r\n  padding: 13px;\r\n  right: 40px;\r\n  margin-top: 20px;\r\n  list-style: none;\r\n}\r\n.option-list > li:hover {\r\n  color: var(--highlight);\r\n}\r\n.published-status {\r\n  color: white;\r\n  border: solid green;\r\n  margin-left: 5px;\r\n  background-color: green;\r\n  border-radius: 5px;\r\n}\r\n.pending-status {\r\n  color: white;\r\n  border: solid rgb(124, 124, 18);\r\n  margin-left: 5px;\r\n  background-color: rgb(124, 124, 18);\r\n  border-radius: 5px;\r\n}\r\n@media only screen and (max-width: 914px) {\r\n}\r\n\r\n.dark_mode {\r\n  --primary-color: rgba(255, 255, 255, 0.811);\r\n  --primary-bg-color: #00000c;\r\n}\r\n\r\n.light_mode {\r\n  --primary-color: #000000;\r\n  --primary-bg-color: #eeeeee;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/editor/editor.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B,iDAAiD;EACjD,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;EAC9B,uBAAuB;EACvB,gCAAgC;EAChC,2BAA2B;AAC7B;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,uCAAuC;EACvC,UAAU;AACZ;AACA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;EACf,iCAAiC;EACjC,YAAY;EACZ,gCAAgC;EAChC,kCAAkC;EAClC,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;AACA;EACE,YAAY;EACZ,qCAAqC;EACrC,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,0BAA0B;EAC1B,WAAW;EACX,YAAY;;EAEZ,YAAY;EACZ,QAAQ;EACR,uBAAuB;AACzB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,oCAAoC;EACpC,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,2BAA2B;EAC3B,gCAAgC;EAChC,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,6BAA6B;EAC7B,iBAAiB;EACjB,qBAAqB;EACrB,SAAS;EACT,oCAAoC;EACpC,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,WAAW;AACb;AACA;EACE,eAAe;AACjB;AACA;EACE,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,WAAW;EACX,aAAa;EACb,mCAAmC;EACnC,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,sCAAsC;EACtC,YAAY;AACd;AACA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,QAAQ;EACR,YAAY;EACZ,oCAAoC;EACpC,YAAY;EACZ,UAAU;EACV,YAAY;AACd;AACA;EACE,uBAAuB;EACvB,iCAAiC;EACjC,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,uBAAuB;EACvB,YAAY;EACZ,oCAAoC;AACtC;AACA;EACE,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,UAAU;AACZ;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,WAAW;EACX,WAAW;EACX,4CAA4C;AAC9C;AACA;EACE,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,4BAA4B;EAC5B,eAAe;AACjB;AACA;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,yBAAyB;EACzB,eAAe;EACf,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,uBAAuB;EACvB,YAAY;EACZ,4BAA4B;EAC5B,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,yCAAyC;EACzC,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,8BAA8B;EAC9B;;;;GAIC;EACD,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,YAAY;AACd;;AAEA;EACE,aAAa;AACf;AACA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,iCAAiC;EACjC,WAAW;AACb;AACA;EACE,aAAa;EACb,2BAA2B;EAC3B,eAAe;EACf,YAAY;AACd;AACA;EACE,UAAU;EACV,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE;;;;GAIC;AACH;AACA;EACE;;;;GAIC;AACH;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,WAAW;AACb;AACA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,aAAa;EACb,SAAS;EACT,oBAAoB;EACpB,kBAAkB;EAClB,kCAAkC;EAClC,UAAU;EACV,aAAa;EACb,eAAe;AACjB;AACA;EACE;;;;GAIC;AACH;AACA;EACE;;;;GAIC;AACH;AACA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;AACA;EACE,YAAY;EACZ,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,YAAY;EACZ,UAAU;EACV,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,yCAAyC;EACzC,kCAAkC;EAClC,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,+BAA+B;EAC/B,gBAAgB;EAChB,mCAAmC;EACnC,kBAAkB;AACpB;AACA;AACA;;AAEA;EACE,2CAA2C;EAC3C,2BAA2B;AAC7B;;AAEA;EACE,wBAAwB;EACxB,2BAA2B;AAC7B","sourcesContent":[":root {\r\n  --highlight: rgb(12, 80, 128);\r\n  --primary-font: \"Courier New\", Courier, monospace;\r\n  --secondary-bg-color: #091126;\r\n}\r\n\r\nbody {\r\n  grid-template: 1fr 1fr 1fr/1fr;\r\n  background-color: black;\r\n  font-family: var(--primary-font);\r\n  color: var(--primary-color);\r\n}\r\n#map-list-container {\r\n  overflow-y: auto;\r\n  border-left: solid;\r\n  border-width: thin;\r\n  border-color: var(--secondary-bg-color);\r\n  width: 70%;\r\n}\r\n#exit {\r\n  cursor: pointer;\r\n  border: none;\r\n  font-size: 2rem;\r\n  color: rgba(255, 255, 255, 0.815);\r\n  width: 150px;\r\n  font-family: var(--primary-font);\r\n  background-color: rgb(12, 80, 128);\r\n  border-radius: 6px;\r\n  display: none;\r\n}\r\n\r\n.player {\r\n  align-self: end;\r\n}\r\n.player > span {\r\n  color: white;\r\n  background-color: rgba(0, 0, 0, 0.63);\r\n  width: fit-content;\r\n}\r\n.editor-grid {\r\n  display: grid;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  grid-template: 1fr 5fr/1fr;\r\n  width: 90vw;\r\n  height: 90vh;\r\n\r\n  margin: auto;\r\n  gap: 5px;\r\n  background-color: black;\r\n}\r\n.editor-grid > div {\r\n  background-color: white;\r\n}\r\n.map-container {\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  width: 100vw;\r\n  height: 230px;\r\n}\r\n\r\nh1 {\r\n  color: var(--primary-color);\r\n  font-family: var(--primary-font);\r\n  font-weight: normal;\r\n}\r\n\r\n.second {\r\n  height: 100px;\r\n}\r\n\r\n.tool-bar {\r\n  min-width: none;\r\n  display: flex;\r\n  position: fixed;\r\n  width: fit-content;\r\n  justify-content: space-around;\r\n  font-size: 2.5rem;\r\n  align-items: baseline;\r\n  gap: 35px;\r\n  background-color: rgba(3, 3, 3, 0.8);\r\n  height: fit-content;\r\n  align-self: end;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 20;\r\n}\r\n.tool-bar > div {\r\n  cursor: pointer;\r\n}\r\n.tool-bar img {\r\n  width: 96px;\r\n  filter: grayscale(100%);\r\n}\r\n\r\n.player {\r\n  color: black;\r\n}\r\n\r\nimg.active-prompt {\r\n  color: rgb(12, 240, 240);\r\n  filter: grayscale(0);\r\n}\r\n\r\n.get-prompt {\r\n  position: absolute;\r\n  width: 1520px;\r\n  height: 180px;\r\n  left: 400px;\r\n  display: grid;\r\n  grid-template: repeat(4, 1fr) / 1fr;\r\n  cursor: pointer;\r\n  color: transparent;\r\n  text-align: center;\r\n  line-height: 2.6;\r\n  z-index: 20;\r\n}\r\n.get-prompt > div:hover {\r\n  background-color: rgba(0, 0, 255, 0.5);\r\n  color: white;\r\n}\r\n.tool-bar > div:hover > form {\r\n  opacity: 1;\r\n}\r\n\r\n.duration-form {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 1.5rem;\r\n  gap: 4px;\r\n  color: white;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  padding: 5px;\r\n  opacity: 0;\r\n  bottom: 70px;\r\n}\r\n.duration-form > button {\r\n  background-color: black;\r\n  background-color: rgb(94, 93, 93);\r\n  border: solid black;\r\n  color: white;\r\n  letter-spacing: 3px;\r\n  cursor: pointer;\r\n}\r\n.duration-form > button:hover {\r\n  background-color: rgb(0, 0, 0);\r\n}\r\n.cplayer {\r\n  margin-top: 10px;\r\n  width: 100vw;\r\n  height: 215px;\r\n  transform: translateY(22.5px);\r\n  position: absolute;\r\n  z-index: 10;\r\n}\r\n.progress_section {\r\n  display: flex;\r\n  align-items: flex-end;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n}\r\n.input_line {\r\n  background-color: aqua;\r\n}\r\n#prompt_location {\r\n  position: absolute;\r\n  width: 90vw;\r\n  height: 80px;\r\n  z-index: 1;\r\n}\r\n.p_container {\r\n  height: 45px;\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n.progression-bar {\r\n  width: 90vw;\r\n  height: 5px;\r\n  background-color: rgba(166, 162, 162, 0.683);\r\n}\r\n.progress_thumb {\r\n  width: 6px;\r\n  height: 45px;\r\n  position: absolute;\r\n  background-color: white;\r\n  transform: translateY(-22px);\r\n  cursor: pointer;\r\n}\r\n#time_guage {\r\n  background: rgba(0, 0, 0, 0.79);\r\n  border: transparent;\r\n  color: rgb(231, 225, 225);\r\n  margin-top: 7px;\r\n  padding: 5px;\r\n  font-weight: bold;\r\n}\r\n#background-image {\r\n  filter: brightness(0.6);\r\n  opacity: 0.7;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n#background-video {\r\n  height: 100vh;\r\n  filter: brightness(0.6);\r\n}\r\n\r\n#modal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  width: 100vw;\r\n  min-height: 100vh;\r\n  z-index: 100;\r\n  background-color: var(--primary-bg-color);\r\n  overflow-x: auto;\r\n}\r\n\r\n.editor-header {\r\n  display: flex;\r\n  align-items: baseline;\r\n  justify-content: space-between;\r\n  background-image: linear-gradient(\r\n    to top,\r\n    rgba(0, 0, 0, 0),\r\n    var(--secondary-bg-color)\r\n  );\r\n  padding-left: 20px;\r\n}\r\n\r\n#add-map {\r\n  display: none;\r\n  grid-template: 0.3fr 5fr/1fr;\r\n  height: 100%;\r\n}\r\n\r\n#login {\r\n  display: None;\r\n}\r\na {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  color: rgba(255, 255, 255, 0.861);\r\n  width: 100%;\r\n}\r\n.button-group {\r\n  display: flex;\r\n  color: var(--primary-color);\r\n  cursor: pointer;\r\n  height: 50px;\r\n}\r\n.button-group > div {\r\n  width: 50%;\r\n  text-align: center;\r\n  padding-top: 5px;\r\n  font-size: 1.5rem;\r\n}\r\n#add.active {\r\n  background-image: linear-gradient(\r\n    to top,\r\n    rgba(57, 166, 246, 0),\r\n    rgb(12, 80, 128)\r\n  );\r\n}\r\n#selected.active {\r\n  background-image: linear-gradient(\r\n    to top,\r\n    rgba(57, 166, 246, 0),\r\n    rgb(12, 80, 128)\r\n  );\r\n}\r\n#add-map-form {\r\n  display: none;\r\n}\r\n#selected-summary {\r\n  display: none;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n}\r\n#select-name {\r\n  font-size: 2rem;\r\n}\r\n\r\n#map-video {\r\n  width: 100%;\r\n  height: auto;\r\n  max-height: 313px;\r\n}\r\n#map-image {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n#summary-wrapper {\r\n  display: flex;\r\n}\r\n#map-section {\r\n  padding: 20px;\r\n  width: 30%;\r\n}\r\n.not-selected {\r\n  align-self: center;\r\n  width: 100%;\r\n}\r\n#selected-status {\r\n  text-align: center;\r\n}\r\n.beat-map {\r\n  display: flex;\r\n  height: 100px;\r\n  gap: 50px;\r\n  border-bottom: solid;\r\n  border-width: thin;\r\n  border-color: var(--primary-color);\r\n  width: 90%;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n}\r\n.beat-map.active {\r\n  background-image: linear-gradient(\r\n    to left,\r\n    rgba(57, 166, 246, 0),\r\n    rgb(12, 80, 128)\r\n  );\r\n}\r\n.beat-map:hover {\r\n  background-image: linear-gradient(\r\n    to left,\r\n    rgba(57, 166, 246, 0),\r\n    rgba(12, 80, 128, 0.638)\r\n  );\r\n}\r\n#time-map {\r\n  width: 100vw;\r\n  height: 150px;\r\n}\r\n\r\n.beat-map-text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n.beat-map-image {\r\n  width: 177px;\r\n  height: 99px;\r\n  object-fit: cover;\r\n}\r\n.map-option {\r\n  margin-left: auto;\r\n  height: fit-content;\r\n  padding: 2px;\r\n  padding-left: 4px;\r\n  padding-right: 4px;\r\n  border-radius: 50%;\r\n}\r\n#menu-body {\r\n  display: flex;\r\n  height: 80vh;\r\n  width: 99%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  min-width: 932px;\r\n}\r\n.map-option:hover {\r\n  background-color: rgba(255, 255, 255, 0.4);\r\n}\r\n.option-list {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: var(--primary-bg-color);\r\n  border: solid var(--primary-color);\r\n  border-width: thin;\r\n  padding: 13px;\r\n  right: 40px;\r\n  margin-top: 20px;\r\n  list-style: none;\r\n}\r\n.option-list > li:hover {\r\n  color: var(--highlight);\r\n}\r\n.published-status {\r\n  color: white;\r\n  border: solid green;\r\n  margin-left: 5px;\r\n  background-color: green;\r\n  border-radius: 5px;\r\n}\r\n.pending-status {\r\n  color: white;\r\n  border: solid rgb(124, 124, 18);\r\n  margin-left: 5px;\r\n  background-color: rgb(124, 124, 18);\r\n  border-radius: 5px;\r\n}\r\n@media only screen and (max-width: 914px) {\r\n}\r\n\r\n.dark_mode {\r\n  --primary-color: rgba(255, 255, 255, 0.811);\r\n  --primary-bg-color: #00000c;\r\n}\r\n\r\n.light_mode {\r\n  --primary-color: #000000;\r\n  --primary-bg-color: #eeeeee;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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

/***/ "./src/editor/editor.css":
/*!*******************************!*\
  !*** ./src/editor/editor.css ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_editor_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./editor.css */ "./node_modules/css-loader/dist/cjs.js!./src/editor/editor.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_editor_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_editor_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_editor_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_editor_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/canvas/time-map.js":
/*!********************************!*\
  !*** ./src/canvas/time-map.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawMap": () => (/* binding */ drawMap),
/* harmony export */   "initMap": () => (/* binding */ initMap)
/* harmony export */ });
/* harmony import */ var _images_up_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/up.png */ "./src/images/up.png");
/* harmony import */ var _images_left_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/left.png */ "./src/images/left.png");
/* harmony import */ var _images_down_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/down.png */ "./src/images/down.png");
/* harmony import */ var _images_right_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/right.png */ "./src/images/right.png");
/* harmony import */ var _images_hold_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/hold.png */ "./src/images/hold.png");
/* harmony import */ var _images_rapid_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/rapid.png */ "./src/images/rapid.png");







let myCanvas;
let ctx;
// a time point every x pixels of the canvas
const pixelsPerIndicator = 29;
// each indicator represent 100 miliseconds
let numberOfIndicators = 0;
let canvaswidth = 0;
let speed = 0;
let offSet = 0;

const symbols = {
  ArrowUp: document.createElement("img"),
  ArrowLeft: document.createElement("img"),
  ArrowRight: document.createElement("img"),
  ArrowDown: document.createElement("img"),
};
const longPromptText = {
  rapid: _images_rapid_png__WEBPACK_IMPORTED_MODULE_5__,
  hold: _images_hold_png__WEBPACK_IMPORTED_MODULE_4__,
};

symbols.ArrowUp.src = _images_up_png__WEBPACK_IMPORTED_MODULE_0__;
symbols.ArrowLeft.src = _images_left_png__WEBPACK_IMPORTED_MODULE_1__;
symbols.ArrowDown.src = _images_down_png__WEBPACK_IMPORTED_MODULE_2__;
symbols.ArrowRight.src = _images_right_png__WEBPACK_IMPORTED_MODULE_3__;

const textImage = document.createElement("img");

function initMap(id) {
  myCanvas = document.querySelector(id);
  myCanvas.width = window.innerWidth;
  myCanvas.height = 150;
  canvaswidth = myCanvas.width;
  numberOfIndicators = Math.ceil(myCanvas.clientWidth / pixelsPerIndicator);
  speed = canvaswidth / (numberOfIndicators / 10);
  offSet = numberOfIndicators / 2 / 10;

  if (myCanvas.getContext) {
    ctx = myCanvas.getContext("2d"); // rendering context
  } else console.log("canvas not supported");
}

function drawClickPrompt(arrowDirection, xPosition) {
  ctx.beginPath();
  // ctx.arc(xPosition, 50, 22.5, 0, 2 * Math.PI);
  ctx.drawImage(symbols[arrowDirection], xPosition - 20.5, 10, 50, 50);
}
function drawLongPrompt(arrowDirection, startArc, endArc, type) {
  const size = 50;
  textImage.src = longPromptText[type];
  const textP = startArc + 100;

  ctx.strokeStyle = type === "rapid" ? "blue" : "#add8e6";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(startArc, 30, 15.5, 0, 2 * Math.PI);
  ctx.arc(endArc, 30, 15.5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.drawImage(symbols[arrowDirection], startArc - 22.5, 10, size, size);
  ctx.drawImage(textImage, textP, 10, 75, 35);
  ctx.drawImage(symbols[arrowDirection], endArc - 22.5, 10, size, size);
}

function drawIndicators(seconds, totalIndicators) {
  // total seconds to the center of the map.

  for (let i = 0; i < totalIndicators; i += 1) {
    const indicatorTime = i / 10;

    const valid =
      indicatorTime + offSet >= seconds && seconds >= indicatorTime - offSet;

    if (valid) {
      const timePassed = seconds - (indicatorTime - offSet);
      const travelDistance = timePassed * speed;
      const xCoords = canvaswidth - travelDistance;
      const isInteger = indicatorTime - Math.floor(indicatorTime) === 0;
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "gray";
      ctx.fillStyle = "rgba(38, 199, 151, 0.741)";
      ctx.font = "12px serif";
      ctx.moveTo(xCoords, 0);
      ctx.lineTo(xCoords, isInteger ? 100 : 60);
      ctx.fillText(indicatorTime, xCoords - 3, isInteger ? 112 : 72);
      ctx.stroke();
    }
  }
}
function drawPrompts(seconds, prompts) {
  // how many seconds before time the prompt should appear
  for (let i = 0; i < prompts.length; i += 1) {
    const prompt = prompts[i];
    const valid =
      prompt.time + prompt.duration + offSet >= seconds &&
      seconds >= prompt.time - offSet;
    if (valid) {
      const timePassed = seconds - (prompt.time - offSet);
      const travelDistance = timePassed * speed;
      const xCoords = canvaswidth - travelDistance;

      if (prompt.type === "click") {
        drawClickPrompt(prompt.key, xCoords);
      } else {
        const endDistance =
          Number(prompt.time + prompt.duration - seconds - offSet) * speed;
        const endCoords = myCanvas.width + endDistance;
        drawLongPrompt(prompt.key, xCoords, endCoords, prompt.type);
      }
    }
  }
}

function drawMap(prompts = [], seconds = 0, duration = 0) {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  const totalIndicators = Number((duration * 10).toFixed(0));
  drawIndicators(seconds, totalIndicators);
  drawPrompts(seconds, prompts);

  // draw triangle
  const centerDistance = offSet * speed;
  const centerCoords = Math.floor(canvaswidth - centerDistance);
  ctx.beginPath();
  ctx.moveTo(centerCoords, 30);
  ctx.lineTo(centerCoords - 15, 0);
  ctx.lineTo(centerCoords + 15, 0);
  ctx.fillStyle = "rgba(38, 199, 151, 0.741)";
  ctx.fill();
}

window.addEventListener("resize", () => {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  myCanvas.width = window.innerWidth;
  numberOfIndicators = Math.ceil(myCanvas.clientWidth / pixelsPerIndicator);
  canvaswidth = myCanvas.width;
  speed = canvaswidth / (numberOfIndicators / 10);
  offSet = numberOfIndicators / 2 / 10;
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

/***/ "./src/dom-manipulation/editor-dom.js":
/*!********************************************!*\
  !*** ./src/dom-manipulation/editor-dom.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addErrorMessage": () => (/* binding */ addErrorMessage),
/* harmony export */   "addPromptSrc": () => (/* binding */ addPromptSrc),
/* harmony export */   "authenicatedView": () => (/* binding */ authenicatedView),
/* harmony export */   "changeMapName": () => (/* binding */ changeMapName),
/* harmony export */   "closeEditorMenu": () => (/* binding */ closeEditorMenu),
/* harmony export */   "currentAudioTime": () => (/* binding */ currentAudioTime),
/* harmony export */   "displaySelectedStatus": () => (/* binding */ displaySelectedStatus),
/* harmony export */   "editorPause": () => (/* binding */ editorPause),
/* harmony export */   "editorPlay": () => (/* binding */ editorPlay),
/* harmony export */   "focusBtn": () => (/* binding */ focusBtn),
/* harmony export */   "listBeatMap": () => (/* binding */ listBeatMap),
/* harmony export */   "loadingMap": () => (/* binding */ loadingMap),
/* harmony export */   "notAuthenticatedView": () => (/* binding */ notAuthenticatedView),
/* harmony export */   "openEditorMenu": () => (/* binding */ openEditorMenu),
/* harmony export */   "opneNameEditForm": () => (/* binding */ opneNameEditForm),
/* harmony export */   "showEdit": () => (/* binding */ showEdit),
/* harmony export */   "showHideOption": () => (/* binding */ showHideOption),
/* harmony export */   "showLoading": () => (/* binding */ showLoading),
/* harmony export */   "showSelectedSong": () => (/* binding */ showSelectedSong),
/* harmony export */   "updateDomTime": () => (/* binding */ updateDomTime),
/* harmony export */   "updateMediaTime": () => (/* binding */ updateMediaTime),
/* harmony export */   "updatePlaySpeed": () => (/* binding */ updatePlaySpeed),
/* harmony export */   "viewSwitch": () => (/* binding */ viewSwitch)
/* harmony export */ });
/* harmony import */ var _images_rapid_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/rapid.png */ "./src/images/rapid.png");
/* harmony import */ var _images_hold_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/hold.png */ "./src/images/hold.png");
/* harmony import */ var _images_click_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/click.png */ "./src/images/click.png");




function showEdit(show) {
  const editBtn = document.querySelector("#exit");

  if (show) {
    editBtn.style.display = "inline-block";
    return;
  }
  editBtn.style.display = "none";
}

function focusBtn(element) {
  const clickBtn = document.querySelector("#click-image");
  const holdBtn = document.querySelector("#hold-image");
  const rapidBtn = document.querySelector("#rapid-image");
  if ([clickBtn, holdBtn, rapidBtn].includes(element)) {
    clickBtn.classList.remove("active-prompt");
    rapidBtn.classList.remove("active-prompt");
    holdBtn.classList.remove("active-prompt");
    element.classList.toggle("active-prompt");
  }
}
function closeEditorMenu() {
  const Menu = document.querySelector("#modal");
  const selectedAudio = document.querySelector("#map-audio");
  Menu.style.display = "none";
  selectedAudio.pause();
}
function openEditorMenu() {
  const Menu = document.querySelector("#modal");
  Menu.style.display = "flex";
}

function loadingMap() {
  const notSelectedSceen = document.querySelector(".not-selected");
  const selectedSummary = document.querySelector("#selected-summary");
  const selectedStatus = document.querySelector("#selected-status");
  selectedSummary.style.display = "none";
  notSelectedSceen.style.display = "flex";

  selectedStatus.textContent = "Loading...";
}
const stopLoadingMap = () => {
  const notSelectedSceen = document.querySelector(".not-selected");
  const selectedSummary = document.querySelector("#selected-summary");
  notSelectedSceen.style.display = "none";
  selectedSummary.style.display = "flex";
};
function updateMediaTime(elapsedTime) {
  const Audio = document.querySelector("#editor-audio");
  const backgroundVideo = document.querySelector("#background-video");
  Audio.currentTime = elapsedTime;
  backgroundVideo.currentTime = elapsedTime;
}
function updateDomTime(elapsedTime) {
  const Audio = document.querySelector("#editor-audio");
  document.querySelector("#ptime").textContent = ` ${elapsedTime.toFixed(
    3
  )} / ${Audio.duration}`;

  const Score = document.querySelector("#score");
  Score.textContent = `${elapsedTime.toFixed(1)} `;
}

function editorPlay(time) {
  const Audio = document.querySelector("#editor-audio");
  const backgroundVideo = document.querySelector("#background-video");
  const playBtn = document.querySelector("#play");

  Audio.currentTime = time;
  backgroundVideo.currentTime = time;
  Audio.play();
  backgroundVideo.play();

  playBtn.textContent = "⏸";
}
function editorPause() {
  const Audio = document.querySelector("#editor-audio");
  const backgroundVideo = document.querySelector("#background-video");
  const playBtn = document.querySelector("#play");

  Audio.pause();
  backgroundVideo.pause();

  playBtn.textContent = "▶";
}

const highLightSelected = (id) => {
  const beatMaps = document.querySelectorAll(".beat-map");
  beatMaps.forEach((listItem) => {
    if (listItem.id === `map-${id}`) {
      listItem.classList.add("active");
      return;
    }
    listItem.classList.remove("active");
  });
};
function viewSwitch(buttonID) {
  const buttonGroup = document.querySelector(".button-group");
  const addMapForm = document.querySelector("#add-map-form");
  const summaryWrapper = document.querySelector("#summary-wrapper");
  const buttonGroupMember = buttonGroup.children;

  Object.keys(buttonGroupMember).forEach((child) => {
    const element = buttonGroupMember[child];

    if (element.id === buttonID) {
      element.classList.add("active");

      const selectedButton = element.getAttribute("id");

      const checkSelected = selectedButton === "selected";
      const checkCreate = selectedButton === "add";
      // add form style change
      addMapForm.style.display = checkCreate ? "flex" : "none";

      // login form style change
      summaryWrapper.style.display = checkSelected ? "flex" : "none";

      return;
    }
    element.classList.remove("active");
  });
}

function updatePlaySpeed(playBackRate) {
  const Audio = document.querySelector("#editor-audio");
  const backgroundVideo = document.querySelector("#background-video");
  Audio.playbackRate = playBackRate;
  backgroundVideo.playbackRate = playBackRate;
}

function showSelectedSong(
  beatMap,
  previewExtension,
  audioURL,
  backgroundURL
) {
  const Audio = document.querySelector("#editor-audio");
  const backgroundVideo = document.querySelector("#background-video");
  const backgroundImage = document.querySelector("#background-image");
  const selectedAudio = document.querySelector("#map-audio");
  const selectName = document.querySelector("#select-name ");
  const nameEdit = document.querySelector("#name-edit>input[type='text']");
  const selectVideo = document.querySelector("#map-video");
  const selectImage = document.querySelector("#map-image");
  // remove no selected message
  stopLoadingMap();
  highLightSelected(beatMap.id);
  // add audio src
  Audio.src = audioURL;
  selectVideo.style.display = "none";
  selectImage.style.display = "none";
  backgroundVideo.style.display = "none";
  backgroundImage.style.display = "none";
  selectName.textContent = beatMap.name;
  nameEdit.value = beatMap.name;

  selectedAudio.src = audioURL;
  const extension = previewExtension;
  // show either video or image based on background extension
  if (extension === "mp4") {
    backgroundVideo.src = backgroundURL;
    backgroundVideo.style.display = "block";

    // for the summary
    selectVideo.src = backgroundURL;
    selectVideo.style.display = "block";
    selectVideo.play();
  } else {
    backgroundImage.style.backgroundImage = `url(${backgroundURL})`;
    selectImage.src = backgroundURL;
    selectImage.style.display = "block";
    backgroundImage.style.display = "block";
  }
}

function displaySelectedStatus(text) {
  const notSelected = document.querySelector(".not-selected");
  notSelected.style.display = "block";
  const selectSummary = document.querySelector("#selected-summary");
  selectSummary.style.display = "none";

  const selectedStatus = document.querySelector("#selected-status");
  selectedStatus.textContent = text;
  showEdit(false);
}

function changeMapName(id, value) {
  const mapName = document.querySelector(`#map-${id} .map-name`);
  mapName.textContent = value;
}
function listBeatMap(beatMap, extension, source) {
  const mapList = document.querySelector("#map-list");
  const listItem = document.createElement("li");

  listItem.id = `map-${beatMap.id}`;
  listItem.classList.add("beat-map");
  const optionButton = document.createElement("span");
  optionButton.innerHTML = "&#x22EF";
  optionButton.classList.add("map-option");
  const optionsList = document.createElement("ul");
  optionsList.classList.add("option-list");

  listItem.append(optionsList);

  // create the options
  const saveMap = document.createElement("li");
  saveMap.textContent = "save";
  if (beatMap.status === "draft") {
    optionsList.append(saveMap);
  }

  const publishMap = document.createElement("li");
  publishMap.textContent = beatMap.status !== "draft" ? "unpublish" : "publish";
  optionsList.append(publishMap);

  const deleteMap = document.createElement("li");
  deleteMap.textContent = "delete";
  optionsList.append(deleteMap);
  const clearLocal = document.createElement("li");
  clearLocal.textContent = " clear local";
  optionsList.append(clearLocal);

  const backgroundType = extension;
  let mapBackground;

  if (backgroundType === "mp4") {
    mapBackground = document.createElement("video");
    mapBackground.addEventListener("mouseenter", (e) => {
      e.target.play();
    });
    mapBackground.addEventListener("mouseleave", (e) => {
      e.target.pause();
    });
  } else {
    mapBackground = document.createElement("img");
  }

  mapBackground.classList.add("beat-map-image");
  mapBackground.src = source;
  listItem.appendChild(mapBackground);
  const mapInfo = document.createElement("div");
  mapInfo.classList.add("beat-map-text");
  listItem.appendChild(mapInfo);
  const nameContainer = document.createElement("div");
  const mapName = document.createElement("span");
  mapName.classList.add("map-name");
  mapName.textContent = beatMap.name;
  const mapStatus = document.createElement("span");
  mapStatus.className = `${beatMap.status}-status`;
  if (beatMap.status !== "draft") {
    mapStatus.textContent = beatMap.status;
  }
  nameContainer.append(mapName, mapStatus);

  const mapUpdateDate = document.createElement("span");
  mapUpdateDate.textContent = `last updated: ${beatMap.dateUpdated}`;
  mapInfo.append(nameContainer, mapUpdateDate);

  listItem.append(optionButton);
  mapList.prepend(listItem);
  return {
    listItem,
    optionsList,
    optionButton,
    deleteMap,
    saveMap,
    publishMap,
    clearLocal,
    mapName,
    mapStatus,
  };
}

function showHideOption(optionList) {
  const element = optionList;
  const { display } = getComputedStyle(element);
  element.style.display = display === "none" ? "block" : "none";
}

function authenicatedView() {
  const loginForm = document.querySelector("#login");
  const addMapArea = document.querySelector("#add-map");
  const userMaps = document.querySelector("#map-list");
  userMaps.style.display = "block";
  addMapArea.style.display = "grid";
  loginForm.style.display = "none";
}
function notAuthenticatedView() {
  const loginForm = document.querySelector("#login");
  const addMapArea = document.querySelector("#add-map");
  const userMaps = document.querySelector("#map-list");
  loginForm.style.display = "flex";
  addMapArea.style.display = "none";
  userMaps.style.display = "none";
}
function currentAudioTime() {
  const Audio = document.querySelector("#editor-audio");
  return Audio.currentTime;
}

function addPromptSrc() {
  const rapidButton = document.querySelector("#rapid-image");
  rapidButton.src = _images_rapid_png__WEBPACK_IMPORTED_MODULE_0__;
  const holdButton = document.querySelector("#hold-image");
  holdButton.src = _images_hold_png__WEBPACK_IMPORTED_MODULE_1__;
  const clickButton = document.querySelector("#click-image");
  clickButton.src = _images_click_png__WEBPACK_IMPORTED_MODULE_2__;
}

function addErrorMessage(message, id) {
  const error = document.querySelector(`#${id}`);
  error.textContent = message;
}
function opneNameEditForm(open) {
  const nameEditOpen = document.querySelector("#name-edit-open");
  const nameEditForm = document.querySelector("#name-edit");
  nameEditForm.style.display = open ? "flex" : "none";
  nameEditOpen.style.display = open ? "none" : "inline";
}

function showLoading(id, display) {
  const loadingIndicator = document.querySelector(`#${id}`);
  loadingIndicator.style.display = display;
}


/***/ }),

/***/ "./src/managers/editor_manager.js":
/*!****************************************!*\
  !*** ./src/managers/editor_manager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ editorFactory)
/* harmony export */ });
/* harmony import */ var _images_up1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/up1.png */ "./src/images/up1.png");
/* harmony import */ var _images_down1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/down1.png */ "./src/images/down1.png");
/* harmony import */ var _images_left1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/left1.png */ "./src/images/left1.png");
/* harmony import */ var _images_right1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/right1.png */ "./src/images/right1.png");
/* harmony import */ var _utility_js_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility.js/storage */ "./src/utility.js/storage.js");







function editorFactory() {
  let elapsedTime = 0;
  let previousTime = 0;
  let startTime;
  let Play = false;
  let moveThumb = false;
  let audioDuration;
  let playbackRate = 1;
  let beatMap = [];

  let promptType = "click";
  let promptDuration = 0;
  let holdDuration = 1;
  let rapidDuration = 1;

  const input = {
    one: "ArrowUp",
    two: "ArrowRight",
    three: "ArrowLeft",
    four: "ArrowDown",
  };

  const image = {
    ArrowUp: _images_up1_png__WEBPACK_IMPORTED_MODULE_0__,
    ArrowLeft: _images_left1_png__WEBPACK_IMPORTED_MODULE_2__,
    ArrowRight: _images_right1_png__WEBPACK_IMPORTED_MODULE_3__,
    ArrowDown: _images_down1_png__WEBPACK_IMPORTED_MODULE_1__,
  };
  // getters
  const getBeatMap = () => beatMap;
  const getPlayRate = () => playbackRate;
  const getElapsedTime = () => elapsedTime;
  const getStartTime = () => startTime;
  const getHoldDuration = () => holdDuration;
  const getRapidDuration = () => rapidDuration;
  const getPromptDuration = () => promptDuration;
  const getPromptType = () => promptType;
  const getMoveThumb = () => moveThumb;
  const getImages = () => image;
  const getPreviousTime = () => previousTime;
  const getAudioDuration = () => audioDuration;
  const getPlay = () => Play;

  const getPlayBackRate = () => playbackRate;
  // setters

  const setBeatMap = (map) => {
    beatMap = map;
  };
  const setRapidDuration = (value) => {
    rapidDuration = value;
  };
  const setPromptDuration = (value) => {
    promptDuration = value;
  };
  const setHoldDuration = (value) => {
    holdDuration = value;
  };
  const setMoveThump = (value) => {
    moveThumb = value;
  };
  const setPreviousTime = (value) => {
    previousTime = value;
  };
  const setAudioDuration = (value) => {
    audioDuration = value;
  };
  const setPlay = (value) => {
    Play = value;
  };
  const setElapsedTime = (value) => {
    elapsedTime = value;
  };
  const setStartTime = (value) => {
    startTime = value;
  };
  const setMoveThumb = (value) => {
    moveThumb = value;
  };

  const translateToKey = (position) => {
    let key;
    switch (position) {
      case "one":
        key = "ArrowUp";
        break;
      case "two":
        key = "ArrowLeft";
        break;
      case "three":
        key = "ArrowRight";
        break;
      case "four":
        key = "ArrowDown";
        break;
      default:
        break;
    }
    return key;
  };

  const beatMapDownload = (map) => {
    const myBlob = new Blob(map, { type: "text/plain" });
    const blobURL = URL.createObjectURL(myBlob);
    return blobURL;
  };

  const switchPrompt = (type, duration) => {
    promptType = type;
    promptDuration = duration;
  };

  const contructPrompt = (time, type, duration, place) => {
    const key = input[place];

    return { time, type, duration, key };
  };

  const canPlace = (time, duration) => {
    // here we're  checking if adding a long prompt will overlap any other prompts in the beatMap
    const check = beatMap.find(
      (prompt) => prompt.time > time && prompt.time <= time + duration
    );
    return check;
  };
  const checkOccupation = (time) => {
    // here we check if a user is trying to add a prompt within a long prompt.

    const occupied = beatMap.find(
      (prompt) => prompt.time < time && prompt.time + prompt.duration >= time
    );

    return occupied;
  };
  const removePrompt = (identifier, mapID) => {
    beatMap = beatMap.filter((prompt) => prompt.time !== identifier);
    (0,_utility_js_storage__WEBPACK_IMPORTED_MODULE_4__.saveLocalMap)({ id: mapID, beatMap });

    // eslint-disable-next-line no-param-reassign
  };
  const addPrompt = (time, place, mapID) => {
    // check if prompt is there
    const check = beatMap.find((beat) => beat.time === time);

    if (check) {
      removePrompt(time, mapID);
      if (check.key === input[place]) {
        return;
      }
    }

    const promptObject = contructPrompt(
      time,
      promptType,
      promptDuration,
      place
    );

    beatMap.push(promptObject);
    beatMap.sort((a, b) => a.time - b.time);
    (0,_utility_js_storage__WEBPACK_IMPORTED_MODULE_4__.saveLocalMap)({ id: mapID, beatMap });
  };

  const timeStep = (direction) => {
    const timePassed = Number(elapsedTime.toFixed(1));
    if (Play) {
      return;
    }
    if (previousTime - 0.1 < 0 && direction === "backward") {
      return;
    }
    const move = direction === "foward" ? 0.1 : -0.1;
    previousTime = (timePassed + move) / playbackRate;
    elapsedTime = previousTime * playbackRate;
  };

  const pickTime = (time) => {
    previousTime = time / playbackRate;
    elapsedTime = previousTime * playbackRate;

    return true;
  };

  const updateSpeed = (speed) => {
    playbackRate = speed;
    previousTime = elapsedTime / playbackRate;
    elapsedTime = previousTime * playbackRate;
    startTime = Date.now() - previousTime * 1000;
  };
  const progressBarTimeUpdate = (timePosition) => {
    if (timePosition === undefined) {
      console.log("undefined");
      return;
    }
    previousTime = (audioDuration * timePosition) / playbackRate;
    elapsedTime = previousTime * playbackRate;
    startTime = Date.now() - previousTime * 1000;
  };

  return {
    getBeatMap,
    setBeatMap,
    progressBarTimeUpdate,
    getElapsedTime,
    updateSpeed,
    addPrompt,
    removePrompt,
    pickTime,
    checkOccupation,
    canPlace,
    timeStep,
    switchPrompt,
    translateToKey,
    getPlayRate,
    getStartTime,
    getHoldDuration,
    getRapidDuration,
    getPromptType,
    beatMapDownload,
    getPromptDuration,
    setRapidDuration,
    setPromptDuration,
    setHoldDuration,
    setMoveThump,
    getMoveThumb,
    getImages,
    getPreviousTime,
    setPreviousTime,
    getAudioDuration,
    setAudioDuration,
    getPlay,
    setPlay,
    setElapsedTime,
    getPlayBackRate,
    setStartTime,
    setMoveThumb,
  };
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

/***/ "./src/images/bad.png":
/*!****************************!*\
  !*** ./src/images/bad.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4027a74e047421e26d88.png";

/***/ }),

/***/ "./src/images/click.png":
/*!******************************!*\
  !*** ./src/images/click.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "031487f472f0d22cdd9d.png";

/***/ }),

/***/ "./src/images/down.png":
/*!*****************************!*\
  !*** ./src/images/down.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b694b7e059e6fbe710b6.png";

/***/ }),

/***/ "./src/images/down1.png":
/*!******************************!*\
  !*** ./src/images/down1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe54a6bc501950144e93.png";

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

/***/ "./src/images/left1.png":
/*!******************************!*\
  !*** ./src/images/left1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3eafd119b90fed4dd05c.png";

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

/***/ "./src/images/right1.png":
/*!*******************************!*\
  !*** ./src/images/right1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c51cbf63f53661bfd6f9.png";

/***/ }),

/***/ "./src/images/up.png":
/*!***************************!*\
  !*** ./src/images/up.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "978028f3533655a2d87e.png";

/***/ }),

/***/ "./src/images/up1.png":
/*!****************************!*\
  !*** ./src/images/up1.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7dd7d05c41804ee01975.png";

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
/*!******************************!*\
  !*** ./src/editor/editor.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kareoke_player_player_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kareoke_player/player.css */ "./src/kareoke_player/player.css");
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.css */ "./src/editor/editor.css");
/* harmony import */ var _general_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general.css */ "./src/general.css");
/* harmony import */ var _canvas_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../canvas/canvas */ "./src/canvas/canvas.js");
/* harmony import */ var _canvas_time_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../canvas/time-map */ "./src/canvas/time-map.js");
/* harmony import */ var _utility_js_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility.js/storage */ "./src/utility.js/storage.js");
/* harmony import */ var _player_parts_display_parts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../player-parts/display-parts */ "./src/player-parts/display-parts.js");
/* harmony import */ var _managers_editor_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../managers/editor_manager */ "./src/managers/editor_manager.js");
/* harmony import */ var _dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dom-manipulation/editor-dom */ "./src/dom-manipulation/editor-dom.js");
/* harmony import */ var _managers_map_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../managers/map_manager */ "./src/managers/map_manager.js");
/* harmony import */ var _managers_user_manager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../managers/user-manager */ "./src/managers/user-manager.js");



// import gamePlayerLogic from "../player-parts/map-visualizer";











const editor = (0,_managers_editor_manager__WEBPACK_IMPORTED_MODULE_7__["default"])();
const mapManager = (0,_managers_map_manager__WEBPACK_IMPORTED_MODULE_9__["default"])();
const userManager = (0,_managers_user_manager__WEBPACK_IMPORTED_MODULE_10__["default"])();
let changingBackground = false;
let changingAudio = false;
let changingName = false;
(0,_canvas_canvas__WEBPACK_IMPORTED_MODULE_3__.init)();
(0,_canvas_time_map__WEBPACK_IMPORTED_MODULE_4__.initMap)("#time-map");
(0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.addPromptSrc)();
let animationID;

const loadMedia = (audio, background, extension) => {
  mapManager
    .generateBlobUrl({
      audio,
      background,
    })
    .then(() => {
      (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.showSelectedSong)(
        mapManager.getSelectedMap(),
        extension,
        mapManager.getAudioUrl(),
        mapManager.getBackgroundUrl()
      );
      (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.showEdit)(true);
    });
};
const setSelectedMap = (beatMap, extension) => {
  mapManager.setSelectedMap(beatMap);
  editor.setBeatMap(mapManager.getSelectedMap().beatMap);
  loadMedia(beatMap.audio, beatMap.background, extension);
};

const addMapToList = (beatMap) => {
  const mediaExtension = mapManager.getExtension(beatMap.background);
  const mediaSource = beatMap.background;
  let loadingDelete = false;
  let loadingPublish = false;
  let loadingSave = false;
  const {
    listItem,
    optionButton,
    optionsList,
    saveMap,
    deleteMap,
    clearLocal,
    publishMap,
    mapStatus,
  } = (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.listBeatMap)(beatMap, mediaExtension, mediaSource);
  listItem.addEventListener("click", () => {
    const selectedMap = mapManager.getSelectedMap();
    if (selectedMap?.id === beatMap.id) {
      return;
    }
    (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.showEdit)(false);
    (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.loadingMap)();
    mapManager.abortSelection();
    setSelectedMap(beatMap, mediaExtension);
    editor.setElapsedTime(0);
    editor.setPreviousTime(0);
  });
  optionButton.addEventListener("click", (e) => {
    e.stopPropagation();
    (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.showHideOption)(optionsList);
  });
  optionsList.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  if (beatMap.status === "draft") {
    saveMap.addEventListener("click", (e) => {
      e.stopPropagation();
      if (loadingSave) return;
      saveMap.textContent = "Saving...";
      loadingSave = true;

      const { id } = beatMap;
      mapManager
        .saveMapRemote(id)
        .then((res) => {
          alert(res);
        })
        .finally(() => {
          saveMap.textContent = "Save";
          loadingSave = false;
        });
    });
  }

  deleteMap.addEventListener("click", () => {
    if (loadingDelete) return;
    // eslint-disable-next-line no-restricted-globals
    const acceptDelete = confirm("All map data will be deleted");
    if (!acceptDelete) return;
    loadingDelete = true;
    deleteMap.textContent = "Deleting...";
    mapManager
      .deleteBeatMap(beatMap.id)
      .then((res) => {
        listItem.remove();
        if (mapManager.getSelectedMap() === null) {
          (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.displaySelectedStatus)("No map selected");
        }
        alert(res);
      })
      .finally(() => {
        loadingDelete = false;
        deleteMap.textContent = "delete";
      });
  });
  clearLocal.addEventListener("click", () => {
    // eslint-disable-next-line no-restricted-globals
    const acceptDelete = confirm(
      "Local data will be deleted (will revert to remote data)"
    );
    if (!acceptDelete) return;

    (0,_utility_js_storage__WEBPACK_IMPORTED_MODULE_5__.deleteLocalMap)(beatMap.id);
    editor.setBeatMap(JSON.parse(beatMap.beatMap));
    alert("local data deleted");
  });
  publishMap.addEventListener("click", () => {
    if (loadingPublish) return;
    const message = {
      draft:
        "Map will be put up for review and you wont be able to edit it during this period",
      pending: "Map will be removed from publish queue",
      published: "Map will no longer be publicly available",
    };

    // eslint-disable-next-line no-restricted-globals
    const accept = confirm(message[beatMap.status]);
    if (accept) {
      loadingPublish = true;
      publishMap.textContent = "....";
      mapManager
        .publishMap(beatMap.id)
        .then((res) => {
          // eslint-disable-next-line no-param-reassign
          beatMap.status = res;
        })
        .finally(() => {
          loadingPublish = false;
          publishMap.textContent =
            beatMap.status === "draft" ? "publish" : "unpublish";
          mapStatus.textContent =
            beatMap.status === "draft" ? "" : beatMap.status;
          mapStatus.className = `${beatMap.status}-status`;
        });
    }
  });
};

const stopEditor = () => {
  // clearInterval(intervalID);
  cancelAnimationFrame(animationID);
  editor.setPlay(false);
  (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.editorPause)();
};
const updateGraphics = () => {
  (0,_canvas_canvas__WEBPACK_IMPORTED_MODULE_3__.validPrompts)(editor.getElapsedTime(), editor.getBeatMap());
  (0,_canvas_time_map__WEBPACK_IMPORTED_MODULE_4__.drawMap)(
    editor.getBeatMap(),
    editor.getElapsedTime(),
    editor.getAudioDuration()
  );

  (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.updateDomTime)(editor.getElapsedTime());
  (0,_player_parts_display_parts__WEBPACK_IMPORTED_MODULE_6__.mapProgressPrompts)(
    editor.getBeatMap(), // replace with beatMap
    editor.getAudioDuration()
  );
};
const timeController = () => {
  const elapsedTime = editor.getElapsedTime();

  const audioDuration = editor.getAudioDuration();

  const previousTime = editor.getPreviousTime();
  const playRate = editor.getPlayRate();

  if (elapsedTime >= audioDuration) {
    stopEditor();
    return;
  }
  const currentTime = Number((Date.now() - editor.getStartTime()) / 1000);

  editor.setPreviousTime(currentTime);
  editor.setElapsedTime(previousTime * playRate);
};
const AnimatePrompts = () => {
  const elapsedTime = editor.getElapsedTime();

  const audioDuration = editor.getAudioDuration();

  if (elapsedTime >= audioDuration) {
    stopEditor();
    return;
  }
  // enable this when computer player is working is working
  // gamePlayerLogic(elapsedTime);
  (0,_player_parts_display_parts__WEBPACK_IMPORTED_MODULE_6__.autoThumbMovement)(elapsedTime / audioDuration);
  (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.updateDomTime)(elapsedTime);
  (0,_canvas_canvas__WEBPACK_IMPORTED_MODULE_3__.validPrompts)(elapsedTime, editor.getBeatMap());
  (0,_canvas_time_map__WEBPACK_IMPORTED_MODULE_4__.drawMap)(editor.getBeatMap(), elapsedTime, audioDuration);
  timeController();
  animationID = requestAnimationFrame(AnimatePrompts);
};
const startEditor = () => {
  animationID = requestAnimationFrame(AnimatePrompts);
  editor.setStartTime(Date.now() - editor.getPreviousTime() * 1000);
  editor.setPlay(true);
  (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.editorPlay)(editor.getElapsedTime());
};
const checkSelectedSong = () => {
  mapManager
    .checkSelectedSong()
    .then((isSelected) => {
      if (isSelected) {
        const beatMap = mapManager.getSelectedMap();
        const extension = mapManager.getExtension(beatMap.background);
        loadMedia(beatMap.audio, beatMap.background, extension);
        editor.setBeatMap(mapManager.getSelectedMap().beatMap);
        (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.showEdit)(true);
        return;
      }
      (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.displaySelectedStatus)("No map selected");
    })
    .catch((error) => {
      console.log(error);
      (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.displaySelectedStatus)("Error while fetching map");

      mapManager.clearSelectedMap();
    });
};

// add event listners

document.querySelector("#add").addEventListener("click", (e) => {
  (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.viewSwitch)(e.target.id);
});
document.querySelector("#selected").addEventListener("click", (e) => {
  (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.viewSwitch)(e.target.id);
});
const addMapForm = document.querySelector("#add-map-form");
addMapForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const submitButton = e.submitter;
  submitButton.disabled = true;

  const mapData = new FormData(addMapForm);
  mapManager
    .addBeatMap(mapData)
    .then(async (res) => {
      console.log(res);
      const beatMap = res.map;

      // put the map on the list of maps
      addMapToList(beatMap);
      // make the selected map the added map
      setSelectedMap(beatMap, mapManager.getExtension(beatMap.background));
      addMapForm.reset();
      (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.viewSwitch)("selected");
      (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.addErrorMessage)("", "addmap-error");
    })
    .catch((error) => {
      console.log(error);
      (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.addErrorMessage)(error, "addmap-error");
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});

document.querySelector("#time_guage").addEventListener("change", (e) => {
  editor.updateSpeed(Number(e.target.value));
  (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.updatePlaySpeed)(editor.getPlayBackRate());
});

document.querySelector("#play").addEventListener("click", () => {
  console.log(editor.getPlay());
  if (editor.getPlay() === false) {
    console.log("hi");
    startEditor();
    return;
  }
  if (editor.getPlay()) {
    stopEditor();
  }
});

document.querySelector("#menu").addEventListener("click", () => {
  (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.openEditorMenu)();
  stopEditor();
});
document.querySelector("#exit").addEventListener("click", () => {
  (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.closeEditorMenu)();
});

const promptPosition = document.querySelector(".get-prompt");
promptPosition.addEventListener("click", (e) => {
  if (e.target === promptPosition) return;
  const time = editor.getElapsedTime().toFixed(1);

  if (editor.checkOccupation(Number(time), mapManager.getSelectedMap().id)) {
    console.log("space is occupied by a long prompt");
    return;
  }
  if (
    editor.canPlace(
      Number(time),
      editor.getPromptDuration(),
      mapManager.getSelectedMap().id
    )
  ) {
    console.log("cant place that prompt here");
    return;
  }
  console.log(`${e.target.id}  time: ${editor.getElapsedTime().toFixed(1)}`);

  editor.addPrompt(Number(time), e.target.id, mapManager.getSelectedMap().id);

  updateGraphics();
});

document.querySelector("#click-image").addEventListener("click", (e) => {
  editor.switchPrompt("click", 0);
  (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.focusBtn)(e.target);
});
document.querySelector("#hold-image").addEventListener("click", (e) => {
  editor.switchPrompt("hold", editor.getHoldDuration());
  (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.focusBtn)(e.target);
});
document.querySelector("#rapid-image").addEventListener("click", (e) => {
  editor.switchPrompt("rapid", editor.getRapidDuration());
  (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.focusBtn)(e.target);
});

document.querySelector("#r-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const rapidForm = new FormData(e.target);
  editor.setRapidDuration(Number(rapidForm.get("duration")));
  const promptType = editor.getPromptType();
  if (promptType === "rapid") {
    editor.setPromptDuration(editor.getRapidDuration());
  }
});

document.querySelector("#h-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const holdForm = new FormData(e.target);
  editor.setHoldDuration(Number(holdForm.get("duration")));
  if (editor.getPromptType === "hold") {
    editor.setPromptDuration(editor.getHoldDuration());
  }
});

const progressBar = document.querySelector(".progress_section");
progressBar.addEventListener("mousedown", (e) => {
  editor.setMoveThumb(true);
  const timePosition = (0,_player_parts_display_parts__WEBPACK_IMPORTED_MODULE_6__.moveProgressThumb)(e);
  editor.progressBarTimeUpdate(timePosition);
  updateGraphics();
  (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.updateMediaTime)(editor.getElapsedTime());
});

progressBar.addEventListener("mouseup", () => {
  editor.setMoveThumb(false);
});

progressBar.addEventListener("mousemove", (e) => {
  if (editor.getMoveThumb()) {
    const timePosition = (0,_player_parts_display_parts__WEBPACK_IMPORTED_MODULE_6__.moveProgressThumb)(e);
    editor.progressBarTimeUpdate(timePosition);
    updateGraphics();
    (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.updateMediaTime)(editor.getElapsedTime());
  }
});

document.querySelector("body").addEventListener("keydown", (e) => {
  if (editor.getPlay()) {
    return;
  }
  if (["ArrowRight", "ArrowLeft"].includes(e.key) === false) {
    return;
  }

  const direction = e.key === "ArrowRight" ? "foward" : "backward";
  editor.timeStep(direction);
  (0,_player_parts_display_parts__WEBPACK_IMPORTED_MODULE_6__.autoThumbMovement)((0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.currentAudioTime)() / editor.getAudioDuration());
  updateGraphics();
  (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.updateMediaTime)(editor.getElapsedTime());
});
document.querySelector("#name-edit-open").addEventListener("click", () => {
  (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.opneNameEditForm)(true);
});
document.querySelector("#name-edit-close").addEventListener("click", () => {
  (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.opneNameEditForm)(false);
});
document.querySelector("#name-edit").addEventListener("submit", (e) => {
  e.preventDefault();
  if (changingName) return;

  changingName = true;
  const { name, status, id } = mapManager.getSelectedMap();
  if (status !== "draft") {
    (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.addErrorMessage)("Only draft posts can be edited", "editname-error");
    return;
  }
  const formData = new FormData(e.target);
  if (formData.get("map-name") === name) return;
  const submitButton = document.querySelector("#name-edit button");
  submitButton.disabled = true;
  console.log(submitButton);

  mapManager
    .saveMapName(formData.get("map-name"))
    .then(({ reload, extension }) => {
      (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.changeMapName)(id, formData.get("map-name"));
      (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.opneNameEditForm)(false);
      (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.addErrorMessage)("", "editname-error");
      if (reload) {
        // update selectedMap value
        (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.showSelectedSong)(
          mapManager.getSelectedMap(),
          extension,
          mapManager.getAudioUrl(),
          mapManager.getBackgroundUrl()
        );
      }
    })
    .catch((err) => {
      console.log(err);
      (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.addErrorMessage)(err, "editname-error");
    })
    .finally(() => {
      changingName = false;
      submitButton.disabled = false;
    });
});
document.querySelector("#background-edit").addEventListener("change", (e) => {
  if (changingBackground) return;
  const file = e.target.files[0];
  changingBackground = true;
  // check on frontend if changing the size go over the maximum allowed beatMap size
  (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.showLoading)("background-indicator", "block");
  mapManager
    .changeMedia("background", file)
    .then(({ reload, extension }) => {
      (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.addErrorMessage)("", "editbackground-error");
      if (reload) {
        console.log("reloading");
        loadMedia(
          mapManager.getSelectedMap().audio,
          mapManager.getSelectedMap().background,
          extension
        );
      }
    })
    .catch((err) => {
      (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.addErrorMessage)(err, "editbackground-error");
      console.log(err);
    })
    .finally(() => {
      (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.showLoading)("background-indicator", "none");
      changingBackground = false;
    });
});
document.querySelector("#audio-edit").addEventListener("change", (e) => {
  if (changingAudio) return;
  const file = e.target.files[0];
  changingAudio = true;
  // check on frontend if changing the size go over the maximum allowed beatMap size
  (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.showLoading)("audio-indicator", "block");
  mapManager
    .changeMedia("audio", file)
    .then(({ reload, extension }) => {
      (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.addErrorMessage)("", "editaudio-error");
      if (reload) {
        console.log("reloading");
        loadMedia(
          mapManager.getSelectedMap().audio,
          mapManager.getSelectedMap().background,
          extension
        );
      }
    })
    .catch((err) => {
      (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.addErrorMessage)(err, "editaudio-error");
      console.log(err);
    })
    .finally(() => {
      (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.showLoading)("audio-indicator", "none");
      changingAudio = false;
    });
});
document.querySelector("body").addEventListener("keydown", (e) => {
  if (e.key !== " ") return; // if the key pressed is not spacebar

  if (getComputedStyle(document.querySelector("#modal")).display === "flex")
    return;
  if (editor.getPlay() === false) {
    startEditor();
    return;
  }
  if (editor.getPlay() === true) {
    stopEditor();
  }
});

document.querySelector("#login").addEventListener("submit", (e) => {
  e.preventDefault();
  const submitButton = e.submitter;
  submitButton.disabled = true;
  const loginData = new FormData(e.target);

  userManager
    .handleLogin({
      email: loginData.get("email"),
      password: loginData.get("password"),
    })
    .then(async (res) => {
      (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.authenicatedView)();
      checkSelectedSong();
      const beatMaps = await mapManager.handleGetUserBeatMaps();
      // get user songs and display them on my map.
      beatMaps.forEach((beatMap) => {
        addMapToList(beatMap);
      });

      console.log(res);
      (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.viewSwitch)("selected");
    })
    .catch((err) => {
      console.log(err);
      (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.addErrorMessage)(err, "login-error");
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});
document
  .querySelector("#editor-audio")
  .addEventListener("loadedmetadata", (e) => {
    editor.setAudioDuration(e.target.duration);

    updateGraphics();
  });
userManager
  .isLogin()
  .then(async () => {
    if (userManager.getUserData().isLogin) {
      (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.authenicatedView)();
      checkSelectedSong();
      const beatMaps = await mapManager.handleGetUserBeatMaps();
      // get user songs and display them on my map.
      beatMaps.forEach((beatMap) => {
        addMapToList(beatMap);
      });
      return;
    }
    (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.notAuthenticatedView)();
  })
  .catch((e) => {
    console.log(e);
    (0,_dom_manipulation_editor_dom__WEBPACK_IMPORTED_MODULE_8__.notAuthenticatedView)();
  });

})();

/******/ })()
;
//# sourceMappingURL=editor.bundle.js.map