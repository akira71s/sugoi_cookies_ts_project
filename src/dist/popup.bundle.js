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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/popup/popup.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/contents/const.ts":
/*!**********************************!*\
  !*** ./src/ts/contents/const.ts ***!
  \**********************************/
/*! exports provided: VERSION, STYLE_HIGHLIGHT, STYLE_BOLD, STYLE_BLUE, STYLE_RED, STYLE_WHITE, STYLE_LIGHT_GRAY, STYLE_BG_GREEN, STYLE_BG_BLUE, STYLE_BG_LIGHT_BLUE, STYLE_BG_ORANGE, STYLE_BG_GRAY, STYLE_ESCAPE, STYLES_BOLD_BULE, STYLES_BOLD_RED, STYLES_BOLD_WHITE_BG_GREEN, STYLES_BOLD_WHITE_BG_BLUE, STYLES_BOLD_WHITE_BG_ORANGE, STYLES_BOLD_WHITE_BG_GRAY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VERSION\", function() { return VERSION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_HIGHLIGHT\", function() { return STYLE_HIGHLIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_BOLD\", function() { return STYLE_BOLD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_BLUE\", function() { return STYLE_BLUE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_RED\", function() { return STYLE_RED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_WHITE\", function() { return STYLE_WHITE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_LIGHT_GRAY\", function() { return STYLE_LIGHT_GRAY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_BG_GREEN\", function() { return STYLE_BG_GREEN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_BG_BLUE\", function() { return STYLE_BG_BLUE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_BG_LIGHT_BLUE\", function() { return STYLE_BG_LIGHT_BLUE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_BG_ORANGE\", function() { return STYLE_BG_ORANGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_BG_GRAY\", function() { return STYLE_BG_GRAY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLE_ESCAPE\", function() { return STYLE_ESCAPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLES_BOLD_BULE\", function() { return STYLES_BOLD_BULE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLES_BOLD_RED\", function() { return STYLES_BOLD_RED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLES_BOLD_WHITE_BG_GREEN\", function() { return STYLES_BOLD_WHITE_BG_GREEN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLES_BOLD_WHITE_BG_BLUE\", function() { return STYLES_BOLD_WHITE_BG_BLUE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLES_BOLD_WHITE_BG_ORANGE\", function() { return STYLES_BOLD_WHITE_BG_ORANGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STYLES_BOLD_WHITE_BG_GRAY\", function() { return STYLES_BOLD_WHITE_BG_GRAY; });\n/**\r\n * @author Akira Sakaguchi <akira.s7171@gmail.com>\r\n * A list of constants\r\n */\r\nvar STYLE_HIGHLIGHT = 'font-weight: bold;background-color:black;color:#fff';\r\nvar STYLE_BOLD = 'font-weight: bold';\r\nvar STYLE_BLUE = 'color: blue';\r\nvar STYLE_RED = 'color: red';\r\nvar STYLE_WHITE = 'color: #fff';\r\nvar STYLE_LIGHT_GRAY = 'color: #D3D3D3';\r\nvar STYLE_BG_GREEN = 'background-color: green';\r\nvar STYLE_BG_BLUE = 'background-color: blue';\r\nvar STYLE_BG_LIGHT_BLUE = 'background-color: #ADD8E6';\r\nvar STYLE_BG_ORANGE = 'background-color: orange';\r\nvar STYLE_BG_GRAY = 'background-color: gray';\r\nvar STYLE_ESCAPE = '%c';\r\nvar STYLES_BOLD_BULE = [STYLE_BOLD, STYLE_BLUE];\r\nvar STYLES_BOLD_RED = [STYLE_BOLD, STYLE_RED];\r\nvar STYLES_BOLD_WHITE_BG_GREEN = [STYLE_BOLD, STYLE_WHITE, STYLE_BG_GREEN];\r\nvar STYLES_BOLD_WHITE_BG_BLUE = [STYLE_BOLD, STYLE_WHITE, STYLE_BG_BLUE];\r\nvar STYLES_BOLD_WHITE_BG_ORANGE = [STYLE_BOLD, STYLE_WHITE, STYLE_BG_ORANGE];\r\nvar STYLES_BOLD_WHITE_BG_GRAY = [STYLE_BOLD, STYLE_WHITE, STYLE_BG_GRAY];\r\nvar VERSION = 'v4.2.0';\r\n/**\r\n * Google Ads Cookies usually consists of 3 parts: conversionID, timeStamp, and UUID\r\n * */\r\nvar DEFAULT_COOKIE_LENGTH = 3;\r\n\r\n\n\n//# sourceURL=webpack:///./src/ts/contents/const.ts?");

/***/ }),

