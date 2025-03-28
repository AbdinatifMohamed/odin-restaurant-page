/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Portago.otf */ \"./src/assets/fonts/Portago.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/imgs/restaurant-bg.png */ \"./src/assets/imgs/restaurant-bg.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n@font-face {\n    font-family: 'Portago';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n\n\nbody {\n    background-color: #FFB541;\n    min-height: 100vh;\n    font-family: 'Portago', sans-serif;\n}\n\n\nbody::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    background-size: cover;\n    background-position: center;\n    opacity: 0.06; /* Adjust opacity here */\n    z-index: -1; /* Ensure it stays behind content */\n  }\n\nheader {\n    /* background-color: lightblue; */\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1.5rem 4rem;\n}\n\nheader > h1 {\n    font-size: 3rem;\n    color:#7A252A;\n}\n\nnav > ul {\n    display: flex;\n}\n\n.nav__btn {\n    margin-right: 1.5rem;\n}\n\n.btn {\n    padding: .625rem 1.5rem;\n    font-family: 'Portago', sans-serif;\n    background-color: #7A252A;\n    color: #FFB541;\n    border: none;\n    border-radius: 4px;\n}\n\n\n\n.homepage {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}\n\n.homepage h2 {\n    font-size: 4rem;\n    color:#7A252A;\n}\n\n\n.menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1.5rem;\n}\n\n.menu > div > h3 {\n    color: #fff;\n    font-size: 1.5rem;\n    padding-top: .5rem;\n    padding-left: 1rem;\n}\n\n.menu__foods, .menu__drinks {\n    border-radius: .625rem;\n    background-color: #7A252A;\n    height: 15rem;\n}\n\n.menu__foods {\n    width: 85%;\n}\n\n.menu__drinks {\n    width: 50%;\n}\n\n\n.foods__item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: .5rem;\n}\n\n.drinks__item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: .5rem;\n}\n\n.item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: #461316;\n    height: 160px;\n    width: 130px;\n    border-radius: .625rem;\n}\n\n.item > p {\n    font-size: 1.5rem;\n}\n\n.item > p:nth-child(2) {\n    color: #fff;\n}\n\n.item > p:nth-child(3) {\n    color: #13CF0C;\n}\n\n.item > img {\n    height: 98px;\n    width: 98px;\n}\n\n\n.contact {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 3rem;\n}\n\n\n.infos__item {\n    background-color: #7A252A;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100px;\n    width: 100px;\n    border-radius: 10px;\n    margin-bottom: .5rem;\n    color: #fff;\n}\n\n.infos__item > p {\n    opacity: .5;\n}\n\n.contact__form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: #7A252A;\n    padding: 1rem;\n    height: 350px;\n    width: 500px;\n    border-radius: 10px;\n    gap: 2rem;\n}\n\n.contact__form h2 {\n    color: #fff\n}\n\n.contact__form input {\n    padding: .5rem 1rem;\n    width: 15rem;\n    border-radius: 4px;\n    border: none;\n}\n\n.contact__form textarea {\n    height: 15rem;\n    width: 15rem;\n    resize: none;\n    padding-left: .2rem;\n}\n\n.btn--alt {\n    background-color: #FFB541;\n    color:#7A252A;\n\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/fonts/Portago.otf":
/*!**************************************!*\
  !*** ./src/assets/fonts/Portago.otf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"43a3b24ce1d89cc662fa.otf\";\n\n//# sourceURL=webpack:///./src/assets/fonts/Portago.otf?");

/***/ }),

/***/ "./src/assets/imgs/foods-drinks/Burritos.webp":
/*!****************************************************!*\
  !*** ./src/assets/imgs/foods-drinks/Burritos.webp ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4aa34aa50c0ba2a4761b.webp\";\n\n//# sourceURL=webpack:///./src/assets/imgs/foods-drinks/Burritos.webp?");

/***/ }),

