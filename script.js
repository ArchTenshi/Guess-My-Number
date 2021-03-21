'use strict';

// document.querySelector('.message').textContent = 'Correct number';
// document.querySelector('.number').textContent = 5;
// document.querySelector('.guess').value = 5;
let number = Math.ceil(Math.random() * 20),
  s = 20,
  hs = 0,
  text = '';
console.log(number);
document.querySelector('.check').addEventListener('click', function () {
  let inputNumber = document.querySelector('.guess').value;
  if (!inputNumber) {
    text = 'Input Number!';
  } else if (inputNumber == number) {
    text = 'That is correct number!';
    hs < s ? (hs = s) : (hs = hs);
    document.querySelector('.number').textContent = inputNumber;
    document.body.style.background = '#00b200';
    document.querySelector('.number').style.width = '30rem';
  } else if (s > 1) {
    if (inputNumber < number) {
      text = 'Too low';
      s--;
    } else {
      text = 'Too high';
      s--;
    }
  } else {
    text = 'You lost!';
    s = 0;
  }
  document.querySelector('.score').textContent = s;
  document.querySelector('.highscore').textContent = hs;
  document.querySelector('.message').textContent = text;
});
document.querySelector('.again').addEventListener('click', function () {
  s = 20;
  number = Math.floor(Math.random() * 19 + 1) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.body.style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
});
