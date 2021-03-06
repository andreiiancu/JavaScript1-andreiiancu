let randomNumber = Math.floor(Math.random() * 100) + 1;
let randomNumberFifty = Math.floor(Math.random() * 50) + 1;
let randomNumberTen = Math.floor(Math.random() * 10) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const limitRandomTen = document.querySelector('limitRandomTen');
const limitRandomFifty = document.querySelector('limitRandomFifty');
const limitRandomOneHundred = document.querySelector('limitRandomOneHundred');

guessSubmit.addEventListener('click', checkGuess);

let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);

    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'red';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    resetButton.setAttribute('class', 'reset');
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
    resetButton.style.background = 'solmon';
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'none';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}

setInterval(function() {
    alert(
        '!!!TIME OUT!!! CLICK ON THE  "SUBMIT GUESS" BUTTON, THEN CLICK ON THE  "START GAME" BUTTON',
    );
}, 60000);
