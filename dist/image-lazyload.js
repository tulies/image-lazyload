(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ImageLazyload"] = factory();
	else
		root["ImageLazyload"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ImageLazyload; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n    * Merge two or more objects. Returns a new object.\n    * @private\n    * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]\n    * @param {Object}   objects  The objects to merge together\n    * @returns {Object}          Merged values of defaults and options\n    */\nvar extend = function extend() {\n  var extended = {};\n  var deep = false;\n  var i = 0;\n  var length = arguments.length;\n  /* Check if a deep merge */\n\n  if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {\n    deep = arguments[0];\n    i++;\n  }\n  /* Merge the object into the extended object */\n\n\n  var merge = function merge(obj) {\n    for (var prop in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, prop)) {\n        /* If deep merge and property is an object, merge properties */\n        if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {\n          extended[prop] = extend(true, extended[prop], obj[prop]);\n        } else {\n          extended[prop] = obj[prop];\n        }\n      }\n    }\n  };\n  /* Loop through each object and conduct a merge */\n\n\n  for (; i < length; i++) {\n    var obj = arguments[i];\n    merge(obj);\n  }\n\n  return extended;\n};\n\nvar defaults = {\n  src: 'data-src',\n  srcset: 'data-srcset',\n  // selector: '.lazyload',\n  root: null,\n  rootMargin: '0px',\n  threshold: 0,\n  placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2M8fPjwfwAH5ANKxO/wYQAAAABJRU5ErkJggg=='\n};\n\nvar ImageLazyload =\n/*#__PURE__*/\nfunction () {\n  function ImageLazyload(el, options) {\n    _classCallCheck(this, ImageLazyload);\n\n    if (typeof el === 'string') {\n      this.images = document.querySelectorAll(el);\n    } else {\n      this.images = el;\n    }\n\n    this.settings = extend(defaults, options || {});\n    this.observer = null; // 执行初始化\n\n    this.init();\n  }\n\n  _createClass(ImageLazyload, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      /* Without observers load everything and bail out early. */\n      if (!window.IntersectionObserver) {\n        this.loadImages();\n        return;\n      }\n\n      var observerConfig = {\n        root: this.settings.root,\n        rootMargin: this.settings.rootMargin,\n        threshold: [this.settings.threshold]\n      };\n      this.observer = new IntersectionObserver(function (entries) {\n        entries.forEach(function (entry) {\n          if (entry.isIntersecting) {\n            _this.observer.unobserve(entry.target);\n\n            var src = entry.target.getAttribute(_this.settings.src);\n            var srcset = entry.target.getAttribute(_this.settings.srcset);\n\n            if (entry.target.tagName.toLowerCase() === 'img') {\n              if (src) {\n                entry.target.src = src;\n              }\n\n              if (srcset) {\n                entry.target.srcset = srcset;\n              }\n            } else {\n              entry.target.style.backgroundImage = 'url(' + src + ')';\n            }\n          }\n        });\n      }, observerConfig);\n      this.images.forEach(function (image) {\n        // 设置默认图\n        if (_this.settings.placeholder) {\n          if (image.tagName.toLowerCase() === 'img') {\n            image.src = _this.settings.placeholder;\n          } else {\n            image.style.backgroundImage = 'url(' + _this.settings.placeholder + ')';\n          }\n        }\n\n        _this.observer.observe(image);\n      });\n    }\n  }, {\n    key: \"loadAndDestroy\",\n    value: function loadAndDestroy() {\n      if (!this.settings) {\n        return;\n      }\n\n      this.loadImages();\n      this.destroy();\n    }\n  }, {\n    key: \"loadImages\",\n    value: function loadImages() {\n      var _this2 = this;\n\n      if (!this.settings) {\n        return;\n      }\n\n      this.images.forEach(function (image) {\n        var src = image.getAttribute(_this2.settings.src);\n        var srcset = image.getAttribute(_this2.settings.srcset);\n\n        if (image.tagName.toLowerCase() === 'img') {\n          if (src) {\n            image.src = src;\n          }\n\n          if (srcset) {\n            image.srcset = srcset;\n          }\n        } else {\n          image.style.backgroundImage = \"url('\" + src + \"')\";\n        }\n      });\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      if (!this.settings) {\n        return;\n      }\n\n      this.observer.disconnect();\n      this.settings = null;\n    }\n  }]);\n\n  return ImageLazyload;\n}();\n\n\n\n//# sourceURL=webpack://ImageLazyload/./src/index.js?");

/***/ })

/******/ })["default"];
});