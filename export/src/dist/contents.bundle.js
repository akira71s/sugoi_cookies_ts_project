/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/contents/content.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./manifest.json":
/*!***********************!*\
  !*** ./manifest.json ***!
  \***********************/
/*! exports provided: manifest_version, version, name, short_name, description, background, content_scripts, browser_action, icons, permissions, content_security_policy, default */
/***/ (function(module) {

eval("module.exports = {\"manifest_version\":2,\"version\":\"4.2.0\",\"name\":\"SUGOI!Cookies: gclid tester for Google Ads\",\"short_name\":\"S Cookies: gclid tester\",\"description\":\"Check if you have cookies that are needed for Google Ads conversion tracking by gclid test\",\"background\":{\"scripts\":[\"src/dist/bg.bundle.js\"],\"persistant\":false},\"content_scripts\":[{\"matches\":[\"<all_urls>\"],\"js\":[\"src/dist/contents.bundle.js\",\"src/dist/writers.bundle.js\"]}],\"browser_action\":{\"name\":\"turn on / off\",\"default_title\":\"SUGOI! Cokkies\",\"default_popup\":\"src/html/popup.html\",\"default_icon\":\"icon/s128.png\"},\"icons\":{\"16\":\"icon/s16.png\",\"48\":\"icon/s48.png\",\"128\":\"icon/s128.png\"},\"permissions\":[\"webRequest\",\"activeTab\",\"cookies\",\"<all_urls>\"],\"content_security_policy\":\"script-src 'self' 'unsafe-eval' https://ajax.googleapis.com/ ; object-src 'self'\"};\n\n//# sourceURL=webpack:///./manifest.json?");

/***/ }),

/***/ "./src/ts/const.ts":
/*!*************************!*\
  !*** ./src/ts/const.ts ***!
  \*************************/
/*! exports provided: VERSION, STYLE_HIGHLIGHT, STYLE_BOLD, STYLE_BLUE, STYLE_RED, STYLE_WHITE, STYLE_LIGHT_GRAY, STYLE_BG_GREEN, STYLE_BG_BLUE, STYLE_BG_LIGHT_BLUE, STYLE_BG_ORANGE, STYLE_BG_GRAY, STYLE_ESCAPE, STYLES_BOLD_BULE, STYLES_BOLD_RED, STYLES_BOLD_WHITE_BG_GREEN, STYLES_BOLD_WHITE_BG_BLUE, STYLES_BOLD_WHITE_BG_ORANGE, STYLES_BOLD_WHITE_BG_GRAY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VERSION\", function() { return VERSION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_HIGHLIGHT\", function() { return STYLE_HIGHLIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_BOLD\", function() { return STYLE_BOLD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_BLUE\", function() { return STYLE_BLUE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_RED\", function() { return STYLE_RED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_WHITE\", function() { return STYLE_WHITE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_LIGHT_GRAY\", function() { return STYLE_LIGHT_GRAY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_BG_GREEN\", function() { return STYLE_BG_GREEN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_BG_BLUE\", function() { return STYLE_BG_BLUE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_BG_LIGHT_BLUE\", function() { return STYLE_BG_LIGHT_BLUE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_BG_ORANGE\", function() { return STYLE_BG_ORANGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_BG_GRAY\", function() { return STYLE_BG_GRAY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_ESCAPE\", function() { return STYLE_ESCAPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLES_BOLD_BULE\", function() { return STYLES_BOLD_BULE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLES_BOLD_RED\", function() { return STYLES_BOLD_RED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLES_BOLD_WHITE_BG_GREEN\", function() { return STYLES_BOLD_WHITE_BG_GREEN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLES_BOLD_WHITE_BG_BLUE\", function() { return STYLES_BOLD_WHITE_BG_BLUE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLES_BOLD_WHITE_BG_ORANGE\", function() { return STYLES_BOLD_WHITE_BG_ORANGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLES_BOLD_WHITE_BG_GRAY\", function() { return STYLES_BOLD_WHITE_BG_GRAY; });\n/* harmony import */ var _manifest_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manifest.json */ \"./manifest.json\");\nvar _manifest_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../manifest.json */ \"./manifest.json\", 1);\n/**\r\n * @author Akira Sakaguchi <akira.s7171@gmail.com>\r\n * A list of constants\r\n */\r\n// @ts-ignore\r\n\r\nvar STYLE_HIGHLIGHT = 'font-weight: bold;background-color:black;color:#fff';\r\nvar STYLE_BOLD = 'font-weight: bold';\r\nvar STYLE_BLUE = 'color: blue';\r\nvar STYLE_RED = 'color: red';\r\nvar STYLE_WHITE = 'color: #fff';\r\nvar STYLE_LIGHT_GRAY = 'color: #D3D3D3';\r\nvar STYLE_BG_GREEN = 'background-color: green';\r\nvar STYLE_BG_BLUE = 'background-color: blue';\r\nvar STYLE_BG_LIGHT_BLUE = 'background-color: #ADD8E6';\r\nvar STYLE_BG_ORANGE = 'background-color: orange';\r\nvar STYLE_BG_GRAY = 'background-color: gray';\r\nvar STYLE_ESCAPE = '%c';\r\nvar STYLES_BOLD_BULE = [STYLE_BOLD, STYLE_BLUE];\r\nvar STYLES_BOLD_RED = [STYLE_BOLD, STYLE_RED];\r\nvar STYLES_BOLD_WHITE_BG_GREEN = [STYLE_BOLD, STYLE_WHITE, STYLE_BG_GREEN];\r\nvar STYLES_BOLD_WHITE_BG_BLUE = [STYLE_BOLD, STYLE_WHITE, STYLE_BG_BLUE];\r\nvar STYLES_BOLD_WHITE_BG_ORANGE = [STYLE_BOLD, STYLE_WHITE, STYLE_BG_ORANGE];\r\nvar STYLES_BOLD_WHITE_BG_GRAY = [STYLE_BOLD, STYLE_WHITE, STYLE_BG_GRAY];\r\nvar VERSION = 'v' + _manifest_json__WEBPACK_IMPORTED_MODULE_0__.version;\r\n/**\r\n * Google Ads Cookies usually consists of 3 parts: conversionID, timeStamp, and UUID\r\n * */\r\nvar DEFAULT_COOKIE_LENGTH = 3;\r\n\r\n\n\n//# sourceURL=webpack:///./src/ts/const.ts?");

