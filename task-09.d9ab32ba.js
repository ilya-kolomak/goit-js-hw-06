function o(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const e=document.querySelector("body"),t=e.querySelector(".change-color"),c=document.querySelector(".color"),n=()=>{e.style.backgroundColor=o();const t=o();c.textContent=t};t.addEventListener("click",n),console.log("click",n);
//# sourceMappingURL=task-09.d9ab32ba.js.map
