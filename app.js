let position = 0;
let marioStart = document.getElementById('mario_Start');
let mario = document.getElementById('mario');
let start_button = document.getElementById('startButton');


const maxPosition = window.innerWidth > 2560 ? 2000 : window.innerWidth;
let isRunning = false;

document.addEventListener("DOMContentLoaded", function () {
    marioStart.style.display = 'block';
    mario.style.display = 'none';

});

function moveMario() {
    position += window.innerWidth / 500 + 0.5;

    if (position > maxPosition) {
        position = mario.width - 40;
        isRunning = false;
        marioStart.style.display = 'block';
        mario.style.display = 'none';
        start_button.style.display = 'inline';
    }

    mario.style.left = position + 'px';

    if (isRunning) {
        start_button.style.display = 'none';

        requestAnimationFrame(moveMario);
    }
}

document.getElementById('startButton').addEventListener('click', function () {
    if (!isRunning) {
        position = 0;
        marioStart.style.display = 'none';
        mario.style.display = 'block';
        isRunning = true;
        start_button.style.display = 'inline';
        moveMario();
    }

});

var overlayDiv = document.createElement('div');
document.getElementById('overlay').appendChild(overlayDiv);

function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}