/***/ "./src/ts/popup/popup.ts":
/*!*******************************!*\
  !*** ./src/ts/popup/popup.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contents_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contents/const */ \"./src/ts/contents/const.ts\");\n\r\n// TODO: getDomainName & Cookies\r\n/**\r\n * set the version text in the popup menu\r\n */\r\nwindow.addEventListener('DOMContentLoaded', function (e) {\r\n    document.getElementById('ver-info').innerText = _contents_const__WEBPACK_IMPORTED_MODULE_0__[\"VERSION\"];\r\n});\r\n/**\r\n * Listening message from content.js & writers.js\r\n * once messages received, post message to the iframe window\r\n */\r\nchrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {\r\n    var msg = request.message;\r\n    if (msg === 'sendDomainName') {\r\n        var $iFrame = document.getElementById('main-iframe');\r\n        $iFrame.contentWindow.postMessage(JSON.stringify({ type: 'sendDomainName', 'domainName': request.domainName }), '*');\r\n        console.log('domain ', request.domainName);\r\n    }\r\n    if (msg === 'sendCookie') {\r\n        var $iFrame = document.getElementById('main-iframe');\r\n        $iFrame.contentWindow.postMessage(JSON.stringify({ type: 'sendCookie',\r\n            'cookieName': request.cookieName, 'cookieValue': request.cookieValue }), '*');\r\n    }\r\n    return true;\r\n});\r\n/**\r\n * Listening message from the iframe window\r\n*/\r\nwindow.addEventListener('message', function (e) {\r\n    if (!IsJsonString(e.data)) {\r\n        return;\r\n    }\r\n    var data = JSON.parse(e.data);\r\n    var type = data.type;\r\n    if (!type) {\r\n        return;\r\n    }\r\n    if (type === 'checkEnabled') {\r\n        var isEnabledStr = window.localStorage.getItem('enabled');\r\n        var isEnabled = isEnabledStr && isEnabledStr == 'true' ? true : false;\r\n        var $iFrame = document.getElementById('main-iframe');\r\n        ;\r\n        $iFrame.contentWindow.postMessage(JSON.stringify({ type: 'isEnabled', 'isEnabled': isEnabled }), '*');\r\n    }\r\n    else if (type === 'toggleEnabled') {\r\n        var isEnabledStr = window.localStorage.getItem('enabled');\r\n        var shouldEnabledStr = isEnabledStr && isEnabledStr == 'true' ? 'false' : 'true';\r\n        window.localStorage.setItem('enabled', shouldEnabledStr);\r\n    }\r\n    else if (type === 'sendMsg') {\r\n        var msg_1 = data.msg;\r\n        var val_1 = data.val != null ? data.val : '';\r\n        var gclidVal_1 = data.gclidVal != null ? data.gclidVal : '';\r\n        var $iFrame = document.getElementById('main-iframe');\r\n        ;\r\n        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {\r\n            var tabID = tabs[0].id;\r\n            if (!tabID) {\r\n                return null;\r\n            }\r\n            chrome.tabs.sendMessage(tabID, { 'message': msg_1, 'value': val_1, 'gclidVal': gclidVal_1 });\r\n        });\r\n    }\r\n    else if (type === 'reload') {\r\n        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {\r\n            var tabID = tabs[0].id;\r\n            if (tabID) {\r\n                chrome.tabs.sendMessage(tabID, { message: 'getUrl' }, (function (response) {\r\n                    var url = getUrlWithoutGclid(response);\r\n                    if (url) {\r\n                        // & or ? gclid=...\r\n                        var gclid = getGclid_(url, data.val);\r\n                        chrome.tabs.sendMessage(tabID, { message: 'reload', value: url + gclid });\r\n                    }\r\n                    return true;\r\n                }));\r\n            }\r\n            return true;\r\n        });\r\n    }\r\n    else if (type === 'getDomainName') {\r\n        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {\r\n            var tabID = tabs[0].id;\r\n            if (tabID) {\r\n                chrome.tabs.sendMessage(tabID, { message: 'getDomainName' }, function () { });\r\n            }\r\n            return true;\r\n        });\r\n    }\r\n    else if (type === 'getCookies') {\r\n        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {\r\n            var tabID = tabs[0].id;\r\n            if (tabID) {\r\n                chrome.tabs.sendMessage(tabID, { message: 'getCookies' }, function () { });\r\n            }\r\n            return true;\r\n        });\r\n    }\r\n});\r\n/**\r\n * @return {string} url - url without gclid\r\n * @param {string} url - url with or without gclid\r\n */\r\nfunction getUrlWithoutGclid(url) {\r\n    if (!url) {\r\n        return;\r\n    }\r\n    if (url.includes('?gclid')) {\r\n        url = url.substring(url.indexOf('?gclid'), 0);\r\n    }\r\n    else if (url.includes('&gclid')) {\r\n        url = url.substring(url.indexOf('&gclid'), 0);\r\n    }\r\n    else if (url.includes('?_gl')) {\r\n        url = url.substring(url.indexOf('?_gl'), 0);\r\n    }\r\n    else if (url.includes('&_gl')) {\r\n        url = url.substring(url.indexOf('&_gl'), 0);\r\n    }\r\n    return url;\r\n}\r\n;\r\n/**\r\n * get gclid val according to the value in the input box\r\n * @return {!string};\r\n * @param {string} url\r\n */\r\nfunction getGclid_(url, val) {\r\n    if (!val) {\r\n        return '';\r\n    }\r\n    return url.includes('?') ? '&gclid=' + val : '?gclid=' + val;\r\n}\r\n;\r\n/**\r\n * check if the string is JSON parsable\r\n * @return {boolean}\r\n */\r\nfunction IsJsonString(str) {\r\n    try {\r\n        JSON.parse(str);\r\n    }\r\n    catch (e) {\r\n        return false;\r\n    }\r\n    return true;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/ts/popup/popup.ts?");

/***/ })

/******/ });