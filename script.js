'use strict';

let compnum = Math.trunc(Math.random() * 3) + 1;
let Cscore = 0;
let Pscore = 0;
let result = '';
let playing = true;

const diagloue = document.querySelector('.dialogue');
const disResult = document.querySelector('.result');
const compScore = document.querySelector('.cscore');
const plaScore = document.querySelector('.pscore');
const stone = document.querySelector('#img1');
const paper = document.querySelector('#img2');
const scissors = document.querySelector('#img3');
const again = document.querySelector('.again');
const displayfwin = document.querySelector('.Fwin');
const newgame = document.querySelector('.newgame');

const displaydialogue = function (result) {
  diagloue.textContent = result;
};

const displayresult = function (result) {
  disResult.textContent = result;
};

// STONE LOGIC
stone.addEventListener('click', function () {
  compnum = Math.trunc(Math.random() * 3) + 1;
  if (playing) {
    if (compnum === 1) {
      displaydialogue('The computer has chosen rock');
      displayresult('Draw');
    } else if (compnum === 2) {
      displaydialogue('The computer has chosen Paper');
      displayresult('You lose');
      Cscore++;
      compScore.textContent = Cscore;
    } else if (compnum === 3) {
      displaydialogue('The computer has chosen Scissors');
      displayresult('You Win');
      Pscore++;
      plaScore.textContent = Pscore;
    }
    if (Cscore >= 15) {
      playing = false;
      displayfwin.textContent = 'Computer Scored More.';
      newgame.textContent = 'Start a New Game';
    } else if (Pscore >= 15) {
      playing = false;
      displayfwin.textContent = 'You Won';
      newgame.textContent = 'Start a New Game';
    }
  }
});

//PAPER LOGIC
paper.addEventListener('click', function () {
  compnum = Math.trunc(Math.random() * 3) + 1;
  if (playing) {
    if (compnum === 1) {
      diagloue.textContent = 'The computer has chosen rock';
      disResult.textContent = 'You Win';
      Pscore++;
      plaScore.textContent = Pscore;
    } else if (compnum === 2) {
      diagloue.textContent = 'The computer has chosen Paper';
      disResult.textContent = 'Draw';
    } else if (compnum === 3) {
      diagloue.textContent = 'The computer has chosen Scissors';
      disResult.textContent = 'You lose';
      Cscore++;
      compScore.textContent = Cscore;
    }
    if (Cscore >= 15) {
      playing = false;
      displayfwin.textContent = 'Computer Won.';
      newgame.textContent = 'Start a New Game';
    } else if (Pscore >= 15) {
      playing = false;
      displayfwin.textContent = 'You Won';
      newgame.textContent = 'Start a New Game';
    }
  }
});

//SICCORS LOGIC
scissors.addEventListener('click', function () {
  compnum = Math.trunc(Math.random() * 3) + 1;
  if (playing) {
    if (compnum === 1) {
      diagloue.textContent = 'The computer has chosen rock';
      disResult.textContent = 'You lose';
      Cscore++;
      compScore.textContent = Cscore;
    } else if (compnum === 2) {
      diagloue.textContent = 'The computer has chosen Paper';
      disResult.textContent = 'You Win';
      Pscore++;
      plaScore.textContent = Pscore;
    } else if (compnum === 3) {
      diagloue.textContent = 'The computer has chosen Scissors';
      disResult.textContent = 'Draw';
    }
    if (Cscore >= 15) {
      playing = false;
      displayfwin.textContent = 'Computer Won.';
      newgame.textContent = 'Start a New Game';
    } else if (Pscore >= 15) {
      playing = false;
      displayfwin.textContent = 'You Won';
      newgame.textContent = 'Start a New Game';
    }
  }
});

//AGAIN LOGIC
again.addEventListener('click', function () {
  Cscore = 0;
  Pscore = 0;
  playing = true;
  plaScore.textContent = Pscore;
  compScore.textContent = Cscore;
  disResult.textContent = '';
  diagloue.textContent = '';
  displayfwin.textContent = '';
  newgame.textContent = '';
});
