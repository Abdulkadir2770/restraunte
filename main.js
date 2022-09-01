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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayHomePage\": () => (/* binding */ displayHomePage)\n/* harmony export */ });\nconst displayHomePage = () => {\r\n   // the content <div>\r\n   const content = document.querySelector(\"#content\");\r\n   console.log(content); \r\n};\r\n\r\n\n\n//# sourceURL=webpack://restraunte/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _onPageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onPageLoad */ \"./src/onPageLoad.js\");\n/* harmony import */ var _secondaryNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secondaryNav */ \"./src/secondaryNav.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_secondaryNav__WEBPACK_IMPORTED_MODULE_1__.secondaryNav)();\n\n//# sourceURL=webpack://restraunte/./src/index.js?");

/***/ }),

/***/ "./src/onPageLoad.js":
/*!***************************!*\
  !*** ./src/onPageLoad.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onPageLoad\": () => (/* binding */ onPageLoad)\n/* harmony export */ });\nconst onPageLoad = (() => {\r\n    const mainContainer = document.querySelector(\"#content\");\r\n\r\n    // main header\r\n    const header = document.createElement(\"header\");\r\n    header.innerHTML = `<h1>Binti's Takeout</h1> <img src='../dist/assets/img/logo.jpg' alt=\"logo img\" id=\"logo\"/>`;\r\n\r\n    mainContainer.appendChild(header);\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restraunte/./src/onPageLoad.js?");

/***/ }),

/***/ "./src/secondaryNav.js":
/*!*****************************!*\
  !*** ./src/secondaryNav.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"secondaryNav\": () => (/* binding */ secondaryNav)\n/* harmony export */ });\nconst secondaryNav = () => {\r\n    // secondary header\r\n    const mainContainer = document.querySelector(\"#content\");\r\n    const header = document.querySelector(\"header\");\r\n\r\n    const secondaryHeader = document.createElement(\"div\");\r\n    secondaryHeader.classList.add(\"secondary-nav\");\r\n    secondaryHeader.innerHTML = `\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n    `;\r\n\r\n\r\n    secondaryHeader.insertAdjacentElement(\"afterend\", header);\r\n};\r\n\r\n\n\n//# sourceURL=webpack://restraunte/./src/secondaryNav.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;