(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>g});var a=t(601),r=t.n(a),o=t(314),i=t.n(o),c=t(417),l=t.n(c),d=new URL(t(710),t.b),s=new URL(t(885),t.b),p=new URL(t(398),t.b),u=i()(r()),m=l()(d),h=l()(s),f=l()(p);u.push([n.id,`@font-face {\n  font-family: "Warfare";\n  src: url(${m});\n}\n@font-face {\n  font-family: "Schwachsin";\n  src: url(${h});\n}\n@font-face {\n  font-family: "Schwachsin3D";\n  src: url(${f});\n}\n:root {\n  font-size: 16px;\n}\nbody {\n  margin: 0px;\n  padding: 0px;\n  display: flex;\n  flex-direction: column;\n}\n\nnav {\n  font-weight: bolder;\n  text-align: center;\n  font-family: "Warfare";\n  text-shadow: 4px 4px black;\n  color: white;\n}\n\nmain {\n  display: flex;\n  height: fit-content;\n  flex: 1 0 auto;\n}\n#nameMenu {\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n}\n#selectionMenu {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#playerOne,\n#playerTwo {\n  border: 3px solid black;\n  background-color: #234d88b8; /* 222175bb */\n  display: flex;\n  flex-wrap: wrap;\n}\n#nameOne,\n#nameTwo {\n  color: #c9c8d9;\n  font-family: "Schwachsin";\n  font-size: 4rem;\n}\n.tile {\n  width: calc(10% - 4px);\n  height: calc(10% - 4px);\n  border: 2px solid rgb(247, 244, 244);\n  cursor: pointer;\n}\n\n/* NAME MENU */\n#nameArea {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#label {\n  text-align: center;\n  font-family: "Schwachsin3D";\n  color: black;\n}\n\n#nameInput {\n  width: 95%;\n  font-size: 3.5rem;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  font-family: "Schwachsin";\n  border: 4px solid black;\n}\n#nameInput::placeholder {\n  color: rgb(29, 28, 28);\n}\n#nameButton {\n  width: 95%;\n  border-style: none;\n  background-color: rgb(28, 164, 65);\n  cursor: pointer;\n  border: 4px solid black;\n  color: white;\n  font-size: 3rem;\n}\n\n#nameButton:active {\n  transform: scale(95%);\n  transition: 0.2s;\n}\n\n/* Ship Select Menu */\n\n#shipSettings {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#changeDirection {\n  border-style: none;\n  border: 3px solid rgb(0, 0, 0);\n  border-radius: 10px;\n  box-shadow: 0px 10px black;\n  background-color: white;\n  font-size: 1.5rem;\n}\n#changeDirection:active {\n  transform: translateY(10px);\n  box-shadow: 0px 0px black;\n  transition: 0.2s;\n}\n/* modal */\n#modal {\n  border: 1px solid gray;\n  width: 300px;\n}\n#closeModal {\n  float: right;\n  border-radius: 50%;\n  border-style: none;\n  border: 0px transparent solid;\n  background-color: rgb(255, 96, 92);\n  color: black;\n  width: 30px;\n  height: 30px;\n  font-size: 1rem;\n  font-weight: bold;\n  cursor: pointer;\n}\n#closeModal:hover {\n  background-color: rgb(140, 52, 51);\n  transition: 0.4s;\n}\n#winner {\n  font-family: "Schwachsin";\n  font-size: 4rem;\n  height: 40%;\n}\n#reload {\n  font-size: 1.5rem;\n}\n\n@media only screen and (min-width: 901px) {\n  body {\n    background: linear-gradient(to right, #282b27, #51574f, #282b27);\n    background-attachment: fixed;\n    height: 100vh;\n    width: 100vw;\n  }\n  nav {\n    font-size: 7rem;\n    height: 150px;\n    padding: 20px 0;\n  }\n  #selectionMenu {\n    gap: 30px;\n  }\n  #tableMain {\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n  }\n  #playerOne,\n  #playerTwo {\n    width: clamp(350px, 30vw, 500px);\n    height: clamp(350px, 30vw, 500px);\n  }\n  #nameOne {\n    width: clamp(350px, 30vw, 500px);\n  }\n  #nameArea {\n    gap: 10vh;\n    width: 400px;\n  }\n  #nameInput {\n    height: 10vh;\n  }\n  #nameButton {\n    height: 10vh;\n  }\n  #label {\n    font-size: 6rem;\n    width: 700px;\n  }\n  #changeDirection {\n    width: 180px;\n    height: 90px;\n  }\n}\n@media only screen and (min-width: 501px) and (max-width: 900px) {\n  body {\n    background: linear-gradient(to right, #282b27, #51574f, #282b27);\n  }\n  nav {\n    font-size: clamp(32px, 12vw, 5rem);\n    height: 110px;\n    padding: 20px 0;\n  }\n  #selectionMenu {\n    gap: 30px;\n  }\n  #tableMain {\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n  }\n  #playerOne,\n  #playerTwo {\n    width: clamp(300px, 30vw, 400px);\n    height: clamp(300px, 30vw, 400px);\n  }\n  #nameOne {\n    width: clamp(300px, 30vw, 400px);\n  }\n  #nameArea {\n    gap: 10vh;\n    width: 400px;\n  }\n  #nameInput {\n    height: 60px;\n  }\n  #nameButton {\n    height: 60px;\n  }\n  #label {\n    font-size: 6rem;\n    width: 500px;\n  }\n  #changeDirection {\n    width: 180px;\n    height: 90px;\n  }\n}\n@media only screen and (max-width: 500px) {\n  body {\n    background: linear-gradient(to right, #282b27, #51574f, #282b27);\n  }\n  nav {\n    font-size: clamp(32px, 12vw, 5rem);\n    height: 100px;\n    padding: 10px 0;\n  }\n  #selectionMenu {\n    gap: 15px;\n  }\n  #tableMain {\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n  }\n  #playerOne,\n  #playerTwo {\n    width: clamp(300px, 30vw, 350px);\n    height: clamp(300px, 30vw, 350px);\n  }\n  #nameOne {\n    width: clamp(300px, 30vw, 350px);\n  }\n  #nameArea {\n    gap: 10vh;\n    width: 300px;\n  }\n  #nameInput {\n    height: 60px;\n  }\n  #nameButton {\n    height: 60px;\n  }\n  #label {\n    font-size: 5rem;\n    width: 350px;\n  }\n  #changeDirection {\n    width: 120px;\n    height: 60px;\n  }\n}\n`,""]);const g=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);a&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},i=[],c=0;c<n.length;c++){var l=n[c],d=a.base?l[0]+a.base:l[0],s=o[d]||0,p="".concat(d," ").concat(s);o[d]=s+1;var u=t(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=r(m,a);a.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var l=a(n,r),d=0;d<o.length;d++){var s=t(o[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}o=l}}},659:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},710:(n,e,t)=>{n.exports=t.p+"c3ba58ec683fc9c6e166.ttf"},885:(n,e,t)=>{n.exports=t.p+"6731c852894e5ed2a1f5.ttf"},398:(n,e,t)=>{n.exports=t.p+"01f3e224f7aad534ad59.ttf"}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=a[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var a={};(()=>{t.d(a,{U:()=>q});var n=t(72),e=t.n(n),r=t(825),o=t.n(r),i=t(659),c=t.n(i),l=t(56),d=t.n(l),s=t(540),p=t.n(s),u=t(113),m=t.n(u),h=t(208),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),e()(h.A,f),h.A&&h.A.locals&&h.A.locals;class g{constructor(n){this.length=n,this.timesHit=0,this.sunk=!1,this.coordinates=[]}hit(){this.timesHit=this.length>this.timesHit?this.timesHit+1:this.length}isSunk(){return this.sunk=this.timesHit===this.length,this.sunk}}class x{constructor(){this.map=Array.from({length:10},(()=>Array(10).fill(0))),this.ships=[]}place(n,e,t,a){const r="yatay"===a?1:0,o="dikey"===a?1:0;if(r&&e+t>10||o&&n+t>10)return!1;for(let a=0;a<t;a++)if(0!==this.map[n+a*o][e+a*r])return!1;const i=new g(t);for(let a=0;a<t;a++)this.map[n+a*o][e+a*r]=1,i.coordinates.push([n+a*o,e+a*r]);return this.ships.push(i),!0}remove(n,e,t,a){const r="yatay"===a?1:0,o="dikey"===a?1:0;if(r&&e+t>10||o&&n+t>10)return!1;for(let a=0;a<t;a++)if(1!==this.map[n+a*o][e+a*r])return!1;for(let a=0;a<t;a++)this.map[n+a*o][e+a*r]=0;const i=this.ships.findIndex((t=>t.coordinates[0][0]==n&&t.coordinates[0][1]==e));return this.ships.splice(i,1),!0}receiveAttack(n,e){if(void 0!==this.map[e][n])switch(this.map[n][e]){case 0:this.map[n][e]=2;break;case 1:this.map[n][e]=-1;for(let t of this.ships)for(let a of t.coordinates)a[0]==n&&a[1]==e&&t.hit();break;case 2:return}else console.error(`Invalid coordinates: x=${e}, y=${n}`)}over(){for(let n of this.map)if(n.includes(1))return!1;return!0}}class b{constructor(n){this.type=n,this.gameboard=new x}}const v=new b("human"),y=new b("human"),w=document.createElement("main");w.id="tableMain";const E=document.createElement("div");E.id="playerTwo";const M=document.createElement("dialog");M.id="modal";const k=document.createElement("button");k.id="closeModal",k.innerText="X",k.addEventListener("click",(()=>{M.close()}));const C=document.createElement("div");C.id="winner";const A=document.createElement("button");function S(n,e){const t=document.createElement("div");return t.classList="tile",t.setAttribute("data-x",n),t.setAttribute("data-y",e),t}function I(n){for(let e=0;e<10;e++)for(let t=0;t<10;t++){const a=S(t,e);n.appendChild(a)}}A.id="reload",A.innerText="Play Again",A.addEventListener("click",(()=>{location.reload()})),M.appendChild(k),M.appendChild(C),M.appendChild(A),function(){for(let n=5;n>0;n--){let e=n;for(1==n&&(e=3);y.gameboard.ships.length!==6-n;){let n=Math.floor(10*Math.random()),t=Math.floor(10*Math.random()),a=n%2==0?"dikey":"yatay";y.gameboard.place(t,n,e,a)}}}(),I(E),w.appendChild(M);const T=document.createElement("main");T.id="selectionMenu";const L=document.createElement("div");L.id="playerOne";const O=document.createElement("div");O.id="shipSettings",I(L),T.appendChild(O),T.appendChild(L);const $=document.createElement("button");$.id="changeDirection",O.appendChild($);let z="yatay",N="yatay"===z?"X":"Y";async function U(n){return new Promise((e=>{let t=!1;function a(e){if(t)return;const a=e.target;let o=parseInt(a.dataset.x,10),c=parseInt(a.dataset.y,10);v.gameboard.place(c,o,n,z)&&(t=!0,i(),a.addEventListener("click",r))}function r(n){L.removeEventListener("mouseover",a),L.removeEventListener("mouseout",o),n.target.removeEventListener("click",r),t=!1,e()}function o(e){if(!t)return;const a=e.target;let r=parseInt(a.dataset.x,10),o=parseInt(a.dataset.y,10);v.gameboard.remove(o,r,n,z)&&(t=!1,i())}function i(){v.gameboard.map.forEach(((n,e)=>{n.forEach(((n,t)=>{L.querySelector(`.tile[data-x="${t}"][data-y="${e}"]`).style.backgroundColor=1==n?"#abd079":""}))}))}L.addEventListener("mouseover",a),L.addEventListener("mouseout",o)}))}$.textContent=`Direction: ${N}`,$.addEventListener("click",(()=>{z="yatay"===z?"dikey":"yatay",N="yatay"===z?"X":"Y",$.textContent=`Direction: ${N}`})),async function(){await U(5),await U(4),await U(3),await U(3),await U(2),await setTimeout((()=>{const n=document.createElement("div");n.id="container";const e=document.createElement("div");e.innerText=`CAPTAIN ${q.toUpperCase()}`,e.id="nameOne",n.appendChild(e),n.appendChild(L);const t=document.createElement("div");t.id="container";const a=document.createElement("div");a.innerText="COMPUTER",a.id="nameTwo",t.appendChild(a),t.appendChild(E),w.appendChild(n),w.appendChild(t);const r=document.querySelector("body");r.removeChild(T),r.appendChild(w)}),250)}();const j=document.createElement("div");j.innerText="Enter Your Name Captain",j.id="label";const B=document.createElement("input");B.id="nameInput",B.placeholder="YOUR NAME";const R=document.createElement("button");R.innerText="CONFIRM",R.id="nameButton";const D=document.createElement("div");D.id="nameArea",D.appendChild(j),D.appendChild(B),D.appendChild(R);const P=document.createElement("main");P.id="nameMenu",P.appendChild(D);const H=document.querySelector("body");let q;H.appendChild(P),document.getElementById("nameButton").addEventListener("click",(()=>{const n=document.getElementById("nameInput");n.value.length>18?(n.value="",n.placeholder="MAXIMUM 18 CHARS"):""==n.value?n.placeholder="INSERT NAME":(q=n.value,H.removeChild(P),H.appendChild(T))})),function(){const n=setInterval((()=>{const e=document.querySelector("main");if(!e)return console.error("Main element not found"),void clearInterval(n);"tableMain"===e.id&&(clearInterval(n),console.log("Game Started"),E.addEventListener("click",G))}),1e3)}();let Y=[],F=[],X=[-1,1,0,0],_=[0,0,-1,1],W=0;function G(n){if(!n.target||""!=n.target.style.backgroundColor)return;let e,t,a;!function(n){let e=n.getAttribute("data-x"),t=n.getAttribute("data-y");y.gameboard.receiveAttack(t,e);const a=y.gameboard.map[t][e];n.style.backgroundColor=-1==a?"blue":"gray",Q(t,e,y,E),y.gameboard.over()&&V("one")}(n.target);let r=2==Y.length;if(2==Y.length?([t,a]=Y,e=[t,a],r=!0):([t,a]=function(n){let e=Math.floor(10*Math.random()),t=Math.floor(10*Math.random());for(;2==n.gameboard.map[t][e]||-1==n.gameboard.map[t][e];)e=Math.floor(10*Math.random()),t=Math.floor(10*Math.random());return[t,e]}(v),e=[t,a]),function(n){let[e,t]=n;const a=L.querySelector(`.tile[data-x="${t}"][data-y="${e}"]`);v.gameboard.receiveAttack(e,t);const r=v.gameboard.map[e][t];a.style.backgroundColor=-1==r?"red":"gray",v.gameboard.over()&&V("two")}(e),Q(t,a,v,L))return Y=[],void(F=[]);r||-1!=v.gameboard.map[t][a]?r&&(function(n,e){return n<0||n>=10||e<0||e>=10||2==v.gameboard.map[n][e]}(t,a)&&([t,a]=F,W=(W+1)%4),J(t,a)):(F=[t,a],J(t,a))}function J(n,e){let t,a;for(let r=0;r<4;r++)if(W=(W+r)%4,t=n+_[W],a=e+X[W],K(t,a)){Y=[t,a];break}}function Q(n,e,t,a){const r=t.gameboard.ships.find((t=>t.coordinates.some((t=>t[0]==n&&t[1]==e))));if(r&&r.isSunk()){for(let n=0;n<r.coordinates.length;n++){let[e,t]=r.coordinates[n];a.querySelector(`.tile[data-x="${t}"][data-y="${e}"]`).style.backgroundColor="red"}return!0}return!1}function K(n,e){return n>=0&&n<10&&e>=0&&e<10&&-1!=v.gameboard.map[n][e]&&2!=v.gameboard.map[n][e]}function V(n){let e="one"==n?q.toUpperCase():"COMPUTER";E.removeEventListener("click",G),document.getElementById("winner").innerText=`${e} WON`,document.getElementById("modal").showModal()}})()})();