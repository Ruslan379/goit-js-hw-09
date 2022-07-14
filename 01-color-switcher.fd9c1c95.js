!function(){var t={buttonStartColor:document.querySelector("button[data-start]"),buttonStopColor:document.querySelector("button[data-stop]"),body:document.body},o=null,n=!1;t.buttonStartColor.addEventListener("click",(function(){if(n)return;n=!0,t.buttonStartColor.classList.toggle("opacity"),t.buttonStopColor.classList.toggle("opacity"),o=setInterval((function(){var o="#".concat(Math.floor(16777215*Math.random()).toString(16));t.body.style.backgroundColor=o}),1e3)})),t.buttonStopColor.addEventListener("click",(function(){t.buttonStartColor.classList.toggle("opacity"),t.buttonStopColor.classList.toggle("opacity"),clearInterval(o),n=!1}
//! генерация случайного цвета
)),t.buttonStopColor.classList.toggle("opacity")}();
//# sourceMappingURL=01-color-switcher.fd9c1c95.js.map