/***/ "./src/assets/imgs/foods-drinks/Quesadillas.webp":
/*!*******************************************************!*\
  !*** ./src/assets/imgs/foods-drinks/Quesadillas.webp ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"879c328899dcf9a9efd8.webp\";\n\n//# sourceURL=webpack:///./src/assets/imgs/foods-drinks/Quesadillas.webp?");

/***/ }),

/***/ "./src/assets/imgs/foods-drinks/Tortas.webp":
/*!**************************************************!*\
  !*** ./src/assets/imgs/foods-drinks/Tortas.webp ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fc4b009d6ba982017d8e.webp\";\n\n//# sourceURL=webpack:///./src/assets/imgs/foods-drinks/Tortas.webp?");

/***/ }),

/***/ "./src/assets/imgs/foods-drinks/Tostadas.png":
/*!***************************************************!*\
  !*** ./src/assets/imgs/foods-drinks/Tostadas.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2cbfd64e607d44b989d4.png\";\n\n//# sourceURL=webpack:///./src/assets/imgs/foods-drinks/Tostadas.png?");

/***/ }),

/***/ "./src/assets/imgs/foods-drinks/cocacola.webp":
/*!****************************************************!*\
  !*** ./src/assets/imgs/foods-drinks/cocacola.webp ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7b61b97518b986b0078e.webp\";\n\n//# sourceURL=webpack:///./src/assets/imgs/foods-drinks/cocacola.webp?");

/***/ }),

/***/ "./src/assets/imgs/foods-drinks/jarritos.webp":
/*!****************************************************!*\
  !*** ./src/assets/imgs/foods-drinks/jarritos.webp ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"35d677eb93bb6976826a.webp\";\n\n//# sourceURL=webpack:///./src/assets/imgs/foods-drinks/jarritos.webp?");

/***/ }),

/***/ "./src/assets/imgs/foods-drinks/tacos.webp":
/*!*************************************************!*\
  !*** ./src/assets/imgs/foods-drinks/tacos.webp ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0b9714224810184d1e70.webp\";\n\n//# sourceURL=webpack:///./src/assets/imgs/foods-drinks/tacos.webp?");

/***/ }),

/***/ "./src/assets/imgs/foods-drinks/water.webp":
/*!*************************************************!*\
  !*** ./src/assets/imgs/foods-drinks/water.webp ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"27de83a46d35a1cea275.webp\";\n\n//# sourceURL=webpack:///./src/assets/imgs/foods-drinks/water.webp?");

/***/ }),

