const hippo = document.getElementById('hippo');
const badCat = document.getElementById('bad-cat');
const gameFrame = document.querySelector('.game-frame');
const livesDisplay = document.getElementById('lives');
const timerDisplay = document.getElementById('timer');

let score = 0;
let lives = 3;
let timeLeft = 120; // 2 minutes in seconds

hippo.addEventListener('click', () => {
    score++;
    if (score >= 30) {
        alert('you wasted 2 minutes of your life killing cats!');
        score = 0;
    }
    moveHippo();
});

badCat.addEventListener('click', () => {
    if (lives > 0) {
        lives--;
        livesDisplay.textContent = lives;
        if (lives === 0) {
            alert('Game over. You ran out of lives.');
            score = 0;
            lives = 3;
            livesDisplay.textContent = lives;
        }
    }
    moveBadCat();
});

function randomPosition() {
    const x = Math.random() * (gameFrame.clientWidth - hippo.clientWidth);
    const y = Math.random() * (gameFrame.clientHeight - hippo.clientHeight);
    return { x, y };
}

function moveHippo() {
    const position = randomPosition();
    hippo.style.left = `${position.x}px`;
    hippo.style.top = `${position.y}px`;
}

function moveBadCat() {
    const position = randomPosition();
    badCat.style.left = `${position.x}px`;
    badCat.style.top = `${position.y}px`;
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (timeLeft === 0) {
        alert('Time is up! Your score: ' + score);
        score = 0;
        timeLeft = 120;
    }
    timeLeft--;
}

setInterval(moveHippo, 1000);
setInterval(moveBadCat, 2000);
setInterval(updateTimer, 1000); // Update the timer every second
