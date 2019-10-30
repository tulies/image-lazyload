!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ImageLazyload=t():e.ImageLazyload=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.r(t),r.d(t,"default",(function(){return a}));var s={src:"data-src",srcset:"data-srcset",root:null,rootMargin:"0px",threshold:0,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2M8fPjwfwAH5ANKxO/wYQAAAABJRU5ErkJggg=="},a=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.images="string"==typeof t?document.querySelectorAll(t):t,this.settings=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(r,!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},s,{},r||{}),this.observer=null,this.init()}var t,r,a;return t=e,(r=[{key:"init",value:function(){var e=this;if(window.IntersectionObserver){var t={root:this.settings.root,rootMargin:this.settings.rootMargin,threshold:[this.settings.threshold]};this.observer=new IntersectionObserver((function(t){t.forEach((function(t){if(t.isIntersecting){e.observer.unobserve(t.target);var r=t.target.getAttribute(e.settings.src),n=t.target.getAttribute(e.settings.srcset);"img"===t.target.tagName.toLowerCase()?(r&&(t.target.src=r),n&&(t.target.srcset=n)):t.target.style.backgroundImage="url("+r+")"}}))}),t),this.images.forEach((function(t){e.settings.placeholder&&("img"===t.tagName.toLowerCase()?t.src=e.settings.placeholder:t.style.backgroundImage="url("+e.settings.placeholder+")"),e.observer.observe(t)}))}else this.loadImages()}},{key:"loadAndDestroy",value:function(){this.settings&&(this.loadImages(),this.destroy())}},{key:"loadImages",value:function(){var e=this;this.settings&&this.images.forEach((function(t){var r=t.getAttribute(e.settings.src),n=t.getAttribute(e.settings.srcset);"img"===t.tagName.toLowerCase()?(r&&(t.src=r),n&&(t.srcset=n)):t.style.backgroundImage="url('"+r+"')"}))}},{key:"destroy",value:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}}])&&i(t.prototype,r),a&&i(t,a),e}()}]).default}));