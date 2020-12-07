
// Tíznél kisebb számok kiegészítése nullával:
const padNumbers = (num) => {
    return num < 10 ? `0${num}` : `${num}`;
};

let stopperTime = 0;
let stopperIsRunning = false;
setInterval( () => {
    if (!stopperIsRunning) {
        return;
    };
    stopperTime++;
    const seconds = padNumbers(stopperTime % 60);
    const minutes = padNumbers(Math.floor(stopperTime / 60) % 60);
    const hours = padNumbers(Math.floor(stopperTime / 3600) % 60);
    const time = `${[hours, minutes, seconds].join(':')}`
    const stopperFace = document.querySelector('.stopper-face');
    stopperFace.textContent = time;
}, 1000);

document.querySelector('.start-stop-btn').addEventListener('click', () => {
    if (stopperIsRunning) {
        stopperIsRunning = false;
        stopperTime = 0;
    } else {
        stopperIsRunning = true;
    }
});


