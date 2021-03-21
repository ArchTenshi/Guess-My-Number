'use strict';

let number = Math.ceil(Math.random() * 20),
  score = 20,
  highscore = 0,
  text = '';
document.querySelector('.check').addEventListener('click', function () {
  let inputNumber = document.querySelector('.guess').value;
  if (!inputNumber) {
    text = 'Input Number!';
  } else if (inputNumber == number) {
    text = '🎉That is correct number!';
    highscore < score ? (highscore = score) : (highscore = highscore);
    document.querySelector('.number').textContent = inputNumber;
    document.body.style.background = '#00b200';
    document.querySelector('.number').style.width = '30rem';
  } else if (score > 1) {
    if (inputNumber !== number) {
      score--;
      inputNumber < number ? (text = 'Too low') : (text = 'Too high');
    }
  } else {
    text = 'You lost!';
    score = 0;
  }
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('.message').textContent = text;
});
document.querySelector('.again').addEventListener('click', function () {
  number = Math.floor(Math.random() * 19 + 1) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.body.style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
});
