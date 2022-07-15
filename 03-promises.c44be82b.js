function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var r=i("eWCmQ");
//! Функция createPromise
function u(e,t){return new Promise(((o,n)=>{const i=Math.random()>.3;setTimeout((()=>{i&&o({position:e,delay:t}),n({position:e,delay:t})}),t)}))}({form:document.querySelector(".form"),inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]')}).form.addEventListener("submit",(//! Вешаю слушателя на form
function(t){t.preventDefault();
//! Собираем значения всех полей input form в переменные (1-ый вариант)
//! _____________________________________________________________________
//! Собираем значения всех полей input form в объект formData (2-ой вариант)
//! Собираем значения всех полей input form в переменные (2-ой вариант)
//! Собираем значения всех полей input form в переменные (3-ий вариант)
//! Надо привести к числу - НЕ РАБОТАЕТ
//! Собираем значения всех полей input form в переменные (4-ий вариант)
let{elements:{delay:o,step:n,amount:i}}=t.currentTarget;o=Number(o.value),n=Number(n.value),i=Number(i.value);
//! Консолим все значения собранные со всех полей input form
//! Запуск цикла amount-раз
for(let t=1;t<=i;t+=1)t>1&&(o+=n),
//! Вызов функции createPromise
u(t,o).then((({position:t,delay:o})=>{console.log(`✅ Fulfilled promise ${t} in ${o}ms`),//!
e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`,{timeout:4e3})})).catch((({position:t,delay:o})=>{console.log(`❌ Rejected promise ${t} in ${o}ms`),//!
e(r).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`,{timeout:4e3})}))}));
//# sourceMappingURL=03-promises.c44be82b.js.map
