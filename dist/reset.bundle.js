(()=>{"use strict";var r={315:(r,n,e)=>{e.d(n,{Z:()=>A});var o=e(537),t=e.n(o),a=e(645),i=e.n(a)()(t());i.push([r.id,':root {\r\n  --primary-font: "Courier New", Courier, monospace;\r\n  --secondary-bg-color: #091126;\r\n  --primary-color: rgba(255, 255, 255, 0.7);\r\n  --fancy-font: "Titillium Web", sans-serif;\r\n}\r\n\r\n.general-form {\r\n  display: flex;\r\n  min-height: 400px;\r\n  flex-direction: column;\r\n  padding: 13px;\r\n  color: var(--primary-color);\r\n}\r\n.general-form label {\r\n  font-size: 1.3rem;\r\n}\r\n.general-form input[type="text"],\r\ninput[type="email"],\r\ninput[type="password"] {\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: solid grey;\r\n  border-width: 1px;\r\n  font-family: var(--primary-font);\r\n  color: var(--primary-color);\r\n  height: 35px;\r\n  font-size: 1.4rem;\r\n  outline: none;\r\n  margin-bottom: 20px;\r\n}\r\n.general-form input[type="text"]:focus,\r\ninput[type="email"]:focus,\r\ninput[type="password"]:focus {\r\n  border: solid grey;\r\n  border-width: thin;\r\n  color: var(--primary-color);\r\n}\r\n.general-form select {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  font-family: var(--primary-font);\r\n  color: var(--primary-color);\r\n  font-size: 1.1rem;\r\n  background-color: var(--secondary-bg-color);\r\n  border: none;\r\n  padding: 5px;\r\n}\r\n.general-form input[type="file"] {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n.general-form button {\r\n  border: none;\r\n  background-color: var(--secondary-bg-color);\r\n  color: var(--primary-color);\r\n  font-family: var(--primary-font);\r\n  font-size: 1.3rem;\r\n  padding: 5px;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n.general-form button:hover {\r\n  filter: brightness(1.2);\r\n}\r\n.general-form button:disabled {\r\n  filter: grayscale(1);\r\n  cursor: not-allowed;\r\n}\r\n\r\n.dark_mode {\r\n  --primary-color: rgba(255, 255, 255, 0.811);\r\n  --primary-bg-color: #00000c;\r\n}\r\n\r\n.light_mode {\r\n  --primary-color: #000000;\r\n  --primary-bg-color: #eeeeee;\r\n}\r\n\r\n.dialog {\r\n  display: none;\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: fit-content;\r\n  min-height: 100vh;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: rgba(0, 0, 0, 0.852);\r\n  z-index: 11;\r\n}\r\n.menu-button {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  padding: 10px;\r\n  font-size: 2rem;\r\n}\r\n.menu-button > button {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: transparent;\r\n\r\n  border: none;\r\n  font-size: 4rem;\r\n}\r\n.loading-indicator {\r\n  display: none;\r\n  width: 100%;\r\n  height: 5px;\r\n  background: white;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.loading-indicator > div {\r\n  position: absolute;\r\n  width: 50%;\r\n  height: 100%;\r\n  background-color: #39a6f6;\r\n  animation-name: load;\r\n  animation-duration: 2.5s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: infinite;\r\n}\r\n@keyframes load {\r\n  from {\r\n    left: -50%;\r\n  }\r\n  to {\r\n    left: 100%;\r\n  }\r\n}\r\n',"",{version:3,sources:["webpack://./src/general.css"],names:[],mappings:"AAAA;EACE,iDAAiD;EACjD,6BAA6B;EAC7B,yCAAyC;EACzC,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,sBAAsB;EACtB,aAAa;EACb,2BAA2B;AAC7B;AACA;EACE,iBAAiB;AACnB;AACA;;;EAGE,6BAA6B;EAC7B,YAAY;EACZ,yBAAyB;EACzB,iBAAiB;EACjB,gCAAgC;EAChC,2BAA2B;EAC3B,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,mBAAmB;AACrB;AACA;;;EAGE,kBAAkB;EAClB,kBAAkB;EAClB,2BAA2B;AAC7B;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,gCAAgC;EAChC,2BAA2B;EAC3B,iBAAiB;EACjB,2CAA2C;EAC3C,YAAY;EACZ,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,2CAA2C;EAC3C,2BAA2B;EAC3B,gCAAgC;EAChC,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,2CAA2C;EAC3C,2BAA2B;AAC7B;;AAEA;EACE,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,sCAAsC;EACtC,WAAW;AACb;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;EACb,eAAe;AACjB;AACA;EACE,eAAe;EACf,YAAY;EACZ,6BAA6B;;EAE7B,YAAY;EACZ,eAAe;AACjB;AACA;EACE,aAAa;EACb,WAAW;EACX,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,yBAAyB;EACzB,oBAAoB;EACpB,wBAAwB;EACxB,iCAAiC;EACjC,mCAAmC;AACrC;AACA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF",sourcesContent:[':root {\r\n  --primary-font: "Courier New", Courier, monospace;\r\n  --secondary-bg-color: #091126;\r\n  --primary-color: rgba(255, 255, 255, 0.7);\r\n  --fancy-font: "Titillium Web", sans-serif;\r\n}\r\n\r\n.general-form {\r\n  display: flex;\r\n  min-height: 400px;\r\n  flex-direction: column;\r\n  padding: 13px;\r\n  color: var(--primary-color);\r\n}\r\n.general-form label {\r\n  font-size: 1.3rem;\r\n}\r\n.general-form input[type="text"],\r\ninput[type="email"],\r\ninput[type="password"] {\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: solid grey;\r\n  border-width: 1px;\r\n  font-family: var(--primary-font);\r\n  color: var(--primary-color);\r\n  height: 35px;\r\n  font-size: 1.4rem;\r\n  outline: none;\r\n  margin-bottom: 20px;\r\n}\r\n.general-form input[type="text"]:focus,\r\ninput[type="email"]:focus,\r\ninput[type="password"]:focus {\r\n  border: solid grey;\r\n  border-width: thin;\r\n  color: var(--primary-color);\r\n}\r\n.general-form select {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  font-family: var(--primary-font);\r\n  color: var(--primary-color);\r\n  font-size: 1.1rem;\r\n  background-color: var(--secondary-bg-color);\r\n  border: none;\r\n  padding: 5px;\r\n}\r\n.general-form input[type="file"] {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n.general-form button {\r\n  border: none;\r\n  background-color: var(--secondary-bg-color);\r\n  color: var(--primary-color);\r\n  font-family: var(--primary-font);\r\n  font-size: 1.3rem;\r\n  padding: 5px;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n.general-form button:hover {\r\n  filter: brightness(1.2);\r\n}\r\n.general-form button:disabled {\r\n  filter: grayscale(1);\r\n  cursor: not-allowed;\r\n}\r\n\r\n.dark_mode {\r\n  --primary-color: rgba(255, 255, 255, 0.811);\r\n  --primary-bg-color: #00000c;\r\n}\r\n\r\n.light_mode {\r\n  --primary-color: #000000;\r\n  --primary-bg-color: #eeeeee;\r\n}\r\n\r\n.dialog {\r\n  display: none;\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: fit-content;\r\n  min-height: 100vh;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: rgba(0, 0, 0, 0.852);\r\n  z-index: 11;\r\n}\r\n.menu-button {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  padding: 10px;\r\n  font-size: 2rem;\r\n}\r\n.menu-button > button {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: transparent;\r\n\r\n  border: none;\r\n  font-size: 4rem;\r\n}\r\n.loading-indicator {\r\n  display: none;\r\n  width: 100%;\r\n  height: 5px;\r\n  background: white;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.loading-indicator > div {\r\n  position: absolute;\r\n  width: 50%;\r\n  height: 100%;\r\n  background-color: #39a6f6;\r\n  animation-name: load;\r\n  animation-duration: 2.5s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: infinite;\r\n}\r\n@keyframes load {\r\n  from {\r\n    left: -50%;\r\n  }\r\n  to {\r\n    left: 100%;\r\n  }\r\n}\r\n'],sourceRoot:""}]);const A=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,o,t,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(o)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(i[c]=!0)}for(var l=0;l<r.length;l++){var s=[].concat(r[l]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),t&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=t):s[4]="".concat(t)),n.push(s))}},n}},537:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(t," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function e(r){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===r){e=o;break}return e}function o(r,o){for(var a={},i=[],A=0;A<r.length;A++){var c=r[A],l=o.base?c[0]+o.base:c[0],s=a[l]||0,p="".concat(l," ").concat(s);a[l]=s+1;var d=e(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)n[d].references++,n[d].updater(u);else{var m=t(u,o);o.byIndex=A,n.splice(A,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function t(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,t){var a=o(r=r||[],t=t||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var A=e(a[i]);n[A].references--}for(var c=o(r,t),l=0;l<a.length;l++){var s=e(a[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=c}}},569:r=>{var n={};r.exports=function(r,e){var o=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,t&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(o){var t=n[o];if(void 0!==t)return t.exports;var a=n[o]={id:o,exports:{}};return r[o](a,a.exports,e),a.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var o in n)e.o(n,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:n[o]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.nc=void 0,(()=>{var r=e(379),n=e.n(r),o=e(795),t=e.n(o),a=e(569),i=e.n(a),A=e(565),c=e.n(A),l=e(216),s=e.n(l),p=e(589),d=e.n(p),u=e(315),m={};m.styleTagTransform=d(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=t(),m.insertStyleElement=s(),n()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;const{apiDomain:f}={dealy:3,timingWindowEarly:.2,timingWindowLate:.1,pointWidth:10,pointSpacing:10,startTime:3,apiDomain:{development:"localhost:5000",production:"shark-app-uuvcm.ondigitalocean.app"}};async function C({url:r,options:n,headers:e}){const o=["localhost","127.0.0.1"].includes(window.location.hostname)?f.development:f.production,t=await fetch(`http://${o}/${r}`,{mode:"cors",credentials:"include",headers:{CSRF_TOKEN:sessionStorage.getItem("csrfToken"),...e},...n});if(!1===t.ok){const r=await t.text();throw new Error(function(r){const n=document.createElement("div");return n.innerHTML=r,n.querySelector("p")?.textContent||"error could not compelte request"}(r))}return t.status,t}const g=new URLSearchParams(window.location.search).get("token"),y=document.querySelector("#password-reset"),B=document.querySelector("#change-form");g&&(y.style.display="none",B.style.display="flex"),console.log(y),y.addEventListener("submit",(r=>{r.preventDefault();const n=new FormData(y),e=y.querySelector("button");e.disabled=!0,async function(r){const n={body:r,method:"post"},e=await C({url:"auth/generate_reset_url",options:n});return await e.text()}(n).then((r=>{y.innerHTML=`<label> ${r} </label>`,setTimeout((()=>{window.location.pathname=""}),1e3)})).catch((r=>{console.log(r),y.querySelector("p").style.display="block"})).finally((()=>{e.disabled=!1}))})),B.addEventListener("submit",(r=>{r.preventDefault();const n=B.querySelector("button"),e=new FormData(B);e.set("token",g);const o=B.querySelector("p");(async function(r){const n={body:r,method:"post"},e=await C({url:"auth/recover_password",options:n});return await e.text()})(e).then((r=>{B.innerHTML=`<label> ${r} </label>`,setTimeout((()=>{window.location.pathname=""}),1e3)})).catch((r=>{console.log(r),o.style.display="block"})).finally((()=>{n.disabled=!1}))}))})()})();
//# sourceMappingURL=reset.bundle.js.map