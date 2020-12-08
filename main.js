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
        div.classList.add('card-item');
        div.innerHTML = `<div class="card__front">
                <i class="fas ${icon}"></i>
            </div>
            <div class="card__back">
            <img src="/img/card-back.jpg" alt="back">
            </div>`;
        return div;
    };

    const shuffle = (array) => {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };

    const iconArray = icons.concat(icons);
    shuffle(iconArray);
    const row1 = document.querySelector('.card-row:nth-child(2)');
    const row2 = document.querySelector('.card-row:nth-child(3)');
    let i = 0;
    for (const icon of iconArray) {
        i++;
        const card = getOneCard(icon);
        if (i < 6) {
            row1.appendChild(card);
        } else {
            row2.appendChild(card);
        };
    };

    
    let blockClicks = false;
    const cardClick = (ev) => {
        if (blockClicks) {
            return;
        }

        ev.currentTarget.classList.toggle('flipped');
        const flippedCards = document.querySelectorAll('.card-item.flipped');
        
            
        if (flippedCards.length > 1) {
                blockClicks = true;
                const to = setTimeout( () => {
                    clearTimeout(to);
                    blockClicks = false;
                document.querySelectorAll('.card-item').forEach( card => {
                    card.classList.remove('flipped');
                });
            }, 2000);

            checkPair();
        }
    };

    const cards = document.querySelectorAll('.card-item');
    cards.forEach( card => {
        card.addEventListener('click', cardClick);
    });

    let points = 0;

    const showPoints = (points) => {
        document.querySelector('.user-points').textContent = points;
    }

    const checkPair = () => {
        const firstCardIcon = document.querySelector('.card-item.flipped i');
        if (firstCardIcon) {
            const firstIconClass = firstCardIcon.className.split(' ');
            const pair = document.querySelectorAll(`.card-item.flipped .${firstIconClass.pop()}`);
            if (pair.length == 2) {
                points++;
                showPoints(points);
                document.querySelectorAll(`.card-item.flipped`).forEach( 
                    card => card.classList.add('found') 
                );
            }
        }
    }


})();


/*

    let stopperTime = 0;
    let stopperIsRunning = false;

if (flippedCards.length = 1) {
            if (stopperIsRunning) {
             return;
            } else {
                stopperIsRunning = true;
                const padNumbers = (num) => {
                    return num < 10 ? `0${num}` : `${num}`;
                };
                
                setInterval(() => {
                    
                    stopperTime++;
                    const seconds = padNumbers(stopperTime % 60);
                    const minutes = padNumbers(Math.floor(stopperTime / 60) % 60);
                    const hours = padNumbers(Math.floor(stopperTime / 3600) % 60);
                    const time = `${[hours, minutes, seconds].join(':')}`
                    const stopperFace = document.querySelector('.stopper-face');
                    stopperFace.textContent = time;
                    console.log(stopperTime);
                }, 1000);
                return;
            }
        }


document.querySelector('.start-stop-btn').addEventListener('click', () => {
    if (stopperIsRunning) {
        stopperIsRunning = false;
        stopperTime = 0;
    } else {
        stopperIsRunning = true;
    }
});



if (!stopperIsRunning) {
    return;
}; */