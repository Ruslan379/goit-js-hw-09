const t={buttonStartColor:document.querySelector("button[data-start]"),buttonStopColor:document.querySelector("button[data-stop]"),body:document.body};let o=null,l=!1;t.buttonStartColor.addEventListener("click",(function(){if(l)return;l=!0,t.buttonStartColor.classList.toggle("opacity"),t.buttonStopColor.classList.toggle("opacity"),o=setInterval((()=>{let o=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.body.style.backgroundColor=o}),1e3)})),t.buttonStopColor.addEventListener("click",(function(){t.buttonStartColor.classList.toggle("opacity"),t.buttonStopColor.classList.toggle("opacity"),clearInterval(o),l=!1}
//! генерация случайного цвета
)),t.buttonStopColor.classList.toggle("opacity");
//# sourceMappingURL=01-color-switcher.c5b70265.js.map
