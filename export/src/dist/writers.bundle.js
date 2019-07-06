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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/contents/writers.ts");
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

/***/ "./src/ts/contents/writers.ts":
/*!************************************!*\
  !*** ./src/ts/contents/writers.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ \"./src/ts/const.ts\");\n\r\n/**\r\n * @author Akira Sakaguchi <akira.s7171@gmail.com>\r\n */\r\n\"use strict\";\r\nvar gacCache = [];\r\nvar gclawCache = [];\r\nvar gclidCache = [];\r\n/**\r\n * eventListener - eventListener for chrome.tabs.sendMessage(tabID, obj, function)\r\n */\r\nchrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {\r\n    var msg = request.message;\r\n    var val = request.value;\r\n    // from background js\r\n    if (msg == 'enabled') {\r\n        start_();\r\n        var cookies = getCookies(true);\r\n        write_(cookies, document.domain);\r\n        setTimeout(checkCookies_, 3000);\r\n        // from background js\r\n    }\r\n    else if (msg == 'CV') {\r\n        writeCVinfo_(val);\r\n    }\r\n    else if (msg == 'getCookies') {\r\n        chrome.runtime.sendMessage({ message: 'sendCookie', cookieName: 'gcl_aw', cookieValue: gclawCache });\r\n        chrome.runtime.sendMessage({ message: 'sendCookie', cookieName: 'gac', cookieValue: gacCache });\r\n        chrome.runtime.sendMessage({ message: 'sendCookie', cookieName: 'gclid', cookieValue: gclidCache });\r\n    }\r\n    return true;\r\n});\r\n/**\r\n * check if new cookies created / overriden after window loaded\r\n * @return {bookean}\r\n */\r\nfunction checkCookies_() {\r\n    var newCookies = [];\r\n    var isChanged = false;\r\n    var cookies = getCookies(false);\r\n    cookies.forEach(function (cookie) {\r\n        var name = cookie.split('=')[0];\r\n        var value = cookie.split('=')[1];\r\n        if (name.includes('gac') && !gacCache.includes(value)) {\r\n            isChanged = true;\r\n            newCookies.push(name + '=' + value);\r\n        }\r\n        if (name.includes('gcl_aw') && !gclawCache.includes(value)) {\r\n            isChanged = true;\r\n            newCookies.push(name + '=' + value);\r\n        }\r\n        if (name.includes('gclid') && !gclidCache.includes(value)) {\r\n            isChanged = true;\r\n            newCookies.push(name + '=' + value);\r\n        }\r\n    });\r\n    if (isChanged) {\r\n        console.log(\"%cCOOKIE CHANGED after windowLoaded\", _const__WEBPACK_IMPORTED_MODULE_0__[\"STYLES_BOLD_RED\"].join(';'));\r\n        newCookies.forEach(function (cookie) {\r\n            add_(cookie);\r\n        });\r\n    }\r\n}\r\n;\r\n/**\r\n* return array of cookies ('name=value')\r\n* @return {string[]}\r\n*/\r\nfunction getCookies(isOnload) {\r\n    var cookies = document.cookie.split(';');\r\n    var localStorageGclid = localStorage.getItem('gclid');\r\n    if (localStorageGclid) {\r\n        cookies.push('gclid=' + localStorageGclid);\r\n    }\r\n    cookies = cookies.filter(function (cookie) {\r\n        var name = cookie.split('=')[0];\r\n        var value = cookie.split('=')[1];\r\n        if (name.includes('gac') && !gacCache.includes(value)) {\r\n            if (isOnload) {\r\n                gacCache.push(value);\r\n            }\r\n            return true;\r\n        }\r\n        else if (name.includes('gcl_aw') && !gclawCache.includes(value)) {\r\n            if (isOnload) {\r\n                gclawCache.push(value);\r\n            }\r\n            return true;\r\n        }\r\n        else if (name.includes('gclid') && !gclidCache.includes(value)) {\r\n            if (isOnload) {\r\n                gclidCache.push(value);\r\n            }\r\n            return true;\r\n        }\r\n        return false;\r\n    });\r\n    return cookies;\r\n}\r\n;\r\n/**\r\n * calling console log for starter messages\r\n */\r\nfunction start_() {\r\n    var domain = document.domain;\r\n    console.log(\"%cSUGOI!Cookies for Google Ads (`*・ω・’)\" + _const__WEBPACK_IMPORTED_MODULE_0__[\"VERSION\"], _const__WEBPACK_IMPORTED_MODULE_0__[\"STYLE_BOLD\"]);\r\n    console.log(\"Current domain is : 【\", domain, \"】\");\r\n}\r\n;\r\n/**\r\n * calling console log for cookies\r\n * @private\r\n * @oaram {Array.<string>} cookies\r\n * @oaram {string} domain\r\n */\r\nvar write_ = function (cookies, domain) {\r\n    var gclAwNm = '_gcl_aw';\r\n    var gacNm = '_gac';\r\n    var gclid = 'gclid';\r\n    /** _gal_aw */\r\n    writeCookies_(cookies, gclAwNm, domain);\r\n    /** _gac */\r\n    writeCookies_(cookies, gacNm, domain);\r\n    /** gclid */\r\n    writeCookies_(cookies, gclid, domain);\r\n};\r\n/**\r\n * logging cookie info (related to Google Ads)\r\n */\r\nvar writeCVinfo_ = function (CVinfo) {\r\n    console.log('%cCONGRATULATIONS! CV FIRES!', _const__WEBPACK_IMPORTED_MODULE_0__[\"STYLES_BOLD_WHITE_BG_ORANGE\"].join(';'));\r\n    console.log('CV ID: %c' + CVinfo.cvid, _const__WEBPACK_IMPORTED_MODULE_0__[\"STYLE_BOLD\"]);\r\n    console.log('CV LABEL: %c' + CVinfo.cvlabel, _const__WEBPACK_IMPORTED_MODULE_0__[\"STYLE_BOLD\"]);\r\n    if (!CVinfo.gclaw && !CVinfo.gac) {\r\n        console.log('%cBUT NOT COOKIES DETECTED', _const__WEBPACK_IMPORTED_MODULE_0__[\"STYLES_BOLD_WHITE_BG_GRAY\"].join(';'));\r\n    }\r\n    else {\r\n        if (CVinfo.gclaw) {\r\n            console.log('CV COOKIE: %c' + CVinfo.gclaw, _const__WEBPACK_IMPORTED_MODULE_0__[\"STYLE_BOLD\"]);\r\n        }\r\n        if (CVinfo.gac) {\r\n            console.log('CV COOKIE: %c' + CVinfo.gac, _const__WEBPACK_IMPORTED_MODULE_0__[\"STYLE_BOLD\"]);\r\n        }\r\n    }\r\n};\r\n/**\r\n * calling console log for cookies\r\n * @private\r\n * @oaram {Array.<string>} cookies\r\n * @oaram {string} domain\r\n */\r\nvar add_ = function (cookie) {\r\n    var name = cookie.split('=')[0];\r\n    var value = cookie.split('=')[1];\r\n    console.log(_const__WEBPACK_IMPORTED_MODULE_0__[\"STYLE_ESCAPE\"] + name + '=' + value, _const__WEBPACK_IMPORTED_MODULE_0__[\"STYLES_BOLD_WHITE_BG_GREEN\"].join(';'));\r\n};\r\n/**\r\n * calling console log for cookies\r\n * @private\r\n * @return {Promise}\r\n * @param {Array.<string>} cookies\r\n * @param {string} cookieNm\r\n * @param {string} domain\r\n */\r\nfunction writeCookies_(cookies, cookieNm, domain) {\r\n    cookies = cookies.filter(function (cookie) {\r\n        var name = cookie.split('=')[0];\r\n        return name.includes(cookieNm);\r\n    });\r\n    cookies.length > 0 ?\r\n        console.log('【found out:', cookies.length, ' ', cookieNm + ' cookies】') :\r\n        console.log('NO ' + cookieNm + ' detected');\r\n    cookies.forEach(function (item) {\r\n        writeCookieInfo_(item);\r\n    });\r\n}\r\n;\r\n/**\r\n * @private\r\n * @param {!string} cookie\r\n */\r\nvar writeCookieInfo_ = function (cookie) {\r\n    if (!cookie) {\r\n        console.error('parameter invalid');\r\n        return;\r\n    }\r\n    var name = cookie.split('=')[0];\r\n    var value = cookie.split('=')[1];\r\n    console.log(_const__WEBPACK_IMPORTED_MODULE_0__[\"STYLE_ESCAPE\"] + name + '=' + value, _const__WEBPACK_IMPORTED_MODULE_0__[\"STYLES_BOLD_WHITE_BG_GREEN\"].join(';'));\r\n    chrome.runtime.sendMessage({ message: 'sendCookie', cookieName: name, cookieValue: value });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/ts/contents/writers.ts?");

/***/ })

/******/ });