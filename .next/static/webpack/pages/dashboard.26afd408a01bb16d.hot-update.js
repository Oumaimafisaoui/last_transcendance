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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Channels = ()=>{\n    _s();\n    const [Create, setCreate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function handleCreate() {\n        setBrowse(false);\n        setCreate(true);\n    }\n    const [Browse, setBrowse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function handleBrowse() {\n        setCreate(false);\n        setBrowse(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex px-20 border-2 items-center justify-between h-full  w-[77%] border-opacity-30 border-violet-400 bg-opacity-5 bg-gradient-to-l from-[rgba(255,255,255,0.20)] bg-transparent bg-blur-md backdrop-filter backdrop-blur-md rounded-[30px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-black/20 p-6 rounded-full\",\n                        onClick: handleCreate,\n                        children: \"Create a channel\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/oufisaou/last_transcendance/src/components/Sections/channels.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 8\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-black/20 p-6 rounded-full\",\n                        onClick: handleBrowse,\n                        children: \"Browse a channel\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/oufisaou/last_transcendance/src/components/Sections/channels.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 8\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/goinfre/oufisaou/last_transcendance/src/components/Sections/channels.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            Create && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"createChannel\", {}, void 0, false, {\n                fileName: \"/goinfre/oufisaou/last_transcendance/src/components/Sections/channels.tsx\",\n                lineNumber: 28,\n                columnNumber: 18\n            }, undefined),\n            Browse && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"browseChannel\", {}, void 0, false, {\n                fileName: \"/goinfre/oufisaou/last_transcendance/src/components/Sections/channels.tsx\",\n                lineNumber: 29,\n                columnNumber: 18\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Channels, \"tA5LJp2lnkjdyR9BuhOcRMYhvtU=\");\n_c = Channels;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Channels);\nvar _c;\n$RefreshReg$(_c, \"Channels\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9jaGFubmVscy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNpQztBQUdqQyxNQUFNQyxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUVyQyxTQUFTSTtRQUVQQyxVQUFVO1FBQ1ZGLFVBQVU7SUFDWjtJQUVBLE1BQU0sQ0FBQ0csUUFBUUQsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVyQyxTQUFTTztRQUVQSixVQUFVO1FBQ1ZFLFVBQVU7SUFDWjtJQUNBLHFCQUNFOzswQkFDRSw4REFBQ0c7Z0JBQUlDLFdBQVU7O2tDQUNkLDhEQUFDQzt3QkFBT0QsV0FBVTt3QkFBK0JFLFNBQVNQO2tDQUFjOzs7Ozs7a0NBQ3hFLDhEQUFDTTt3QkFBT0QsV0FBVTt3QkFBK0JFLFNBQVNKO2tDQUFjOzs7Ozs7Ozs7Ozs7WUFHeEVMLHdCQUFVLDhEQUFDVTs7Ozs7WUFDWE4sd0JBQVUsOERBQUNPOzs7Ozs7O0FBR2xCO0dBM0JNWjtLQUFBQTtBQTRCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9jaGFubmVscy50c3g/ZDcyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ3JlYXRlQ2hhbm5lbCBmcm9tIFwiLi9jcmVhdGVDaGFubmVsXCI7XG5pbXBvcnQgYnJvd3NlQ2hhbm5lbCBmcm9tIFwiLi9icm93c2VDaGFubmVsXCI7XG5jb25zdCBDaGFubmVscyA9ICgpID0+IHtcbiAgY29uc3QgW0NyZWF0ZSwgc2V0Q3JlYXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNyZWF0ZSgpXG4gIHtcbiAgICBzZXRCcm93c2UoZmFsc2UpO1xuICAgIHNldENyZWF0ZSh0cnVlKTtcbiAgfVxuXG4gIGNvbnN0IFtCcm93c2UsIHNldEJyb3dzZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBmdW5jdGlvbiBoYW5kbGVCcm93c2UoKVxuICB7XG4gICAgc2V0Q3JlYXRlKGZhbHNlKTtcbiAgICBzZXRCcm93c2UodHJ1ZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHB4LTIwIGJvcmRlci0yIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaC1mdWxsICB3LVs3NyVdIGJvcmRlci1vcGFjaXR5LTMwIGJvcmRlci12aW9sZXQtNDAwIGJnLW9wYWNpdHktNSBiZy1ncmFkaWVudC10by1sIGZyb20tW3JnYmEoMjU1LDI1NSwyNTUsMC4yMCldIGJnLXRyYW5zcGFyZW50IGJnLWJsdXItbWQgYmFja2Ryb3AtZmlsdGVyIGJhY2tkcm9wLWJsdXItbWQgcm91bmRlZC1bMzBweF1cIj5cbiAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsYWNrLzIwIHAtNiByb3VuZGVkLWZ1bGxcIiBvbkNsaWNrPXtoYW5kbGVDcmVhdGV9PkNyZWF0ZSBhIGNoYW5uZWw8L2J1dHRvbj5cbiAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsYWNrLzIwIHAtNiByb3VuZGVkLWZ1bGxcIiBvbkNsaWNrPXtoYW5kbGVCcm93c2V9PkJyb3dzZSBhIGNoYW5uZWw8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7Q3JlYXRlICYmIDxjcmVhdGVDaGFubmVsIC8gPn1cbiAgICAgIHtCcm93c2UgJiYgPGJyb3dzZUNoYW5uZWwgLz59XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ2hhbm5lbHM7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDaGFubmVscyIsIkNyZWF0ZSIsInNldENyZWF0ZSIsImhhbmRsZUNyZWF0ZSIsInNldEJyb3dzZSIsIkJyb3dzZSIsImhhbmRsZUJyb3dzZSIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjcmVhdGVDaGFubmVsIiwiYnJvd3NlQ2hhbm5lbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Sections/channels.tsx\n"));

/***/ })

});