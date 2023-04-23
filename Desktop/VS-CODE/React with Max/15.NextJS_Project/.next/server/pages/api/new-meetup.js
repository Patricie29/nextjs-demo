module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/new-meetup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// protoze to je ve slozce API - ktera se tak musi jmenovat a musi byt ve slozce PAGES tak tady definujeme pouze funkci co chceme aby se s temi daty delalo \n// toto naimportovat na connectnuti tveho cluster s touto file\n\n\nconst handler = async (req, res) => {\n  if (req.method === 'POST') {\n    const data = req.body; // pomoci req.body accesness ty data co ti prijdou po te POST method\n\n    const {\n      title,\n      description,\n      image,\n      address\n    } = data; // toto je to co ti prijde v tech datech (na to mame vsechny ty kolonky)\n    // a potom co je takto extraknes tyto data muzes poslat do databaze\n    // takto nasi databazi connectneme \n\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect('mongodb+srv://patriciesm:patriciesm@cluster0.dygl91p.mongodb.net/MeetupsNextJs?retryWrites=true&w=majority'); //connect returns a promise so we have to have this handler function as async\n\n    const db = client.db(); // this is how you get hold of the database you're connecting to\n\n    const meetupCollection = db.collection('meetups'); // volitelny nazev pro collection, pokud neexistuje tak se vytvori a pokud existuje tak se prida do existujici\n\n    const result = await meetupCollection.insertOne(data); //it expects object and we know that our data is object already\n    // insert one returns a promise so we can await it as well\n\n    console.log(result); // you can also add some error handling \n    //then you wanna close the connection once you're done\n\n    client.close();\n    res.status(201).json({\n      message: 'Meetup added!'\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz84Yjg2Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImFkZHJlc3MiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cENvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBRWhDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3ZCLFVBQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFqQixDQUR1QixDQUNBOztBQUN2QixVQUFNO0FBQUVDLFdBQUY7QUFBU0MsaUJBQVQ7QUFBc0JDLFdBQXRCO0FBQTZCQztBQUE3QixRQUF5Q0wsSUFBL0MsQ0FGdUIsQ0FFOEI7QUFFckQ7QUFDQTs7QUFDQSxVQUFNTSxNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUFvQiw0R0FBcEIsQ0FBckIsQ0FOdUIsQ0FNaUk7O0FBRXhKLFVBQU1DLEVBQUUsR0FBR0gsTUFBTSxDQUFDRyxFQUFQLEVBQVgsQ0FSdUIsQ0FRQTs7QUFFdkIsVUFBTUMsZ0JBQWdCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFNBQWQsQ0FBekIsQ0FWdUIsQ0FVMkI7O0FBQ2xELFVBQU1DLE1BQU0sR0FBRyxNQUFNRixnQkFBZ0IsQ0FBQ0csU0FBakIsQ0FBMkJiLElBQTNCLENBQXJCLENBWHVCLENBVytCO0FBQ3REOztBQUNBYyxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWixFQWJ1QixDQWN2QjtBQUVBOztBQUNBTixVQUFNLENBQUNVLEtBQVA7QUFFQWxCLE9BQUcsQ0FBQ21CLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFyQjtBQUVIO0FBQ0osQ0F4QkQ7O0FBMkJldkIsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHByb3RvemUgdG8gamUgdmUgc2xvemNlIEFQSSAtIGt0ZXJhIHNlIHRhayBtdXNpIGptZW5vdmF0IGEgbXVzaSBieXQgdmUgc2xvemNlIFBBR0VTIHRhayB0YWR5IGRlZmludWplbWUgcG91emUgZnVua2NpIGNvIGNoY2VtZSBhYnkgc2UgcyB0ZW1pIGRhdHkgZGVsYWxvIFxuXG4vLyB0b3RvIG5haW1wb3J0b3ZhdCBuYSBjb25uZWN0bnV0aSB0dmVobyBjbHVzdGVyIHMgdG91dG8gZmlsZVxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiXG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcblxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5ICAvLyBwb21vY2kgcmVxLmJvZHkgYWNjZXNuZXNzIHR5IGRhdGEgY28gdGkgcHJpamRvdSBwbyB0ZSBQT1NUIG1ldGhvZFxuICAgICAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1hZ2UsIGFkZHJlc3MgfSA9IGRhdGEgIC8vIHRvdG8gamUgdG8gY28gdGkgcHJpamRlIHYgdGVjaCBkYXRlY2ggKG5hIHRvIG1hbWUgdnNlY2hueSB0eSBrb2xvbmt5KVxuXG4gICAgICAgIC8vIGEgcG90b20gY28gamUgdGFrdG8gZXh0cmFrbmVzIHR5dG8gZGF0YSBtdXplcyBwb3NsYXQgZG8gZGF0YWJhemVcbiAgICAgICAgLy8gdGFrdG8gbmFzaSBkYXRhYmF6aSBjb25uZWN0bmVtZSBcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9wYXRyaWNpZXNtOnBhdHJpY2llc21AY2x1c3RlcjAuZHlnbDkxcC5tb25nb2RiLm5ldC9NZWV0dXBzTmV4dEpzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpICAvL2Nvbm5lY3QgcmV0dXJucyBhIHByb21pc2Ugc28gd2UgaGF2ZSB0byBoYXZlIHRoaXMgaGFuZGxlciBmdW5jdGlvbiBhcyBhc3luY1xuXG4gICAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCkgLy8gdGhpcyBpcyBob3cgeW91IGdldCBob2xkIG9mIHRoZSBkYXRhYmFzZSB5b3UncmUgY29ubmVjdGluZyB0b1xuXG4gICAgICAgIGNvbnN0IG1lZXR1cENvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJykgLy8gdm9saXRlbG55IG5hemV2IHBybyBjb2xsZWN0aW9uLCBwb2t1ZCBuZWV4aXN0dWplIHRhayBzZSB2eXR2b3JpIGEgcG9rdWQgZXhpc3R1amUgdGFrIHNlIHByaWRhIGRvIGV4aXN0dWppY2lcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSkgLy9pdCBleHBlY3RzIG9iamVjdCBhbmQgd2Uga25vdyB0aGF0IG91ciBkYXRhIGlzIG9iamVjdCBhbHJlYWR5XG4gICAgICAgIC8vIGluc2VydCBvbmUgcmV0dXJucyBhIHByb21pc2Ugc28gd2UgY2FuIGF3YWl0IGl0IGFzIHdlbGxcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICAvLyB5b3UgY2FuIGFsc28gYWRkIHNvbWUgZXJyb3IgaGFuZGxpbmcgXG5cbiAgICAgICAgLy90aGVuIHlvdSB3YW5uYSBjbG9zZSB0aGUgY29ubmVjdGlvbiBvbmNlIHlvdSdyZSBkb25lXG4gICAgICAgIGNsaWVudC5jbG9zZSgpXG5cbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiAnTWVldHVwIGFkZGVkIScgfSlcblxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/new-meetup.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });