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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TwoFac__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TwoFac */ \"./src/components/Sections/TwoFac.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Edit = ()=>{\n    _s();\n    const [showTwoFac, setShowTwoFac] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [Preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [Avatar, setAvatar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [Username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getAvatar();\n        getNick();\n    }, []);\n    // Function to handle the button click and show the <TwoFac> component\n    function handleAuthClick() {\n        setShowTwoFac(true);\n    }\n    function handleAvatarPreview(e) {\n        var _e_target_files;\n        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];\n        if (file) {\n            const previewUrl = URL.createObjectURL(file);\n            setPreview(previewUrl);\n        }\n    }\n    async function getAvatar() {\n        try {\n            const Token = localStorage.getItem(\"token\");\n            const headers = {\n                Authorization: \"Bearer \".concat(Token)\n            };\n            const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:9000/users/me\", {\n                headers\n            });\n            const avatar = res.data.avatarPic;\n            console.log(res.data);\n            setPreview(avatar);\n        } catch (err) {\n            alert(\"problem iun \");\n            console.log(err);\n        }\n    }\n    async function getNick() {\n        try {\n            const Token = localStorage.getItem(\"token\");\n            const headers = {\n                Authorization: \"Bearer \".concat(Token)\n            };\n            const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:9000/users/me\", {\n                headers\n            });\n            const nickname = res.data.nickname;\n            console.log(res.data);\n            setUsername(nickname);\n        } catch (err) {\n            console.log(err);\n        }\n    }\n    async function handleSaveChanges() {\n        if (Avatar) {\n            const data = new FormData();\n            data.append(\"avatarPic\", Avatar);\n            const token = localStorage.getItem(\"token\");\n            const headers = {\n                \"Content-Type\": \"multipart/form-data\",\n                Authorization: \"Bearer \".concat(token)\n            };\n            try {\n                await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].patch(\"http://localhost:9000/users/upload/avatar\", data, {\n                    headers\n                });\n                alert(\"Avatar updated!\");\n                window.location.reload();\n            } catch (err) {\n                alert(\"Problem in submitting the avatar!!!\");\n                console.log(err);\n            }\n        }\n        if (Username) {\n            try {\n                const Token = localStorage.getItem(\"token\");\n                const headers = {\n                    Authorization: \"Bearer \".concat(Token)\n                };\n                const data = {\n                    nickname: Username\n                };\n                await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].patch(\"http://localhost:9000/users/me/settings/change-username\", data, {\n                    headers\n                });\n                alert(\"Username changed!\");\n            } catch (err) {\n                alert(\"Failed to update the username!\");\n                console.log(err);\n            }\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: !showTwoFac ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"my-20 h-[70%] gap-3 justify-center flex flex-col w-full mx-[2rem]  border-2 border-opacity-30 border-violet-400 bg-opacity-20 bg-white bg-blur-md backdrop-filter backdrop-blur-md p-4 rounded-[30px]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-2 flex overflow-scroll flex-col justify-between gap-10  h-[90%] border-opacity-30 border-violet-400 bg-opacity-5 bg-gradient-to-l from-[rgba(255,255,255,0.20)] bg-blur-md backdrop-filter backdrop-blur-md p-4 rounded-[30px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-10 bg-black/20\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-black/20\",\n                                children: \"Change the Avatar:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: Preview,\n                                alt: \"\",\n                                width: 200,\n                                height: 200\n                            }, void 0, false, {\n                                fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                accept: \".jpg, .jpeg, .png\",\n                                onChange: (e)=>{\n                                    handleAvatarChange(e);\n                                    handleAvatarPreview(e);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-10 bg-black/20\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row gap-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-black/20 flex-1 max-w-md\",\n                                    children: \"Change username:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                    lineNumber: 135,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"p-2 rounded-lg  text-white bg-black/60 flex-1 max-w-sm\",\n                                    value: Username,\n                                    type: \"text\",\n                                    placeholder: \"Type new username\",\n                                    onChange: (e)=>setUsername(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                    lineNumber: 136,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                            lineNumber: 134,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-between\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-black p-3 rounded-2xl\",\n                                    onClick: handleAuthClick,\n                                    children: \" Activate auth\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                    lineNumber: 153,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-black p-3 rounded-2xl\",\n                                    onClick: handleSaveChanges,\n                                    children: \"Save changes\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                                    lineNumber: 154,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                            lineNumber: 152,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                lineNumber: 119,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n            lineNumber: 118,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen w-full md:w-[90%] flex mx-auto \",\n            children: [\n                showTwoFac && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TwoFac__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n                    lineNumber: 162,\n                    columnNumber: 22\n                }, undefined),\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/com/Desktop/last_transcendance/src/components/Sections/edit.tsx\",\n            lineNumber: 161,\n            columnNumber: 14\n        }, undefined)\n    }, void 0, false);\n};\n_s(Edit, \"pj+2NJnjKC5ULAYOr5s66LlO1bA=\");\n_c = Edit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Edit);\nvar _c;\n$RefreshReg$(_c, \"Edit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cG9uZW50cy9TZWN0aW9ucy9lZGl0LnRzeD83YTBmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFR3b0ZhYyBmcm9tICcuL1R3b0ZhYydcbmltcG9ydCB7IHVzZVN0YXRlLCBDaGFuZ2VFdmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgRWRpdCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtzaG93VHdvRmFjLCBzZXRTaG93VHdvRmFjXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbUHJldmlldywgc2V0UHJldmlld10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbQXZhdGFyLCBzZXRBdmF0YXJdID0gdXNlU3RhdGU8RmlsZSB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgW1VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJylcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBnZXRBdmF0YXIoKTtcbiAgICAgIGdldE5pY2soKTtcbiAgICB9LCBbXSk7XG4gICAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIHRoZSBidXR0b24gY2xpY2sgYW5kIHNob3cgdGhlIDxUd29GYWM+IGNvbXBvbmVudFxuXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVBdXRoQ2xpY2soKSB7XG4gICAgICBzZXRTaG93VHdvRmFjKHRydWUpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQXZhdGFyUHJldmlldyhlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PilcbiAgICB7XG4gICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXM/LlswXTtcbiAgICAgIGlmKGZpbGUpXG4gICAgICB7XG4gICAgICAgIGNvbnN0IHByZXZpZXdVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgICBzZXRQcmV2aWV3KHByZXZpZXdVcmwpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRBdmF0YXIoKVxuICAgIHtcbiAgICAgIHRyeVxuICAgICAge1xuICAgICAgICAgIGNvbnN0IFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgICAgY29uc3QgaGVhZGVycyA9IHtBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7VG9rZW59YH1cbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6OTAwMC91c2Vycy9tZScsIHtoZWFkZXJzfSk7IFxuICAgICAgICAgIGNvbnN0IGF2YXRhciA9IHJlcy5kYXRhLmF2YXRhclBpYztcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgICBzZXRQcmV2aWV3KGF2YXRhcik7XG5cbiAgICAgIH1cbiAgICAgIGNhdGNoKGVycilcbiAgICAgIHtcbiAgICAgICAgYWxlcnQoJ3Byb2JsZW0gaXVuICcpXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXROaWNrKClcbiAgICB7XG4gICAgICB0cnlcbiAgICAgIHtcbiAgICAgICAgICBjb25zdCBUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7QXV0aG9yaXphdGlvbjogYEJlYXJlciAke1Rva2VufWB9XG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjkwMDAvdXNlcnMvbWUnLCB7aGVhZGVyc30pOyBcbiAgICAgICAgICBjb25zdCBuaWNrbmFtZT0gcmVzLmRhdGEubmlja25hbWU7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgICAgc2V0VXNlcm5hbWUobmlja25hbWUpO1xuXG4gICAgICB9XG4gICAgICBjYXRjaChlcnIpXG4gICAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2F2ZUNoYW5nZXMoKSB7XG4gICAgXG4gICAgaWYgKEF2YXRhcilcbiAgICB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2F2YXRhclBpYycsIEF2YXRhcik7XG4gICAgICBcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICB9O1xuICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgYXhpb3MucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6OTAwMC91c2Vycy91cGxvYWQvYXZhdGFyJywgZGF0YSwge2hlYWRlcnN9KTtcbiAgICAgICAgICBhbGVydCgnQXZhdGFyIHVwZGF0ZWQhJyk7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBhbGVydCgnUHJvYmxlbSBpbiBzdWJtaXR0aW5nIHRoZSBhdmF0YXIhISEnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFVzZXJuYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgICBjb25zdCBoZWFkZXJzID0geyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7VG9rZW59YCB9O1xuICAgICAgY29uc3QgZGF0YSA9IHsgbmlja25hbWU6IFVzZXJuYW1lIH07XG4gICAgICBhd2FpdCBheGlvcy5wYXRjaCgnaHR0cDovL2xvY2FsaG9zdDo5MDAwL3VzZXJzL21lL3NldHRpbmdzL2NoYW5nZS11c2VybmFtZScsIGRhdGEsIHsgaGVhZGVycyB9KTtcbiAgICAgIGFsZXJ0KCdVc2VybmFtZSBjaGFuZ2VkIScpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoJ0ZhaWxlZCB0byB1cGRhdGUgdGhlIHVzZXJuYW1lIScpO1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH1cblxufVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICB7XG4gICAgICAhc2hvd1R3b0ZhYyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yMCBoLVs3MCVdIGdhcC0zIGp1c3RpZnktY2VudGVyIGZsZXggZmxleC1jb2wgdy1mdWxsIG14LVsycmVtXSAgYm9yZGVyLTIgYm9yZGVyLW9wYWNpdHktMzAgYm9yZGVyLXZpb2xldC00MDAgYmctb3BhY2l0eS0yMCBiZy13aGl0ZSBiZy1ibHVyLW1kIGJhY2tkcm9wLWZpbHRlciBiYWNrZHJvcC1ibHVyLW1kIHAtNCByb3VuZGVkLVszMHB4XVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0yIGZsZXggb3ZlcmZsb3ctc2Nyb2xsIGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBnYXAtMTAgIGgtWzkwJV0gYm9yZGVyLW9wYWNpdHktMzAgYm9yZGVyLXZpb2xldC00MDAgYmctb3BhY2l0eS01IGJnLWdyYWRpZW50LXRvLWwgZnJvbS1bcmdiYSgyNTUsMjU1LDI1NSwwLjIwKV0gYmctYmx1ci1tZCBiYWNrZHJvcC1maWx0ZXIgYmFja2Ryb3AtYmx1ci1tZCBwLTQgcm91bmRlZC1bMzBweF1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtMTAgYmctYmxhY2svMjAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2svMjBcIj5DaGFuZ2UgdGhlIEF2YXRhcjo8L2Rpdj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtQcmV2aWV3fSBhbHQ9XCJcIiB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0vPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBoYW5kbGVBdmF0YXJDaGFuZ2UoZSk7XG4gICAgICAgICAgICAgIGhhbmRsZUF2YXRhclByZXZpZXcoZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTEwIGJnLWJsYWNrLzIwJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBnYXAtMTAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ibGFjay8yMCBmbGV4LTEgbWF4LXctbWQnPkNoYW5nZSB1c2VybmFtZTo8L2Rpdj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtbGcgIHRleHQtd2hpdGUgYmctYmxhY2svNjAgZmxleC0xIG1heC13LXNtXCIgdmFsdWU9e1VzZXJuYW1lfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdUeXBlIG5ldyB1c2VybmFtZScgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgZ2FwLTEwJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmxhY2svMjAgZmxleC0xIG1heC13LW1kJz5DaGFuZ2UgZW1haWw6PC9kaXY+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLWxnICB0ZXh0LXdoaXRlIGJnLWJsYWNrLzYwIGZsZXgtMSBtYXgtdy1zbVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J1R5cGUgbmV3IGVtYWlsJy8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWJsYWNrLzIwJz5DaGFuZ2UgcGFzc3dvcmQ6IDwvZGl2PlxuICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBnYXAtMTAganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtbGcgdGV4dC13aGl0ZSBiZy1ibGFjay82MFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPSdUeXBlIG9sZCBwYXNzd29yZCcvPlxuICAgICAgICAgICAgICA8aW5wdXQgIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLWxnIHRleHQtd2hpdGUgYmctYmxhY2svNjBcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj0nVHlwZSBuZXcgcGFzc3dvcmQnLz5cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgPC9kaXY+XG4gIFxuICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLWJsYWNrIHAtMyByb3VuZGVkLTJ4bCcgb25DbGljaz17aGFuZGxlQXV0aENsaWNrfT4gQWN0aXZhdGUgYXV0aDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctYmxhY2sgcC0zIHJvdW5kZWQtMnhsJyBvbkNsaWNrPXtoYW5kbGVTYXZlQ2hhbmdlc30gPlNhdmUgY2hhbmdlczwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICApIDogICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LWZ1bGwgbWQ6dy1bOTAlXSBmbGV4IG14LWF1dG8gXCI+XG4gICAgICB7c2hvd1R3b0ZhYyAmJiA8VHdvRmFjIC8+fSA8L2Rpdj5cbiAgICB9XG4gIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiVHdvRmFjIiwidXNlU3RhdGUiLCJJbWFnZSIsImF4aW9zIiwiRWRpdCIsInNob3dUd29GYWMiLCJzZXRTaG93VHdvRmFjIiwiUHJldmlldyIsInNldFByZXZpZXciLCJBdmF0YXIiLCJzZXRBdmF0YXIiLCJVc2VybmFtZSIsInNldFVzZXJuYW1lIiwiZ2V0QXZhdGFyIiwiZ2V0TmljayIsImhhbmRsZUF1dGhDbGljayIsImhhbmRsZUF2YXRhclByZXZpZXciLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwicHJldmlld1VybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIlRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzIiwiZ2V0IiwiYXZhdGFyIiwiZGF0YSIsImF2YXRhclBpYyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJhbGVydCIsIm5pY2tuYW1lIiwiaGFuZGxlU2F2ZUNoYW5nZXMiLCJGb3JtRGF0YSIsImFwcGVuZCIsInRva2VuIiwicGF0Y2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaW5wdXQiLCJ0eXBlIiwiYWNjZXB0Iiwib25DaGFuZ2UiLCJoYW5kbGVBdmF0YXJDaGFuZ2UiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Sections/edit.tsx\n"));

/***/ })

});