/***/ }),

/***/ "./src/ts/contents/content.ts":
/*!************************************!*\
  !*** ./src/ts/contents/content.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .././functions */ \"./src/ts/functions.ts\");\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ \"./src/ts/const.ts\");\n\r\n\r\n/**\r\n * @author Akira Sakaguchi <akira.s7171@gmail.com>\r\n */\r\n\"use strict\";\r\n// start\r\nchrome.runtime.sendMessage({ message: 'start' });\r\nchrome.runtime.sendMessage({ message: 'sendDomainName', domainName: document.domain });\r\n/**\r\n * eventListener - eventListener for chrome.tabs.sendMessage(tabID, obj, function)\r\n */\r\nchrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {\r\n    var msg = request.message;\r\n    var url = window.location.href;\r\n    switch (msg) {\r\n        case \"clearCookies\":\r\n            clearCookies_(document.domain);\r\n            break;\r\n        case \"clearAll\":\r\n            clearCookies_(document.domain, true);\r\n            break;\r\n        case 'reload':\r\n            reload_(request.value);\r\n            break;\r\n        case 'toggle':\r\n            // request.value = shouldEnabled\r\n            toggle_(request.value);\r\n            reload_(url, request.gclidVal);\r\n            break;\r\n        case 'getUrl':\r\n            sendResponse(url);\r\n            break;\r\n        case 'getDomainName':\r\n            chrome.runtime.sendMessage({ message: 'sendDomainName', domainName: document.domain });\r\n            break;\r\n    }\r\n    return true;\r\n});\r\n/**\r\n * from popup.js to background.js\r\n * @private\r\n * @param {boolean} enabled\r\n */\r\nfunction toggle_(enabled) {\r\n    chrome.runtime.sendMessage({ message: 'toggle', shouldEnabled: enabled }, function () { });\r\n}\r\n;\r\n/**\r\n * from popup.js to background.js\r\n * @private\r\n * @param {string} domainStr\r\n * @param {?boolean} isAll\r\n */\r\nfunction clearCookies_(domainStr, isAll) {\r\n    var domains = getDomains(document.domain);\r\n    var msgObj = isAll ?\r\n        { message: 'clearAll', domain: domains } :\r\n        { message: 'clearCookies', domain: domains };\r\n    chrome.runtime.sendMessage(msgObj, function (response) {\r\n        console.log(_const__WEBPACK_IMPORTED_MODULE_1__[\"STYLE_ESCAPE\"] + response, _const__WEBPACK_IMPORTED_MODULE_1__[\"STYLE_BOLD\"]);\r\n        console.log('reloading this page in a moment...');\r\n        reload_();\r\n        return true;\r\n    });\r\n}\r\n;\r\n/**\r\n * @return {string{}}\r\n * @param {string} domain;\r\n */\r\nfunction getDomains(domain) {\r\n    var domains = [];\r\n    domains.push(domain);\r\n    while (domain.indexOf('.') != -1) {\r\n        domain = domain.slice(domain.indexOf('.'));\r\n        domain = domain.replace('.', '');\r\n        domains.push(domain);\r\n    }\r\n    return domains;\r\n}\r\n;\r\n/**\r\n * from popup.js\r\n * @private\r\n * @param {?string} url;\r\n */\r\nfunction reload_(url, inputVal) {\r\n    _functions__WEBPACK_IMPORTED_MODULE_0__[\"getUrlWithoutGclid\"];\r\n    if (inputVal) {\r\n        url = _functions__WEBPACK_IMPORTED_MODULE_0__[\"getUrlWithoutGclid\"](url);\r\n        url.includes('?') ?\r\n            window.location.href = url + '&gclid=' + inputVal :\r\n            window.location.href = url + '?gclid=' + inputVal;\r\n    }\r\n    else {\r\n        url ?\r\n            window.location.href = url :\r\n            window.location.href = _functions__WEBPACK_IMPORTED_MODULE_0__[\"getUrlWithoutGclid\"](window.location.href);\r\n    }\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/ts/contents/content.ts?");

