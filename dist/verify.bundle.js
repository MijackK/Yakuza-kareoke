(()=>{"use strict";const{apiDomain:t}={dealy:3,timingWindowEarly:.2,timingWindowLate:.1,pointWidth:10,pointSpacing:10,startTime:3,apiDomain:{development:"http://localhost:5000",production:"https://shark-app-uuvcm.ondigitalocean.app/"}};const e=new URLSearchParams(window.location.search),o=e.get("token");console.log(e);const n=document.querySelector("#message");o&&async function(e){const o={body:JSON.stringify({token:e}),method:"post"},n=await async function({url:e,options:o,headers:n}){const i=["localhost","127.0.0.1"].includes(window.location.hostname)?t.development:t.production,a=await fetch(`${i}/${e}`,{mode:"cors",credentials:"include",headers:{CSRF_TOKEN:sessionStorage.getItem("csrfToken"),...n},...o});if(!1===a.ok){const t=await a.text();throw new Error(function(t){const e=document.createElement("div");return e.innerHTML=t,e.querySelector("p")?.textContent||"error could not compelte request"}(t))}return a.status,a}({url:"auth/verify_email",options:o,headers:{"Content-Type":"application/json"}});return await n.text()}(o).then((t=>{console.log(t),n.textContent="Email succesfully verified, redirecting to home page..",setTimeout((()=>{window.location.pathname=""}),1e3)})).catch((t=>{console.log(t),n.textContent=t.message}))})();
//# sourceMappingURL=verify.bundle.js.map