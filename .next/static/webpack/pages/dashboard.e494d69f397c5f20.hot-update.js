"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/Sections/channels.tsx":
/*!**********************************************!*\
  !*** ./src/components/Sections/channels.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _createChannel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createChannel */ \"./src/components/Sections/createChannel.tsx\");\n/* harmony import */ var _browseChannel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browseChannel */ \"./src/components/Sections/browseChannel.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Channels = ()=>{\n    _s();\n    const [activeComponent, setActiveComponent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    function handleCreate() {\n        setActiveComponent(\"create\");\n    }\n    function handleBrowse() {\n        setActiveComponent(\"browse\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: activeComponent ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                activeComponent === \"create\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_createChannel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/goinfre/oufisaou/last_transcendance/src/components/Sections/channels.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 44\n                }, undefined),\n                activeComponent === \"browse\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_browseChannel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/goinfre/oufisaou/last_transcendance/src/components/Sections/channels.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 44\n                }, undefined)\n            ]\n        }, void 0, true) : // Render the buttons when no component is selected\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex px-20 border-2 items-center justify-between h-full  w-[77%] border-opacity-30 border-violet-400 bg-opacity-5 bg-gradient-to-l from-[rgba(255,255,255,0.20)] bg-transparent bg-blur-md backdrop-filter backdrop-blur-md rounded-[30px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-black/20 p-6 rounded-full\",\n                    onClick: handleCreate,\n                    children: \"Create a channel\"\n                }, void 0, false, {\n                    fileName: \"/goinfre/oufisaou/last_transcendance/src/components/Sections/channels.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-black/20 p-6 rounded-full\",\n                    onClick: handleBrowse,\n                    children: \"Browse a channel\"\n                }, void 0, false, {\n                    fileName: \"/goinfre/oufisaou/last_transcendance/src/components/Sections/channels.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/goinfre/oufisaou/last_transcendance/src/components/Sections/channels.tsx\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(Channels, \"OnPOtdDaXS4mKD4D2zC3/KKod78=\");\n_c = Channels;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Channels);\nvar _c;\n$RefreshReg$(_c, \"Channels\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9jaGFubmVscy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ2lDO0FBQ1c7QUFDQTtBQUU1QyxNQUFNRyxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR0wsK0NBQVFBLENBQUM7SUFFdkQsU0FBU007UUFDUEQsbUJBQW1CO0lBQ3JCO0lBRUEsU0FBU0U7UUFDUEYsbUJBQW1CO0lBQ3JCO0lBRUEscUJBQ0U7a0JBQ0dELGdDQUNDOztnQkFDR0Esb0JBQW9CLDBCQUFZLDhEQUFDSCxzREFBYUE7Ozs7O2dCQUM5Q0csb0JBQW9CLDBCQUFZLDhEQUFDRixzREFBYUE7Ozs7OzsyQkFHakQsbURBQW1EO3NCQUNuRCw4REFBQ007WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFPRCxXQUFVO29CQUErQkUsU0FBU0w7OEJBQWM7Ozs7Ozs4QkFHeEUsOERBQUNJO29CQUFPRCxXQUFVO29CQUErQkUsU0FBU0o7OEJBQWM7Ozs7Ozs7Ozs7Ozs7QUFPbEY7R0EvQk1KO0tBQUFBO0FBaUNOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb25zL2NoYW5uZWxzLnRzeD9kNzIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDcmVhdGVDaGFubmVsIGZyb20gXCIuL2NyZWF0ZUNoYW5uZWxcIjtcbmltcG9ydCBCcm93c2VDaGFubmVsIGZyb20gXCIuL2Jyb3dzZUNoYW5uZWxcIjtcblxuY29uc3QgQ2hhbm5lbHMgPSAoKSA9PiB7XG4gIGNvbnN0IFthY3RpdmVDb21wb25lbnQsIHNldEFjdGl2ZUNvbXBvbmVudF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDcmVhdGUoKSB7XG4gICAgc2V0QWN0aXZlQ29tcG9uZW50KFwiY3JlYXRlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQnJvd3NlKCkge1xuICAgIHNldEFjdGl2ZUNvbXBvbmVudChcImJyb3dzZVwiKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHthY3RpdmVDb21wb25lbnQgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2FjdGl2ZUNvbXBvbmVudCA9PT0gXCJjcmVhdGVcIiAmJiA8Q3JlYXRlQ2hhbm5lbCAvPn1cbiAgICAgICAgICB7YWN0aXZlQ29tcG9uZW50ID09PSBcImJyb3dzZVwiICYmIDxCcm93c2VDaGFubmVsIC8+fVxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIC8vIFJlbmRlciB0aGUgYnV0dG9ucyB3aGVuIG5vIGNvbXBvbmVudCBpcyBzZWxlY3RlZFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHgtMjAgYm9yZGVyLTIgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoLWZ1bGwgIHctWzc3JV0gYm9yZGVyLW9wYWNpdHktMzAgYm9yZGVyLXZpb2xldC00MDAgYmctb3BhY2l0eS01IGJnLWdyYWRpZW50LXRvLWwgZnJvbS1bcmdiYSgyNTUsMjU1LDI1NSwwLjIwKV0gYmctdHJhbnNwYXJlbnQgYmctYmx1ci1tZCBiYWNrZHJvcC1maWx0ZXIgYmFja2Ryb3AtYmx1ci1tZCByb3VuZGVkLVszMHB4XVwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmxhY2svMjAgcC02IHJvdW5kZWQtZnVsbFwiIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZX0+XG4gICAgICAgICAgICBDcmVhdGUgYSBjaGFubmVsXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibGFjay8yMCBwLTYgcm91bmRlZC1mdWxsXCIgb25DbGljaz17aGFuZGxlQnJvd3NlfT5cbiAgICAgICAgICAgIEJyb3dzZSBhIGNoYW5uZWxcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbm5lbHM7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDcmVhdGVDaGFubmVsIiwiQnJvd3NlQ2hhbm5lbCIsIkNoYW5uZWxzIiwiYWN0aXZlQ29tcG9uZW50Iiwic2V0QWN0aXZlQ29tcG9uZW50IiwiaGFuZGxlQ3JlYXRlIiwiaGFuZGxlQnJvd3NlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Sections/channels.tsx\n"));

/***/ })

});