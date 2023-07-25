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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TwoFac__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TwoFac */ \"./src/components/Sections/TwoFac.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Edit = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(getAvatar());\n    const [showTwoFac, setShowTwoFac] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [Preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [Username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Function to handle the button click and show the <TwoFac> component\n    function handleAuthClick() {\n        setShowTwoFac(true);\n    }\n    function handleAvatarPreview(e) {\n        var _e_target_files;\n        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];\n        if (file) {\n            const previewUrl = URL.createObjectURL(file);\n            setPreview(previewUrl);\n        }\n    }\n    async function handleAvatarChange(e) {\n        var _e_target_files;\n        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]; //safe navigation operatoor \n        if (file) {\n            const data = new FormData();\n            try {\n                data.append(\"avatarPic\", file);\n                await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].patch(\"http://localhost:9000/users/upload/avatar\", data, {\n                    headers: {\n                        \"Content-Type\": \"multipart/form-data\"\n                    }\n                });\n                alert(\"Avatar updated !\");\n                window.location.reload();\n            } catch (err) {\n                console.log(err);\n                alert(\"failed uploading !\");\n            }\n        } else {\n            alert(\"Uplad the file you MF!\");\n        }\n    }\n    async function getAvatar() {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:9000/users/me\");\n        if (res) {\n            console.log(res.data);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: !showTwoFac ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"my-20 h-[70%] gap-3 justify-center flex flex-col w-full mx-[2rem]  border-2 border-opacity-30 border-violet-400 bg-opacity-20 bg-white bg-blur-md backdrop-filter backdrop-blur-md p-4 rounded-[30px]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-2 flex overflow-scroll flex-col justify-between gap-10  h-[90%] border-opacity-30 border-violet-400 bg-opacity-5 bg-gradient-to-l from-[rgba(255,255,255,0.20)] bg-blur-md backdrop-filter backdrop-blur-md p-4 rounded-[30px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-10 bg-black/20\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-black/20\",\n                                children: \"Change the Avatar:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: Preview,\n                                alt: \"\",\n                                width: 200,\n                                height: 200\n                            }, void 0, false, {\n                                fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                accept: \".jpg, .jpeg, .png\",\n                                onChange: (e)=>{\n                                    handleAvatarChange(e);\n                                    handleAvatarPreview(e);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-10 bg-black/20\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row gap-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-black/20 flex-1 max-w-md\",\n                                    children: \"Change username:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"p-2 rounded-lg  text-white bg-black/60 flex-1 max-w-sm\",\n                                    value: Username,\n                                    type: \"text\",\n                                    placeholder: \"Type new username\",\n                                    onChange: (e)=>setUsername(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-between\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-black p-3 rounded-2xl\",\n                                    onClick: handleAuthClick,\n                                    children: \" Activate auth\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-black p-3 rounded-2xl\",\n                                    children: \"Save changes\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n            lineNumber: 68,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen w-full md:w-[90%] flex mx-auto \",\n            children: [\n                showTwoFac && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TwoFac__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 22\n                }, undefined),\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n            lineNumber: 111,\n            columnNumber: 14\n        }, undefined)\n    }, void 0, false);\n};\n_s(Edit, \"95sdFPRxdtxPOOLiUVLEDcsNRQc=\");\n_c = Edit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Edit);\nvar _c;\n$RefreshReg$(_c, \"Edit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztBQUloQztHQTNHTUk7S0FBQUE7QUE2R04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvZWRpdC50c3g/N2EwZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUd29GYWMgZnJvbSAnLi9Ud29GYWMnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlckFnZW50IH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuXG5jb25zdCBFZGl0ID0gKCkgPT4ge1xuXG5cbiAgICB1c2VFZmZlY3QoZ2V0QXZhdGFyKCkpXG4gICAgY29uc3QgW3Nob3dUd29GYWMsIHNldFNob3dUd29GYWNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtQcmV2aWV3LCBzZXRQcmV2aWV3XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtVc2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpXG4gICAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIHRoZSBidXR0b24gY2xpY2sgYW5kIHNob3cgdGhlIDxUd29GYWM+IGNvbXBvbmVudFxuICAgIGZ1bmN0aW9uIGhhbmRsZUF1dGhDbGljaygpIHtcbiAgICAgIHNldFNob3dUd29GYWModHJ1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZUF2YXRhclByZXZpZXcoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pXG4gICAge1xuICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzPy5bMF07XG4gICAgICBpZihmaWxlKVxuICAgICAge1xuICAgICAgICBjb25zdCBwcmV2aWV3VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgICAgc2V0UHJldmlldyhwcmV2aWV3VXJsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQXZhdGFyQ2hhbmdlKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KVxuICAgIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlcz8uWzBdOyAvL3NhZmUgbmF2aWdhdGlvbiBvcGVyYXRvb3IgXG4gICAgICBpZihmaWxlKVxuICAgICAge1xuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIHRyeVxuICAgICAgICB7XG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnYXZhdGFyUGljJywgZmlsZSk7XG4gICAgICAgICAgICBhd2FpdCBheGlvcy5wYXRjaCgnaHR0cDovL2xvY2FsaG9zdDo5MDAwL3VzZXJzL3VwbG9hZC9hdmF0YXInLCBkYXRhLCB7aGVhZGVyczp7J0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ30sfSk7XG4gICAgICAgICAgICBhbGVydCgnQXZhdGFyIHVwZGF0ZWQgIScpXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhdGNoKGVycilcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgIGFsZXJ0KCdmYWlsZWQgdXBsb2FkaW5nICEnKVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgYWxlcnQoJ1VwbGFkIHRoZSBmaWxlIHlvdSBNRiEnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEF2YXRhcigpXG4gICAge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjkwMDAvdXNlcnMvbWUnKTtcbiAgICAgIGlmKHJlcylcbiAgICAgIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAge1xuICAgICAgIXNob3dUd29GYWMgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMjAgaC1bNzAlXSBnYXAtMyBqdXN0aWZ5LWNlbnRlciBmbGV4IGZsZXgtY29sIHctZnVsbCBteC1bMnJlbV0gIGJvcmRlci0yIGJvcmRlci1vcGFjaXR5LTMwIGJvcmRlci12aW9sZXQtNDAwIGJnLW9wYWNpdHktMjAgYmctd2hpdGUgYmctYmx1ci1tZCBiYWNrZHJvcC1maWx0ZXIgYmFja2Ryb3AtYmx1ci1tZCBwLTQgcm91bmRlZC1bMzBweF1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMiBmbGV4IG92ZXJmbG93LXNjcm9sbCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTEwICBoLVs5MCVdIGJvcmRlci1vcGFjaXR5LTMwIGJvcmRlci12aW9sZXQtNDAwIGJnLW9wYWNpdHktNSBiZy1ncmFkaWVudC10by1sIGZyb20tW3JnYmEoMjU1LDI1NSwyNTUsMC4yMCldIGJnLWJsdXItbWQgYmFja2Ryb3AtZmlsdGVyIGJhY2tkcm9wLWJsdXItbWQgcC00IHJvdW5kZWQtWzMwcHhdXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTEwIGJnLWJsYWNrLzIwJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrLzIwXCI+Q2hhbmdlIHRoZSBBdmF0YXI6PC9kaXY+XG4gICAgICAgICAgPEltYWdlIHNyYz17UHJldmlld30gYWx0PVwiXCIgd2lkdGg9ezIwMH0gaGVpZ2h0PXsyMDB9Lz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaGFuZGxlQXZhdGFyQ2hhbmdlKGUpO1xuICAgICAgICAgICAgICBoYW5kbGVBdmF0YXJQcmV2aWV3KGUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC0xMCBiZy1ibGFjay8yMCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgZ2FwLTEwJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmxhY2svMjAgZmxleC0xIG1heC13LW1kJz5DaGFuZ2UgdXNlcm5hbWU6PC9kaXY+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLWxnICB0ZXh0LXdoaXRlIGJnLWJsYWNrLzYwIGZsZXgtMSBtYXgtdy1zbVwiIHZhbHVlPXtVc2VybmFtZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj0nVHlwZSBuZXcgdXNlcm5hbWUnIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGdhcC0xMCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWJsYWNrLzIwIGZsZXgtMSBtYXgtdy1tZCc+Q2hhbmdlIGVtYWlsOjwvZGl2PlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1sZyAgdGV4dC13aGl0ZSBiZy1ibGFjay82MCBmbGV4LTEgbWF4LXctc21cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdUeXBlIG5ldyBlbWFpbCcvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ibGFjay8yMCc+Q2hhbmdlIHBhc3N3b3JkOiA8L2Rpdj5cbiAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgZ2FwLTEwIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLWxnIHRleHQtd2hpdGUgYmctYmxhY2svNjBcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj0nVHlwZSBvbGQgcGFzc3dvcmQnLz5cbiAgICAgICAgICAgICAgPGlucHV0ICBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIGJnLWJsYWNrLzYwXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9J1R5cGUgbmV3IHBhc3N3b3JkJy8+XG4gICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICBcbiAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1ibGFjayBwLTMgcm91bmRlZC0yeGwnIG9uQ2xpY2s9e2hhbmRsZUF1dGhDbGlja30+IEFjdGl2YXRlIGF1dGg8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLWJsYWNrIHAtMyByb3VuZGVkLTJ4bCc+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICkgOiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctZnVsbCBtZDp3LVs5MCVdIGZsZXggbXgtYXV0byBcIj5cbiAgICAgIHtzaG93VHdvRmFjICYmIDxUd29GYWMgLz59IDwvZGl2PlxuICAgIH1cbiAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJUd29GYWMiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiYXhpb3MiLCJFZGl0IiwiZ2V0QXZhdGFyIiwic2hvd1R3b0ZhYyIsInNldFNob3dUd29GYWMiLCJQcmV2aWV3Iiwic2V0UHJldmlldyIsIlVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJoYW5kbGVBdXRoQ2xpY2siLCJoYW5kbGVBdmF0YXJQcmV2aWV3IiwiZSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsInByZXZpZXdVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJoYW5kbGVBdmF0YXJDaGFuZ2UiLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwYXRjaCIsImhlYWRlcnMiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlcyIsImdldCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaW5wdXQiLCJ0eXBlIiwiYWNjZXB0Iiwib25DaGFuZ2UiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Sections/edit.tsx\n"));

/***/ })

});