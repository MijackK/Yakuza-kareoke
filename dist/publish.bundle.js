(()=>{"use strict";const{apiDomain:e}={dealy:3,timingWindowEarly:.2,timingWindowLate:.1,pointWidth:10,pointSpacing:10,startTime:3,apiDomain:{development:"http://localhost:5000",production:"https://kareokeapi.onrender.com/"}};async function t({url:t,options:n,headers:o={}}){const a=["localhost","127.0.0.1"].includes(window.location.hostname)?e.development:e.production,c=await fetch(`${a}/${t}`,{mode:"cors",credentials:"include",headers:{CSRF_TOKEN:sessionStorage.getItem("csrfToken"),...o},...n});if(!1===c.ok){const e=await c.text();throw new Error(function(e){const t=document.createElement("div");return t.innerHTML=e,t.querySelector("p")?.textContent||"error could not compelte request"}(e))}return c.status,c}let n=!1;const o=e=>{const t=document.createElement("li");t.style.padding="5px";const n=document.createElement("a");n.target="_blank",n.textContent=e.name,n.href=`player.html?song=${e.id}`,t.append(n);const o=document.createElement("span");return o.textContent=` by ${e.userName}`,t.append(o),t},a=async(e,o,a,c)=>{n||(n=!1,a.textContent="....",async function(e,n){const o={method:"post",body:JSON.stringify({beatMapID:e,resolution:n})},a=await t({url:"kareoke/publish_map",options:o,headers:{"Content-Type":"application/json"}});return await a.text()}(e,o).then((e=>{console.log(e),c.remove()})).catch((e=>{console.log(e),a.textContent="accept",alert("unable to publish map")})))},c=(e,n,o)=>{confirm("are you sure you want to delete this map?")&&(n.disabled=!0,async function(e){const n={method:"delete",body:JSON.stringify({id:e})},o=await t({url:"kareoke/delete_map_admin",options:n,headers:{"Content-Type":"application/json"}});return await o.text()}(e).then((e=>{console.log(e),o.remove()})).catch((e=>{n.disabled=!1,console.log(e)})))};(async function(){const e=await t({url:"kareoke/get_maps",options:{method:"get"},headers:{"Content-Type":"application/json"}});return await e.json()})().then((e=>{const t=document.querySelector("#request-list"),n=document.querySelector("#published-list"),i=document.querySelector("#unpublished-list"),s=e.filter((e=>"pending"===e.status)),r=e.filter((e=>"published"===e.status)),d=e.filter((e=>"draft"===e.status));s.forEach((e=>{const n=o(e),c=document.createElement("button");c.textContent="accept",n.append(c),c.addEventListener("click",(()=>{a(e.id,"published",c,n)}));const i=document.createElement("button");i.textContent="reject",i.addEventListener("click",(()=>{a(e.id,"draft",i,n)})),n.append(i),t.append(n)})),r.forEach((e=>{const t=o(e),a=document.createElement("button");a.textContent="delete",a.addEventListener("click",(()=>{c(e.id,a,t)})),t.append(a),n.append(t)})),d.forEach((e=>{const t=o(e),n=document.createElement("button");n.textContent="delete",n.addEventListener("click",(()=>{c(e.id,n,t)})),t.append(n),i.append(t)}))})).catch((e=>{console.log(e)}))})();