/***/ "./src/assets/imgs/restaurant-bg.png":
/*!*******************************************!*\
  !*** ./src/assets/imgs/restaurant-bg.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cd29d613160eb0625f54.png\";\n\n//# sourceURL=webpack:///./src/assets/imgs/restaurant-bg.png?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateContactPage: () => (/* binding */ generateContactPage)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/*\n\n<div class=\"contact\">\n            <div class=\"contact__infos\">\n                <div class=\"infos__item\">\n                    <i class=\"ri-map-pin-fill\"></i>\n                    <h4>LOCATION</h4>\n                    <p>ON-WHEELS</p>\n                </div>\n                <div class=\"infos__item\">\n                    <i class=\"ri-mail-fill\"></i>\n                    <h4>EMAIL</h4>\n                    <p>123@gmail.com</p>\n                </div>\n                <div class=\"infos__item\">\n                    <i class=\"ri-phone-fill\"></i>\n                    <h4>TEL</h4>\n                    <p>555-1235</p>\n                </div>\n                <div class=\"infos__item\">\n                    <i class=\"ri-time-fill\"></i>\n                    <h4>HOURS</h4>\n                    <p>MON-FRI</p>\n                </div>\n            </div>\n            <form action=\"\" class=\"contact__form\">\n                <h2>CONTACT US</h2>\n                <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Enter your name..\" required>\n                <input type=\"email\" name=\"email\" id=\"email\"placeholder=\"Enter your email..\" required>\n                <textarea name=\"message\" id=\"message\" placeholder=\"Enter your message..\" required></textarea>\n                <button type=\"submit\" class=\"btn btn--alt form__btn\">SUBMIT</button>\n            </form>\n        </div>\n\n\n\n*/\n\n\nconst infos = [\n    {\n        class: 'ri-map-pin-fill',\n        title: 'LOCATION',\n        desc: 'ON-WHEELS'\n    },\n    {\n        class: 'ri-mail-fill',\n        title: 'EMAIL',\n        desc: '123@gmail.com'\n    },\n    {\n        class: 'ri-phone-fill',\n        title: 'TEL',\n        desc: '555-1235'\n    },\n    {\n        class: 'ri-time-fill',\n        title: 'HOURS',\n        desc: 'MON-FRI'\n    }\n];\n\nconst generateContactPage = () => {\n    const contact = document.createElement('div');\n    contact.classList.add('contact');\n    const contactinfos = document.createElement('div');\n    contactinfos.classList.add('contact__infos');\n    for (let i = 0; i < infos.length; i++){\n        const div = document.createElement('div');\n        div.classList.add('infos__item');\n        const icon = document.createElement('i');\n        icon.classList.add(infos[i].class);\n        const h4 = document.createElement('h4');\n        h4.textContent = infos[i].title;\n        const p = document.createElement('p');\n        p.textContent = infos[i].desc;\n        div.appendChild(icon);\n        div.appendChild(h4);\n        div.appendChild(p);\n        contactinfos.appendChild(div);\n    }\n    const form = document.createElement('form');\n    form.classList.add('contact__form');\n    const h2 = document.createElement('h2');\n    h2.textContent = 'CONTACT US';\n    form.appendChild(h2);\n    const input = document.createElement(\"input\");\n    input.type = \"text\";\n    input.name = \"name\";\n    input.id = \"name\";\n    input.placeholder = \"Enter your name..\";\n    input.required = true;\n    form.appendChild(input);\n    const input2 = document.createElement(\"input\");\n    input2.type = \"email\";\n    input2.name = \"email\";\n    input2.id = \"email\";\n    input2.placeholder = \"Enter your email..\";\n    input2.required = true;\n    form.appendChild(input2);\n    const textarea = document.createElement('textarea');\n    textarea.name = 'message';\n    textarea.id = 'message';\n    textarea.placeholder = 'Enter your message..';\n    textarea.required = true;\n    form.appendChild(textarea);\n    const button = document.createElement('button');\n    button.type = 'submit';\n    button.classList.add(\"btn\", \"btn--alt\", \"form__btn\");\n    button.textContent = 'SUBMIT';\n    form.appendChild(button);\n\n    contact.appendChild(contactinfos);\n    contact.appendChild(form);\n\n    return contact;\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateHomePage: () => (/* binding */ generateHomePage)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/*\n\n  <div class=\"homepage\">\n            'MOBILE TACO VAN';\n            'WHERE EVERY TACO FEELS LIKE HOME';\n            'WELCOME TO MOBILE TACO VAN';\n            <button class=\"homepage__btn btn\">EXPLORE</button>\n    </div>\n\n\n*/\n\n\nconst generateHomePage = () => {\n    const div = document.createElement('div');\n    div.classList.add('homepage');\n    const firsth2 = document.createElement('h2');\n    const secondh2 = document.createElement('h2');\n    const thirdh2 = document.createElement('h2');\n    firsth2.textContent = 'MOBILE TACO VAN';\n    secondh2.textContent = 'WHERE EVERY TACO FEELS LIKE HOME';\n    thirdh2.textContent = 'WELCOME TO MOBILE TACO VAN';\n    const button = document.createElement('button');\n    button.textContent = 'EXPLORE';\n    button.classList.add('homepage__btn', 'btn');\n\n    div.appendChild(firsth2);\n    div.appendChild(secondh2);\n    div.appendChild(thirdh2);\n    div.appendChild(button);\n\n    return div;\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nconst content = document.querySelector('#content');\nconst homebtn = document.querySelector('#home__btn');\nconst menubtn = document.querySelector('#menu__btn');\nconst contactbtn = document.querySelector('#contact__btn');\n\n\n\n\nfunction clearContent(){\n    content.innerHTML = '';\n}\n\n\nhomebtn.addEventListener('click', () => {\n    clearContent();\n    content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.generateHomePage)());\n})\n\nmenubtn.addEventListener('click', () => {\n    clearContent();\n    content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__.generateMenuPage)());\n})\ncontactbtn.addEventListener('click', () => {\n    clearContent();\n    content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_0__.generateContactPage)());\n})\nclearContent();\ncontent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.generateHomePage)());\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateMenuPage: () => (/* binding */ generateMenuPage)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _menu_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.json */ \"./src/menu.json\");\n/* harmony import */ var _assets_imgs_foods_drinks_tacos_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/imgs/foods-drinks/tacos.webp */ \"./src/assets/imgs/foods-drinks/tacos.webp\");\n/* harmony import */ var _assets_imgs_foods_drinks_Burritos_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/imgs/foods-drinks/Burritos.webp */ \"./src/assets/imgs/foods-drinks/Burritos.webp\");\n/* harmony import */ var _assets_imgs_foods_drinks_Tortas_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/imgs/foods-drinks/Tortas.webp */ \"./src/assets/imgs/foods-drinks/Tortas.webp\");\n/* harmony import */ var _assets_imgs_foods_drinks_Quesadillas_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/imgs/foods-drinks/Quesadillas.webp */ \"./src/assets/imgs/foods-drinks/Quesadillas.webp\");\n/* harmony import */ var _assets_imgs_foods_drinks_Tostadas_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/imgs/foods-drinks/Tostadas.png */ \"./src/assets/imgs/foods-drinks/Tostadas.png\");\n/* harmony import */ var _assets_imgs_foods_drinks_jarritos_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/imgs/foods-drinks/jarritos.webp */ \"./src/assets/imgs/foods-drinks/jarritos.webp\");\n/* harmony import */ var _assets_imgs_foods_drinks_cocacola_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/imgs/foods-drinks/cocacola.webp */ \"./src/assets/imgs/foods-drinks/cocacola.webp\");\n/* harmony import */ var _assets_imgs_foods_drinks_water_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/imgs/foods-drinks/water.webp */ \"./src/assets/imgs/foods-drinks/water.webp\");\n/*\n  <div class=\"menu\">\n            <div class=\"menu__foods\">\n                <h3>TACOS & MORE</h3>\n                <div class=\"foods__item\">\n                    <div class=\"item\">\n                        <img src=\"./assets/imgs/foods-drinks/tacos.webp\" alt=\"\">\n                        <p>TACOS</p>\n                        <p>$2</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"menu__drinks\">\n                <h3>SODAS & JUGOS</h3>\n                <div class=\"drinks__item\">\n                    <div class=\"item\">\n                        <img src=\"./assets/imgs/foods-drinks/tacos.webp\" alt=\"\">\n                        <p>TACOS</p>\n                        <p>$2</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n\n\n\n*/\n\n \n\n\n\n\n\n\n\n\n\n\n\n\nconst imageMap = {\n    \"Tacos\": _assets_imgs_foods_drinks_tacos_webp__WEBPACK_IMPORTED_MODULE_2__,\n    \"Burritos\": _assets_imgs_foods_drinks_Burritos_webp__WEBPACK_IMPORTED_MODULE_3__,\n    \"Tortas\": _assets_imgs_foods_drinks_Tortas_webp__WEBPACK_IMPORTED_MODULE_4__,\n    \"Quesadillas\": _assets_imgs_foods_drinks_Quesadillas_webp__WEBPACK_IMPORTED_MODULE_5__,\n    \"Tostadas\": _assets_imgs_foods_drinks_Tostadas_png__WEBPACK_IMPORTED_MODULE_6__,\n    \"Jarritos\": _assets_imgs_foods_drinks_jarritos_webp__WEBPACK_IMPORTED_MODULE_7__,\n    \"Coca-Cola\": _assets_imgs_foods_drinks_cocacola_webp__WEBPACK_IMPORTED_MODULE_8__,\n    \"Water\": _assets_imgs_foods_drinks_water_webp__WEBPACK_IMPORTED_MODULE_9__\n};\n  \n\nconst generateMenuPage = () => {\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n    const foods = document.createElement('div');\n    foods.classList.add('menu__foods');\n    const drinks = document.createElement('div');\n    drinks.classList.add('menu__drinks');\n\n    for (let i = 0; i < 2; i++){\n        const h3 = document.createElement('h3');\n        const div = document.createElement('div');\n        if (i==0){\n            h3.textContent = 'TACOS & MORE';\n            div.classList.add('foods__item');\n            foods.appendChild(h3);\n            foods.appendChild(div);\n        } else {\n            h3.textContent = 'SODAS & JUGOS';\n            div.classList.add('drinks__item');\n            drinks.appendChild(h3);\n            drinks.appendChild(div);\n        }\n    }\n\n    menu.appendChild(foods);\n    menu.appendChild(drinks);\n    for (let i = 0; i < _menu_json__WEBPACK_IMPORTED_MODULE_1__.foods.length; i++){\n        const div = document.createElement('div');\n        div.classList.add('item');\n        const img = document.createElement('img');\n        img.src = imageMap[_menu_json__WEBPACK_IMPORTED_MODULE_1__.foods[i].name];\n        const fp = document.createElement('p');\n        fp.textContent = _menu_json__WEBPACK_IMPORTED_MODULE_1__.foods[i].name;\n        const sp = document.createElement('p');\n        sp.textContent = \"$\" + _menu_json__WEBPACK_IMPORTED_MODULE_1__.foods[i].price;\n\n        div.appendChild(img);\n        div.appendChild(fp);\n        div.appendChild(sp);\n        foods.querySelector('.foods__item').appendChild(div);\n    }\n    for (let i = 0; i < _menu_json__WEBPACK_IMPORTED_MODULE_1__.drinks.length; i++){\n        const div = document.createElement('div');\n        div.classList.add('item');\n        const img = document.createElement('img');\n        img.src = imageMap[_menu_json__WEBPACK_IMPORTED_MODULE_1__.foods[i].name];\n        const fp = document.createElement('p');\n        fp.textContent = _menu_json__WEBPACK_IMPORTED_MODULE_1__.drinks[i].name;\n        const sp = document.createElement('p');\n        sp.textContent = \"$\" + _menu_json__WEBPACK_IMPORTED_MODULE_1__.foods[i].price;\n\n        div.appendChild(img);\n        div.appendChild(fp);\n        div.appendChild(sp);\n        drinks.querySelector('.drinks__item').appendChild(div);\n    }\n\n    return menu;\n}\n\n\n \n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/menu.json":
/*!***********************!*\
  !*** ./src/menu.json ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"foods\":[{\"name\":\"Tacos\",\"price\":2},{\"name\":\"Burritos\",\"price\":4},{\"name\":\"Tortas\",\"price\":5.5},{\"name\":\"Quesadillas\",\"price\":3.8},{\"name\":\"Tostadas\",\"price\":5.5}],\"drinks\":[{\"name\":\"Jarritos\",\"price\":2.5},{\"name\":\"Coca-Cola\",\"price\":2.5},{\"name\":\"Water\",\"price\":1.5}]}');\n\n//# sourceURL=webpack:///./src/menu.json?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;