/***/ }),

/***/ "./src/ts/functions.ts":
/*!*****************************!*\
  !*** ./src/ts/functions.ts ***!
  \*****************************/
/*! exports provided: getUrlWithoutGclid, getGclid_, IsJsonString, sendMsgToContentJS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUrlWithoutGclid\", function() { return getUrlWithoutGclid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGclid_\", function() { return getGclid_; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IsJsonString\", function() { return IsJsonString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendMsgToContentJS\", function() { return sendMsgToContentJS; });\n/**\r\n * @return {string} url - url without gclid\r\n * @param {string} url - url with or without gclid\r\n */\r\nfunction getUrlWithoutGclid(url) {\r\n    if (!url) {\r\n        return;\r\n    }\r\n    if (url.includes('?gclid')) {\r\n        url = url.substring(url.indexOf('?gclid'), 0);\r\n    }\r\n    else if (url.includes('&gclid')) {\r\n        url = url.substring(url.indexOf('&gclid'), 0);\r\n    }\r\n    else if (url.includes('?_gl')) {\r\n        url = url.substring(url.indexOf('?_gl'), 0);\r\n    }\r\n    else if (url.includes('&_gl')) {\r\n        url = url.substring(url.indexOf('&_gl'), 0);\r\n    }\r\n    return url;\r\n}\r\n;\r\n/**\r\n * get gclid val according to the value in the input box\r\n * @return {!string};\r\n * @param {string} url\r\n */\r\nfunction getGclid_(url, val) {\r\n    if (!val) {\r\n        return '';\r\n    }\r\n    return url.includes('?') ? '&gclid=' + val : '?gclid=' + val;\r\n}\r\n;\r\n/**\r\n * check if the string is JSON parsable\r\n * @return {boolean}\r\n */\r\nfunction IsJsonString(str) {\r\n    try {\r\n        JSON.parse(str);\r\n    }\r\n    catch (e) {\r\n        return false;\r\n    }\r\n    return true;\r\n}\r\n;\r\nfunction sendMsgToContentJS(data) {\r\n    var msg = data.msg;\r\n    var val = data.val != null ? data.val : '';\r\n    var gclidVal = data.gclidVal != null ? data.gclidVal : '';\r\n    var $iFrame = document.getElementById('main-iframe');\r\n    ;\r\n    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {\r\n        var tabID = tabs[0].id;\r\n        if (!tabID) {\r\n            return null;\r\n        }\r\n        chrome.tabs.sendMessage(tabID, { 'message': msg, 'value': val, 'gclidVal': gclidVal });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/ts/functions.ts?");

/***/ })

/******/ });