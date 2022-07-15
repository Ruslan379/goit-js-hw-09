function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},l=o.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var l={id:e,exports:{}};return n[e]=l,o.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequired7c6=l);var i=l("eWCmQ");const r={form:document.querySelector(".form"),inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]')};let u=0;
//! Функция createPromise
function s(e,o){return new Promise(((n,t)=>{const l=Math.random()>.3;setTimeout((()=>{l&&(console.log("from promise",e,o),n({position:e,delay:o})),t({position:e,delay:o})}),o)}))}r.form.addEventListener("submit",(//! Вешаю слушателя на form
function(o){o.preventDefault(),console.log("Отправляем форму"),//!
//! Собираем значения всех полей input form в переменные (1-ый вариант)
//! _____________________________________________________________________
//! Собираем значения всех полей input form в объект formData (2-ой вариант)
//! Консолим все значения собранные со всех полей input form
console.log("Delay",u),//!
console.log("step",0),//!
console.log("amount",0);//!
//! Запуск цикла amount-раз
for(let o=1;o<=0;o+=1)o>1&&(u+=0,console.log(u)),
//! Вызов функции createPromise
s(o,u).then((({position:o,delay:n})=>{console.log(`✅ Fulfilled promise ${o} in ${n}ms`),//!
e(i).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`,{timeout:4e3})})).catch((({position:o,delay:n})=>{console.log(`❌ Rejected promise ${o} in ${n}ms`),//!
e(i).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`,{timeout:4e3})}))}));
//# sourceMappingURL=03-promises.9e46f088.js.map
