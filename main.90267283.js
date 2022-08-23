/*! For license information please see main.90267283.js.LICENSE.txt */
!function(){"use strict";function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var e=function(){function e(t){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.items=[],this.listFoundRepo=document.createElement("ul"),this.listFoundRepo.classList.add("found-repo"),this.listFoundRepo.setAttribute("tabIndex",1),this.observer=t,this.listFoundRepo.addEventListener("click",(function(t){r.observer.emit("input:select",r.items[t.target.dataset.item])})),this.subscribeListeners()}var r,n;return r=e,(n=[{key:"subscribeListeners",value:function(){var t=this;this.observer.subscribe("input:request",(function(e){var r=[];return e.forEach((function(t){return r.push([t.name,t.owner.login,t.stargazers_count])})),t.items=r,t.removeItems(),t.render()}))}},{key:"removeItems",value:function(){this.listFoundRepo.innerHTML=""}},{key:"createItems",value:function(){var t=this;this.items.forEach((function(e,r){var n=document.createElement("li");n.classList.add("found-repo_item"),n.dataset.item=r,n.textContent=e[0],t.listFoundRepo.append(n)}))}},{key:"render",value:function(){return this.createItems(),this.listFoundRepo}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(){n=function(){return t};var t={},e=Object.prototype,i=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof p?e:p,o=Object.create(i.prototype),a=new O(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return{value:void 0,done:!0}}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=L(a,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),o}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function p(){}function v(){}function d(){}var y={};c(y,a,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(j([])));b&&b!==e&&i.call(b,a)&&(y=b);var g=d.prototype=p.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,a,s,u){var c=h(t[o],t,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==r(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,s,u)}),(function(t){n("throw",t,s,u)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,u)}))}u(c.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,i){n(t,r,e,i)}))}return o=o?o.then(i,i):i()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:C}}function C(){return{value:void 0,done:!0}}return v.prototype=d,c(g,"constructor",d),c(d,"constructor",v),v.displayName=c(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,s,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new E(l(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),c(g,u,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;x(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function i(t,e,r,n,i,o,a){try{var s=t[o](a),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,i)}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(){function t(r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.inputWrapper=document.createElement("div"),this.inputElement=document.createElement("input"),this.params={type:"text",placeholder:"Введите имя репозитория",className:"gg-input"},this.foundRepoComponent=new e(r.observer),this.observer=r.observer,this.inputElement.addEventListener("input",this.search.apply(this)),this.list=this.foundRepoComponent.render(),this.subscribeListeners()}var r,a,s,u;return r=t,a=[{key:"subscribeListeners",value:function(){var t=this;this.observer.subscribe("input:request",(function(){t.list.remove(),t.inputWrapper.append(t.list)})),this.observer.subscribe("input:select",(function(){t.list.remove(),t.inputElement.value=null,t.inputElement.focus()})),this.observer.subscribe("card:close",(function(){return t.inputElement.focus()}))}},{key:"setComponent",value:function(){var t=this;for(var e in this.inputElement.setAttribute("autofocus",!0),this.params)this.inputElement[e]=this.params[e];this.inputWrapper.classList.add("input-wrapper"),this.observer.subscribe("input:request",(function(){t.list.remove(),t.inputWrapper.append(t.list)})),this.observer.subscribe("input:select",(function(){t.list.remove(),t.inputElement.value=null}))}},{key:"render",value:function(){return this.setComponent(),this.inputWrapper.append(this.inputElement),this.inputWrapper.append(this.list),this.inputWrapper}},{key:"search",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.request,r=null;return function(){for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];clearTimeout(r),r=setTimeout((function(){e.apply(t,i)}),300)}}},{key:"request",value:(s=n().mark((function t(){var e,r=this;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.github.com/search/repositories?q=".concat(this.inputElement.value),t.next=3,fetch(e).then((function(t){t.ok?t.json().then((function(t){r.observer.emit("input:request",t.items.splice(0,5))})):(console.log("request failed"),r.inputElement.value=null)}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})),u=function(){var t=this,e=arguments;return new Promise((function(r,n){var o=s.apply(t,e);function a(t){i(o,r,n,a,u,"next",t)}function u(t){i(o,r,n,a,u,"throw",t)}a(void 0)}))},function(){return u.apply(this,arguments)})}],a&&o(r.prototype,a),Object.defineProperty(r,"prototype",{writable:!1}),t}();function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var u=function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.values=e.values,this.observer=e.observer,this.params={itemClass:"repo-list_item",tableClass:"card",trClass:"card_name",tdValue:["Name: ","Owner: ","Stars: "]},this.item=c("li",this.params.itemClass),this.table=c("table",this.params.tableClass),this.button=c("button","repo-list_btn"),this.button.addEventListener("click",(function(){return r.observer.emit("card:close",r.item.dataset.card)}))}var e,r;return e=t,(r=[{key:"createItem",value:function(){var t=this;return this.item.append(this.table),this.params.tdValue.forEach((function(e,r){var n=c("tr",t.params.trClass),i=c("td",null,e),o=c("td",null,t.values[r]);t.table.append(n),n.append(i,o)})),this.item.append(this.button),this.item}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t,e,r){var n=document.createElement(t);return e&&n.classList.add(e),r&&(n.textContent=r),n}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cards=[],this.list=document.createElement("ul"),this.list.classList.add("repo-list"),this.observer=e.observer,this.subscribeListeners()}var e,r;return e=t,(r=[{key:"subscribeListeners",value:function(){var t=this;this.observer.subscribe("input:select",(function(e){t.addCard(e),t.createItems()})),this.observer.subscribe("card:close",(function(e){t.cards.splice(e,1),t.createItems()}))}},{key:"createItems",value:function(){var t=this;this.list.innerHTML=null,this.cards.forEach((function(e,r){e.dataset.card=r,t.list.append(e)}))}},{key:"render",value:function(){return this.createItems(),this.list}},{key:"addCard",value:function(t){var e=new u({values:t,observer:this.observer});this.cards.push(e.createItem())}}])&&l(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var p=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.listeners={}}var e,r;return e=t,r=[{key:"emit",value:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return!!Array.isArray(this.listeners[t])&&(this.listeners[t].forEach((function(t){t.apply(void 0,r)})),!0)}},{key:"subscribe",value:function(t,e){var r=this;return this.listeners[t]=this.listeners[t]||[],this.listeners[t].push(e),function(){r.listeners[t]=r.listeners[t].filter((function(t){return t!==e}))}}}],r&&f(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=e,this.observer=new p,this.inputElement=new a({observer:this.observer}),this.listCardsComponent=new h({observer:this.observer})}var e,r;return e=t,(r=[{key:"render",value:function(){this.el.append(this.inputElement.render()),this.el.append(this.listCardsComponent.render())}}])&&v(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}())(document.querySelector("#gg-app")).render()}();