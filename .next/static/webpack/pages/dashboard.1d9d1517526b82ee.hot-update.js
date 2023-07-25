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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TwoFac__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TwoFac */ \"./src/components/Sections/TwoFac.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Edit = ()=>{\n    _s();\n    const [showTwoFac, setShowTwoFac] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [Preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [Avatar, setAvatar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [Username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isAvatarChanged, setIsAvatarChanged] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isUsernameChanged, setIsUsernameChanged] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pass, setpass] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isPassChanged, setIsPassChanged] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getAvatar();\n        getNick();\n    }, []);\n    // Function to handle the button click and show the <TwoFac> component\n    function handleAuthClick() {\n        setShowTwoFac(true);\n    }\n    function handleAvatarPreview(e) {\n        var _e_target_files;\n        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];\n        if (file) {\n            const previewUrl = URL.createObjectURL(file);\n            setPreview(previewUrl);\n        }\n    }\n    function handleAvatarChange(e) {\n        var _e_target_files;\n        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];\n        if (file) {\n            const previewUrl = URL.createObjectURL(file);\n            setPreview(previewUrl);\n            setIsAvatarChanged(true);\n            setAvatar(file); // Save the file in the state for later submission\n        } else {\n            alert(\"Upload the file you MF!\");\n        }\n    }\n    function handleNickChange(e) {\n        setUsername(e.target.value);\n        setIsUsernameChanged(true);\n    }\n    function handlePassChange(e) {\n        setpass(e.target.value);\n        setIsPassChanged(true);\n    }\n    async function getAvatar() {\n        try {\n            const Token = localStorage.getItem(\"token\");\n            const headers = {\n                Authorization: \"Bearer \".concat(Token)\n            };\n            const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:9000/users/me\", {\n                headers\n            });\n            const avatar = res.data.avatarPic;\n            console.log(res.data);\n            setPreview(avatar);\n        } catch (err) {\n            console.log(err);\n        }\n    }\n    async function getNick() {\n        try {\n            const Token = localStorage.getItem(\"token\");\n            const headers = {\n                Authorization: \"Bearer \".concat(Token)\n            };\n            const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:9000/users/me\", {\n                headers\n            });\n            const nickname = res.data.nickname;\n            console.log(res.data);\n            setUsername(nickname);\n        } catch (err) {\n            console.log(err);\n        }\n    }\n    async function handleSaveChanges() {\n        try {\n            // if (isAvatarChanged && Avatar) {\n            //   const data = new FormData();\n            //   data.append('avatarPic', Avatar);\n            //   const token = localStorage.getItem('token');\n            //   const headers = {\n            //     'Content-Type': 'multipart/form-data',\n            //     Authorization: `Bearer ${token}`,\n            //   };\n            //   await axios.patch('http://localhost:9000/users/upload/avatar', data, { headers });\n            //   alert('Avatar updated!');\n            // }\n            if (isUsernameChanged && Username) {\n                const Token = localStorage.getItem(\"token\");\n                const headers = {\n                    Authorization: \"Bearer \".concat(Token)\n                };\n                const data = {\n                    nickname: Username\n                };\n                const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].patch(\"http://localhost:9000/users/me/settings/change-username\", data, {\n                    headers\n                });\n                get;\n                alert(\"Username changed!\");\n            }\n        // if(pass && isPassChanged)\n        // {\n        //   const Token = localStorage.getItem('token');\n        //   const headers = { Authorization: `Bearer ${Token}` };\n        //   const data = { password: pass };\n        //   await axios.patch('http://localhost:9000/users/me/settings/new-password', data, { headers });\n        //   alert('Password changed!');\n        // }\n        // if ((isAvatarChanged && Avatar) || (isUsernameChanged && Username)) {\n        //   window.location.reload();\n        // } else {\n        //   alert('No changes to save.');\n        // }\n        } catch (err) {\n            alert(err);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: !showTwoFac ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"my-20 h-[70%] gap-3 justify-center flex flex-col w-full mx-[2rem]  border-2 border-opacity-30 border-violet-400 bg-opacity-20 bg-white bg-blur-md backdrop-filter backdrop-blur-md p-4 rounded-[30px]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-2 flex overflow-scroll flex-col justify-between gap-10  h-[90%] border-opacity-30 border-violet-400 bg-opacity-5 bg-gradient-to-l from-[rgba(255,255,255,0.20)] bg-blur-md backdrop-filter backdrop-blur-md p-4 rounded-[30px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-10 bg-black/20\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-black/20\",\n                                children: \"Change the Avatar:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                lineNumber: 154,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: Preview,\n                                alt: \"\",\n                                width: 200,\n                                height: 200\n                            }, void 0, false, {\n                                fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                lineNumber: 155,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                accept: \".jpg, .jpeg, .png\",\n                                onChange: (e)=>{\n                                    handleAvatarChange(e);\n                                    handleAvatarPreview(e);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                lineNumber: 156,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                        lineNumber: 153,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-10 bg-black/20\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row gap-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-black/20 flex-1 max-w-md\",\n                                        children: \"Change username:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                        lineNumber: 168,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"p-2 rounded-lg  text-white bg-black/60 flex-1 max-w-sm\",\n                                        value: Username,\n                                        type: \"text\",\n                                        placeholder: \"Type new username\",\n                                        onChange: handleNickChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                        lineNumber: 169,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                lineNumber: 167,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row gap-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-black/20 flex-1 max-w-md\",\n                                        children: \"Change email:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                        lineNumber: 172,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"p-2 rounded-lg  text-white bg-black/60 flex-1 max-w-sm\",\n                                        type: \"text\",\n                                        placeholder: \"Type new email\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                        lineNumber: 173,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                lineNumber: 171,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-black/20\",\n                                children: \"Change password: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                lineNumber: 175,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row gap-10 justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"p-2 rounded-lg text-white bg-black/60\",\n                                    type: \"password\",\n                                    placeholder: \"Type new password\",\n                                    onChange: handlePassChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                    lineNumber: 178,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                lineNumber: 176,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                        lineNumber: 166,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-between\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-black p-3 rounded-2xl\",\n                                    onClick: handleAuthClick,\n                                    children: \" Activate auth\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                    lineNumber: 186,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-black p-3 rounded-2xl\",\n                                    onClick: handleSaveChanges,\n                                    children: \"Save changes\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                    lineNumber: 187,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                            lineNumber: 185,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                        lineNumber: 183,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                lineNumber: 152,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n            lineNumber: 151,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen w-full md:w-[90%] flex mx-auto \",\n            children: [\n                showTwoFac && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TwoFac__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                    lineNumber: 195,\n                    columnNumber: 22\n                }, undefined),\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n            lineNumber: 194,\n            columnNumber: 14\n        }, undefined)\n    }, void 0, false);\n};\n_s(Edit, \"vXwqkvTzxUi4fvxYdACzLIqYEDg=\");\n_c = Edit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Edit);\nvar _c;\n$RefreshReg$(_c, \"Edit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztrQ0FHRiw4REFBQzRCO3dCQUFJQyxXQUFVOzswQ0FDZiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNmLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFBOEI7Ozs7OztrREFDN0MsOERBQUNLO3dDQUFNTCxXQUFVO3dDQUF5RG5CLE9BQU94Qjt3Q0FBVWlELE1BQUs7d0NBQU9HLGFBQVk7d0NBQW9CRCxVQUFVNUI7Ozs7Ozs7Ozs7OzswQ0FFakosOERBQUNtQjtnQ0FBSUMsV0FBVTs7a0RBQ2YsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUE4Qjs7Ozs7O2tEQUM3Qyw4REFBQ0s7d0NBQU1MLFdBQVU7d0NBQXlETSxNQUFLO3dDQUFPRyxhQUFZOzs7Ozs7Ozs7Ozs7MENBRWxHLDhEQUFDVjtnQ0FBSUMsV0FBVTswQ0FBYzs7Ozs7OzBDQUM3Qiw4REFBQ0Q7Z0NBQUtDLFdBQVU7MENBRVosNEVBQUNLO29DQUFPTCxXQUFVO29DQUF3Q00sTUFBSztvQ0FBV0csYUFBWTtvQ0FBb0JELFVBQVUxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS3hILDhEQUFDaUI7d0JBQUlDLFdBQVU7a0NBRWYsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ1U7b0NBQU9WLFdBQVU7b0NBQTJCVyxTQUFTMUM7OENBQWlCOzs7Ozs7OENBQ3ZFLDhEQUFDeUM7b0NBQU9WLFdBQVU7b0NBQTJCVyxTQUFTZDs4Q0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FPM0UsOERBQUNFO1lBQUlDLFdBQVU7O2dCQUNyQmpELDRCQUFjLDhEQUFDTCwrQ0FBTUE7Ozs7O2dCQUFJOzs7Ozs7OztBQUloQztHQS9MTUk7S0FBQUE7QUFpTU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvZWRpdC50c3g/N2EwZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUd29GYWMgZnJvbSAnLi9Ud29GYWMnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgQ2hhbmdlRXZlbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IEVkaXQgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbc2hvd1R3b0ZhYywgc2V0U2hvd1R3b0ZhY10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW1ByZXZpZXcsIHNldFByZXZpZXddID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW0F2YXRhciwgc2V0QXZhdGFyXSA9IHVzZVN0YXRlPEZpbGUgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBbVXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbaXNBdmF0YXJDaGFuZ2VkLCBzZXRJc0F2YXRhckNoYW5nZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc1VzZXJuYW1lQ2hhbmdlZCwgc2V0SXNVc2VybmFtZUNoYW5nZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtwYXNzLCBzZXRwYXNzXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtpc1Bhc3NDaGFuZ2VkLCBzZXRJc1Bhc3NDaGFuZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBnZXRBdmF0YXIoKTtcbiAgICAgIGdldE5pY2soKTtcbiAgICB9LCBbXSk7XG4gICAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIHRoZSBidXR0b24gY2xpY2sgYW5kIHNob3cgdGhlIDxUd29GYWM+IGNvbXBvbmVudFxuXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVBdXRoQ2xpY2soKSB7XG4gICAgICBzZXRTaG93VHdvRmFjKHRydWUpO1xuICAgIH1cblxuICAgIFxuICAgIGZ1bmN0aW9uIGhhbmRsZUF2YXRhclByZXZpZXcoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pXG4gICAge1xuICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzPy5bMF07XG4gICAgICBpZihmaWxlKVxuICAgICAge1xuICAgICAgICBjb25zdCBwcmV2aWV3VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgICAgc2V0UHJldmlldyhwcmV2aWV3VXJsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gaGFuZGxlQXZhdGFyQ2hhbmdlKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXM/LlswXTtcbiAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgIGNvbnN0IHByZXZpZXdVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgICBzZXRQcmV2aWV3KHByZXZpZXdVcmwpO1xuICAgICAgICBzZXRJc0F2YXRhckNoYW5nZWQodHJ1ZSk7XG4gICAgICAgIHNldEF2YXRhcihmaWxlKTsgLy8gU2F2ZSB0aGUgZmlsZSBpbiB0aGUgc3RhdGUgZm9yIGxhdGVyIHN1Ym1pc3Npb25cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdVcGxvYWQgdGhlIGZpbGUgeW91IE1GIScpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBoYW5kbGVOaWNrQ2hhbmdlKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KVxuICAgIHtcbiAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHNldElzVXNlcm5hbWVDaGFuZ2VkKHRydWUpXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVQYXNzQ2hhbmdlKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KVxuICAgIHtcbiAgICAgICAgc2V0cGFzcyhlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgc2V0SXNQYXNzQ2hhbmdlZCh0cnVlKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEF2YXRhcigpXG4gICAge1xuICAgICAgdHJ5XG4gICAgICB7XG4gICAgICAgICAgY29uc3QgVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgICAgICBjb25zdCBoZWFkZXJzID0ge0F1dGhvcml6YXRpb246IGBCZWFyZXIgJHtUb2tlbn1gfVxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo5MDAwL3VzZXJzL21lJywge2hlYWRlcnN9KTsgXG4gICAgICAgICAgY29uc3QgYXZhdGFyID0gcmVzLmRhdGEuYXZhdGFyUGljO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgICAgIHNldFByZXZpZXcoYXZhdGFyKTtcblxuICAgICAgfVxuICAgICAgY2F0Y2goZXJyKVxuICAgICAge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0TmljaygpXG4gICAge1xuICAgICAgdHJ5XG4gICAgICB7XG4gICAgICAgICAgY29uc3QgVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgICAgICBjb25zdCBoZWFkZXJzID0ge0F1dGhvcml6YXRpb246IGBCZWFyZXIgJHtUb2tlbn1gfVxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo5MDAwL3VzZXJzL21lJywge2hlYWRlcnN9KTsgXG4gICAgICAgICAgY29uc3Qgbmlja25hbWU9IHJlcy5kYXRhLm5pY2tuYW1lO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgICAgIHNldFVzZXJuYW1lKG5pY2tuYW1lKTtcblxuICAgICAgfVxuICAgICAgY2F0Y2goZXJyKVxuICAgICAge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVNhdmVDaGFuZ2VzKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gaWYgKGlzQXZhdGFyQ2hhbmdlZCAmJiBBdmF0YXIpIHtcbiAgICAgICAgLy8gICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIC8vICAgZGF0YS5hcHBlbmQoJ2F2YXRhclBpYycsIEF2YXRhcik7XG4gICAgICAgIC8vICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgICAgLy8gICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICAvLyAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgLy8gICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAvLyAgIH07XG4gICAgICAgIC8vICAgYXdhaXQgYXhpb3MucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6OTAwMC91c2Vycy91cGxvYWQvYXZhdGFyJywgZGF0YSwgeyBoZWFkZXJzIH0pO1xuICAgICAgICAvLyAgIGFsZXJ0KCdBdmF0YXIgdXBkYXRlZCEnKTtcbiAgICAgICAgLy8gfVxuICAgIFxuICAgICAgICBpZiAoaXNVc2VybmFtZUNoYW5nZWQgJiYgVXNlcm5hbWUpIHtcbiAgICAgICAgICBjb25zdCBUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtUb2tlbn1gIH07XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHsgbmlja25hbWU6IFVzZXJuYW1lIH07XG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6OTAwMC91c2Vycy9tZS9zZXR0aW5ncy9jaGFuZ2UtdXNlcm5hbWUnLCBkYXRhLCB7IGhlYWRlcnMgfSk7XG4gICAgICAgICAgZ2V0XG4gICAgICAgICAgYWxlcnQoJ1VzZXJuYW1lIGNoYW5nZWQhJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYocGFzcyAmJiBpc1Bhc3NDaGFuZ2VkKVxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgY29uc3QgVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgICAgLy8gICBjb25zdCBoZWFkZXJzID0geyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7VG9rZW59YCB9O1xuICAgICAgICAvLyAgIGNvbnN0IGRhdGEgPSB7IHBhc3N3b3JkOiBwYXNzIH07XG4gICAgICAgIC8vICAgYXdhaXQgYXhpb3MucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6OTAwMC91c2Vycy9tZS9zZXR0aW5ncy9uZXctcGFzc3dvcmQnLCBkYXRhLCB7IGhlYWRlcnMgfSk7XG4gICAgICAgIC8vICAgYWxlcnQoJ1Bhc3N3b3JkIGNoYW5nZWQhJyk7XG5cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAoKGlzQXZhdGFyQ2hhbmdlZCAmJiBBdmF0YXIpIHx8IChpc1VzZXJuYW1lQ2hhbmdlZCAmJiBVc2VybmFtZSkpIHtcbiAgICAgICAgLy8gICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgYWxlcnQoJ05vIGNoYW5nZXMgdG8gc2F2ZS4nKTtcbiAgICAgICAgLy8gfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGFsZXJ0KGVycik7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIHtcbiAgICAgICFzaG93VHdvRmFjID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIwIGgtWzcwJV0gZ2FwLTMganVzdGlmeS1jZW50ZXIgZmxleCBmbGV4LWNvbCB3LWZ1bGwgbXgtWzJyZW1dICBib3JkZXItMiBib3JkZXItb3BhY2l0eS0zMCBib3JkZXItdmlvbGV0LTQwMCBiZy1vcGFjaXR5LTIwIGJnLXdoaXRlIGJnLWJsdXItbWQgYmFja2Ryb3AtZmlsdGVyIGJhY2tkcm9wLWJsdXItbWQgcC00IHJvdW5kZWQtWzMwcHhdXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTIgZmxleCBvdmVyZmxvdy1zY3JvbGwgZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGdhcC0xMCAgaC1bOTAlXSBib3JkZXItb3BhY2l0eS0zMCBib3JkZXItdmlvbGV0LTQwMCBiZy1vcGFjaXR5LTUgYmctZ3JhZGllbnQtdG8tbCBmcm9tLVtyZ2JhKDI1NSwyNTUsMjU1LDAuMjApXSBiZy1ibHVyLW1kIGJhY2tkcm9wLWZpbHRlciBiYWNrZHJvcC1ibHVyLW1kIHAtNCByb3VuZGVkLVszMHB4XVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC0xMCBiZy1ibGFjay8yMCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjay8yMFwiPkNoYW5nZSB0aGUgQXZhdGFyOjwvZGl2PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e1ByZXZpZXd9IGFsdD1cIlwiIHdpZHRoPXsyMDB9IGhlaWdodD17MjAwfS8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAuanBlZywgLnBuZ1wiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGhhbmRsZUF2YXRhckNoYW5nZShlKTtcbiAgICAgICAgICAgICAgaGFuZGxlQXZhdGFyUHJldmlldyhlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtMTAgYmctYmxhY2svMjAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGdhcC0xMCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWJsYWNrLzIwIGZsZXgtMSBtYXgtdy1tZCc+Q2hhbmdlIHVzZXJuYW1lOjwvZGl2PlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1sZyAgdGV4dC13aGl0ZSBiZy1ibGFjay82MCBmbGV4LTEgbWF4LXctc21cIiB2YWx1ZT17VXNlcm5hbWV9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J1R5cGUgbmV3IHVzZXJuYW1lJyBvbkNoYW5nZT17aGFuZGxlTmlja0NoYW5nZX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGdhcC0xMCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWJsYWNrLzIwIGZsZXgtMSBtYXgtdy1tZCc+Q2hhbmdlIGVtYWlsOjwvZGl2PlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1sZyAgdGV4dC13aGl0ZSBiZy1ibGFjay82MCBmbGV4LTEgbWF4LXctc21cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdUeXBlIG5ldyBlbWFpbCcvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ibGFjay8yMCc+Q2hhbmdlIHBhc3N3b3JkOiA8L2Rpdj5cbiAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgZ2FwLTEwIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgey8qIDxpbnB1dCBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIGJnLWJsYWNrLzYwXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9J1R5cGUgb2xkIHBhc3N3b3JkJy8+ICovfVxuICAgICAgICAgICAgICA8aW5wdXQgIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLWxnIHRleHQtd2hpdGUgYmctYmxhY2svNjBcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj0nVHlwZSBuZXcgcGFzc3dvcmQnIG9uQ2hhbmdlPXtoYW5kbGVQYXNzQ2hhbmdlfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gIFxuICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLWJsYWNrIHAtMyByb3VuZGVkLTJ4bCcgb25DbGljaz17aGFuZGxlQXV0aENsaWNrfT4gQWN0aXZhdGUgYXV0aDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctYmxhY2sgcC0zIHJvdW5kZWQtMnhsJyBvbkNsaWNrPXtoYW5kbGVTYXZlQ2hhbmdlc30gPlNhdmUgY2hhbmdlczwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICApIDogICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LWZ1bGwgbWQ6dy1bOTAlXSBmbGV4IG14LWF1dG8gXCI+XG4gICAgICB7c2hvd1R3b0ZhYyAmJiA8VHdvRmFjIC8+fSA8L2Rpdj5cbiAgICB9XG4gIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiVHdvRmFjIiwidXNlU3RhdGUiLCJJbWFnZSIsImF4aW9zIiwiRWRpdCIsInNob3dUd29GYWMiLCJzZXRTaG93VHdvRmFjIiwiUHJldmlldyIsInNldFByZXZpZXciLCJBdmF0YXIiLCJzZXRBdmF0YXIiLCJVc2VybmFtZSIsInNldFVzZXJuYW1lIiwiaXNBdmF0YXJDaGFuZ2VkIiwic2V0SXNBdmF0YXJDaGFuZ2VkIiwiaXNVc2VybmFtZUNoYW5nZWQiLCJzZXRJc1VzZXJuYW1lQ2hhbmdlZCIsInBhc3MiLCJzZXRwYXNzIiwiaXNQYXNzQ2hhbmdlZCIsInNldElzUGFzc0NoYW5nZWQiLCJnZXRBdmF0YXIiLCJnZXROaWNrIiwiaGFuZGxlQXV0aENsaWNrIiwiaGFuZGxlQXZhdGFyUHJldmlldyIsImUiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJwcmV2aWV3VXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGFuZGxlQXZhdGFyQ2hhbmdlIiwiYWxlcnQiLCJoYW5kbGVOaWNrQ2hhbmdlIiwidmFsdWUiLCJoYW5kbGVQYXNzQ2hhbmdlIiwiVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXMiLCJnZXQiLCJhdmF0YXIiLCJkYXRhIiwiYXZhdGFyUGljIiwiY29uc29sZSIsImxvZyIsImVyciIsIm5pY2tuYW1lIiwiaGFuZGxlU2F2ZUNoYW5nZXMiLCJwYXRjaCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaW5wdXQiLCJ0eXBlIiwiYWNjZXB0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Sections/edit.tsx\n"));

/***/ })

});