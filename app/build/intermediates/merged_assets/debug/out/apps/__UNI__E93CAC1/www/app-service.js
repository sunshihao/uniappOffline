(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"09ed":function(t,e,n){"use strict";n.r(e);var r=n("8355"),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"===typeof __channelId__&&__channelId__}function i(t,e){switch(r(e)){case"Function":return"function() { [native code] }";default:return e}}function a(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];console[t].apply(console,n)}function u(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var a=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[a].apply(console,e);var u=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,i)+"---END:JSON---"}catch(o){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),c="";if(u.length>1){var s=u.pop();c=u.join("---COMMA---"),0===s.indexOf(" at ")?c+=s:c+="---COMMA---"+s}else c=u[0];console[a](c)}n.r(e),n.d(e,"log",(function(){return a})),n.d(e,"default",(function(){return u}))},1960:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])},"20ef":function(t,e,n){var r=n("7037");uni.addInterceptor({returnValue:function(t){return!t||"object"!==r(t)&&"function"!==typeof t||"function"!==typeof t.then?t:new Promise((function(e,n){t.then((function(t){return t[0]?n(t[0]):e(t[1])}))}))}})},"36ae":function(t,e,n){"use strict";n.r(e);var r=n("1960"),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},3794:function(t,e,n){"use strict";n.r(e);var r=n("36ae");for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);var i=n("f0c5"),a=Object(i["a"])(r["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);e["default"]=a.exports},"4ea4":function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports["default"]=t.exports},5875:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[n("view",{staticClass:t._$s(1,"sc","text-area"),attrs:{_i:1}},[n("text",{staticClass:t._$s(2,"sc","title"),attrs:{_i:2}},[t._v(t._$s(2,"t0-0",t._s(t.title)))])]),n("view",[n("button",{attrs:{_i:4},on:{click:t.sayHi}}),n("button",{attrs:{_i:5},on:{click:t.startService}}),n("button",{attrs:{_i:6},on:{click:t.removeNotification}}),n("button",{attrs:{_i:7},on:{click:t.hideBackground}}),n("button",{attrs:{_i:8},on:{click:t.ignoreBattery}}),n("button",{attrs:{_i:9},on:{click:t.startAutostartSetting}}),n("button",{attrs:{_i:10},on:{click:t.startAccessibilitySetting}})])])},o=[]},7037:function(t,e){function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports["default"]=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports["default"]=t.exports},8355:function(t,e,n){"use strict";(function(t){var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,i=r(n("9523")),a=uni.requireNativePlugin("keepalive"),u={data:function(){return{title:"Hello"}},methods:(o={sayHi:function(){a.sayHi("sssh",(function(e){t("log","\u6267\u884c\u7ed3\u679c--",e," at pages/index/index.vue:33")}))},startCS:function(){a.startCS((function(e){t("log","\u6267\u884c\u7ed3\u679c--",e," at pages/index/index.vue:39")}))},startService:function(){a.startService((function(e){t("log","\u6267\u884c\u7ed3\u679c--",e," at pages/index/index.vue:45")}))},removeNotification:function(){a.removeNotification((function(e){t("log","\u6267\u884c\u7ed3\u679c--",e," at pages/index/index.vue:51")}))},hideBackground:function(){a.hideBackground((function(e){t("log","\u6267\u884c\u7ed3\u679c--",e," at pages/index/index.vue:57")}))},ignoreBattery:function(){a.hideBackground(!0)}},(0,i.default)(o,"ignoreBattery",(function(){a.ignoreBattery((function(e){t("log","\u6267\u884c\u7ed3\u679c--",e," at pages/index/index.vue:67")}))})),(0,i.default)(o,"startAutostartSetting",(function(){a.startAutostartSetting((function(e){t("log","\u6267\u884c\u7ed3\u679c--",e," at pages/index/index.vue:73")}))})),(0,i.default)(o,"startAccessibilitySetting",(function(){a.startAccessibilitySetting((function(e){t("log","\u6267\u884c\u7ed3\u679c--",e," at pages/index/index.vue:78")}))})),o)};e.default=u}).call(this,n("0de9")["default"])},"8bbf":function(t,e){t.exports=Vue},9523:function(t,e,n){var r=n("a395");t.exports=function(t,e,n){return e=r(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports["default"]=t.exports},a395:function(t,e,n){var r=n("7037")["default"],o=n("e50d");t.exports=function(t){var e=o(t,"string");return"symbol"===r(e)?e:String(e)},t.exports.__esModule=!0,t.exports["default"]=t.exports},be93:function(t,e,n){"use strict";var r=n("4ea4"),o=r(n("9523"));n("dd0c");var i=r(n("3794")),a=r(n("8bbf"));function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}n("20ef"),a.default.config.productionTip=!1,i.default.mpType="app";var c=new a.default(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){(0,o.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},i.default));c.$mount()},dd0c:function(t,e,n){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("debc").default)}))},debc:function(t,e,n){"use strict";n.r(e);var r=n("5875"),o=n("09ed");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var a=n("f0c5"),u=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,"400cc1e8",null,!1,r["a"],void 0);e["default"]=u.exports},e50d:function(t,e,n){var r=n("7037")["default"];t.exports=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports["default"]=t.exports},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,u,c,s){var f,l="function"===typeof t?t.options:t;if(c){l.components||(l.components={});var d=Object.prototype.hasOwnProperty;for(var p in c)d.call(c,p)&&!d.call(l.components,p)&&(l.components[p]=c[p])}if(s&&("function"===typeof s.beforeCreate&&(s.beforeCreate=[s.beforeCreate]),(s.beforeCreate||(s.beforeCreate=[])).unshift((function(){this[s.__module]=this})),(l.mixins||(l.mixins=[])).push(s)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=f):o&&(f=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(l.functional){l._injectStyles=f;var v=l.render;l.render=function(t,e){return f.call(e),v(t,e)}}else{var y=l.beforeCreate;l.beforeCreate=y?[].concat(y,f):[f]}return{exports:t,options:l}}n.d(e,"a",(function(){return r}))}},[["be93","app-config"]]]);