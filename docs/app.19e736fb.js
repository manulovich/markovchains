parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"yu6k":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createNewSuggestion=exports.ucFirst=void 0;var e=function(e){return e[0].toUpperCase()+e.slice(1)};exports.ucFirst=e;var r=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=r.getRandomLink(),i=e(o);if(t<1)return"";for(var n=2;n<=t;n+=1){var s=r.getRandomLinkFomReleatedLinks(o);if("."===s||n===t){i+=".";break}i+=" ".concat(s),o=s}return i.slice(0)};exports.createNewSuggestion=r;
},{}],"SoKI":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0});var r=function(){function t(){e(this,t),this.pairMap={}}return n(t,[{key:"set",value:function(e,t){var n=this.pairMap;n[e]?n[e].push(t):n[e]=[t]}},{key:"get",value:function(e){return this.pairMap[e]||["."]}},{key:"map",get:function(){return this.pairMap}}]),t}();exports.default=r;
},{}],"HK7J":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0});var r=function(){function t(){e(this,t),this.counterMap={}}return n(t,[{key:"set",value:function(e){var t=this.counterMap;t[e]=t[e]?t[e]+1:1}},{key:"get",value:function(e){return this.counterMap[e]||1}}]),t}();exports.default=r;
},{}],"mdOh":[function(require,module,exports) {
"use strict";function t(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=e(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){l=!0,i=t},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw i}}}}function e(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var u=i(require("./Pair")),l=i(require("./Counter")),f=function(){function e(){n(this,e),this.counter=new l.default,this.pair=new u.default}return a(e,[{key:"set",value:function(t,e){this.counter.set(e),this.pair.set(t,e)}},{key:"get",value:function(t){var e=this,r=this.pair.get(t),n=r.reduce(function(t,r){return t+e.counter.get(r)},0);return r.map(function(t){return{value:t,probability:e.counter.get(t)/n}})}},{key:"getRandomLink",value:function(){var t=Object.keys(this.pair.map);return t[Math.floor(Math.random()*t.length)]}},{key:"getRandomLinkFomReleatedLinks",value:function(e){var r,n=Math.random(),o=this.get(e).sort(function(t,e){return t.probability-e.probability}),a=t(o);try{for(a.s();!(r=a.n()).done;){var i=r.value;if(i.probability>n)return i.value}}catch(u){a.e(u)}finally{a.f()}return o[o.length-1].value}}]),e}();exports.default=f;
},{"./Pair":"SoKI","./Counter":"HK7J"}],"JIxj":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("./LinkMap"));exports.default=t.default;
},{"./LinkMap":"mdOh"}],"o4R2":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0});var r=function(t){function r(t){e(this,r),this.splitText=t.trim().split(/[,.?! \n:]/).filter(function(e){return""!=e})}return n(r,[{key:Symbol.iterator,value:function(){var e=this,t=0;return{next:function(){return(t+=1)>=e.splitText.length?{done:!0}:{value:[e.splitText[t-1].toLowerCase(),e.splitText[t].toLowerCase()],done:!1}}}}}]),r}();exports.default=r;
},{}],"HOXx":[function(require,module,exports) {
"use strict";function t(t,o){return n(t)||e(t,o)||a(t,o)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(n=e.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}}function n(t){if(Array.isArray(t))return t}function o(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=a(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return u=t.done,t},e:function(t){l=!0,i=t},f:function(){try{u||null==e.return||e.return()}finally{if(l)throw i}}}}function a(t,r){if(t){if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,r):void 0}}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var l=require("./utils/textUtils"),f=u(require("./LinkMap")),c=u(require("./DependentLinksOfText")),s=function(r){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=new c.default(r),u=new f.default,s="",y=o(i);try{for(y.s();!(e=y.n()).done;){var d=t(e.value,2),v=d[0],h=d[1];u.set(v,h)}}catch(b){y.e(b)}finally{y.f()}for(var p=1;p<=n;p+=1)s+="".concat((0,l.createNewSuggestion)(u,a)," ");return s};exports.default=s;
},{"./utils/textUtils":"yu6k","./LinkMap":"JIxj","./DependentLinksOfText":"o4R2"}],"Doqu":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("./createNewText")),r=document.querySelector(".input-src-text"),u=document.querySelector(".input-src-text__src"),n=document.querySelector(".result"),c=document.querySelector(".input-src-text__select-count-p");null==r||r.addEventListener("submit",function(e){e.preventDefault();var r=u.value;n.innerText=(0,t.default)(r,5,Number(c.value))});
},{"./createNewText":"HOXx"}]},{},["Doqu"], null)
//# sourceMappingURL=app.19e736fb.js.map