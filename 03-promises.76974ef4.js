!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,o){t[e]=o},o.parcelRequired7c6=i);var c=i("iU1Pc"),l={form:document.querySelector(".form"),inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]')},r=0;
//! Функция createPromise
function u(e,o){return new Promise((function(n,t){var i=Math.random()>.3;setTimeout((function(){i&&(console.log("from promise",e,o),n({position:e,delay:o})),t({position:e,delay:o})}),o)}))}l.form.addEventListener("submit",(//! Вешаю слушателя на form
function(o){o.preventDefault(),console.log("Отправляем форму"),//!
//! Собираем значения всех полей input form в переменные (1-ый вариант)
//! _____________________________________________________________________
//! Собираем значения всех полей input form в объект formData (2-ой вариант)
//! Консолим все значения собранные со всех полей input form
console.log("Delay",r),//!
console.log("step",0),//!
console.log("amount",0);//!
//! Запуск цикла amount-раз
for(var n=1;n<=0;n+=1)n>1&&(r+=0,console.log(r)),
//! Вызов функции createPromise
u(n,r).then((function(o){var n=o.position,t=o.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms")),//!
e(c).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"),{timeout:4e3})})).catch((function(o){var n=o.position,t=o.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms")),//!
e(c).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"),{timeout:4e3})}))}))}();
//# sourceMappingURL=03-promises.76974ef4.js.map
