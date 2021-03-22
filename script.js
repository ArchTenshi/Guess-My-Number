'use strict';

let number = randomNumber(20),
  highscore = Number(document.querySelector('.highscore').textContent),
  text = '',
  score = 20;
function changeMessage(place, text) {
  document.querySelector(place).textContent = text;
}
function changeWidth(place, size) {
  document.querySelector(place).style.width = size;
}
function changeBackgroundColor(color) {
  document.body.style.background = color;
}
function randomNumber(max) {
  return Math.ceil(Math.random() * max);
}
document.querySelector('.check').addEventListener('click', function () {
  let inputNumber = document.querySelector('.guess').value;
  if (!inputNumber) {
    changeMessage('.message', 'Input Number!');
  } else if (inputNumber == number) {
    changeMessage('.message', '🎉That is correct number!');
    changeMessage('.highscore', highscore < score ? score : highscore);
    changeMessage('.number', inputNumber);
    changeBackgroundColor('#00b200');
    changeWidth('.number', '30rem');
  } else if (score > 1) {
    if (inputNumber !== number) {
      score--;
      changeMessage('.score', score);
      changeMessage(
        '.message',
        inputNumber < number ? (text = 'Too low') : (text = 'Too high')
      );
    }
  } else {
    changeMessage('.message', 'You lost!');
    score = 0;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  number = randomNumber(20);
  changeMessage('.message', 'Start guessing...');
  score = 20;
  changeMessage('.score', score);
  document.querySelector('.guess').value = '';
  changeMessage('.number', '?');
  changeBackgroundColor('#222');
  changeWidth('.number', '15rem');
});
