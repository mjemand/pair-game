(function () {
    const icons = [
        'fa-apple-alt',
        'fa-archway',
        'fa-car-side',
        'fa-camera-retro',
        'fa-candy-cane',
    ];

    const getOneCard = (icon) => {
        const div = document.createElement('div');
        div.classList.add('col-2');
        div.innerHTML = `<div class="front">
                <i class="fas ${icon}"></i>
            </div>
            <div class="back"></div>`;
        return div;
    };

    const shuffle = (array) => {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    const iconArray = icons.concat(icons);
    shuffle(iconArray);
    const row1 = document.querySelector('.card-row:first-child');
    const row2 = document.querySelector('.card-row:nth-child(2)');
    let i = 0;
    for (const icon of iconArray) {
        i++;
        const card = getOneCard(icon);
        if (i < 6) {
            row1.appendChild(card);
        } else {
            row.appendChild(card);
        };
    };

})();







const padNumbers = (num) => {
    return num < 10 ? `0${num}` : `${num}`;
};

let stopperTime = 0;
let stopperIsRunning = false;
setInterval(() => {
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


