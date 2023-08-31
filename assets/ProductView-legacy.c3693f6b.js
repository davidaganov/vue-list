!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,a=Object.create(o.prototype),c=new N(n||[]);return i(a,"_invoke",{value:j(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var d="suspendedStart",v="suspendedYield",y="executing",g="completed",m={};function x(){}function w(){}function b(){}var _={};f(_,s,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(G([])));E&&E!==o&&a.call(E,s)&&(_=E);var C=b.prototype=x.prototype=Object.create(_);function P(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(e,r){function n(o,i,c,s){var u=p(e[o],e,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==t(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}})}function j(t,e,n){var o=d;return function(a,i){if(o===y)throw new Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var s=O(c,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=p(t,e,n);if("normal"===u.type){if(o=n.done?g:v,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=g,n.method="throw",n.arg=u.arg)}}}function O(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=p(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,m;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function G(e){if(e||""===e){var n=e[s];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return w.prototype=b,i(C,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:w,configurable:!0}),w.displayName=f(b,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,l,"GeneratorFunction")),t.prototype=Object.create(C),t},n.awrap=function(t){return{__await:t}},P(k.prototype),f(k.prototype,u,(function(){return this})),n.AsyncIterator=k,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new k(h(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},P(C),f(C,l,"Generator"),f(C,s,(function(){return this})),f(C,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=G,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(F),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),F(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},n}function r(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}System.register(["./index-legacy.f6f517c0.js"],(function(t,n){"use strict";var o,a,i,c,s,u,l,f,h=document.createElement("style");return h.textContent=".container[data-v-04a6982e]{margin:20px auto;padding:0}.block-info[data-v-04a6982e]{margin-top:10px}.block-info span[data-v-04a6982e]{color:#000;text-transform:capitalize}.price[data-v-04a6982e]{display:flex;align-items:center;gap:5px;margin:0}.price--discounted[data-v-04a6982e]{margin:0!important;font-size:18px;color:#f57c00}.price--old[data-v-04a6982e]{margin:0 0 0 5px;font-size:16px;text-decoration:line-through;color:#616161}.rating[data-v-04a6982e]{margin-left:-8px}.description[data-v-04a6982e]{margin-top:20px}\n",document.head.appendChild(h),{setters:[function(t){o=t.n,a=t._,i=t.a,c=t.b,s=t.c,u=t.d,l=t.e,f=t.f}],execute:function(){var n={name:"ProductPage",data:function(){return{loading:!0,product:null}},created:function(){this.loadProductData()},methods:{loadProductData:function(){var t,n=this;return(t=e().mark((function t(){var r,o,a;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.$route.params.id,t.prev=1,t.next=4,fetch("https://dummyjson.com/products/".concat(r));case 4:if(o=t.sent,n.loading=!1,!o.ok){t.next=13;break}return t.next=9,o.json();case 9:a=t.sent,n.product=a,t.next=14;break;case 13:console.error("Failed to fetch product data");case 14:t.next=20;break;case 16:t.prev=16,t.t0=t.catch(1),console.error("Error fetching product data:",t.t0),n.loading=!1;case 20:case"end":return t.stop()}}),t,null,[[1,16]])})),function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,s,"next",t)}function s(t){r(i,o,a,c,s,"throw",t)}c(void 0)}))})()}}},h=o(n,(function(){var t=this,e=t._self._c;return e("div",[t.product&&!t.loading?e(a,{staticClass:"container max-width-container"},[e(i,{staticClass:"mt-10"},[e(c,{staticClass:"pa-0",attrs:{cols:"4"}},[e(s,{staticClass:"rounded-lg",attrs:{height:"400","hide-delimiters":!0}},t._l(t.product.images,(function(t,r){return e(u,{key:r},[e(l,{staticClass:"rounded-lg",attrs:{height:"400",src:t}})],1)})),1)],1),e(c,{staticClass:"py-0 px-5",attrs:{cols:"8"}},[e("h2",{staticClass:"text-h6 text-md-h5 text-lg-h4"},[t._v(t._s(t.product.title))]),e("div",{staticClass:"block-info"},[e("p",{staticClass:"mb-0 grey--text"},[t._v(" Category: "),e("span",[t._v(t._s(t.product.category))])]),e("p",{staticClass:"mb-0 grey--text"},[t._v(" Brand: "),e("span",[t._v(t._s(t.product.brand))])])]),e("div",{staticClass:"price mt-10"},[e("p",{staticClass:"price--discounted"},[t._v(" "+t._s((t.product.price*(1-t.product.discountPercentage/100)).toFixed(2))+" $ ")]),e("s",{staticClass:"price--old"},[t._v(t._s(t.product.price.toFixed(2))+" $")])]),e(f,{staticClass:"rating",attrs:{color:"primary","half-increments":!0,value:t.product.rating,readonly:!0}})],1)],1),e("p",{staticClass:"description"},[t._v(t._s(t.product.description))])],1):t._e(),!t.product&&t.loading?e(a,{staticClass:"max-width-container text-center mt-15"},[e("h2",{staticClass:"text-h6 text-md-h5 text-lg-h4"},[t._v("Loading...")])]):t._e(),t.product||t.loading?t._e():e(a,{staticClass:"max-width-container text-center mt-15"},[e("h2",{staticClass:"text-h6 text-md-h5 text-lg-h4"},[t._v("Product Not Found")])])],1)}),[],!1,null,"04a6982e",null,null).exports;t("default",o({name:"ProductView",components:{ProductPage:h}},(function(){return(0,this._self._c)(h)}),[],!1,null,null,null,null).exports)}}}))}();
