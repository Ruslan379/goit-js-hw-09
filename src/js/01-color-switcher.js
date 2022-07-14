const refs = {
    buttonStartColor: document.querySelector('button[data-start]'),
    buttonStopColor: document.querySelector('button[data-stop]'),
    body: document.body,
};

const NOTIFICATION_DELAY = 1000;
let intervalId = null;
let isActive = false

refs.buttonStartColor.addEventListener('click', startChangeBackgroundColor);
refs.buttonStopColor.addEventListener('click', stopChangeBackgroundColor);

refs.buttonStopColor.classList.toggle("opacity");


function startChangeBackgroundColor() {
    if (isActive) {
        return;
    };

    // console.log("Вешаю слушателя события на нопку Start"); //!

    isActive = true;

    refs.buttonStartColor.classList.toggle("opacity");
    refs.buttonStopColor.classList.toggle("opacity");

    intervalId = setInterval(() => {
        let bodyColor = getRandomHexColor();
        refs.body.style.backgroundColor = bodyColor;
        // console.log('Раз в секунду меняем цвет фона <body>', bodyColor); //!
    }, NOTIFICATION_DELAY);

};

function stopChangeBackgroundColor() {
    // console.log("Вешаю слушателя события на нопку Stop"); //!

    refs.buttonStartColor.classList.toggle("opacity");
    refs.buttonStopColor.classList.toggle("opacity");

    clearInterval(intervalId);
    isActive = false;
    // console.log(`Interval with id ${intervalId} has stopped!`); //!

};


//! генерация случайного цвета
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}