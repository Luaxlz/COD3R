"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/clientes/[codigo]";
exports.ids = ["pages/api/clientes/[codigo]"];
exports.modules = {

/***/ "(api)/./src/pages/api/clientes/[codigo].js":
/*!********************************************!*\
  !*** ./src/pages/api/clientes/[codigo].js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    const codigo = req.query.codigo;\n    res.status(200).json({\n        id: codigo,\n        nome: `Maria ${codigo}`,\n        email: `maria${codigo}@maria.com`\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NsaWVudGVzL1tjb2RpZ29dLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN0QyxNQUFNQyxTQUFTRixJQUFJRyxLQUFLLENBQUNELE1BQU07SUFDL0JELElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFDakJDLElBQUlKO1FBQ0pLLE1BQU0sQ0FBQyxNQUFNLEVBQUVMLE9BQU8sQ0FBQztRQUN2Qk0sT0FBTyxDQUFDLEtBQUssRUFBRU4sT0FBTyxVQUFVLENBQUM7SUFDckM7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVuZGFtZW50b3MvLi9zcmMvcGFnZXMvYXBpL2NsaWVudGVzL1tjb2RpZ29dLmpzPzIxMWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgY29uc3QgY29kaWdvID0gcmVxLnF1ZXJ5LmNvZGlnb1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIGlkOiBjb2RpZ28sXHJcbiAgICAgICAgbm9tZTogYE1hcmlhICR7Y29kaWdvfWAsXHJcbiAgICAgICAgZW1haWw6IGBtYXJpYSR7Y29kaWdvfUBtYXJpYS5jb21gXHJcbiAgICB9KVxyXG59Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb2RpZ28iLCJxdWVyeSIsInN0YXR1cyIsImpzb24iLCJpZCIsIm5vbWUiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/clientes/[codigo].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/clientes/[codigo].js"));
module.exports = __webpack_exports__;

})();