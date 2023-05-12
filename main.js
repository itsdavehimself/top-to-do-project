(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(81),o=n.n(a),r=n(645),c=n.n(r)()(o());c.push([e.id,"",""]);const d=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(a)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(c[s]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);a&&c[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},c=[],d=0;d<e.length;d++){var s=e[d],i=a.base?s[0]+a.base:s[0],l=r[i]||0,u="".concat(i," ").concat(l);r[i]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,a);a.byIndex=d,t.splice(d,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var d=n(r[c]);t[d].references--}for(var s=a(e,o),i=0;i<r.length;i++){var l=n(r[i]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=s}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),o=n.n(a),r=n(569),c=n.n(r),d=n(565),s=n.n(d),i=n(216),l=n.n(i),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const v=[],h=document.createElement("div"),y=document.createElement("form"),C=document.createElement("label"),k=document.createElement("input"),E=document.createElement("label"),b=document.createElement("input"),g=document.createElement("label"),A=document.createElement("input"),x=document.createElement("label"),L=document.createElement("select"),j=document.createElement("option"),I=document.createElement("option"),S=document.createElement("option"),B=document.createElement("button"),w=document.createElement("button");function T(e){document.querySelector(".tasks").appendChild(h),h.appendChild(y),y.appendChild(C),y.appendChild(k),y.appendChild(E),y.appendChild(b),y.appendChild(g),y.appendChild(A),y.appendChild(x),y.appendChild(L),L.appendChild(j),L.appendChild(I),L.appendChild(S),y.appendChild(w),y.appendChild(B),console.log(`about to run add task function for project: ${e.name}`),B.addEventListener("click",function(e){return t=>{t.preventDefault(),console.log(`just ran add task function for project: ${e.name}`);const n=document.getElementById("task-name").value,a=document.getElementById("task-description").value,o=document.getElementById("task-date").value,r=document.getElementById("task-priority").value,c=document.querySelector(".tasks");e.createTask(n,a,o,r),document.getElementById("task-name").value="",document.getElementById("task-description").value="",document.getElementById("task-date").value="",document.getElementById("task-priority").value="",c.removeChild(h),console.log(e),function(e){document.querySelector(".tasks");const t=e.taskArr;for(let e=0;e<t.length;e+=1)console.log(t[e].taskName)}(e)}}(e),{once:!0}),w.addEventListener("click",function(e){return t=>{t.preventDefault();const n=document.querySelector(".tasks");console.log(`ran cancel task fnction for project: ${e.name}`),document.getElementById("task-name").value="",document.getElementById("task-description").value="",document.getElementById("task-date").value="",document.getElementById("task-priority").value="",n.removeChild(h)}}(e),{once:!0})}h.classList.add("add-task-form"),y.classList.add("task-form"),C.setAttribute("for","task-name"),E.setAttribute("for","task-description"),g.setAttribute("for","task-date"),x.setAttribute("for","task-priority"),C.textContent="Name",E.textContent="Notes",g.textContent="Due",x.textContent="Priority",k.setAttribute("type","text"),k.setAttribute("id","task-name"),k.setAttribute("name","task-name"),b.setAttribute("type","textarea"),b.setAttribute("id","task-description"),b.setAttribute("name","task-description"),A.setAttribute("type","date"),A.setAttribute("id","task-date"),A.setAttribute("name","task-date"),L.setAttribute("name","task-priority"),L.setAttribute("id","task-priority"),j.setAttribute("value","low"),j.textContent="Low",I.setAttribute("value","medium"),I.textContent="Medium",S.setAttribute("value","high"),S.textContent="High",B.classList.add("add-task-btn"),B.textContent="Add task",w.classList.add("cancel-task-btn"),w.textContent="Cancel";const q=document.querySelector(".content"),M=function(e){q.replaceChildren(),console.log(`from show project${e.name}`);const t=document.createElement("div"),n=document.createElement("p"),a=document.createElement("div"),o=document.createElement("div");a.classList.add("tasks"),o.classList.add("add-task"),o.textContent="Add task",o.addEventListener("click",(()=>T(e))),n.textContent=`${e.name}`,t.classList.add("project-view"),q.appendChild(t),t.appendChild(n),t.appendChild(a),t.appendChild(o)},N=function(){const e=document.querySelector(".current-projects");e.replaceChildren();for(let t=0;t<v.length;t+=1){const n=document.createElement("div"),a=v[t].name,o=v[t];n.textContent=`${a}`,n.classList.add("project-card"),e.appendChild(n),n.addEventListener("click",(()=>M(o)),{once:!0})}},D=document.createElement("form"),P=document.createElement("label"),$=document.createElement("input"),Z=document.createElement("button");D.classList.add("create-project"),P.textContent="Name",P.setAttribute("for","project-name"),$.setAttribute("id","project-name"),$.setAttribute("name","project-name"),$.setAttribute("type","text"),Z.textContent="Add",Z.classList.add("add-project-btn"),Z.addEventListener("click",(function(e){const t=document.querySelector(".projects"),n=function(e){const t={name:document.getElementById("project-name").value,taskArr:[],id:Date.now(),createTask(e,t,n,a){const o={taskName:e,description:t,dueDate:n,priority:a,id:Date.now()};this.taskArr.push(o),console.log(this.taskArr)},deleteTask(e){const t=this.taskArr.findIndex((t=>t.id===e));this.taskArr.splice(t,1)}};return v.push(t),console.log(v),t}();console.log(n),document.getElementById("project-name").value="",t.removeChild(D),e.preventDefault()})),Z.addEventListener("click",N);const H=document.querySelector(".content"),O=document.createElement("div"),F=document.createElement("div"),R=document.createElement("button"),U=document.createElement("div");U.classList.add("current-projects"),O.classList.add("projects"),F.classList.add("add-project"),R.classList.add("add-project-btn"),R.textContent="+ Add Project",R.addEventListener("click",(function(){document.querySelector(".projects").appendChild(D),D.appendChild(P),D.appendChild($),D.appendChild(Z)}));const _=document.createElement("button"),J=document.createElement("button");_.classList.add("home-btn"),_.textContent="Home",J.classList.add("all-projects-btn"),J.textContent="Projects";const z=document.querySelector(".content");_.addEventListener("click",(function(){z.removeChild(z.firstChild)})),J.addEventListener("click",(function(){z.removeChild(z.firstChild),H.appendChild(O),O.appendChild(F),F.appendChild(R),O.appendChild(U),N()}))})()})();