webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ \"./node_modules/next/dist/next-server/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcz84MzhhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQixtQkFBTyxDQUFDLHFGQUE2QiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2hlYWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/patricie/Desktop/VS-CODE/React with Max/15.NextJS_Project/pages/index.js\",\n    _this = undefined;\n\n\n\n\nvar HomePage = function HomePage(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      meetups: props.meetups\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n}; // page even after deployment will automaticaly update depending on the revalidate number \n// it is faster than getServerSideProps becasue it doesnt have to regenerate page every time\n\n\n_c = HomePage;\n//sometimes you want to render a new page on every request so there is a better alternative: \n// next JS is looking for this name of the function\n// this function runs always on the server after deployment, never on the client side. so everything you write here is not accesible from the client side and only run on the server side\n// you can use this if you have data that changes multiple times every second \n// export const getServerSideProps = (context) => {\n//     // you can also fetch some API data\n//     // you should use this option only if you need to get to request and response, otherwise is makes your page slower because it has to regenerate the who page on every request\n//     const req = context.req  //context parametr is already built in \n//     const res = context.res\n//     return {\n//         props: {\n//             meetups: dummy_meetups\n//         }\n//     }\n// }\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3hCLHNCQUFPO0FBQUEsMkJBQ0gscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHLG1CQUFQO0FBR0gsQ0FKRCxDLENBVUE7QUFDQTs7O0tBWE1GLFE7QUF5Q047QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdlQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIlxuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cblxuY29uc3QgSG9tZVBhZ2UgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz5cbiAgICA8Lz5cbn1cblxuXG5cblxuXG4vLyBwYWdlIGV2ZW4gYWZ0ZXIgZGVwbG95bWVudCB3aWxsIGF1dG9tYXRpY2FseSB1cGRhdGUgZGVwZW5kaW5nIG9uIHRoZSByZXZhbGlkYXRlIG51bWJlciBcbi8vIGl0IGlzIGZhc3RlciB0aGFuIGdldFNlcnZlclNpZGVQcm9wcyBiZWNhc3VlIGl0IGRvZXNudCBoYXZlIHRvIHJlZ2VuZXJhdGUgcGFnZSBldmVyeSB0aW1lXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgLy9mZXRjaCBkYXRhIGZyb20gQVBJXG4gICAgLy8gdGFrdG8gbmFzaSBkYXRhYmF6aSBjb25uZWN0bmVtZSBcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL3BhdHJpY2llc206cGF0cmljaWVzbUBjbHVzdGVyMC5keWdsOTFwLm1vbmdvZGIubmV0L01lZXR1cHNOZXh0SnM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JykgIC8vY29ubmVjdCByZXR1cm5zIGEgcHJvbWlzZSBzbyB3ZSBoYXZlIHRvIGhhdmUgdGhpcyBoYW5kbGVyIGZ1bmN0aW9uIGFzIGFzeW5jXG5cbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpIC8vIHRoaXMgaXMgaG93IHlvdSBnZXQgaG9sZCBvZiB0aGUgZGF0YWJhc2UgeW91J3JlIGNvbm5lY3RpbmcgdG9cblxuICAgIGNvbnN0IG1lZXR1cENvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJykgLy8gdm9saXRlbG55IG5hemV2IHBybyBjb2xsZWN0aW9uLCBwb2t1ZCBuZWV4aXN0dWplIHRhayBzZSB2eXR2b3JpIGEgcG9rdWQgZXhpc3R1amUgdGFrIHNlIHByaWRhIGRvIGV4aXN0dWppY2lcblxuICAgIGNvbnN0IG91ckZldGNoZWRNZWV0dXBzID0gYXdhaXQgbWVldHVwQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpIC8vdG9BcnJheSBhYnljaG9tIGRvc3RhbHkgenBldCBhcnJheSBvZiBvYmplY3RzIFxuXG4gICAgY2xpZW50LmNsb3NlKClcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIG1lZXR1cHM6IG91ckZldGNoZWRNZWV0dXBzLm1hcCgob25lTWVldFVwKSA9PiAoe1xuICAgICAgICAgICAgICAgIC8vIG11c2ltZSBtYXBub3V0IHByb3RvemUgbW9uZ29EQiB0b211IHByaXJhZGkgbmVqYWt5IHJhbmRvbSBpZCBhIHRvIGJ5IG5hbSBwYWsgdGFkeSBuZXZ6YWxvIGEgaGF6ZWxvIGVycm9yLCB0YWt6ZSB0byBpZCBtdXNpcyBwcmVob2RpdCBuYSBzdHJpbmcgYWJ5IHRvIGZ1bmdvdmFsb1xuICAgICAgICAgICAgICAgIHRpdGxlOiBvbmVNZWV0VXAudGl0bGUsXG4gICAgICAgICAgICAgICAgYWRkcmVzczogb25lTWVldFVwLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgaW1hZ2U6IG9uZU1lZXRVcC5pbWFnZSxcbiAgICAgICAgICAgICAgICBpZDogb25lTWVldFVwLl9pZC50b1N0cmluZygpXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgfSxcbiAgICAgICAgcmV2YWxpZGF0ZTogMSAgLy8gdG90byB2bGFzdG5lIGtvbnRyb2x1amUgamVzdGxpIGRvc2xvIGsgbmVqYWtlIHptZW5lIHYgZGF0ZWNoLCBhYnlzIHBvcmFkIG5lbXVzZWxhIGRhdmF0IG5wbSBydW4gYnVpbGQgdGFrIHRhZHkgc2kgdG8gbXV6ZXMgbmFzdGF2aXQgYWJ5IHRvIHR5IGRhdGEgemtvbnRyb2xvdmFsbyBhIHBvZGxlIHRvaG8gYWt0dWFsaXpvdmFsby4gb2Nla2F2YSB0byBjaXNsbyAtIDEgem5hbWVuYSAxIHNla3VuZGEuIHBva3VkIGJ5cyBtZWxhIG5lY28gY28gc2UgbWVuaSBwb21hbGVqaSB0YWsgc3RhY2kgdHJlYmEgamVkbmEgaG9kaW5hIC0gdGFremUgYnlzIGRhbGEgMzYwMFxuICAgIH1cblxufVxuXG4vL3NvbWV0aW1lcyB5b3Ugd2FudCB0byByZW5kZXIgYSBuZXcgcGFnZSBvbiBldmVyeSByZXF1ZXN0IHNvIHRoZXJlIGlzIGEgYmV0dGVyIGFsdGVybmF0aXZlOiBcbi8vIG5leHQgSlMgaXMgbG9va2luZyBmb3IgdGhpcyBuYW1lIG9mIHRoZSBmdW5jdGlvblxuLy8gdGhpcyBmdW5jdGlvbiBydW5zIGFsd2F5cyBvbiB0aGUgc2VydmVyIGFmdGVyIGRlcGxveW1lbnQsIG5ldmVyIG9uIHRoZSBjbGllbnQgc2lkZS4gc28gZXZlcnl0aGluZyB5b3Ugd3JpdGUgaGVyZSBpcyBub3QgYWNjZXNpYmxlIGZyb20gdGhlIGNsaWVudCBzaWRlIGFuZCBvbmx5IHJ1biBvbiB0aGUgc2VydmVyIHNpZGVcbi8vIHlvdSBjYW4gdXNlIHRoaXMgaWYgeW91IGhhdmUgZGF0YSB0aGF0IGNoYW5nZXMgbXVsdGlwbGUgdGltZXMgZXZlcnkgc2Vjb25kIFxuXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gKGNvbnRleHQpID0+IHtcbi8vICAgICAvLyB5b3UgY2FuIGFsc28gZmV0Y2ggc29tZSBBUEkgZGF0YVxuXG4vLyAgICAgLy8geW91IHNob3VsZCB1c2UgdGhpcyBvcHRpb24gb25seSBpZiB5b3UgbmVlZCB0byBnZXQgdG8gcmVxdWVzdCBhbmQgcmVzcG9uc2UsIG90aGVyd2lzZSBpcyBtYWtlcyB5b3VyIHBhZ2Ugc2xvd2VyIGJlY2F1c2UgaXQgaGFzIHRvIHJlZ2VuZXJhdGUgdGhlIHdobyBwYWdlIG9uIGV2ZXJ5IHJlcXVlc3Rcbi8vICAgICBjb25zdCByZXEgPSBjb250ZXh0LnJlcSAgLy9jb250ZXh0IHBhcmFtZXRyIGlzIGFscmVhZHkgYnVpbHQgaW4gXG4vLyAgICAgY29uc3QgcmVzID0gY29udGV4dC5yZXNcblxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIHByb3BzOiB7XG4vLyAgICAgICAgICAgICBtZWV0dXBzOiBkdW1teV9tZWV0dXBzXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vIH1cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})