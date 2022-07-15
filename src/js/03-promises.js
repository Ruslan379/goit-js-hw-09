import Notiflix from 'notiflix';


const refs = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
};


// console.log(refs.inputDelay.name);
// console.log(refs.inputDelay.value);


let delay = 0
let step = 0
let amount = 0
let formData = {}


refs.form.addEventListener('submit', onFormSubmit); //! Вешаю слушателя на form
// refs.inputDelay.addEventListener('input', onInputDelay);
// refs.inputStep.addEventListener('input', onInputStep);
// refs.inputAmount.addEventListener('input', onInputAmount);


function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму'); //!


  // console.log(refs.inputDelay.name, refs.inputDelay.value);
  // console.log(refs.inputStep.name, refs.inputStep.value);
  // console.log(refs.inputAmount.name, refs.inputAmount.value);


  //! Собираем значения всех полей input form в переменные (1-ый вариант)
  // delay = +refs.inputDelay.value
  // step = +refs.inputStep.value
  // amount = +refs.inputAmount.value
  //! _____________________________________________________________________


  // console.log(evt.target.elements);
  // console.log(evt.target.elements.amount);
  // console.log(evt.target.elements.amount.value);

  //! Собираем значения всех полей input form в объект formData (2-ой вариант)
  // formData.delay = evt.target.elements.delay.value
  // formData.step = evt.target.elements.step.value
  // formData.amount = evt.target.elements.amount.value
  // console.log(formData); //!

  // //! Собираем значения всех полей input form в переменные (2-ой вариант)
  // delay = +formData.delay
  // step = +formData.step
  // amount = +formData.amount

  // //! Собираем значения всех полей input form в переменные (3-ий вариант)
  // const { delay, step, amount } = evt.target.elements. .value






  //! Консолим все значения собранные со всех полей input form
  console.log("Delay", delay); //!
  console.log("step", step); //!
  console.log("amount", amount); //!

  //! Запуск цикла amount-раз
  for (let position = 1; position <= amount; position += 1) {
    if (position > 1) {
      delay = delay + step;
      console.log(delay); //!
    };
    //! Вызов функции createPromise
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`); //!
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, { timeout: 4000, },);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`); //!
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, { timeout: 4000, },);
      });
  }
}


//! Функция createPromise
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        console.log("from promise", position, delay) //!
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}
