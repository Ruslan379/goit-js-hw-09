import Notiflix from 'notiflix';


const refs = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
};

// console.log(refs.inputDelay.textContent);
// console.log(refs.inputDelay.name);
// console.log(refs.inputDelay.value);

// let formData = {};

refs.form.addEventListener('submit', onFormSubmit);
// refs.inputDelay.addEventListener('input', onInputDelay);
// refs.inputStep.addEventListener('input', onInputStep);
// refs.inputAmount.addEventListener('input', onInputAmount);


function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму'); //!
  // if (refs.inputDelay.value === '' || refs.inputStep.value === '' || refs.inputAmount.value === '')
  //   return alert('Все поля должны быть заполнены!');

  // console.log(evt.currentTarget.name);
  // formData[evt.currentTarget.name] = evt.currentTarget.value;
  // console.log(formData);


  console.log(refs.inputDelay.name, refs.inputDelay.value);
  console.log(refs.inputStep.name, refs.inputStep.value);
  console.log(refs.inputAmount.name, refs.inputAmount.value);


}




function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
