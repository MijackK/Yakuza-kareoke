(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!t;)t=o[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"57e7c34b48708d08be3f.png",n=e.p+"2309ad590228f14b524f97943a85c2c5.mp3",o=e.p+"a2916083d0d0ef97d1270d2535260600.mp3",a=e.p+"2aea2cb573df7485d1af451d5eb78431.mp4",r=e.p+"b6ba29659cf55d571cc0af85dc3d5bf7.mp3";function c(){const e=document.querySelector("#song_list").children;Array.from(e).forEach((e=>{e.classList.contains("selected")&&e.classList.remove("selected")}))}function s(e,t){document.querySelector(`#${e}`).style.display=t}function i(){const e=document.querySelector(".auth"),t=document.querySelector(".account"),n=document.querySelector("#logout-btn"),o=document.querySelector("#auth-dialog");e.style.display="none",t.style.display="block",o.style.display="none",n.style.display="block"}function l(e){const t=document.querySelector(".button-group").children,n=document.querySelector("#register"),o=document.querySelector("#login");Object.keys(t).forEach((a=>{const r=t[a];if(r===e){e.classList.add("active");const t=r.getAttribute("data-form"),a="register"===t,c="login"===t;return n.style.display=a?"flex":"none",void(o.style.display=c?"flex":"none")}r.classList.remove("active")}))}function u(e){document.querySelector("#auth-dialog").style.display=e?"flex":"none"}function d(e){document.querySelector("#account-dialog").style.display=e?"flex":"none"}function m(e){document.querySelector("#song_wrapper").style.display=e?"flex":"none",document.querySelector("#start-song").parentNode.href="javascript:void(0)"}function p(e,t,n,o){document.querySelector("#username-value").textContent=e,document.querySelector("#email-value").textContent=t,!1===n&&!0===o&&(document.querySelector("#verify-button").style.display="inline-block"),!1===o&&(document.querySelector("#pending-verify").style.display="inline-block")}function g(e,t,n){const o=document.querySelector(`#${e}`);o.querySelector(".value-view").style.display=t,o.querySelector(".edit-view").style.display=n}function y(e,t){document.querySelector(`#${t}`).type=e?"text":"password"}function f(e,t){document.querySelector(`#${t}`).textContent=e}const{apiDomain:h}={dealy:3,timingWindowEarly:.2,timingWindowLate:.1,pointWidth:10,pointSpacing:10,startTime:3,apiDomain:{development:"http://localhost:5000",production:"https://kareokeapi.onrender.com/"}};async function S({url:e,options:t,headers:n={}}){const o=["localhost","127.0.0.1"].includes(window.location.hostname)?h.development:h.production,a=await fetch(`${o}/${e}`,{mode:"cors",credentials:"include",headers:{CSRF_TOKEN:sessionStorage.getItem("csrfToken"),...n},...t});if(!1===a.ok){const e=await a.text();throw new Error(function(e){const t=document.createElement("div");return t.innerHTML=e,t.querySelector("p")?.textContent||"error could not compelte request"}(e))}return a.status,a}function w(e){localStorage.setItem("info",JSON.stringify(e))}function b(){const e=localStorage.getItem("info");return JSON.parse(e)}const v=()=>{let e=JSON.parse(localStorage.getItem("maps"));return e||(localStorage.setItem("maps",JSON.stringify([])),e=JSON.parse(localStorage.getItem("maps"))),e};function k(e){const t=v().find((t=>t.id===e));return t?.beatMap}function q(e,t){let n=JSON.parse(localStorage.getItem("settings"));n||(localStorage.setItem("settings",JSON.stringify({music:.5,hit:.5,offset:0,opacity:.7})),n=JSON.parse(localStorage.getItem("settings"))),n[e]=t,localStorage.setItem("settings",JSON.stringify(n))}async function L(e,t){const n={method:"get",signal:t},o=await S({url:`kareoke/get_map?mapID=${e}`,options:n,headers:{}});return await o.json()}async function E(e,t){const n=await fetch(e,{method:"get",signal:t});return await n.blob()}async function N(e){const t={method:"put",body:JSON.stringify(e)},n=await S({url:"kareoke/save_map",options:t,headers:{"Content-Type":"application/json"}});return await n.text()}const O=function(){let e={isLogin:!1};return{getUserData:()=>e,setUserData:(t,n)=>{e[t]=n},handleLogin:async t=>{const n=await async function({email:e,password:t}){const n={body:JSON.stringify({email:e,password:t}),method:"post"},o=await S({url:"auth/login",options:n,headers:{"Content-Type":"application/json"}});return await o.json()}(t);e={...n,isLogin:!0},sessionStorage.setItem("csrfToken",e.csrfToken),w(e)},handleRegister:async e=>await async function({email:e,password:t,userName:n}){const o={body:JSON.stringify({email:e,password:t,userName:n}),method:"post"},a=await S({url:"auth/register",options:o,headers:{"Content-Type":"application/json"}});return await a.text()}(e),isLogin:async()=>{const t=b();if(!t)return;const n=await async function({csrfToken:e}){const t={"Content-Type":"application/json",CSRF_TOKEN:e};return await S({url:"auth/check",options:{method:"get"},headers:t})}(t),o=await n.json();e={...o,isLogin:!0},sessionStorage.setItem("csrfToken",e.csrfToken),w(o)},handleLogout:async()=>{const e=b();return await async function({csrfToken:e}){const t={CSRF_TOKEN:e},n=await S({url:"auth/logout",options:{method:"post"},headers:t});return await n.text()}(e)},handlePasswordChange:async(t,n)=>{const o=await async function(e,t,n){const o={body:JSON.stringify({email:e,currentPassword:t,newPassword:n}),method:"post"},a=await S({url:"auth/change_password",options:o,headers:{"Content-Type":"application/json"}});return await a.text()}(e.email,t,n);return o},handleEditAccount:async(t,n,o)=>{const a=await async function(e,t,n,o){const a={body:JSON.stringify({email:t,password:e,column:n,value:o}),method:"post"},r=await S({url:"auth/change_acount_info",options:a,headers:{"Content-Type":"application/json"}});return await r.text()}(t,e.email,n,o);return a},handleEmailVerifyGeneration:async()=>await async function(){const e=await S({url:"auth/generate_verify_url",options:{method:"post"}});return await e.text()}()}}(),x=function(){let e,t,n,o=new AbortController,a=new AbortController;const r=e=>{n=e,localStorage.setItem("selectedMap",JSON.stringify(e));const t=k(n.id);if(t&&(n.beatMap=t),!t){const e=JSON.parse(n.beatMap);n.beatMap=e,function({id:e,beatMap:t}){const n=v(),o=n.find((t=>t.id===e));o?o.beatMap=t:n.push({id:e,beatMap:t}),localStorage.setItem("maps",JSON.stringify(n))}({id:n.id,beatMap:e})}},c=()=>{localStorage.removeItem("selectedMap"),n=null},s=async({audio:n,background:a})=>{URL.revokeObjectURL(t),URL.revokeObjectURL(e);const[r,c]=await Promise.all([E(n,o.signal),E(a,o.signal)]);e=URL.createObjectURL(r),t=URL.createObjectURL(c)},i=e=>e.split(".").pop();return{saveMapRemote:async e=>await N({id:e,column:"beatMap",value:k(e)||[]}),handleGetUserBeatMaps:async()=>await async function(){const e=await S({url:"kareoke/get_user_maps",options:{method:"get"},headers:{}});return await e.json()}(),handleGetBeatMaps:async(e,t)=>{const n=t.split(" ").filter((e=>""!==e)).join(",");a.abort(),a=new AbortController;const o=await async function(e,t,n){const o={method:"get",signal:n},a=await S({url:`kareoke/get_published?page=${e}&search=${t}`,options:o,headers:{}});return await a.json()}(e,n,a.signal);return o},getBackgroundUrl:()=>t,getAudioUrl:()=>e,generateBlobUrl:s,getSelectedMap:()=>n,setSelectedMap:r,addBeatMap:e=>{const t=async function(e){const t={method:"post",body:e},n=await S({url:"kareoke/add_map",options:t,headers:{}});return await n.json()}(e);return t},checkSelectedSong:async()=>{const e=JSON.parse(localStorage.getItem("selectedMap"));if(e){const t=await L(e.id,o.signal);return r(t),await s(n),!0}return!1},getExtension:i,abortSelection:()=>{o.abort(),o=new AbortController},clearSelectedMap:c,loadMap:async n=>{const o=await L(n);return await s(o),{mapInfo:o,audioUrl:e,backgroundUrl:t,extension:i(o.background)}},deleteBeatMap:async o=>{const a=await async function(e){const t={method:"delete",body:JSON.stringify({id:e})},n=await S({url:"kareoke/delete_map",options:t,headers:{"Content-Type":"application/json"}});return await n.text()}(o);return URL.revokeObjectURL(t),URL.revokeObjectURL(e),o===n?.id&&c(),function(e){const t=v().filter((t=>t.id!==e));localStorage.setItem("maps",JSON.stringify(t))}(o),a},publishMap:async e=>await async function(e){const t={method:"post",body:JSON.stringify({beatMapID:e})},n=await S({url:"kareoke/publish_request",options:t,headers:{"Content-Type":"application/json"}});return await n.text()}(e),saveMapName:async e=>{if(!n)throw new Error("No map selected");const t=n,o=await N({id:n.id,column:"name",value:e});return t.name=e,{response:o,reload:t===n,extension:i(t.background)}},changeMedia:async(e,t)=>{if(!n)throw new Error("No map selected");const o=n,a=new FormData;a.append("type",e),a.append("media",t),a.append("mapID",n.id);const r=await async function(e){const t={method:"put",body:e},n=await S({url:"kareoke/change_media",options:t,headers:{}});return await n.text()}(a);return n[e]=r,{newURL:r,reload:n===o,extension:i(r)}}}}();let U=null,_=1,M=!1,T="",j=!1;const C=(e=!1)=>{j||M||(s("search-indicator","block"),x.handleGetBeatMaps(_,T).then((t=>{e&&function(e){const t=document.querySelector("#song_list");for(;t.firstChild;)t.firstChild.remove()}(),0!==t.length?(_+=1,t.forEach((e=>{const t=function(e){const t=document.querySelector("#song_list"),n=document.createElement("li");n.title=e.name;const o=document.createElement("span");o.className="list_number",o.textContent=t.children.length,n.append(o);const a=document.createElement("span");return a.className="song-name",a.textContent=e.name,n.append(a),t.append(n),n}(e);t.addEventListener("click",(()=>{!function(e,t){const n=document.querySelector("#tag").children[0];c(),n.textContent=e.name,t.classList.toggle("selected"),function(){const e=document.querySelector(".disk");e.classList.toggle("disk_slide"),requestAnimationFrame((()=>{requestAnimationFrame((()=>{e.classList.toggle("disk_slide")}))}))}(),document.querySelector("#start-song").parentNode.href=`player.html?song=${e.id}`}(e,t)}))}))):M=!0})).catch((e=>{console.log(e),console.log("Problem getting user beat maps")})).finally((()=>{j=!1,s("search-indicator","none")})))};!function(){const e=document.createElement("audio");e.id="hover-sound",e.muted=!0;const c=document.createElement("audio");c.id="select-sound",c.setAttribute("data-artist","Sound Effect by Universfield from Pixabay"),e.src=n,c.src=o,document.querySelector("#start-audio").src=r,document.querySelector("body").prepend(e,c),document.querySelector(".background_image").src=a,document.querySelector(".disk").style.backgroundImage=`url(${t})`}(),function(e){const t=document.querySelector("#music-volume"),n=document.querySelector("#hit-sound"),o=document.querySelector("#time-offset"),a=document.querySelector("#background-opacity");t.value=10*e.music,n.value=10*e.songItem,o.value=e.offset,a.value=10*e.opacity}(JSON.parse(localStorage.getItem("settings"))||{music:.5,hit:.7,offset:0,opacity:1}),O.isLogin().then((()=>{O.getUserData()?.isLogin&&i();const{userName:e,email:t,verified:n,used:o}=O.getUserData();p(e,t,n,o)})),C(),document.querySelector("#song-search").addEventListener("keyup",(e=>{var t;console.log(e.key),"Enter"===e.key&&(t=e.target.value,_=1,M=!1,j=!1,T=t,C(!0))})),document.querySelector("#auth-dialog").addEventListener("click",(e=>{"auth-dialog"===e.target.id&&u(!1)})),document.querySelector("#song_wrapper").addEventListener("click",(e=>{"song_wrapper"===e.target.id&&(m(!1),c())})),document.querySelector("#auth-dialog").addEventListener("click",(e=>{"auth-dialog"===e.target.id&&u(!1)})),document.querySelector(".play").addEventListener("click",(()=>{m(!0)})),document.querySelector(".auth").addEventListener("click",(()=>{u(!0)})),document.querySelector(".account").addEventListener("click",(()=>{d(!0)}));const D=document.querySelector("#song_list");D.addEventListener("scroll",(()=>{j||M||Math.abs(D.scrollHeight-D.clientHeight-D.scrollTop)<1&&C()}));const I=document.querySelector("#login");I.addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(I),n=I.querySelector("button");n.disabled=!0,O.handleLogin({email:t.get("email"),password:t.get("password")}).then((e=>{i(),console.log(e);const{userName:t,email:n,verified:o}=O.getUserData();p(t,n,o),f("","login-error"),I.reset()})).catch((e=>{console.log(e),f(e,"login-error")})).finally((()=>{n.disabled=!1}))}));const J=document.querySelector("#register");J.addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(J),n=J.querySelector("button");n.disabled=!0,O.handleRegister({email:t.get("email"),password:t.get("password"),userName:t.get("username")}).then((e=>{J.reset(),console.log(e),f("","register-error"),l(document.querySelector(".button-group").children[0])})).catch((e=>{console.log(e),f(e,"register-error")})).finally((()=>{n.disabled=!1}))})),document.querySelector("#account-dialog").addEventListener("click",(e=>{"account-dialog"===e.target.id&&d(!1)})),document.querySelector("#logout-btn").addEventListener("click",(()=>{O.handleLogout().then((e=>{console.log(e),function(){const e=document.querySelector(".auth"),t=document.querySelector(".account"),n=document.querySelector("#logout-btn"),o=document.querySelector("#account-dialog");t.style.display="none",e.style.display="block",o.style.display="none",n.style.display="none"}()})).catch((e=>{console.log(e)}))})),document.querySelector("#password-form").addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(e.target);O.handlePasswordChange(t.get("currentPassword"),t.get("newPassword")).then((t=>{console.log(t),e.target.reset(),g("password-form","block","none")})).catch((e=>console.log(e)))})),document.querySelector("#password-edit").addEventListener("click",(()=>g("password-form","none","block"))),document.querySelector("#password-close").addEventListener("click",(()=>g("password-form","block","none"))),document.querySelector("#username-form").addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(e.target);O.handleEditAccount(t.get("currentPassword"),"username",t.get("username")).then((()=>{O.setUserData("userName",t.get("username")),g("username-form","block","none");const{userName:n,email:o}=O.getUserData();p(n,o),e.target.reset()})).catch((e=>{console.log(e)}))})),document.querySelector("#username-edit").addEventListener("click",(()=>g("username-form","none","block"))),document.querySelector("#username-close").addEventListener("click",(()=>g("username-form","block","none"))),document.querySelector("#email-form").addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(e.target);O.handleEditAccount(t.get("currentPassword"),"email",t.get("email")).then((()=>{O.setUserData("email",t.get("email")),g("email-form","block","none");const{userName:n,email:o}=O.getUserData();p(n,o),e.target.reset()})).catch((e=>{console.log(e)}))})),document.querySelector("#email-edit").addEventListener("click",(()=>g("email-form","none","block"))),document.querySelector("#email-close").addEventListener("click",(()=>g("email-form","block","none"))),document.querySelector("#verify-button").addEventListener("click",(e=>{e.target.disabled=!0,O.handleEmailVerifyGeneration().then((t=>{console.log(t),e.target.style.display="none",document.querySelector("#pending-verify").style.display="inline-block"})).catch((e=>{console.log(e)})).finally((()=>{e.target.disabled=!0}))})),document.querySelector("#show-password-register").addEventListener("click",(e=>{y(e.target.checked,"password-register")})),document.querySelector("#show-password-login").addEventListener("click",(e=>{y(e.target.checked,"password-login")}));const R=document.querySelector(".button-group").children;Object.keys(R).forEach((e=>{R[e].addEventListener("click",(e=>{l(e.target)}))}));const A=document.querySelector(".menu-options").children;Object.keys(A).forEach((e=>{A[e].addEventListener("mouseover",(()=>{U=setTimeout((()=>{!function(){const e=document.querySelector("#hover-sound");e.currentTime=0,e.play()}()}),100)})),A[e].addEventListener("mouseout",(()=>{document.querySelector("#hover-sound").pause(),clearTimeout(U)})),A[e].addEventListener("click",(()=>{!function(){const e=document.querySelector("#select-sound");e.currentTime=0,e.play()}()}))})),document.querySelector("#music-volume").addEventListener("change",(e=>{q("music",Number(e.target.value)/10)})),document.querySelector("#hit-sound").addEventListener("change",(e=>{q("hit",Number(e.target.value)/10)})),document.querySelector("#time-offset").addEventListener("click",(e=>{q("offset",e.target.value)})),document.querySelector("#time-offset").addEventListener("keyup",(e=>{q("offset",e.target.value)})),document.querySelector("#background-opacity").addEventListener("change",(e=>{q("opacity",Number(e.target.value)/10)})),document.querySelector("#setting-dialog").addEventListener("click",(e=>{"setting-dialog"===e.target.id&&(e.target.style.display="none")})),document.querySelector(".settings").addEventListener("click",(()=>{document.querySelector("#setting-dialog").style.display="flex"})),document.querySelector("#entry-screen").addEventListener("click",(()=>{!function(){const e=document.querySelector(".background_image"),t=document.querySelector("#hover-sound"),n=document.querySelector("#entry-screen"),o=document.querySelector("#start-audio");t.muted=!1,e.play(),o.play(),n.style.display="none"}()}))})();
//# sourceMappingURL=script.bundle.js.map