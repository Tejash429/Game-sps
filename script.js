'use strict';

let compnum = Math.trunc(Math.random() * 3) + 1;
console.log(compnum);
let Cscore = 0;
let Pscore = 0;
let result = '';
let playing = true;

const displaydialogue = function (diagloue) {
  document.querySelector('.dialogue').textContent = diagloue;
};

const displayresult = function (result) {
  document.querySelector('.result').textContent = result;
};

const displayfwin = document.querySelector('.Fwin');
const newgame = document.querySelector('.newgame');
// STONE LOGIC
document.querySelector('#img1').addEventListener('click', function () {
  compnum = Math.trunc(Math.random() * 3) + 1;
  console.log(compnum);
  if (playing) {
    if (compnum === 1) {
      displaydialogue('Computer has choose Rock');
      displayresult('Draw');
    } else if (compnum === 2) {
      displaydialogue('Computer has choose Paper');
      displayresult('You lose');
      Cscore++;
      document.querySelector('.cscore').textContent = Cscore;
    } else if (compnum === 3) {
      displaydialogue('Computer has choose Scissors');
      displayresult('You Win');
      Pscore++;
      document.querySelector('.pscore').textContent = Pscore;
    }
    if (Cscore >= 15) {
      playing = false;
      displayfwin.textContent = 'Computer Scored More.';
      newgame.textContent = 'Start a New Game';
    } else if (Pscore >= 15) {
      playing = false;
      displayfwin.textContent = 'You Scored More';
      newgame.textContent = 'Start a New Game';
    }
  }
});

//PAPER LOGIC
document.querySelector('#img2').addEventListener('click', function () {
  compnum = Math.trunc(Math.random() * 3) + 1;
  console.log(compnum);
  if (playing) {
    if (compnum === 1) {
      document.querySelector('.dialogue').textContent =
        'Computer has choose Rock';
      document.querySelector('.result').textContent = 'You Win';
      Pscore++;
      document.querySelector('.pscore').textContent = Pscore;
    } else if (compnum === 2) {
      document.querySelector('.dialogue').textContent =
        'Computer has choose Paper';
      document.querySelector('.result').textContent = 'Draw';
    } else if (compnum === 3) {
      document.querySelector('.dialogue').textContent =
        'Computer has choose Scissors';
      document.querySelector('.result').textContent = 'You lose';
      Cscore++;
      document.querySelector('.cscore').textContent = Cscore;
    }
    if (Cscore >= 15) {
      playing = false;
      displayfwin.textContent = 'Computer Scored More.';
      newgame.textContent = 'Start a New Game';
    } else if (Pscore >= 15) {
      playing = false;
      displayfwin.textContent = 'You Scored More';
      newgame.textContent = 'Start a New Game';
    }
  }
});

//SICCORS LOGIC
document.querySelector('#img3').addEventListener('click', function () {
  compnum = Math.trunc(Math.random() * 3) + 1;
  console.log(compnum);
  if (playing) {
    if (compnum === 1) {
      document.querySelector('.dialogue').textContent =
        'Computer has choose Rock';
      document.querySelector('.result').textContent = 'You lose';
      Cscore++;
      document.querySelector('.cscore').textContent = Cscore;
    } else if (compnum === 2) {
      document.querySelector('.dialogue').textContent =
        'Computer has choose Paper';
      document.querySelector('.result').textContent = 'You Win';
      Pscore++;
      document.querySelector('.pscore').textContent = Pscore;
    } else if (compnum === 3) {
      document.querySelector('.dialogue').textContent =
        'Computer has choose Scissors';
      document.querySelector('.result').textContent = 'Draw';
    }
    if (Cscore >= 15) {
      playing = false;
      displayfwin.textContent = 'Computer Scored More.';
      newgame.textContent = 'Start a New Game';
    } else if (Pscore >= 15) {
      playing = false;
      displayfwin.textContent = 'You Scored More';
      newgame.textContent = 'Start a New Game';
    }
  }
});

//AGAIN LOGIC
document.querySelector('.again').addEventListener('click', function () {
  Cscore = 0;
  Pscore = 0;
  playing = true;
  document.querySelector('.pscore').textContent = Pscore;
  document.querySelector('.cscore').textContent = Cscore;
  document.querySelector('.result').textContent = '';
  document.querySelector('.dialogue').textContent = '';
  displayfwin.textContent = '';
  newgame.textContent = '';
});
