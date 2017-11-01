(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0,1],[
/* 0 */,
/* 1 */
/*!******************!*\
  !*** ./add.wasm ***!
  \******************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Instanciate WebAssembly module
var instance = new WebAssembly.Instance(__webpack_require__.w[module.i], {});

// export exports from WebAssmbly module
module.exports = instance.exports;

/***/ }),
/* 2 */
/*!*****************!*\
  !*** ./math.js ***!
  \*****************/
/*! exports provided: add, factorial, fibonacci, factorialJavascript, fibonacciJavascript */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factorialJavascript", function() { return factorialJavascript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fibonacciJavascript", function() { return fibonacciJavascript; });
/* harmony import */ var _add_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.wasm */1);
/* harmony import */ var _add_wasm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_add_wasm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "add", function() { return _add_wasm__WEBPACK_IMPORTED_MODULE_0__["add"]; });

/* harmony import */ var _factorial_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factorial.wasm */3);
/* harmony import */ var _factorial_wasm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_factorial_wasm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "factorial", function() { return _factorial_wasm__WEBPACK_IMPORTED_MODULE_1__["factorial"]; });

/* harmony import */ var _fibonacci_wasm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fibonacci.wasm */4);
/* harmony import */ var _fibonacci_wasm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fibonacci_wasm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fibonacci", function() { return _fibonacci_wasm__WEBPACK_IMPORTED_MODULE_2__["fibonacci"]; });







function factorialJavascript(i) {
	if(i < 1) return 1;
	return i * factorialJavascript(i - 1);
}

function fibonacciJavascript(i) {
	if(i < 2) return 1;
	return fibonacciJavascript(i - 1) + fibonacciJavascript(i - 2);
}


/***/ }),
/* 3 */
/*!************************!*\
  !*** ./factorial.wasm ***!
  \************************/
/*! no static exports found */
/*! exports used: factorial */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Instanciate WebAssembly module
var instance = new WebAssembly.Instance(__webpack_require__.w[module.i], {});

// export exports from WebAssmbly module
module.exports = instance.exports;

/***/ }),
/* 4 */
/*!************************!*\
  !*** ./fibonacci.wasm ***!
  \************************/
/*! no static exports found */
/*! exports used: fibonacci */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Instanciate WebAssembly module
var instance = new WebAssembly.Instance(__webpack_require__.w[module.i], {});

// export exports from WebAssmbly module
module.exports = instance.exports;

/***/ })
]]);