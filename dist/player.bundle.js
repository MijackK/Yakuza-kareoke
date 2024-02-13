(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!t;)t=o[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"969c855321ac764507533b16adaa3661.mp3",n=e.p+"24e994cc06e31ff30ebf.png",o=e.p+"eb7782a9e210ce6eadae.png",a=e.p+"c34da397dab6c00e6af8.png",r=e.p+"a03db81d0ad202171084.png",i=e.p+"0d5ba29aedd42c62ff02.png",c=()=>({timeRange:e=>[Number((e[0].time-.1).toFixed(1)),e[0].time,Number((e[0].time+.1).toFixed(1)),Number((e[0].time+.2).toFixed(1))],greatRange:e=>[Number((e[0].time-.1).toFixed(1)),e[0].time],endRange:e=>[e[0].duration-.1,e[0].duration,e[0].duration+.1,e[0].duration+.2],shouldRun:e=>0!==e.length,removeInput:(e,t,n,o=0)=>{const a=n.inputList.length;return n.inputList=n.inputList.filter((n=>n.time+e-o>t)),a-n.inputList.length!=0?{Success:!0,performance:"miss",incrementScore:0}:{Success:!1}}}),s=e.p+"e570ee80df343546e637.png",l=e.p+"fb3d063b37b3303b0b8e.png",d=e.p+"4027a74e047421e26d88.png",u=e.p+"454c4c133c9e21a54a40.png",p={great:s,miss:l,bad:d,good:u},m=e.p+"66ad1dbd7ca0dbc79a26.png",g=e.p+"54905605f6af4abba1e1.png",y=e.p+"978028f3533655a2d87e.png",h=e.p+"4a20d8fb54006780b071.png",f=e.p+"b694b7e059e6fbe710b6.png",b=e.p+"38350e147f119113734c.png",w=Number((1497.5/3).toFixed(3));let S;const k={ArrowUp:document.createElement("img"),ArrowLeft:document.createElement("img"),ArrowRight:document.createElement("img"),ArrowDown:document.createElement("img")},L={ArrowUp:30,ArrowRight:83,ArrowLeft:130,ArrowDown:185};let v,x;k.ArrowUp.src=y,k.ArrowLeft.src=h,k.ArrowDown.src=f,k.ArrowRight.src=b;const q=document.createElement("img"),T={rapid:g,hold:m},E=(e,t)=>{const n=1897.5-e*w;v.fillStyle="blue",v.beginPath(),v.drawImage(k[t],n-22.5,L[t]-22.5,55,55),v.fill(),v.stroke()},M=(e,t,n,o,a,r)=>{q.src=T[a];const i=1897.5-n*w,c=i+o*w,s=i+o*w/2-25;let l;const d=r===S&&e>=t-.2;"hold"===a&&(l=d?50:55),"rapid"===a&&(l=d?50:55),v.font="40px serif",v.strokeStyle="rapid"===a?"blue":"#add8e6",v.lineWidth=10,v.beginPath(),v.arc(i,L[r],15.5,0,2*Math.PI),v.arc(c,L[r],15.5,0,2*Math.PI),v.stroke(),v.beginPath(),v.drawImage(k[r],i-22.5,L[r]-22.5,l,l),v.drawImage(q,s,L[r]-22.5,75,35),v.drawImage(k[r],c-22.5,L[r]-22.5,l,l),v.stroke()},I=(e,t)=>{v.clearRect(0,0,x.width,x.height),(e=>{for(let t=0;t<3;t+=1){const n=633*(t+1)-w*e%633;v.beginPath(),v.strokeStyle="gray",v.lineWidth=1,v.moveTo(n,15),v.lineTo(n,195),v.stroke()}})(e);for(let n=0;n<t.length;n+=1){const o=t[n];o.time+o.duration+.2>=e&&e>=o.time-3&&("click"===o.type?E(e+3-o.time,o.key):M(e,o.time,e+3-o.time,o.duration,o.type,o.key))}};window.addEventListener("resize",(()=>{x.width=window.innerWidth})),window.addEventListener("keydown",(e=>{S=e.key})),window.addEventListener("keyup",(()=>{S=null}));const{apiDomain:N}={dealy:3,timingWindowEarly:.2,timingWindowLate:.1,pointWidth:10,pointSpacing:10,startTime:3,apiDomain:{development:"http://localhost:5000",production:"https://shark-app-uuvcm.ondigitalocean.app/"}};async function A({url:e,options:t,headers:n={}}){const o=["localhost","127.0.0.1"].includes(window.location.hostname)?N.development:N.production,a=await fetch(`${o}/${e}`,{mode:"cors",credentials:"include",headers:{CSRF_TOKEN:sessionStorage.getItem("csrfToken"),...n},...t});if(!1===a.ok){const e=await a.text();throw new Error(function(e){const t=document.createElement("div");return t.innerHTML=e,t.querySelector("p")?.textContent||"error could not compelte request"}(e))}return a.status,a}async function F(e,t){const n={method:"get",signal:t},o=await A({url:`kareoke/get_map?mapID=${e}`,options:n,headers:{}});return await o.json()}async function U(e,t){const n=await fetch(e,{method:"get",signal:t});return await n.blob()}async function $(e){const t={method:"put",body:JSON.stringify(e)},n=await A({url:"kareoke/save_map",options:t,headers:{"Content-Type":"application/json"}});return await n.text()}const R=()=>{let e=JSON.parse(localStorage.getItem("maps"));return e||(localStorage.setItem("maps",JSON.stringify([])),e=JSON.parse(localStorage.getItem("maps"))),e};function O(e){const t=R().find((t=>t.id===e));return t?.beatMap}function C(){return JSON.parse(localStorage.getItem("settings"))||{music:.5,hit:.7,offset:0,opacity:1}}function j(){const e=document.querySelector("#click-audio");e.currentTime=0,e.play()}function P(){document.querySelector("#pause-btn").style.display="none",document.querySelector("#menu-dialog").style.display="flex"}function D(e,t){const n=document.querySelector(".combo-container"),o=document.querySelector("#score"),a=document.querySelector("#combo-score");if(o.textContent=e,a.textContent=t,0===t)return n.style.opacity="0",void(document.body.className="cold-mode");1===t&&(n.style.opacity=1),20===t&&(document.body.className="heat-mode"),n.classList.toggle("jump-animation"),requestAnimationFrame((()=>{requestAnimationFrame((()=>{n.classList.toggle("jump-animation")}))}))}x=document.querySelector(".cplayer"),x.width=window.innerWidth,x.height=215,x.getContext?v=x.getContext("2d"):console.log("canvas not supported");const J=function(){let e,t,n,o=new AbortController,a=new AbortController;const r=e=>{n=e,localStorage.setItem("selectedMap",JSON.stringify(e));const t=O(n.id);if(t&&(n.beatMap=t),!t){const e=JSON.parse(n.beatMap);n.beatMap=e,function({id:e,beatMap:t}){const n=R(),o=n.find((t=>t.id===e));o?o.beatMap=t:n.push({id:e,beatMap:t}),localStorage.setItem("maps",JSON.stringify(n))}({id:n.id,beatMap:e})}},i=()=>{localStorage.removeItem("selectedMap"),n=null},c=async({audio:n,background:a})=>{URL.revokeObjectURL(t),URL.revokeObjectURL(e);const[r,i]=await Promise.all([U(n,o.signal),U(a,o.signal)]);e=URL.createObjectURL(r),t=URL.createObjectURL(i)},s=e=>e.split(".").pop();return{saveMapRemote:async e=>await $({id:e,column:"beatMap",value:O(e)||[]}),handleGetUserBeatMaps:async()=>await async function(){const e=await A({url:"kareoke/get_user_maps",options:{method:"get"},headers:{}});return await e.json()}(),handleGetBeatMaps:async(e,t)=>{const n=t.split(" ").filter((e=>""!==e)).join(",");a.abort(),a=new AbortController;const o=await async function(e,t,n){const o={method:"get",signal:n},a=await A({url:`kareoke/get_published?page=${e}&search=${t}`,options:o,headers:{}});return await a.json()}(e,n,a.signal);return o},getBackgroundUrl:()=>t,getAudioUrl:()=>e,generateBlobUrl:c,getSelectedMap:()=>n,setSelectedMap:r,addBeatMap:e=>{const t=async function(e){const t={method:"post",body:e},n=await A({url:"kareoke/add_map",options:t,headers:{}});return await n.json()}(e);return t},checkSelectedSong:async()=>{const e=JSON.parse(localStorage.getItem("selectedMap"));if(e){const t=await F(e.id,o.signal);return r(t),await c(n),!0}return!1},getExtension:s,abortSelection:()=>{o.abort(),o=new AbortController},clearSelectedMap:i,loadMap:async n=>{const o=await F(n);return await c(o),{mapInfo:o,audioUrl:e,backgroundUrl:t,extension:s(o.background)}},deleteBeatMap:async o=>{const a=await async function(e){const t={method:"delete",body:JSON.stringify({id:e})},n=await A({url:"kareoke/delete_map",options:t,headers:{"Content-Type":"application/json"}});return await n.text()}(o);return URL.revokeObjectURL(t),URL.revokeObjectURL(e),o===n?.id&&i(),function(e){const t=R().filter((t=>t.id!==e));localStorage.setItem("maps",JSON.stringify(t))}(o),a},publishMap:async e=>await async function(e){const t={method:"post",body:JSON.stringify({beatMapID:e})},n=await A({url:"kareoke/publish_request",options:t,headers:{"Content-Type":"application/json"}});return await n.text()}(e),saveMapName:async e=>{if(!n)throw new Error("No map selected");const t=n,o=await $({id:n.id,column:"name",value:e});return t.name=e,{response:o,reload:t===n,extension:s(t.background)}},changeMedia:async(e,t)=>{if(!n)throw new Error("No map selected");const o=n,a=new FormData;a.append("type",e),a.append("media",t),a.append("mapID",n.id);const r=await async function(e){const t={method:"put",body:e},n=await A({url:"kareoke/change_media",options:t,headers:{}});return await n.text()}(a);return n[e]=r,{newURL:r,reload:n===o,extension:s(r)}}}}(),_=function(){const e=C().offset/1e3;console.log(e);let t,n=0+e,o=0+e,a=!1;return{getTimeElapsed:()=>n,getPreviousTime:()=>o,getPlay:()=>a,getStartTime:()=>t,getScore:()=>0,setPreviousTime:t=>{o=t+e},setTimeElapsed:t=>{n=t+e},setPlay:e=>{a=e},startMap:()=>{t=Date.now()-1e3*n,a=!0}}}(),B={great:0,good:0,bad:0,miss:0},W={great:100,good:60,bad:0,miss:0};let H,K,G,z=0,Q=0,V=!1,X=[],Y=[],Z=[],ee=[];const te=e=>{if(e.Success){if(B[e.performance]+=1,["bad","miss"].includes(e.performance))return Q=0,void D(z,Q);z+=W[e.performance]*(Q>=20?1.5:1),Q+=1,D(z,Q)}},ne=(()=>{const e=document.querySelector(".performance-visualiser"),t=document.querySelector("#first"),n=document.querySelector("#second"),o=document.querySelector("#third"),a=document.querySelector("#fourth"),r=(e,t)=>{for(let n=0;n<e.length;n+=1)e[n].className=t};return{inputFeedback:e=>{if(e.Success)switch(r([t,n,o,a],"button input-visualiser"),e.Key){case"ArrowUp":t.classList.toggle("explode-animation");break;case"ArrowRight":n.classList.toggle("explode-animation");break;case"ArrowLeft":o.classList.toggle("explode-animation");break;case"ArrowDown":a.classList.toggle("explode-animation")}},showIndicator:t=>{t.Success&&(e.style.backgroundImage=`url(${p[t.performance]})`,r([e],"performance-visualiser"),requestAnimationFrame((()=>{requestAnimationFrame((()=>{e.classList.toggle("popup-animation")}))})))},clearAnimation:r}})(),oe=(e,t,n)=>{let o=!1;if(0!==t.inputList.length){const a=t[n](e,_.getTimeElapsed(),t.inputList);ne.inputFeedback(a),ne.showIndicator(a),te(a),o=a.Success}return o},ae=(e,t,n)=>{const o=t.removeInput(e,n,t);ne.showIndicator(o),te(o)},re=()=>{cancelAnimationFrame(H),_.setPlay(!1),I(_.getTimeElapsed(),[...Y.inputList,...ee.inputList,...Z.inputList])},ie=()=>{(()=>{if(!1===_.getPlay())return;const e=Number((Date.now()-_.getStartTime())/1e3),t=_.getTimeElapsed()+(e-_.getPreviousTime());if(_.setTimeElapsed(t),0===Y.inputList.length&&0===Z.inputList.length&&0===ee.inputList.length){re();const e=((e,t)=>{const c=e>20?1.5:1,s=t/(e*W.great*c-(e>20?20*c*W.great:0));return s>.9?{rank:"S",color:"#ffd700",shadow:"#ffd700ab",image:n}:s>.8?{rank:"A",color:"#0ed145",shadow:"#0ed145ab",image:o}:s>.7?{rank:"B",color:"#00a8f3",shadow:"#00a8f3ab",image:a}:s>.6?{rank:"C",color:"#ff6c00",shadow:"#ff6c00ab",image:r}:{rank:"D",color:"#ffffff",shadow:"#ffffffab",image:i}})(X.length,z);return function(e,t,n,o){document.querySelector("#song").volume=.1;const a=Object.keys(t).reduce(((e,n)=>e+t[n]),0);document.querySelector("#high-score").style.display=n?"block":"none",document.querySelector("#calculate-score").style.display="flex",document.querySelector("#final-score").innerHTML=`Scored: <span class="score"> ${e}</span>`;const r=document.querySelector("#score-letter");r.src=o.image,r.alt=o.rank,r.style.color=o.color,r.style.textShadow=`5px 3px 1px ${o.shadow}`,document.querySelector("#great-hits").innerHTML=`\n  <div style="display:flex; align-items:center;" >\n    <img style="width:117px; height:35px"  src=${s} alt="Great" > \n    <span>: ${t.great}</span> \n  </div>\n  <span>${(t.great/a*100).toFixed(1)||"0"}%</span>`,document.querySelector("#good-hits").innerHTML=`\n  <div align-items:center>\n\n    <img style="width:117px; height:35px" src=${u} alt="Good" /> \n    <span>: ${t.good}</span> \n  </div>\n  <span>${(t.good/a*100).toFixed(1)||"0"}%</span>`,document.querySelector("#bad-hits").innerHTML=`\n  <div  style="display:flex;align-items:center" >\n    <img style="width:117px; height:35px"  src=${d} alt="Bad" /> \n    <span>: ${t.bad}</span> \n  </div>\n  <span>${(t.bad/a*100).toFixed(1)||"0"}%</span>`,document.querySelector("#miss-hits").innerHTML=`\n  <div style="display:flex;align-items:center" >\n    <img style="width:117px; height:35px"  src=${l} alt="Miss" /> \n    <span>: ${t.miss}</span> \n  </div>\n  <span>${(t.miss/a*100).toFixed(1)||"0"}%</span>`}(z,B,z>K,e),void(z>K&&(K=z,async function(e,t){const n={method:"put",body:JSON.stringify({score:e,beatMapID:t})},o=await A({url:"kareoke/highscore",options:n,headers:{"Content-Type":"application/json"}});return await o.text()}(z,G).then((e=>{console.log(e)})).catch((e=>{console.log(e),console.log("Could not update highscore")}))))}if(0!==ee.inputList.length){const e=ee.countInputs(ee.inputList,Number(_.getTimeElapsed().toFixed(1)));ne.inputFeedback(e),ne.showIndicator(e),te(e)}0!==Y.inputList.length&&ae(.2,Y,_.getTimeElapsed()),0!==Z.inputList.length&&ae(Z.inputList[0].duration+.2,Z,_.getTimeElapsed()),0!==ee.inputList.length&&ae(ee.inputList[0].duration+.2,ee,_.getTimeElapsed()),_.setPreviousTime(e),document.querySelector("#time").textContent=_.getTimeElapsed().toFixed(3)})();const e=Y.inputList.concat(ee.inputList).concat(Z.inputList);I(_.getTimeElapsed(),e,_.getPlay()),H=requestAnimationFrame(ie)},ce=()=>{H=requestAnimationFrame(ie),_.startMap(),function(){const e=C(),t=document.querySelector("#song");t.volume=e.music;const n=document.querySelector("#background-video");t.play(),n.play()}(),document.querySelector("#pause-btn").style.display="block",document.querySelector("#menu-dialog").style.display="none"},se=()=>{const e=X.map((e=>({...e})));Y=(e=>{const t=c();return{checkInput:(e,n,o)=>{let a=!1;const r=o[0].key;let i="bad";const c=Number(n.toFixed(1));return t.timeRange(o).includes(c)&&(a=!0,e===o[0].key&&(i=n>=o[0].time-.075&&n<=o[0].time+.075?"great":"good"),o.shift()),{Success:a,Key:r,performance:i}},inputList:e,...t}})(e.filter((e=>"click"===e.type))),Z=(e=>{const t=c();let n;return{checkDown:(e,t,o)=>{const a=Number(t).toFixed(1),r=o[0].time-.1<=a&&o[0].time+o[0].duration>a;let i=!1;const c=o[0].key;return r&&(e===o[0].key?n=a:(o.shift(),i=!0)),{Success:i,performance:"bad",Key:c}},checkUp:(e,o,a)=>{const r=Number((o-n).toFixed(1)),i=t.endRange(a);let c="bad",s=!1;const l=a[0].key;return i.includes(r)&&e===a[0].key?(a.shift(),s=!0,c="great"):n<o&&o>=a[0].time+a[0].duration/2?(a.shift(),s=!0,c="good"):n<o&&o<a[0].time+a[0].duration/2&&(a.shift(),s=!0),n=1/0,{Success:s,Key:l,performance:c}},inputList:e,...t}})(e.filter((e=>"hold"===e.type))),ee=(e=>{let t=0;return{checkInput:(e,n,o)=>{const a=n[0].time+n[0].duration;o>=n[0].time&&o<a&&e===n[0].key&&(t+=1,n[0].click=t)},countInputs:(e,n)=>{const o=e[0].time+e[0].duration,a=6*e[0].duration;let r=!1,i="bad";const c=e[0].key;return n>=o&&(t>=a&&(e.shift(),r=!0,i="great"),t>0&&t<a&&(t>=a/2&&(i="good"),e.shift(),r=!0),t=0),{Success:r,Key:c,performance:i}},inputList:e,...c()}})(e.filter((e=>"rapid"===e.type)))},le=()=>{re(),function(){const e=document.querySelector("#song"),t=document.querySelector("#background-video");e.pause(),t.pause()}(),P()},de=()=>{_.setTimeElapsed(0),_.setPreviousTime(0),z=0,Q=0,B.great=0,B.good=0,B.bad=0,B.miss=0,function(){const e=document.querySelector("#song"),t=document.querySelector("#background-video"),n=document.querySelector(".combo-container"),o=document.querySelector("#score");document.querySelector("#calculate-score").style.display="none",o.textContent="",n.style.opacity="0",e.currentTime=0,t.currentTime=0}(),D(0,0),se(),ce()};document.querySelector("body").addEventListener("keydown",(e=>{V||(!0!==oe(e.key,Y,"checkInput")&&oe(e.key,Z,"checkDown"),(e=>{0!==ee.inputList.length&&ee.checkInput(e,ee.inputList,_.getTimeElapsed().toFixed(1))})(e.key),j(),V=!0)})),document.querySelector("body").addEventListener("keyup",(e=>{if(V=!1,0!==Z.inputList.length){const t=Z.checkUp(e.key,_.getTimeElapsed().toFixed(1),Z.inputList);ne.inputFeedback(t),ne.showIndicator(t),!0===t.Success&&j(),te(t)}})),document.querySelector("body").addEventListener("keyup",(e=>{if("Escape"===e.key){if(_.getPlay())return void le();ce()}})),document.querySelector("#resume-btn").addEventListener("click",(()=>{ce()})),document.querySelector("#home-btn").addEventListener("click",(()=>{window.location.href="index.html"})),document.querySelector("#restart-btn").addEventListener("click",(()=>de())),document.querySelector("#pause-btn").addEventListener("click",(()=>le())),document.querySelector("#play-again").addEventListener("click",(()=>de()));const ue=document.location.search.split("?song=")[1];document.querySelector("#loading-map").style.display="flex",J.loadMap(ue).then((({mapInfo:e,audioUrl:n,backgroundUrl:o,extension:a})=>{X=JSON.parse(e.beatMap),K=e.highscore||0,console.log(K),G=e.id,function(e,t){const n=document.querySelector("#menu-name"),o=document.querySelector("#highscore-name"),a=document.querySelector("#map-author");n.textContent=e,o.textContent=e,a.textContent=`Mapped by ${t}`}(e.name,e.author),se(),function(e,t,n,o){const a=C(),r=document.querySelector("#song"),i=document.querySelector("#click-audio"),c=document.querySelector("#background-video");c.style.filter=`brightness(${a.opacity})`;const s=document.querySelector("#background-image");if(s.style.filter=`brightness(${a.opacity})`,r.src=e,r.volume=a.music,i.src=n,i.volume=a.hit,r.currentTime=0,"mp4"===o)return c.src=t,void(c.currentTime=0);s.style.backgroundImage=`url(${t})`}(n,o,t,a),P()})).catch((e=>{console.log(e)})).finally((()=>{document.querySelector("#loading-map").style.display="none"}))})();
//# sourceMappingURL=player.bundle.js.map