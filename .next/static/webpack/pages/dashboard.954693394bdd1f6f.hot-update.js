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

/***/ "./src/components/Sections/edit.tsx":
/*!******************************************!*\
  !*** ./src/components/Sections/edit.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TwoFac__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TwoFac */ \"./src/components/Sections/TwoFac.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Edit = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)();\n    const [showTwoFac, setShowTwoFac] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [Preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [Username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Function to handle the button click and show the <TwoFac> component\n    function handleAuthClick() {\n        setShowTwoFac(true);\n    }\n    function handleAvatarPreview(e) {\n        var _e_target_files;\n        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];\n        if (file) {\n            const previewUrl = URL.createObjectURL(file);\n            setPreview(previewUrl);\n        }\n    }\n    async function handleAvatarChange(e) {\n        var _e_target_files;\n        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]; //safe navigation operatoor \n        if (file) {\n            const data = new FormData();\n            try {\n                data.append(\"avatarPic\", file);\n                await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].patch(\"http://localhost:9000/users/upload/avatar\", data, {\n                    headers: {\n                        \"Content-Type\": \"multipart/form-data\"\n                    }\n                });\n                alert(\"Avatar updated !\");\n                window.location.reload();\n            } catch (err) {\n                console.log(err);\n                alert(\"failed uploading !\");\n            }\n        } else {\n            alert(\"Uplad the file you MF!\");\n        }\n    }\n    async function getAvatar() {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:9000/users/me\");\n        if (res) {\n            console.log(res.data);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: !showTwoFac ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"my-20 h-[70%] gap-3 justify-center flex flex-col w-full mx-[2rem]  border-2 border-opacity-30 border-violet-400 bg-opacity-20 bg-white bg-blur-md backdrop-filter backdrop-blur-md p-4 rounded-[30px]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-2 flex overflow-scroll flex-col justify-between gap-10  h-[90%] border-opacity-30 border-violet-400 bg-opacity-5 bg-gradient-to-l from-[rgba(255,255,255,0.20)] bg-blur-md backdrop-filter backdrop-blur-md p-4 rounded-[30px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-10 bg-black/20\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-black/20\",\n                                children: \"Change the Avatar:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: Preview,\n                                alt: \"\",\n                                width: 200,\n                                height: 200\n                            }, void 0, false, {\n                                fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                accept: \".jpg, .jpeg, .png\",\n                                onChange: (e)=>{\n                                    handleAvatarChange(e);\n                                    handleAvatarPreview(e);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-10 bg-black/20\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row gap-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-black/20 flex-1 max-w-md\",\n                                    children: \"Change username:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"p-2 rounded-lg  text-white bg-black/60 flex-1 max-w-sm\",\n                                    value: Username,\n                                    type: \"text\",\n                                    placeholder: \"Type new username\",\n                                    onChange: (e)=>setUsername(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-between\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-black p-3 rounded-2xl\",\n                                    onClick: handleAuthClick,\n                                    children: \" Activate auth\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-black p-3 rounded-2xl\",\n                                    children: \"Save changes\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n            lineNumber: 68,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen w-full md:w-[90%] flex mx-auto \",\n            children: [\n                showTwoFac && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TwoFac__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 22\n                }, undefined),\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n            lineNumber: 111,\n            columnNumber: 14\n        }, undefined)\n    }, void 0, false);\n};\n_s(Edit, \"95sdFPRxdtxPOOLiUVLEDcsNRQc=\");\n_c = Edit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Edit);\nvar _c;\n$RefreshReg$(_c, \"Edit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJaEM7R0EzR01JO0tBQUFBO0FBNkdOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb25zL2VkaXQudHN4PzdhMGYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgVHdvRmFjIGZyb20gJy4vVHdvRmFjJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZXJBZ2VudCB9IGZyb20gJ25leHQvc2VydmVyJztcblxuY29uc3QgRWRpdCA9ICgpID0+IHtcblxuXG4gICAgdXNlRWZmZWN0KClcbiAgICBjb25zdCBbc2hvd1R3b0ZhYywgc2V0U2hvd1R3b0ZhY10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW1ByZXZpZXcsIHNldFByZXZpZXddID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW1VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJylcbiAgICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgdGhlIGJ1dHRvbiBjbGljayBhbmQgc2hvdyB0aGUgPFR3b0ZhYz4gY29tcG9uZW50XG4gICAgZnVuY3Rpb24gaGFuZGxlQXV0aENsaWNrKCkge1xuICAgICAgc2V0U2hvd1R3b0ZhYyh0cnVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlQXZhdGFyUHJldmlldyhlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PilcbiAgICB7XG4gICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXM/LlswXTtcbiAgICAgIGlmKGZpbGUpXG4gICAgICB7XG4gICAgICAgIGNvbnN0IHByZXZpZXdVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgICBzZXRQcmV2aWV3KHByZXZpZXdVcmwpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVBdmF0YXJDaGFuZ2UoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pXG4gICAge1xuICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzPy5bMF07IC8vc2FmZSBuYXZpZ2F0aW9uIG9wZXJhdG9vciBcbiAgICAgIGlmKGZpbGUpXG4gICAgICB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgdHJ5XG4gICAgICAgIHtcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdhdmF0YXJQaWMnLCBmaWxlKTtcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBhdGNoKCdodHRwOi8vbG9jYWxob3N0OjkwMDAvdXNlcnMvdXBsb2FkL2F2YXRhcicsIGRhdGEsIHtoZWFkZXJzOnsnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnfSx9KTtcbiAgICAgICAgICAgIGFsZXJ0KCdBdmF0YXIgdXBkYXRlZCAhJylcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2F0Y2goZXJyKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgYWxlcnQoJ2ZhaWxlZCB1cGxvYWRpbmcgIScpXG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICBhbGVydCgnVXBsYWQgdGhlIGZpbGUgeW91IE1GIScpXG4gICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0QXZhdGFyKClcbiAgICB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6OTAwMC91c2Vycy9tZScpO1xuICAgICAgaWYocmVzKVxuICAgICAge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICB7XG4gICAgICAhc2hvd1R3b0ZhYyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yMCBoLVs3MCVdIGdhcC0zIGp1c3RpZnktY2VudGVyIGZsZXggZmxleC1jb2wgdy1mdWxsIG14LVsycmVtXSAgYm9yZGVyLTIgYm9yZGVyLW9wYWNpdHktMzAgYm9yZGVyLXZpb2xldC00MDAgYmctb3BhY2l0eS0yMCBiZy13aGl0ZSBiZy1ibHVyLW1kIGJhY2tkcm9wLWZpbHRlciBiYWNrZHJvcC1ibHVyLW1kIHAtNCByb3VuZGVkLVszMHB4XVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0yIGZsZXggb3ZlcmZsb3ctc2Nyb2xsIGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBnYXAtMTAgIGgtWzkwJV0gYm9yZGVyLW9wYWNpdHktMzAgYm9yZGVyLXZpb2xldC00MDAgYmctb3BhY2l0eS01IGJnLWdyYWRpZW50LXRvLWwgZnJvbS1bcmdiYSgyNTUsMjU1LDI1NSwwLjIwKV0gYmctYmx1ci1tZCBiYWNrZHJvcC1maWx0ZXIgYmFja2Ryb3AtYmx1ci1tZCBwLTQgcm91bmRlZC1bMzBweF1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtMTAgYmctYmxhY2svMjAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2svMjBcIj5DaGFuZ2UgdGhlIEF2YXRhcjo8L2Rpdj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtQcmV2aWV3fSBhbHQ9XCJcIiB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0vPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBoYW5kbGVBdmF0YXJDaGFuZ2UoZSk7XG4gICAgICAgICAgICAgIGhhbmRsZUF2YXRhclByZXZpZXcoZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTEwIGJnLWJsYWNrLzIwJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBnYXAtMTAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ibGFjay8yMCBmbGV4LTEgbWF4LXctbWQnPkNoYW5nZSB1c2VybmFtZTo8L2Rpdj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtbGcgIHRleHQtd2hpdGUgYmctYmxhY2svNjAgZmxleC0xIG1heC13LXNtXCIgdmFsdWU9e1VzZXJuYW1lfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdUeXBlIG5ldyB1c2VybmFtZScgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgZ2FwLTEwJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmxhY2svMjAgZmxleC0xIG1heC13LW1kJz5DaGFuZ2UgZW1haWw6PC9kaXY+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLWxnICB0ZXh0LXdoaXRlIGJnLWJsYWNrLzYwIGZsZXgtMSBtYXgtdy1zbVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J1R5cGUgbmV3IGVtYWlsJy8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWJsYWNrLzIwJz5DaGFuZ2UgcGFzc3dvcmQ6IDwvZGl2PlxuICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBnYXAtMTAganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtbGcgdGV4dC13aGl0ZSBiZy1ibGFjay82MFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPSdUeXBlIG9sZCBwYXNzd29yZCcvPlxuICAgICAgICAgICAgICA8aW5wdXQgIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLWxnIHRleHQtd2hpdGUgYmctYmxhY2svNjBcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj0nVHlwZSBuZXcgcGFzc3dvcmQnLz5cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgPC9kaXY+XG4gIFxuICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLWJsYWNrIHAtMyByb3VuZGVkLTJ4bCcgb25DbGljaz17aGFuZGxlQXV0aENsaWNrfT4gQWN0aXZhdGUgYXV0aDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctYmxhY2sgcC0zIHJvdW5kZWQtMnhsJz5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgKSA6ICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1mdWxsIG1kOnctWzkwJV0gZmxleCBteC1hdXRvIFwiPlxuICAgICAge3Nob3dUd29GYWMgJiYgPFR3b0ZhYyAvPn0gPC9kaXY+XG4gICAgfVxuICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIlR3b0ZhYyIsInVzZVN0YXRlIiwiSW1hZ2UiLCJheGlvcyIsIkVkaXQiLCJzaG93VHdvRmFjIiwic2V0U2hvd1R3b0ZhYyIsIlByZXZpZXciLCJzZXRQcmV2aWV3IiwiVXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImhhbmRsZUF1dGhDbGljayIsImhhbmRsZUF2YXRhclByZXZpZXciLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwicHJldmlld1VybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhhbmRsZUF2YXRhckNoYW5nZSIsImRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBhdGNoIiwiaGVhZGVycyIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0QXZhdGFyIiwicmVzIiwiZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJpbnB1dCIsInR5cGUiLCJhY2NlcHQiLCJvbkNoYW5nZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Sections/edit.tsx\n"));

/***/ })

});