(()=>{"use strict";const{apiDomain:t}={dealy:3,timingWindowEarly:.2,timingWindowLate:.1,pointWidth:10,pointSpacing:10,startTime:3,apiDomain:{development:"http://localhost:5000",production:"https://kareokeapi.onrender.com/"}};async function e({url:e,options:n,headers:o={}}){const a=["localhost","127.0.0.1"].includes(window.location.hostname)?t.development:t.production,r=await fetch(`${a}/${e}`,{mode:"cors",credentials:"include",headers:{CSRF_TOKEN:sessionStorage.getItem("csrfToken"),...o},...n});if(!1===r.ok){const t=await r.text();throw new Error(function(t){const e=document.createElement("div");return e.innerHTML=t,e.querySelector("p")?.textContent||"error could not compelte request"}(t))}return r.status,r}const n=t=>{const e=document.createElement("li"),n=document.createElement("span");n.textContent=`${t.username} (${t.id})`,e.append(n);const o=document.createElement("p");e.append(o),o.textContent=t.banned?`reason: ${t.banned}`:"";const a=document.createElement("button");return e.append(a),{listItem:e,button:a}};(async function(){const t=await e({url:"auth/get_users",options:{method:"get"}});return await t.json()})().then((t=>{const o=t.filter((t=>t.banned)),a=t.filter((t=>!t.banned)),r=document.querySelector("#users"),s=document.querySelector("#ban");a.forEach((t=>{const{listItem:o,button:a}=n(t);a.textContent="ban";const s=document.createElement("input");o.append(s),a.addEventListener("click",(()=>{""!==s.value?((t,n,o,a)=>{confirm("are you sure you want to ban this user?")&&(o.textContent="...",async function(t,n){const o={method:"post",body:JSON.stringify({user:t,reason:n})},a=await e({url:"auth/ban",options:o,headers:{"Content-Type":"application/json"}});return await a.text()}(t,a).then((t=>{console.log(t),n.remove()})).catch((t=>{console.log(t),o.textContent="ban"})))})(t.id,o,a,s.value):console.log("need a reason prior to banning")})),r.append(o)})),o.forEach((t=>{const{listItem:o,button:a}=n(t);a.textContent="unban",a.addEventListener("click",(()=>((t,n,o)=>{confirm("are you sure you want to unban this user?")&&(o.textContent="...",async function(t){const n={method:"post",body:JSON.stringify({user:t})},o=await e({url:"auth/unban",options:n,headers:{"Content-Type":"application/json"}});return await o.text()}(t).then((t=>{console.log(t),n.remove()})).catch((t=>{console.log(t),o.textContent="unban"})))})(t.id,o,a))),s.append(o)}))}))})();
//# sourceMappingURL=user.bundle.js.map