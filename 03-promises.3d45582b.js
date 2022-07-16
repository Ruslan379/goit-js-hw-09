function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");
//! Функция createPromise
function u(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r&&n({position:e,delay:t}),o({position:e,delay:t})}),t)}))}({form:document.querySelector(".form"),inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]')}).form.addEventListener("submit",(//! Вешаю слушателя на form
function(t){t.preventDefault();
//! Собираем значения всех полей input form в переменные (1-ый вариант)
//! _____________________________________________________________________
//! Собираем значения всех полей input form в объект formData (2-ой вариант)
//! Собираем значения всех полей input form в переменные (2-ой вариант)
//! Собираем значения всех полей input form в переменные (3-ий вариант)
//! Надо привести к числу - НЕ РАБОТАЕТ
//! Собираем значения всех полей input form в переменные (4-ий вариант)
let{elements:{delay:n,step:o,amount:r}}=t.currentTarget;n=Number(n.value),o=Number(o.value),r=Number(r.value);
//! Консолим все значения собранные со всех полей input form
//! Запуск цикла amount-раз
for(let t=1;t<=r;t+=1)t>1&&(n+=o),
//! Вызов функции createPromise
u(t,n).then((({position:t,delay:n})=>{console.log(`✅ Fulfilled promise ${t} in ${n}ms`),//!
e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`,{timeout:4e3})})).catch((({position:t,delay:n})=>{console.log(`❌ Rejected promise ${t} in ${n}ms`),//!
e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`,{timeout:4e3})}));
//! чистим все input form после submit
t.currentTarget.reset()}));
//# sourceMappingURL=03-promises.3d45582b.js.map
