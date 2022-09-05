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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPage\": () => (/* binding */ contactPage)\n/* harmony export */ });\nconst contactPage = () => {\r\n    const container = document.querySelector(\".hero-section\");\r\n\r\n    container.innerHTML = `\r\n        <div id=\"contact-info\">\r\n            <h1>Contact us:</h1>\r\n            <div>\r\n                <h4>Phone</h4>\r\n                <ul>\r\n                    <li>879-867-5767</li>\r\n                </ul>    \r\n            </div>\r\n            <div>\r\n                <h4>Addrees</h4>\r\n                <ul>\r\n                    <li>12345 My Personal Address Rd, Rock Sheet TX 79891.</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div id=\"map\">\r\n            <img src=\"../dist/assets/img/googlemap.gif\" />\r\n        </div>\r\n    `;\r\n\r\n    console.log(\"Contact page displayed\");\r\n};\r\n\r\n\n\n//# sourceURL=webpack://restraunte/./src/contact.js?");

/***/ }),

/***/ "./src/home-page/footer.js":
/*!*********************************!*\
  !*** ./src/home-page/footer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\nconst footer = (() => {\r\n    const content = document.querySelector(\"#content\");\r\n\r\n    const ft = document.createElement(\"div\");\r\n    ft.classList.add(\"footer\");\r\n    ft.innerHTML = `<h3>Created by Amadi Abdulkadir</h3>`;\r\n    \r\n    content.appendChild(ft);\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restraunte/./src/home-page/footer.js?");

/***/ }),

/***/ "./src/home-page/home.js":
/*!*******************************!*\
  !*** ./src/home-page/home.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\nconst homePage = (() => {\r\n   // the content <div>\r\n   const content = document.querySelector(\"#content\");\r\n   \r\n   const heroSection = document.createElement(\"div\");\r\n   heroSection.classList.add(\"hero-section\");\r\n   heroSection.innerHTML = `\r\n      <div id=\"info\">\r\n         <h3>Welcome to Binti's Takeout</h3>\r\n         <br>\r\n         <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n      </div>\r\n      <div>\r\n         <img src=\"../dist/assets/img/pasta.jpg\" alt=\"pasta image\"/>\r\n      </div>\r\n   `;\r\n\r\n   content.appendChild(heroSection);\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restraunte/./src/home-page/home.js?");

/***/ }),

/***/ "./src/home-page/onPageLoad.js":
/*!*************************************!*\
  !*** ./src/home-page/onPageLoad.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onPageLoad\": () => (/* binding */ onPageLoad)\n/* harmony export */ });\n\r\nconst onPageLoad = (() => {\r\n    const mainContainer = document.querySelector(\"#content\");\r\n\r\n    // main header\r\n    const header = document.createElement(\"header\");\r\n    header.innerHTML = `<h1>Binti's Takeout</h1> <img src='../dist/assets/img/logo.jpg' alt=\"logo img\" id=\"logo\"/>`;\r\n\r\n    mainContainer.appendChild(header);\r\n\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restraunte/./src/home-page/onPageLoad.js?");

/***/ }),

/***/ "./src/home-page/secondaryNav.js":
/*!***************************************!*\
  !*** ./src/home-page/secondaryNav.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"secondaryNav\": () => (/* binding */ secondaryNav)\n/* harmony export */ });\nconst secondaryNav = (() => {\r\n    // secondary header\r\n    const mainContainer = document.querySelector(\"#content\");\r\n    const header = document.querySelector(\"header\");\r\n\r\n    const secondaryHeader = document.createElement(\"div\");\r\n    secondaryHeader.classList.add(\"secondary-nav\");\r\n    secondaryHeader.innerHTML = `\r\n        <div class=\"sn-item\" id=\"home\">Home</div>\r\n        <div class=\"sn-item\" id=\"menu\">Menu</div>\r\n        <div class=\"sn-item\" id=\"contact\">Contact</div>\r\n    `;\r\n\r\n\r\n    mainContainer.appendChild(secondaryHeader);\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restraunte/./src/home-page/secondaryNav.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_page_onPageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page/onPageLoad */ \"./src/home-page/onPageLoad.js\");\n/* harmony import */ var _home_page_secondaryNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page/secondaryNav */ \"./src/home-page/secondaryNav.js\");\n/* harmony import */ var _home_page_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home */ \"./src/home-page/home.js\");\n/* harmony import */ var _home_page_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/footer */ \"./src/home-page/footer.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// tab clicking section\r\nconst tabNavigation = (() => {\r\n    const home = document.querySelector(\"#home\");\r\n    const menu = document.querySelector(\"#menu\");\r\n    const contact = document.querySelector(\"#contact\");\r\n\r\n    home.addEventListener(\"click\", () => {\r\n        home.classList.add(\"active\");\r\n        menu.classList.remove(\"active\");\r\n        contact.classList.remove(\"active\");\r\n\r\n        setTimeout(window.location.reload(), 1000);\r\n\r\n        alert(\"Home page will appear in a second. Thank you!!!\");\r\n        \r\n    });\r\n\r\n    menu.addEventListener(\"click\", () => {\r\n        menu.classList.add(\"active\");\r\n        home.classList.remove(\"active\");\r\n        contact.classList.remove(\"active\");\r\n\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_4__.menuPage)();\r\n    });\r\n\r\n    contact.addEventListener(\"click\", () => {\r\n        contact.classList.add(\"active\");\r\n        home.classList.remove(\"active\");\r\n        menu.classList.remove(\"active\");\r\n\r\n        (0,_contact__WEBPACK_IMPORTED_MODULE_5__.contactPage)();\r\n    });\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restraunte/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\nconst menuPage = () => {\r\n    const container = document.querySelector(\".hero-section\");\r\n\r\n    container.innerHTML = `\r\n        <div id=\"menu-container-one\">\r\n            <img src=\"../dist/assets/img/somosa.jpg\" alt=\"somosa image\" class=\"menu-item\"/>\r\n\r\n            <img src=\"../dist/assets/img/hen.jpg\" alt=\"somosa image\" class=\"menu-item\"/>\r\n        </div>\r\n        <div id=\"menu-container-two\">\r\n            <img src=\"../dist/assets/img/rice-beef.jpg\" alt=\"somosa image\" class=\"menu-item\"/>\r\n\r\n            <img src=\"../dist/assets/img/rice-chicken.jpg\" alt=\"somosa image\" class=\"menu-item\"/>\r\n        </div>\r\n    `;\r\n\r\n    const footer = document.querySelector(\".footer\");\r\n    footer.remove();\r\n    console.log(footer);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restraunte/./src/menu.js?");

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