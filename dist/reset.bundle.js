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
  !*** ./src/verify/password-reset.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _general_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../general.css */ "./src/general.css");
/* harmony import */ var _api_authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/authentication */ "./src/api/authentication.js");



const params = new URLSearchParams(window.location.search);
const token = params.get("token");

const resetForm = document.querySelector("#password-reset");
const changeForm = document.querySelector("#change-form");
if (token) {
  resetForm.style.display = "none";
  changeForm.style.display = "flex";
}
console.log(resetForm);

resetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(resetForm);
  const submitButton = resetForm.querySelector("button");
  submitButton.disabled = true;
  (0,_api_authentication__WEBPACK_IMPORTED_MODULE_1__.forgotPassword)(formData)
    .then((res) => {
      resetForm.innerHTML = `<label> ${res} </label>`;
      setTimeout(() => {
        window.location.pathname = "";
      }, 1000);
    })
    .catch((err) => {
      console.log(err);
      resetForm.querySelector("p").style.display = "block";
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});

changeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const submitButton = changeForm.querySelector("button");
  const formData = new FormData(changeForm);
  formData.set("token", token);
  const errorMessage = changeForm.querySelector("p");
  (0,_api_authentication__WEBPACK_IMPORTED_MODULE_1__.recoverPassword)(formData)
    .then((res) => {
      changeForm.innerHTML = `<label> ${res} </label>`;
      setTimeout(() => {
        window.location.pathname = "";
      }, 1000);
    })
    .catch((err) => {
      console.log(err);
      errorMessage.style.display = "block";
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});

})();

/******/ })()
;
//# sourceMappingURL=reset.bundle.js.map