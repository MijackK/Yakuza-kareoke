(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!t;)t=o[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"57e7c34b48708d08be3f.png",n=e.p+"2309ad590228f14b524f97943a85c2c5.mp3",o=e.p+"a2916083d0d0ef97d1270d2535260600.mp3",a=e.p+"2aea2cb573df7485d1af451d5eb78431.mp4";function r(){const e=document.querySelector("#song_list").children;Array.from(e).forEach((e=>{e.classList.contains("selected")&&e.classList.remove("selected")}))}function s(e,t){document.querySelector(`#${e}`).style.display=t}function c(){const e=document.querySelector(".auth"),t=document.querySelector(".account"),n=document.querySelector("#logout-btn"),o=document.querySelector("#auth-dialog");e.style.display="none",t.style.display="block",o.style.display="none",n.style.display="block"}function i(e){document.querySelector("#auth-dialog").style.display=e?"flex":"none"}function l(e){document.querySelector("#account-dialog").style.display=e?"flex":"none"}function u(e){document.querySelector("#song_wrapper").style.display=e?"flex":"none",document.querySelector("#start-song").parentNode.href="javascript:void(0)"}function d(e,t,n){document.querySelector("#username-value").textContent=e,document.querySelector("#email-value").textContent=t,!1===n&&(document.querySelector("#verify-button").style.display="inline-block")}function m(e,t,n){const o=document.querySelector(`#${e}`);o.querySelector(".value-view").style.display=t,o.querySelector(".edit-view").style.display=n}function g(e,t){document.querySelector(`#${t}`).type=e?"text":"password"}function p(e,t){document.querySelector(`#${t}`).textContent=e}const{apiDomain:y}={dealy:3,timingWindowEarly:.2,timingWindowLate:.1,pointWidth:10,pointSpacing:10,startTime:3,apiDomain:{development:"http://localhost:5000",production:"https://kareokeapi.onrender.com/"}};async function f({url:e,options:t,headers:n={}}){const o=["localhost","127.0.0.1"].includes(window.location.hostname)?y.development:y.production,a=await fetch(`${o}/${e}`,{mode:"cors",credentials:"include",headers:{CSRF_TOKEN:sessionStorage.getItem("csrfToken"),...n},...t});if(!1===a.ok){const e=await a.text();throw new Error(function(e){const t=document.createElement("div");return t.innerHTML=e,t.querySelector("p")?.textContent||"error could not compelte request"}(e))}return a.status,a}function h(e){localStorage.setItem("info",JSON.stringify(e))}function S(){const e=localStorage.getItem("info");return JSON.parse(e)}const w=()=>{let e=JSON.parse(localStorage.getItem("maps"));return e||(localStorage.setItem("maps",JSON.stringify([])),e=JSON.parse(localStorage.getItem("maps"))),e};function b(e){const t=w().find((t=>t.id===e));return t?.beatMap}function v(e,t){let n=JSON.parse(localStorage.getItem("settings"));n||(localStorage.setItem("settings",JSON.stringify({music:.5,hit:.5,offset:0,opacity:.7})),n=JSON.parse(localStorage.getItem("settings"))),n[e]=t,localStorage.setItem("settings",JSON.stringify(n))}async function k(e,t){const n={method:"get",signal:t},o=await f({url:`kareoke/get_map?mapID=${e}`,options:n,headers:{}});return await o.json()}async function q(e,t){const n=await fetch(e,{method:"get",signal:t});return await n.blob()}async function L(e){const t={method:"put",body:JSON.stringify(e)},n=await f({url:"kareoke/save_map",options:t,headers:{"Content-Type":"application/json"}});return await n.text()}const E=function(){let e={isLogin:!1};return{getUserData:()=>e,setUserData:(t,n)=>{e[t]=n},handleLogin:async t=>{const n=await async function({email:e,password:t}){const n={body:JSON.stringify({email:e,password:t}),method:"post"},o=await f({url:"auth/login",options:n,headers:{"Content-Type":"application/json"}});return await o.json()}(t);e={...n,isLogin:!0},sessionStorage.setItem("csrfToken",e.csrfToken),h(e)},handleRegister:async e=>await async function({email:e,password:t,userName:n}){const o={body:JSON.stringify({email:e,password:t,userName:n}),method:"post"},a=await f({url:"auth/register",options:o,headers:{"Content-Type":"application/json"}});return await a.text()}(e),isLogin:async()=>{const t=S();if(!t)return;const n=await async function({csrfToken:e}){const t={"Content-Type":"application/json",CSRF_TOKEN:e};return await f({url:"auth/check",options:{method:"get"},headers:t})}(t),o=await n.json();e={...o,isLogin:!0},sessionStorage.setItem("csrfToken",e.csrfToken),h(o)},handleLogout:async()=>{const e=S();return await async function({csrfToken:e}){const t={CSRF_TOKEN:e},n=await f({url:"auth/logout",options:{method:"post"},headers:t});return await n.text()}(e)},handlePasswordChange:async(t,n)=>{const o=await async function(e,t,n){const o={body:JSON.stringify({email:e,currentPassword:t,newPassword:n}),method:"post"},a=await f({url:"auth/change_password",options:o,headers:{"Content-Type":"application/json"}});return await a.text()}(e.email,t,n);return o},handleEditAccount:async(t,n,o)=>{const a=await async function(e,t,n,o){const a={body:JSON.stringify({email:t,password:e,column:n,value:o}),method:"post"},r=await f({url:"auth/change_acount_info",options:a,headers:{"Content-Type":"application/json"}});return await r.text()}(t,e.email,n,o);return a},handleEmailVerifyGeneration:async()=>await async function(){const e=await f({url:"auth/generate_verify_url",options:{method:"post"}});return await e.text()}()}}(),N=function(){let e,t,n,o=new AbortController,a=new AbortController;const r=e=>{n=e,localStorage.setItem("selectedMap",JSON.stringify(e));const t=b(n.id);if(t&&(n.beatMap=t),!t){const e=JSON.parse(n.beatMap);n.beatMap=e,function({id:e,beatMap:t}){const n=w(),o=n.find((t=>t.id===e));o?o.beatMap=t:n.push({id:e,beatMap:t}),localStorage.setItem("maps",JSON.stringify(n))}({id:n.id,beatMap:e})}},s=()=>{localStorage.removeItem("selectedMap"),n=null},c=async({audio:n,background:a})=>{URL.revokeObjectURL(t),URL.revokeObjectURL(e);const[r,s]=await Promise.all([q(n,o.signal),q(a,o.signal)]);e=URL.createObjectURL(r),t=URL.createObjectURL(s)},i=e=>e.split(".").pop();return{saveMapRemote:async e=>await L({id:e,column:"beatMap",value:b(e)||[]}),handleGetUserBeatMaps:async()=>await async function(){const e=await f({url:"kareoke/get_user_maps",options:{method:"get"},headers:{}});return await e.json()}(),handleGetBeatMaps:async(e,t)=>{const n=t.split(" ").filter((e=>""!==e)).join(",");a.abort(),a=new AbortController;const o=await async function(e,t,n){const o={method:"get",signal:n},a=await f({url:`kareoke/get_published?page=${e}&search=${t}`,options:o,headers:{}});return await a.json()}(e,n,a.signal);return o},getBackgroundUrl:()=>t,getAudioUrl:()=>e,generateBlobUrl:c,getSelectedMap:()=>n,setSelectedMap:r,addBeatMap:e=>{const t=async function(e){const t={method:"post",body:e},n=await f({url:"kareoke/add_map",options:t,headers:{}});return await n.json()}(e);return t},checkSelectedSong:async()=>{const e=JSON.parse(localStorage.getItem("selectedMap"));if(e){const t=await k(e.id,o.signal);return r(t),await c(n),!0}return!1},getExtension:i,abortSelection:()=>{o.abort(),o=new AbortController},clearSelectedMap:s,loadMap:async n=>{const o=await k(n);return await c(o),{mapInfo:o,audioUrl:e,backgroundUrl:t,extension:i(o.background)}},deleteBeatMap:async o=>{const a=await async function(e){const t={method:"delete",body:JSON.stringify({id:e})},n=await f({url:"kareoke/delete_map",options:t,headers:{"Content-Type":"application/json"}});return await n.text()}(o);return URL.revokeObjectURL(t),URL.revokeObjectURL(e),o===n?.id&&s(),function(e){const t=w().filter((t=>t.id!==e));localStorage.setItem("maps",JSON.stringify(t))}(o),a},publishMap:async e=>await async function(e){const t={method:"post",body:JSON.stringify({beatMapID:e})},n=await f({url:"kareoke/publish_request",options:t,headers:{"Content-Type":"application/json"}});return await n.text()}(e),saveMapName:async e=>{if(!n)throw new Error("No map selected");const t=n,o=await L({id:n.id,column:"name",value:e});return t.name=e,{response:o,reload:t===n,extension:i(t.background)}},changeMedia:async(e,t)=>{if(!n)throw new Error("No map selected");const o=n,a=new FormData;a.append("type",e),a.append("media",t),a.append("mapID",n.id);const r=await async function(e){const t={method:"put",body:e},n=await f({url:"kareoke/change_media",options:t,headers:{}});return await n.text()}(a);return n[e]=r,{newURL:r,reload:n===o,extension:i(r)}}}}();let O=null,x=1,U=!1,M="",T=!1;const _=(e=!1)=>{T||U||(s("search-indicator","block"),N.handleGetBeatMaps(x,M).then((t=>{e&&function(e){const t=document.querySelector("#song_list");for(;t.firstChild;)t.firstChild.remove()}(),0!==t.length?(x+=1,t.forEach((e=>{const t=function(e){const t=document.querySelector("#song_list"),n=document.createElement("li");n.title=e.name;const o=document.createElement("span");o.className="list_number",o.textContent=t.children.length,n.append(o);const a=document.createElement("span");return a.className="song-name",a.textContent=e.name,n.append(a),t.append(n),n}(e);t.addEventListener("click",(()=>{!function(e,t){const n=document.querySelector("#tag").children[0];r(),n.textContent=e.name,t.classList.toggle("selected"),function(){const e=document.querySelector(".disk");e.classList.toggle("disk_slide"),requestAnimationFrame((()=>{requestAnimationFrame((()=>{e.classList.toggle("disk_slide")}))}))}(),document.querySelector("#start-song").parentNode.href=`player.html?song=${e.id}`}(e,t)}))}))):U=!0})).catch((e=>{console.log(e),console.log("Problem getting user beat maps")})).finally((()=>{T=!1,s("search-indicator","none")})))};!function(){const e=document.createElement("audio");e.id="hover-sound";const r=document.createElement("audio");r.id="select-sound",r.setAttribute("data-artist","Sound Effect by Universfield from Pixabay"),e.src=n,r.src=o,document.querySelector("body").prepend(e,r);const s=document.querySelector(".background_image");s.src=a,s.play(),document.querySelector(".disk").style.backgroundImage=`url(${t})`}(),function(e){const t=document.querySelector("#music-volume"),n=document.querySelector("#hit-sound"),o=document.querySelector("#time-offset"),a=document.querySelector("#background-opacity");t.value=10*e.music,n.value=10*e.songItem,o.value=e.offset,a.value=10*e.opacity}(JSON.parse(localStorage.getItem("settings"))||{music:.5,hit:.7,offset:0,opacity:1}),E.isLogin().then((()=>{E.getUserData()?.isLogin&&c();const{userName:e,email:t,verified:n}=E.getUserData();d(e,t,n)})),_(),document.querySelector("#song-search").addEventListener("keyup",(e=>{var t;console.log(e.key),"Enter"===e.key&&(t=e.target.value,x=1,U=!1,T=!1,M=t,_(!0))})),document.querySelector("#auth-dialog").addEventListener("click",(e=>{"auth-dialog"===e.target.id&&i(!1)})),document.querySelector("#song_wrapper").addEventListener("click",(e=>{"song_wrapper"===e.target.id&&(u(!1),r())})),document.querySelector("#auth-dialog").addEventListener("click",(e=>{"auth-dialog"===e.target.id&&i(!1)})),document.querySelector(".play").addEventListener("click",(()=>{u(!0)})),document.querySelector(".auth").addEventListener("click",(()=>{i(!0)})),document.querySelector(".account").addEventListener("click",(()=>{l(!0)}));const j=document.querySelector("#song_list");j.addEventListener("scroll",(()=>{T||U||Math.abs(j.scrollHeight-j.clientHeight-j.scrollTop)<1&&_()}));const C=document.querySelector("#login");C.addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(C),n=C.querySelector("button");n.disabled=!0,E.handleLogin({email:t.get("email"),password:t.get("password")}).then((e=>{c(),console.log(e);const{userName:t,email:n,verified:o}=E.getUserData();d(t,n,o),p("","login-error"),C.reset()})).catch((e=>{console.log(e),p(e,"login-error")})).finally((()=>{n.disabled=!1}))}));const D=document.querySelector("#register");D.addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(D),n=D.querySelector("button");n.disabled=!0,E.handleRegister({email:t.get("email"),password:t.get("password"),userName:t.get("username")}).then((e=>{i(!1),D.reset(),console.log(e),p("","register-error")})).catch((e=>{console.log(e),p(e,"register-error")})).finally((()=>{n.disabled=!1}))})),document.querySelector("#account-dialog").addEventListener("click",(e=>{"account-dialog"===e.target.id&&l(!1)})),document.querySelector("#logout-btn").addEventListener("click",(()=>{E.handleLogout().then((e=>{console.log(e),function(){const e=document.querySelector(".auth"),t=document.querySelector(".account"),n=document.querySelector("#logout-btn"),o=document.querySelector("#account-dialog");t.style.display="none",e.style.display="block",o.style.display="none",n.style.display="none"}()})).catch((e=>{console.log(e)}))})),document.querySelector("#password-form").addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(e.target);E.handlePasswordChange(t.get("currentPassword"),t.get("newPassword")).then((t=>{console.log(t),e.target.reset(),m("password-form","block","none")})).catch((e=>console.log(e)))})),document.querySelector("#password-edit").addEventListener("click",(()=>m("password-form","none","block"))),document.querySelector("#password-close").addEventListener("click",(()=>m("password-form","block","none"))),document.querySelector("#username-form").addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(e.target);E.handleEditAccount(t.get("currentPassword"),"username",t.get("username")).then((()=>{E.setUserData("userName",t.get("username")),m("username-form","block","none");const{userName:n,email:o}=E.getUserData();d(n,o),e.target.reset()})).catch((e=>{console.log(e)}))})),document.querySelector("#username-edit").addEventListener("click",(()=>m("username-form","none","block"))),document.querySelector("#username-close").addEventListener("click",(()=>m("username-form","block","none"))),document.querySelector("#email-form").addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(e.target);E.handleEditAccount(t.get("currentPassword"),"email",t.get("email")).then((()=>{E.setUserData("email",t.get("email")),m("email-form","block","none");const{userName:n,email:o}=E.getUserData();d(n,o),e.target.reset()})).catch((e=>{console.log(e)}))})),document.querySelector("#email-edit").addEventListener("click",(()=>m("email-form","none","block"))),document.querySelector("#email-close").addEventListener("click",(()=>m("email-form","block","none"))),document.querySelector("#verify-button").addEventListener("click",(e=>{e.target.disabled=!0,E.handleEmailVerifyGeneration().then((t=>{console.log(t),e.target.style.display="none"})).catch((e=>{console.log(e)})).finally((()=>{e.target.disabled=!0}))})),document.querySelector("#show-password-register").addEventListener("click",(e=>{g(e.target.checked,"password-register")})),document.querySelector("#show-password-login").addEventListener("click",(e=>{g(e.target.checked,"password-login")}));const I=document.querySelector(".button-group").children;Object.keys(I).forEach((e=>{I[e].addEventListener("click",(e=>{!function(e){const t=document.querySelector(".button-group").children,n=document.querySelector("#register"),o=document.querySelector("#login");Object.keys(t).forEach((a=>{const r=t[a];if(r===e){e.classList.add("active");const t=r.getAttribute("data-form"),a="register"===t,s="login"===t;return n.style.display=a?"flex":"none",void(o.style.display=s?"flex":"none")}r.classList.remove("active")}))}(e.target)}))}));const J=document.querySelector(".menu-options").children;Object.keys(J).forEach((e=>{J[e].addEventListener("mouseover",(()=>{O=setTimeout((()=>{!function(){const e=document.querySelector("#hover-sound");e.currentTime=0,e.play()}()}),100)})),J[e].addEventListener("mouseout",(()=>{document.querySelector("#hover-sound").pause(),clearTimeout(O)})),J[e].addEventListener("click",(()=>{!function(){const e=document.querySelector("#select-sound");e.currentTime=0,e.play()}()}))})),document.querySelector("#music-volume").addEventListener("change",(e=>{v("music",Number(e.target.value)/10)})),document.querySelector("#hit-sound").addEventListener("change",(e=>{v("hit",Number(e.target.value)/10)})),document.querySelector("#time-offset").addEventListener("click",(e=>{v("offset",e.target.value)})),document.querySelector("#time-offset").addEventListener("keyup",(e=>{v("offset",e.target.value)})),document.querySelector("#background-opacity").addEventListener("change",(e=>{v("opacity",Number(e.target.value)/10)})),document.querySelector("#setting-dialog").addEventListener("click",(e=>{"setting-dialog"===e.target.id&&(e.target.style.display="none")})),document.querySelector(".settings").addEventListener("click",(()=>{document.querySelector("#setting-dialog").style.display="flex"}))})();