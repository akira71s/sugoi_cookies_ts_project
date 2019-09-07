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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/bg/background.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/bg/background.ts":
/*!*********************************!*\
  !*** ./src/ts/bg/background.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * @author Akira Sakaguchi <akira.s7171@gmail.com>\r\n */\r\nvar cache_ = [];\r\n/**\r\n * check conversions that fires before window loaded\r\n */\r\nfunction checkHttpRequest(requestDetails) {\r\n    var isDuplicated = false;\r\n    var url = requestDetails.url;\r\n    if (url.startsWith('https://www.googleadservices.com/pagead/conversion/')) {\r\n        var queryIdx = url.indexOf('?');\r\n        // index without query param\r\n        var shortUrl = url.substring(0, queryIdx);\r\n        var reEx = /https:\\/\\/www.googleadservices.com\\/pagead\\/conversion\\/(.*)\\//;\r\n        // return if the request is not for Google Ads CV\r\n        if (shortUrl.search(reEx) == -1) {\r\n            return;\r\n        }\r\n        var gclawIdx = url.indexOf('&gclaw');\r\n        var gacIdx = url.indexOf('&gac');\r\n        var cvStrIdx = url.indexOf('conversion/');\r\n        var labelIdx = url.indexOf('label=');\r\n        // match returns 2 strings: [0] === whole the url, [1] matched string === CVid for the conversion\r\n        var CVid = shortUrl.match(reEx)[1];\r\n        console.log(CVid);\r\n        var gclaw = gclawIdx != -1 ? url.substring(gclawIdx, url.indexOf('&', gclawIdx + 1)) : '';\r\n        var gac = gacIdx != -1 ? url.substring(gacIdx, url.indexOf('&', gacIdx + 1)) : '';\r\n        var CVlabel = url.substring(labelIdx, url.indexOf('&', labelIdx + 1));\r\n        var CVlabelVal_1 = CVlabel.split('=')[1]; // label=VAL => [label, VAL]  -> [1] === VAL \r\n        var cookie = { 'gclaw': gclaw, 'gac': gac, 'cvid': CVid, 'cvlabel': CVlabelVal_1 };\r\n        var timer_1 = setTimeout(sendMsg_, 100, 'CV', cookie);\r\n        cache_.forEach(function (label) {\r\n            if (label == CVlabelVal_1) {\r\n                isDuplicated = true;\r\n                clearTimeout(timer_1);\r\n            }\r\n        });\r\n        if (!isDuplicated) {\r\n            cache_.push(CVlabelVal_1);\r\n        }\r\n    }\r\n}\r\n;\r\n/**\r\n * chrome.cookies shoul be called in this file, otherwise it's gonna be undefined\r\n */\r\nchrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {\r\n    var msg = request.message;\r\n    var domains = request.domain;\r\n    console.log('request');\r\n    if (msg === 'start') {\r\n        var enabled = isEnabled_();\r\n        updateIcon_(enabled);\r\n        if (enabled) {\r\n            start(request);\r\n            listenHTTPRequest();\r\n        }\r\n    }\r\n    else if (msg === 'toggle') {\r\n        toggle(request);\r\n        sendResponse('toggled');\r\n    }\r\n    else if (msg === 'clearCookies') {\r\n        domains.forEach(function (domain) {\r\n            getDomainCookies_(domain).then(function (cookies) {\r\n                doClearCookies_(cookies, true);\r\n            });\r\n        });\r\n        sendResponse('Cookie Cleared!');\r\n    }\r\n    else if (msg === 'clearAll') {\r\n        domains.forEach(function (domain) {\r\n            getDomainCookies_(domain).then(function (cookies) {\r\n                doClearCookies_(cookies, false);\r\n            });\r\n        });\r\n        sendResponse('Cookie Cleared!');\r\n    }\r\n    return true;\r\n});\r\n/**\r\n * detect Google Ads Conversion\r\n */\r\nfunction listenHTTPRequest() {\r\n    chrome.webRequest.onCompleted.addListener(checkHttpRequest, { urls: [\"<all_urls>\"] });\r\n}\r\n;\r\n/**\r\n* @private\r\n* @return {Promise}\r\n* @param {Array.<Object>} cookies - [] default\r\n* @param {Array.<Object>} false\r\n*/\r\nfunction doClearCookies_(cookies, googleCookieOnly) {\r\n    if (cookies === void 0) { cookies = []; }\r\n    if (googleCookieOnly === void 0) { googleCookieOnly = false; }\r\n    return new Promise(function (resolve, reject) {\r\n        cookies.forEach(function (cookie) {\r\n            if (googleCookieOnly) {\r\n                if (cookie.name.includes('gac') || cookie.name.includes('gcl_aw') || cookie.name.includes('gclid')) {\r\n                    var url = \"http\" + (cookie.secure ? \"s\" : \"\") + \"://\" + cookie.domain + cookie.path;\r\n                    chrome.cookies.remove({ \"url\": url, \"name\": cookie.name }, function (cookie) { sendMsg_('deleted_cookie', cookie); });\r\n                }\r\n            }\r\n            else {\r\n                var url = \"http\" + (cookie.secure ? \"s\" : \"\") + \"://\" + cookie.domain + cookie.path;\r\n                chrome.cookies.remove({ \"url\": url, \"name\": cookie.name }, function (cookie) { sendMsg_('deleted_cookie', cookie); });\r\n            }\r\n        });\r\n        resolve(\"cookieCleared\");\r\n    });\r\n}\r\n;\r\n/**\r\n* @private\r\n* @return {Promise}\r\n* @param {?string} domaiNm - if null, get all\r\n*/\r\nfunction getDomainCookies_(domainNm) {\r\n    var detailObj = domainNm ? { domain: domainNm } : {};\r\n    return new Promise(function (resolve, reject) {\r\n        // '' is a flag to return empty array\r\n        if (domainNm === '') {\r\n            resolve([]);\r\n        }\r\n        chrome.cookies.getAll(detailObj, (function (cookies) {\r\n            resolve(cookies || []);\r\n        }));\r\n    });\r\n}\r\n;\r\n/**\r\n * to & from pupup.js\r\n * @private\r\n * @param{Object} request\r\n */\r\nfunction toggle(request) {\r\n    var shouldEnabled = request.shouldEnabled;\r\n    updateIcon_(shouldEnabled);\r\n    var booleanStr = shouldEnabled ? 'true' : 'false';\r\n    window.localStorage.setItem('enabled', booleanStr);\r\n}\r\n;\r\n/**\r\n * @private\r\n * @return{boolean}\r\n */\r\nfunction isEnabled_() {\r\n    return window.localStorage.getItem('enabled') == 'true' ? true : false;\r\n}\r\n;\r\n/**\r\n * request from pupup.js\r\n * @private\r\n * @param{boolean} shouldEnabled\r\n */\r\nfunction updateIcon_(shouldEnabled) {\r\n    var suffix = shouldEnabled ? '-on' : '';\r\n    chrome.browserAction.setIcon({ path: \"../../icon/s128\" + suffix + \".png\" });\r\n}\r\n;\r\n/**\r\n * request from content.js\r\n * @private\r\n * @param {Object} request\r\n */\r\nfunction start(request) {\r\n    // send message to writer.ts\r\n    sendMsg_('enabled');\r\n}\r\n;\r\n/**\r\n * @private\r\n * @param {string} msg\r\n * @param {?Any} val\r\n */\r\nfunction sendMsg_(msg, val) {\r\n    cache_ = [];\r\n    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {\r\n        if (!tabs[0]) {\r\n            // TODO: check when the error occurs\r\n            // window.alert('please reload the page');\r\n            return;\r\n        }\r\n        // found active tab\r\n        var tabID = tabs[0].id;\r\n        val != undefined ?\r\n            chrome.tabs.sendMessage(tabID, { message: msg, value: val }) :\r\n            chrome.tabs.sendMessage(tabID, { message: msg });\r\n    });\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/ts/bg/background.ts?");

/***/ })

/******/ });