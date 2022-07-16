// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

const refs = {
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    clockDays: document.querySelector('[data-days]'),
    clockHours: document.querySelector('[data-hours]'),
    clockMinutes: document.querySelector('[data-minutes]'),
    clockSeconds: document.querySelector('[data-seconds]'),
};

// console.log(refs.clockDays.textContent);

let intervalId = null;
let finalTime = 0; //! время в мс, введенное в input

refs.startBtn.setAttribute("disabled", "true"); //! блокируем кнопку Start до ввода даты

refs.startBtn.addEventListener('click', timerStart); //! Вешаю слушателя на кнопку Start
refs.input.addEventListener('input', inputDate); //! Вешаю слушателя на input

//TODO Подключение библиотеки flatpickr

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        finalTime = selectedDates[0].getTime()
    },
};

//TODO Запуск библиотеки flatpickr

flatpickr("#datetime-picker", options);

//! Ввод даты в форму:
function inputDate() {
    // console.log("Вешаю слушателя на input"); //!

    refs.startBtn.removeAttribute("disabled");
}

//! Запуск интервального таймера
const timer = {
    start() {
        // const finalTime = new Date(1659925828784).; 
        // console.log(finalTime);
        // console.log(new Date(1657815478717).getTime());

        intervalId = setInterval(setInt, 1000);
    }
};


//! Работа интервального таймера
function setInt() {

    // console.log("Запуск интервального таймера 1 раз в секунду, finalTime:", finalTime); //!


    const currentTime = Date.now();
    // console.log("Теукущее время =  currentTime", currentTime); //!

    const deltaTime = finalTime - currentTime;

    // console.log("Разница во времени =  deltaTime", deltaTime); //!

    //! Проверка на окончание ВРЕМЕНИ ОБРАТНОГО ОТСЧЕТА
    if (deltaTime <= 0) {
        clearInterval(intervalId);
        refs.clockDays.textContent = "00";
        refs.clockHours.textContent = "00";
        refs.clockMinutes.textContent = "00";
        refs.clockSeconds.textContent = "00";
        refs.input.removeAttribute("disabled"); //?
        // Notiflix.Notify.warning('ВРЕМЯ ЗАКОНЧИЛОСЬ!!!');
        return Notiflix.Notify.warning('ВРЕМЯ ЗАКОНЧИЛОСЬ!!!', { timeout: 3000, },);
        // return alert("ВРЕМЯ ЗАКОНЧИЛОСЬ!!!");
    };

    // const { days, hours, minutes, seconds } = convertMs(deltaTime); //* Деструктуризация, РАБОТАЕТ
    const timeComponents = convertMs(deltaTime); //! функция конвертации ms в формат времени (ОБЪЕКТ ДАТЫ)
    // console.log(timeComponents); //!

    // console.log(`${days}:${hours}:${minutes}:${seconds}`); //* Деструктуризация, РАБОТАЕТ

    // updateClockface({ days, hours, minutes, seconds }); //* Деструктуризация, РАБОТАЕТ

    updateClockface(timeComponents); //! функция конвертации ОБЪЕКТА ДАТЫ в элементы интерфейса
}



//! Запуск таймера обратного отсчета:
function timerStart(evt) {
    // console.log("Вешаю слушателя на кнопку Start"); //!

    //! Проверка на валидную дату (в будущем)
    // console.log("finalTime", finalTime); //!
    const DateNow = Date.now();
    // console.log("DateNow", DateNow); //!
    if (finalTime < DateNow) {
        refs.startBtn.setAttribute("disabled", "true"); //?
        refs.input.removeAttribute("disabled"); //?
        alert("Please choose a date in the future"); //? Fixed mentor remarks
        return Notiflix.Notify.failure('Please choose a date in the future', { timeout: 1500, },);
    };

    refs.startBtn.setAttribute("disabled", "true"); //?
    refs.input.setAttribute("disabled", "true"); //?

    timer.start();
}


//! Метод pad - принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};


//! функция конвертации ms в формат времени (ОБЪЕКТ ДАТЫ)
/*
 * - Принимает время в миллисекундах
 * - Высчитывает сколько в них вмещается дней/часов/минут/секунд
 * - Возвращает обьект со свойствами days, hours, minutes, seconds
 * - Рисует интерфейс
 */
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


//! функция конвертации ОБЪЕКТА ДАТЫ в элементы интерфейса
/*
 * - Принимает ОБЪЕКТ, содержащий ДАТУ
 * - Возвращает значения свойств: days, hours, minutes, seconds
 * - Рисует интерфейс
 */
function updateClockface({ days, hours, minutes, seconds }) {
    // console.log(`${days}:${hours}:${minutes}:${seconds}`); //! Консолит работу таймера обратного отсчета:

    refs.clockDays.textContent = days;
    refs.clockHours.textContent = hours;
    refs.clockMinutes.textContent = minutes;
    refs.clockSeconds.textContent = seconds;
}

