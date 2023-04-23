module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupDetail.module.css */ \"./components/meetups/MeetupDetail.module.css\");\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/patricie/Desktop/VS-CODE/React with Max/15.NextJS_Project/components/meetups/MeetupDetail.js\";\n\n\nconst MeetupDetail = ({\n  image,\n  title,\n  description,\n  address\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: image,\n      alt: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n      children: address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 12\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLmpzP2YyYmYiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlsIiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYWRkcmVzcyIsInN0eWxlcyIsImRldGFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFlBQVksR0FBRyxDQUFDO0FBQUVDLE9BQUY7QUFBU0MsT0FBVDtBQUFnQkMsYUFBaEI7QUFBNkJDO0FBQTdCLENBQUQsS0FBNEM7QUFFN0Qsc0JBQU87QUFBUyxhQUFTLEVBQUVDLCtEQUFNLENBQUNDLE1BQTNCO0FBQUEsNEJBRUg7QUFBSyxTQUFHLEVBQUVMLEtBQVY7QUFBaUIsU0FBRyxFQUFFQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZHLGVBR0g7QUFBQSxnQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhHLGVBSUg7QUFBQSxnQkFBVUU7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpHLGVBS0g7QUFBQSxnQkFBSUQ7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBT0gsQ0FURDs7QUFZZUgsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL01lZXR1cERldGFpbC5tb2R1bGUuY3NzJ1xuXG5jb25zdCBNZWV0dXBEZXRhaWwgPSAoeyBpbWFnZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBhZGRyZXNzIH0pID0+IHtcblxuICAgIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWx9PlxuXG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PXt0aXRsZX0gLz5cbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICA8YWRkcmVzcz57YWRkcmVzc308L2FkZHJlc3M+XG4gICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgPC9zZWN0aW9uPlxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.js\n");

/***/ }),

