'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// global functions
const displayText = function (element, message) {
  document.querySelector(element).textContent = message;
};

const updatingScreenColors = function (_backgroundColor, _bodyColor) {
  document.querySelector('body').style.backgroundColor = _backgroundColor;
  document.querySelector('body').style.color = _bodyColor;
  document.querySelector('header').style.borderBottomColor = _bodyColor;
  document.querySelector('main').style.color = _bodyColor;
  document.querySelector('.number').style.background = _bodyColor;
  document.querySelector('.guess').style.borderColor = _bodyColor;
  document.querySelector('.check').style.backgroundColor = _bodyColor;
  document.querySelector('.btn').style.backgroundColor = _bodyColor;
};

// Adding functionality to Check! button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayText('.message', '⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayText('.message', '🎉 Correct Number!');
    displayText('.number', secretNumber);

    updatingScreenColors('#FDD36A', '#FFACAC');

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      displayText('.highscore', highscore);
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayText(
        '.message',
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      displayText('.score', score);
    } else {
      displayText('.message', '💥 You lost the game!');
      displayText('.score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayText('.message', 'Start guessing...');
  displayText('.score', score);
  displayText('.number', '?');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.btn:hover').style.backgroundColor = '#FFB84C';

  updatingScreenColors('#FFACAC', '#FDD36A');
});
