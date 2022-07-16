!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc");
//! Функция createPromise
function u(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r&&t({position:e,delay:n}),o({position:e,delay:n})}),n)}))}({form:document.querySelector(".form"),inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]')}).form.addEventListener("submit",(//! Вешаю слушателя на form
function(n){n.preventDefault();
//! Собираем значения всех полей input form в переменные (1-ый вариант)
//! _____________________________________________________________________
//! Собираем значения всех полей input form в объект formData (2-ой вариант)
//! Собираем значения всех полей input form в переменные (2-ой вариант)
//! Собираем значения всех полей input form в переменные (3-ий вариант)
//! Надо привести к числу - НЕ РАБОТАЕТ
//! Собираем значения всех полей input form в переменные (4-ий вариант)
var t=n.currentTarget.elements,o=t.delay,r=t.step,c=t.amount;o=Number(o.value),r=Number(r.value),c=Number(c.value);
//! Консолим все значения собранные со всех полей input form
//! Запуск цикла amount-раз
for(var a=1;a<=c;a+=1)a>1&&(o+=r),
//! Вызов функции createPromise
u(a,o).then((function(n){var t=n.position,o=n.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms")),//!
e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"),{timeout:4e3})})).catch((function(n){var t=n.position,o=n.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(o,"ms")),//!
e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"),{timeout:4e3})}));
//! чистим все input form после submit
n.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.737cba7f.js.map
