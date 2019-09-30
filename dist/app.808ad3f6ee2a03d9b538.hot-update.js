webpackHotUpdateImageLazyload("app",{

/***/ "./node_modules/core-js/internals/array-includes.js":
false,

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
false,

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
false,

/***/ "./node_modules/core-js/internals/create-property.js":
false,

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
false,

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
false,

/***/ "./node_modules/core-js/internals/export.js":
false,

/***/ "./node_modules/core-js/internals/function-to-string.js":
false,

/***/ "./node_modules/core-js/internals/get-built-in.js":
false,

/***/ "./node_modules/core-js/internals/has.js":
false,

/***/ "./node_modules/core-js/internals/hidden-keys.js":
false,

/***/ "./node_modules/core-js/internals/html.js":
false,

/***/ "./node_modules/core-js/internals/internal-state.js":
false,

/***/ "./node_modules/core-js/internals/is-forced.js":
false,

/***/ "./node_modules/core-js/internals/native-weak-map.js":
false,

/***/ "./node_modules/core-js/internals/object-create.js":
false,

/***/ "./node_modules/core-js/internals/object-define-properties.js":
false,

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
false,

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
false,

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
false,

/***/ "./node_modules/core-js/internals/object-keys.js":
false,

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
false,

/***/ "./node_modules/core-js/internals/own-keys.js":
false,

/***/ "./node_modules/core-js/internals/path.js":
false,

/***/ "./node_modules/core-js/internals/redefine.js":
false,

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
false,

/***/ "./node_modules/core-js/internals/shared-key.js":
false,

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
false,

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
false,

/***/ "./node_modules/core-js/internals/wrapped-well-known-symbol.js":
false,

/***/ "./node_modules/core-js/modules/es.array.filter.js":
false,

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js":
false,

/***/ "./node_modules/core-js/modules/es.object.keys.js":
false,

/***/ "./node_modules/core-js/modules/es.symbol.js":
false,

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ImageLazyload; });\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n    * Merge two or more objects. Returns a new object.\n    * @private\n    * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]\n    * @param {Object}   objects  The objects to merge together\n    * @returns {Object}          Merged values of defaults and options\n    */\n// const extend = function () {\n//   const extended = {}\n//   let deep = false\n//   let i = 0\n//   const length = arguments.length\n//   /* Check if a deep merge */\n//   if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {\n//     deep = arguments[0]\n//     i++\n//   }\n//   /* Merge the object into the extended object */\n//   const merge = function (obj) {\n//     for (const prop in obj) {\n//       if (Object.prototype.hasOwnProperty.call(obj, prop)) {\n//         /* If deep merge and property is an object, merge properties */\n//         if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {\n//           extended[prop] = extend(true, extended[prop], obj[prop])\n//         } else {\n//           extended[prop] = obj[prop]\n//         }\n//       }\n//     }\n//   }\n//   /* Loop through each object and conduct a merge */\n//   for (; i < length; i++) {\n//     const obj = arguments[i]\n//     merge(obj)\n//   }\n//   return extended\n// }\nvar defaults = {\n  src: 'data-src',\n  srcset: 'data-srcset',\n  selector: '.lazyload',\n  root: null,\n  rootMargin: '0px',\n  threshold: 0\n};\n\nvar ImageLazyload =\n/*#__PURE__*/\nfunction () {\n  function ImageLazyload(el, options) {\n    _classCallCheck(this, ImageLazyload);\n\n    if (typeof el === 'string') {\n      this.images = document.querySelectorAll(el);\n    } else {\n      this.images = el;\n    }\n\n    this.settings = extend(defaults, options || {}); // this.settings = {\n    //   ...defaults,\n    //   ...options\n    // }\n\n    this.observer = null; // 执行初始化\n\n    this.init();\n  }\n\n  _createClass(ImageLazyload, [{\n    key: \"init\",\n    value: function init() {\n      /* Without observers load everything and bail out early. */\n      if (!window.IntersectionObserver) {\n        this.loadImages();\n        return;\n      }\n\n      var self = this;\n      var observerConfig = {\n        root: this.settings.root,\n        rootMargin: this.settings.rootMargin,\n        threshold: [this.settings.threshold]\n      };\n      this.observer = new IntersectionObserver(function (entries) {\n        Array.prototype.forEach.call(entries, function (entry) {\n          if (entry.isIntersecting) {\n            self.observer.unobserve(entry.target);\n            var src = entry.target.getAttribute(self.settings.src);\n            var srcset = entry.target.getAttribute(self.settings.srcset);\n\n            if (entry.target.tagName.toLowerCase() === 'img') {\n              if (src) {\n                entry.target.src = src;\n              }\n\n              if (srcset) {\n                entry.target.srcset = srcset;\n              }\n            } else {\n              entry.target.style.backgroundImage = 'url(' + src + ')';\n            }\n          }\n        });\n      }, observerConfig);\n      Array.prototype.forEach.call(this.images, function (image) {\n        self.observer.observe(image);\n      });\n    }\n  }, {\n    key: \"loadAndDestroy\",\n    value: function loadAndDestroy() {\n      if (!this.settings) {\n        return;\n      }\n\n      this.loadImages();\n      this.destroy();\n    }\n  }, {\n    key: \"loadImages\",\n    value: function loadImages() {\n      if (!this.settings) {\n        return;\n      }\n\n      var self = this;\n      Array.prototype.forEach.call(this.images, function (image) {\n        var src = image.getAttribute(self.settings.src);\n        var srcset = image.getAttribute(self.settings.srcset);\n\n        if (image.tagName.toLowerCase() === 'img') {\n          if (src) {\n            image.src = src;\n          }\n\n          if (srcset) {\n            image.srcset = srcset;\n          }\n        } else {\n          image.style.backgroundImage = \"url('\" + src + \"')\";\n        }\n      });\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      if (!this.settings) {\n        return;\n      }\n\n      this.observer.disconnect();\n      this.settings = null;\n    }\n  }]);\n\n  return ImageLazyload;\n}();\n\n\n\n//# sourceURL=webpack://ImageLazyload/./src/index.js?");

/***/ })

})