/***/ "./components/meetups/MeetupDetail.module.css":
/*!****************************************************!*\
  !*** ./components/meetups/MeetupDetail.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"detail\": \"MeetupDetail_detail__C_8IT\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLm1vZHVsZS5jc3M/ZTY0MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbFwiOiBcIk1lZXR1cERldGFpbF9kZXRhaWxfX0NfOElUXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.module.css\n");

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/patricie/Desktop/VS-CODE/React with Max/15.NextJS_Project/pages/[meetupId]/index.js\";\n\n\n\nconst MeetupDetails = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      image: props.meetupDataProp.image,\n      address: props.meetupDataProp.address,\n      title: props.meetupDataProp.title,\n      description: props.meetupDataProp.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false);\n}; // you have to use this function only if you use getStaticProps\n\n\nconst getStaticPaths = async () => {\n  // fetch and connect to mongo db\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__[\"MongoClient\"].connect('mongodb+srv://patriciesm:patriciesm@cluster0.dygl91p.mongodb.net/MeetupsNextJs?retryWrites=true&w=majority'); //connect returns a promise so we have to have this handler function as async\n\n  const db = client.db(); // this is how you get hold of the database you're connecting to\n\n  const meetupCollection = db.collection('meetups'); // volitelny nazev pro collection, pokud neexistuje tak se vytvori a pokud existuje tak se prida do existujici\n\n  const ourFetchedMeetups = await meetupCollection.find({}, {\n    _id: 1\n  }).toArray(); //toArray abychom dostaly zpet array of objects \n  // find({}) znamena najdi vse, muzeme ale pridat second argument find({}, { }) kde definujeme ktere fields chceme vytahnout, napriklad jenom jemno, nebo jenom id atd. _id: 1 znamena at vytahne jenom id values a nic jineho\n\n  client.close(); // tedka muzeme generovat paths dynamically \n\n  return {\n    // fallback will tell next js if our paths contain all possible parameters values  (all meetups) or just some of them \n    fallback: false,\n    // kdyz rekneme ze fallback je false tak rikame ze pouze ty paths, ktere tady mame vypsane s epredvygeneruji, coz znamena ze pokud by user zadal do url treba id ktere tu vypsane nemame, tak by se mu hodila error page.\n    // pokud alre reknes ze fallback je true tak si v podstate jenom vypsala nejake possible paths, treba ty ktere jsou nejpouzivanejsi, tak ty se predvygeneruji, a kdyby user klikl na neco co tu nemame, tak by se to vygenerovalo 'za chodu' tedy az pote co na to klikl\n    //DYNAMICALLY GENERATED PATHS\n    paths: ourFetchedMeetups.map(oneMeetup => {\n      return {\n        params: {\n          meetupId: oneMeetup._id.toString()\n        }\n      };\n    }) // HARDCODED\n    // paths: [\n    //     {\n    //         params: {\n    //             meetupId: 'meetup1'\n    //         }\n    //     },\n    //     {\n    //         params: {\n    //             meetupId: 'meetup2'\n    //         }\n    //     },\n    // ]\n\n  };\n}; //using getstatiprops pregenerates all possible pages when you run npm run build. meaning it already pregerenaretes every page for every meetup  you have here\n\nconst getStaticProps = async context => {\n  // fetch data for a singe meetup\n  // you have to display different data for each meetup. That changes depending on the id. So we need to get the id of the clicked meetup. Normaly we could use useRouter hook to extract the id from the url but here you cannot use any hooks. So we will use context parameter.\n  const meetupIDfromURL = context.params.meetupId; // tady to posledni slovo musi odpovidat tomu co mas v [ ] v pages, v nasem pripade tam mame [meetupId] a timto zpusobem si ziskala to id ktere se dalo do url\n  // fetch and connect to mongo db\n\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__[\"MongoClient\"].connect('mongodb+srv://patriciesm:patriciesm@cluster0.dygl91p.mongodb.net/MeetupsNextJs?retryWrites=true&w=majority'); //connect returns a promise so we have to have this handler function as async\n\n  const db = client.db(); // this is how you get hold of the database you're connecting to\n\n  const meetupCollection = db.collection('meetups'); // volitelny nazev pro collection, pokud neexistuje tak se vytvori a pokud existuje tak se prida do existujici\n\n  const oneFetchedMeetup = await meetupCollection.findOne({\n    _id: new mongodb__WEBPACK_IMPORTED_MODULE_2__[\"ObjectId\"](meetupIDfromURL)\n  }); //ObjectId je od mongodb a zajisti aby to bylo ve spravnem formatu \n\n  client.close();\n  return {\n    props: {\n      meetupDataProp: {\n        id: oneFetchedMeetup._id.toString(),\n        title: oneFetchedMeetup.title,\n        address: oneFetchedMeetup.address,\n        description: oneFetchedMeetup.description,\n        image: oneFetchedMeetup.image\n      }\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzkyYTYiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlscyIsInByb3BzIiwibWVldHVwRGF0YVByb3AiLCJpbWFnZSIsImFkZHJlc3MiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZ2V0U3RhdGljUGF0aHMiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cENvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwib3VyRmV0Y2hlZE1lZXR1cHMiLCJmaW5kIiwiX2lkIiwidG9BcnJheSIsImNsb3NlIiwiZmFsbGJhY2siLCJwYXRocyIsIm1hcCIsIm9uZU1lZXR1cCIsInBhcmFtcyIsIm1lZXR1cElkIiwidG9TdHJpbmciLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJtZWV0dXBJRGZyb21VUkwiLCJvbmVGZXRjaGVkTWVldHVwIiwiZmluZE9uZSIsIk9iamVjdElkIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUlDLEtBQUQsSUFBVztBQUc3QixzQkFBTztBQUFBLDJCQUNILHFFQUFDLHdFQUFEO0FBQ0ksV0FBSyxFQUFFQSxLQUFLLENBQUNDLGNBQU4sQ0FBcUJDLEtBRGhDO0FBRUksYUFBTyxFQUFFRixLQUFLLENBQUNDLGNBQU4sQ0FBcUJFLE9BRmxDO0FBR0ksV0FBSyxFQUFFSCxLQUFLLENBQUNDLGNBQU4sQ0FBcUJHLEtBSGhDO0FBSUksaUJBQVcsRUFBRUosS0FBSyxDQUFDQyxjQUFOLENBQXFCSTtBQUp0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREcsbUJBQVA7QUFRSCxDQVhELEMsQ0FhQTs7O0FBQ08sTUFBTUMsY0FBYyxHQUFHLFlBQVk7QUFFdEM7QUFDQSxRQUFNQyxNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUFvQiw0R0FBcEIsQ0FBckIsQ0FIc0MsQ0FHa0g7O0FBRXhKLFFBQU1DLEVBQUUsR0FBR0gsTUFBTSxDQUFDRyxFQUFQLEVBQVgsQ0FMc0MsQ0FLZjs7QUFFdkIsUUFBTUMsZ0JBQWdCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFNBQWQsQ0FBekIsQ0FQc0MsQ0FPWTs7QUFFbEQsUUFBTUMsaUJBQWlCLEdBQUcsTUFBTUYsZ0JBQWdCLENBQUNHLElBQWpCLENBQXNCLEVBQXRCLEVBQTBCO0FBQUVDLE9BQUcsRUFBRTtBQUFQLEdBQTFCLEVBQXNDQyxPQUF0QyxFQUFoQyxDQVRzQyxDQVMwQztBQUNoRjs7QUFFQVQsUUFBTSxDQUFDVSxLQUFQLEdBWnNDLENBY3RDOztBQUNBLFNBQU87QUFDSDtBQUNBQyxZQUFRLEVBQUUsS0FGUDtBQUdIO0FBQ0E7QUFFQTtBQUNBQyxTQUFLLEVBQUVOLGlCQUFpQixDQUFDTyxHQUFsQixDQUF1QkMsU0FBRCxJQUFlO0FBQ3hDLGFBQU87QUFDSEMsY0FBTSxFQUFFO0FBQ0pDLGtCQUFRLEVBQUVGLFNBQVMsQ0FBQ04sR0FBVixDQUFjUyxRQUFkO0FBRE47QUFETCxPQUFQO0FBS0gsS0FOTSxDQVBKLENBZUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBM0JHLEdBQVA7QUE2QkgsQ0E1Q00sQyxDQThDUDs7QUFDTyxNQUFNQyxjQUFjLEdBQUcsTUFBT0MsT0FBUCxJQUFtQjtBQUM3QztBQUdBO0FBRUEsUUFBTUMsZUFBZSxHQUFHRCxPQUFPLENBQUNKLE1BQVIsQ0FBZUMsUUFBdkMsQ0FONkMsQ0FNSztBQUVsRDs7QUFDQSxRQUFNaEIsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FBb0IsNEdBQXBCLENBQXJCLENBVDZDLENBUzJHOztBQUV4SixRQUFNQyxFQUFFLEdBQUdILE1BQU0sQ0FBQ0csRUFBUCxFQUFYLENBWDZDLENBV3RCOztBQUV2QixRQUFNQyxnQkFBZ0IsR0FBR0QsRUFBRSxDQUFDRSxVQUFILENBQWMsU0FBZCxDQUF6QixDQWI2QyxDQWFLOztBQUVsRCxRQUFNZ0IsZ0JBQWdCLEdBQUcsTUFBTWpCLGdCQUFnQixDQUFDa0IsT0FBakIsQ0FBeUI7QUFBRWQsT0FBRyxFQUFFLElBQUllLGdEQUFKLENBQWFILGVBQWI7QUFBUCxHQUF6QixDQUEvQixDQWY2QyxDQWVtRDs7QUFFaEdwQixRQUFNLENBQUNVLEtBQVA7QUFFQSxTQUFPO0FBQ0hqQixTQUFLLEVBQUU7QUFDSEMsb0JBQWMsRUFBRTtBQUNaOEIsVUFBRSxFQUFFSCxnQkFBZ0IsQ0FBQ2IsR0FBakIsQ0FBcUJTLFFBQXJCLEVBRFE7QUFFWnBCLGFBQUssRUFBRXdCLGdCQUFnQixDQUFDeEIsS0FGWjtBQUdaRCxlQUFPLEVBQUV5QixnQkFBZ0IsQ0FBQ3pCLE9BSGQ7QUFJWkUsbUJBQVcsRUFBRXVCLGdCQUFnQixDQUFDdkIsV0FKbEI7QUFLWkgsYUFBSyxFQUFFMEIsZ0JBQWdCLENBQUMxQjtBQUxaO0FBRGI7QUFESixHQUFQO0FBYUgsQ0FoQ007QUFtQ1FILDRFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWV0dXBEZXRhaWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxcIlxuaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIlxuXG5jb25zdCBNZWV0dXBEZXRhaWxzID0gKHByb3BzKSA9PiB7XG5cblxuICAgIHJldHVybiA8PlxuICAgICAgICA8TWVldHVwRGV0YWlsXG4gICAgICAgICAgICBpbWFnZT17cHJvcHMubWVldHVwRGF0YVByb3AuaW1hZ2V9XG4gICAgICAgICAgICBhZGRyZXNzPXtwcm9wcy5tZWV0dXBEYXRhUHJvcC5hZGRyZXNzfVxuICAgICAgICAgICAgdGl0bGU9e3Byb3BzLm1lZXR1cERhdGFQcm9wLnRpdGxlfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb3BzLm1lZXR1cERhdGFQcm9wLmRlc2NyaXB0aW9ufSAvPlxuICAgIDwvPlxuXG59XG5cbi8vIHlvdSBoYXZlIHRvIHVzZSB0aGlzIGZ1bmN0aW9uIG9ubHkgaWYgeW91IHVzZSBnZXRTdGF0aWNQcm9wc1xuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgLy8gZmV0Y2ggYW5kIGNvbm5lY3QgdG8gbW9uZ28gZGJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL3BhdHJpY2llc206cGF0cmljaWVzbUBjbHVzdGVyMC5keWdsOTFwLm1vbmdvZGIubmV0L01lZXR1cHNOZXh0SnM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JykgIC8vY29ubmVjdCByZXR1cm5zIGEgcHJvbWlzZSBzbyB3ZSBoYXZlIHRvIGhhdmUgdGhpcyBoYW5kbGVyIGZ1bmN0aW9uIGFzIGFzeW5jXG5cbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpIC8vIHRoaXMgaXMgaG93IHlvdSBnZXQgaG9sZCBvZiB0aGUgZGF0YWJhc2UgeW91J3JlIGNvbm5lY3RpbmcgdG9cblxuICAgIGNvbnN0IG1lZXR1cENvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJykgLy8gdm9saXRlbG55IG5hemV2IHBybyBjb2xsZWN0aW9uLCBwb2t1ZCBuZWV4aXN0dWplIHRhayBzZSB2eXR2b3JpIGEgcG9rdWQgZXhpc3R1amUgdGFrIHNlIHByaWRhIGRvIGV4aXN0dWppY2lcblxuICAgIGNvbnN0IG91ckZldGNoZWRNZWV0dXBzID0gYXdhaXQgbWVldHVwQ29sbGVjdGlvbi5maW5kKHt9LCB7IF9pZDogMSB9KS50b0FycmF5KCkgLy90b0FycmF5IGFieWNob20gZG9zdGFseSB6cGV0IGFycmF5IG9mIG9iamVjdHMgXG4gICAgLy8gZmluZCh7fSkgem5hbWVuYSBuYWpkaSB2c2UsIG11emVtZSBhbGUgcHJpZGF0IHNlY29uZCBhcmd1bWVudCBmaW5kKHt9LCB7IH0pIGtkZSBkZWZpbnVqZW1lIGt0ZXJlIGZpZWxkcyBjaGNlbWUgdnl0YWhub3V0LCBuYXByaWtsYWQgamVub20gamVtbm8sIG5lYm8gamVub20gaWQgYXRkLiBfaWQ6IDEgem5hbWVuYSBhdCB2eXRhaG5lIGplbm9tIGlkIHZhbHVlcyBhIG5pYyBqaW5laG9cblxuICAgIGNsaWVudC5jbG9zZSgpXG5cbiAgICAvLyB0ZWRrYSBtdXplbWUgZ2VuZXJvdmF0IHBhdGhzIGR5bmFtaWNhbGx5IFxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHdpbGwgdGVsbCBuZXh0IGpzIGlmIG91ciBwYXRocyBjb250YWluIGFsbCBwb3NzaWJsZSBwYXJhbWV0ZXJzIHZhbHVlcyAgKGFsbCBtZWV0dXBzKSBvciBqdXN0IHNvbWUgb2YgdGhlbSBcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgICAgICAvLyBrZHl6IHJla25lbWUgemUgZmFsbGJhY2sgamUgZmFsc2UgdGFrIHJpa2FtZSB6ZSBwb3V6ZSB0eSBwYXRocywga3RlcmUgdGFkeSBtYW1lIHZ5cHNhbmUgcyBlcHJlZHZ5Z2VuZXJ1amksIGNveiB6bmFtZW5hIHplIHBva3VkIGJ5IHVzZXIgemFkYWwgZG8gdXJsIHRyZWJhIGlkIGt0ZXJlIHR1IHZ5cHNhbmUgbmVtYW1lLCB0YWsgYnkgc2UgbXUgaG9kaWxhIGVycm9yIHBhZ2UuXG4gICAgICAgIC8vIHBva3VkIGFscmUgcmVrbmVzIHplIGZhbGxiYWNrIGplIHRydWUgdGFrIHNpIHYgcG9kc3RhdGUgamVub20gdnlwc2FsYSBuZWpha2UgcG9zc2libGUgcGF0aHMsIHRyZWJhIHR5IGt0ZXJlIGpzb3UgbmVqcG91eml2YW5lanNpLCB0YWsgdHkgc2UgcHJlZHZ5Z2VuZXJ1amksIGEga2R5YnkgdXNlciBrbGlrbCBuYSBuZWNvIGNvIHR1IG5lbWFtZSwgdGFrIGJ5IHNlIHRvIHZ5Z2VuZXJvdmFsbyAnemEgY2hvZHUnIHRlZHkgYXogcG90ZSBjbyBuYSB0byBrbGlrbFxuXG4gICAgICAgIC8vRFlOQU1JQ0FMTFkgR0VORVJBVEVEIFBBVEhTXG4gICAgICAgIHBhdGhzOiBvdXJGZXRjaGVkTWVldHVwcy5tYXAoKG9uZU1lZXR1cCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVldHVwSWQ6IG9uZU1lZXR1cC5faWQudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBIQVJEQ09ERURcbiAgICAgICAgLy8gcGF0aHM6IFtcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgbWVldHVwSWQ6ICdtZWV0dXAxJ1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIG1lZXR1cElkOiAnbWVldHVwMidcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyBdXG4gICAgfVxufVxuXG4vL3VzaW5nIGdldHN0YXRpcHJvcHMgcHJlZ2VuZXJhdGVzIGFsbCBwb3NzaWJsZSBwYWdlcyB3aGVuIHlvdSBydW4gbnBtIHJ1biBidWlsZC4gbWVhbmluZyBpdCBhbHJlYWR5IHByZWdlcmVuYXJldGVzIGV2ZXJ5IHBhZ2UgZm9yIGV2ZXJ5IG1lZXR1cCAgeW91IGhhdmUgaGVyZVxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAvLyBmZXRjaCBkYXRhIGZvciBhIHNpbmdlIG1lZXR1cFxuXG5cbiAgICAvLyB5b3UgaGF2ZSB0byBkaXNwbGF5IGRpZmZlcmVudCBkYXRhIGZvciBlYWNoIG1lZXR1cC4gVGhhdCBjaGFuZ2VzIGRlcGVuZGluZyBvbiB0aGUgaWQuIFNvIHdlIG5lZWQgdG8gZ2V0IHRoZSBpZCBvZiB0aGUgY2xpY2tlZCBtZWV0dXAuIE5vcm1hbHkgd2UgY291bGQgdXNlIHVzZVJvdXRlciBob29rIHRvIGV4dHJhY3QgdGhlIGlkIGZyb20gdGhlIHVybCBidXQgaGVyZSB5b3UgY2Fubm90IHVzZSBhbnkgaG9va3MuIFNvIHdlIHdpbGwgdXNlIGNvbnRleHQgcGFyYW1ldGVyLlxuXG4gICAgY29uc3QgbWVldHVwSURmcm9tVVJMID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQgICAvLyB0YWR5IHRvIHBvc2xlZG5pIHNsb3ZvIG11c2kgb2Rwb3ZpZGF0IHRvbXUgY28gbWFzIHYgWyBdIHYgcGFnZXMsIHYgbmFzZW0gcHJpcGFkZSB0YW0gbWFtZSBbbWVldHVwSWRdIGEgdGltdG8genB1c29iZW0gc2kgemlza2FsYSB0byBpZCBrdGVyZSBzZSBkYWxvIGRvIHVybFxuXG4gICAgLy8gZmV0Y2ggYW5kIGNvbm5lY3QgdG8gbW9uZ28gZGJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL3BhdHJpY2llc206cGF0cmljaWVzbUBjbHVzdGVyMC5keWdsOTFwLm1vbmdvZGIubmV0L01lZXR1cHNOZXh0SnM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JykgIC8vY29ubmVjdCByZXR1cm5zIGEgcHJvbWlzZSBzbyB3ZSBoYXZlIHRvIGhhdmUgdGhpcyBoYW5kbGVyIGZ1bmN0aW9uIGFzIGFzeW5jXG5cbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpIC8vIHRoaXMgaXMgaG93IHlvdSBnZXQgaG9sZCBvZiB0aGUgZGF0YWJhc2UgeW91J3JlIGNvbm5lY3RpbmcgdG9cblxuICAgIGNvbnN0IG1lZXR1cENvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJykgLy8gdm9saXRlbG55IG5hemV2IHBybyBjb2xsZWN0aW9uLCBwb2t1ZCBuZWV4aXN0dWplIHRhayBzZSB2eXR2b3JpIGEgcG9rdWQgZXhpc3R1amUgdGFrIHNlIHByaWRhIGRvIGV4aXN0dWppY2lcblxuICAgIGNvbnN0IG9uZUZldGNoZWRNZWV0dXAgPSBhd2FpdCBtZWV0dXBDb2xsZWN0aW9uLmZpbmRPbmUoeyBfaWQ6IG5ldyBPYmplY3RJZChtZWV0dXBJRGZyb21VUkwpIH0pIC8vT2JqZWN0SWQgamUgb2QgbW9uZ29kYiBhIHphamlzdGkgYWJ5IHRvIGJ5bG8gdmUgc3ByYXZuZW0gZm9ybWF0dSBcblxuICAgIGNsaWVudC5jbG9zZSgpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgbWVldHVwRGF0YVByb3A6IHtcbiAgICAgICAgICAgICAgICBpZDogb25lRmV0Y2hlZE1lZXR1cC5faWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICB0aXRsZTogb25lRmV0Y2hlZE1lZXR1cC50aXRsZSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBvbmVGZXRjaGVkTWVldHVwLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IG9uZUZldGNoZWRNZWV0dXAuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgaW1hZ2U6IG9uZUZldGNoZWRNZWV0dXAuaW1hZ2VcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsc1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });