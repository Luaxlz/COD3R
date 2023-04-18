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
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "(api)/./src/pages/api/hello.js":
/*!********************************!*\
  !*** ./src/pages/api/hello.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nfunction handler(req, res) {\n    res.status(200).json({\n        name: \"Teste API\",\n        metodo: req.method,\n        nome: req.query.nome,\n        idade: req.query.idade\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2hlbGxvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2RUFBNkU7QUFFOUQsU0FBU0EsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeENBLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFDbkJDLE1BQU07UUFDTkMsUUFBUUwsSUFBSU0sTUFBTTtRQUNsQkMsTUFBTVAsSUFBSVEsS0FBSyxDQUFDRCxJQUFJO1FBQ3BCRSxPQUFPVCxJQUFJUSxLQUFLLENBQUNDLEtBQUs7SUFDeEI7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVuZGFtZW50b3MvLi9zcmMvcGFnZXMvYXBpL2hlbGxvLmpzPzdmODAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgbmFtZTogJ1Rlc3RlIEFQSScsXG4gICAgbWV0b2RvOiByZXEubWV0aG9kLFxuICAgIG5vbWU6IHJlcS5xdWVyeS5ub21lLFxuICAgIGlkYWRlOiByZXEucXVlcnkuaWRhZGVcbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsIm5hbWUiLCJtZXRvZG8iLCJtZXRob2QiLCJub21lIiwicXVlcnkiLCJpZGFkZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/hello.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/hello.js"));
module.exports = __webpack_exports__;

})();