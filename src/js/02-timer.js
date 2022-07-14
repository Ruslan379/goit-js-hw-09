// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

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
let finalTime = 0;
let isActive = false;

refs.startBtn.addEventListener('click', timerStart);

//! Подключение библиотеки flatpickr
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

//! Запуск библиотеки flatpickr
flatpickr("#datetime-picker", options);



const timer = {
    start() {
        // const finalTime = new Date(1659925828784).;
        // console.log(finalTime);
        // console.log(new Date(1657815478717).getTime());

        intervalId = setInterval(setInt, 1000);
    }
};

//
function setInt() {

    console.log("Запуск таймера 1 раз в секунду, finalTime:", finalTime);

    const currentTime = Date.now();
    console.log("Теукущее время =  currentTime", currentTime);

    const deltaTime = finalTime - currentTime;

    if (deltaTime < 0) clearTimeout(intervalId),

        console.log("Разница во времени =  deltaTime", deltaTime);
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    // console.log(timeComponents);
    console.log(`${days}:${hours}:${minutes}:${seconds}`);

    updateClockface({ days, hours, minutes, seconds });
}



//! Запуск таймера обратного отсчета:
function timerStart(evt) {
    console.log("Вешаю слушателя на кнопку Start");
    timer.start();
}


//! Метод pad - принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}


//! функци конвертации ms в формат времени
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

/*
 * - Принимает время в миллисекундах
 * - Высчитывает сколько в них вмещается дней/часов/минут/секунд
 * - Рисует интерфейс
 */
function updateClockface({ days, hours, minutes, seconds }) {
    // refs.clockface.textContent = `${hours}:${mins}:${secs}`;
    console.log(`${days}:${hours}:${minutes}:${seconds}`);

    refs.clockDays.textContent = days;
    refs.clockHours.textContent = hours;
    refs.clockMinutes.textContent = minutes;
    refs.clockSeconds.textContent = seconds;
}

