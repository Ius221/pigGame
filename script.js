'use strict';

let randNo = Math.floor(Math.random() * 6) + 1;

const btnRoll = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');
const score = document.querySelectorAll('.score');
const current = document.querySelectorAll('.current-score');
const p0 = document.querySelector('.player--0');
const p1 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');


//It's work is to switch player 
const removeAdd = function removeAdd(player1, player2) {
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
}
const curReset = function curReset(f) {
    current[f].textContent = 0;
}

//Hold player and give chance to other player
hold.addEventListener('click', () => {
    if (p0.classList.contains("player--active")) {
        removeAdd(p0, p1);
        score[0].textContent = Number(score[0].textContent) + Number(current[0].textContent);
        curReset(0);
    }
    else if (p1.classList.contains("player--active")) {
        removeAdd(p1, p0);
        score[1].textContent = Number(score[1].textContent) + Number(current[1].textContent);
        curReset(1);
    }

    if (score[0].textContent >= 100) {
        p0.classList.add('player--winner');
        btnRoll.classList.add('hide');
        hold.classList.add('hide');
        current[0].textContent = 'WINNER';
        // alert("Restart the game");
    }
    else if (score[1].textContent >= 100) {
        p1.classList.add('player--winner');
        btnRoll.classList.add('hide');
        hold.classList.add('hide');
        current[1].textContent = 'WINNER';
    }
})

//For New Game
newGame.addEventListener('click', () => {
    btnRoll.classList.remove('hide');
    score[0].textContent = 0;
    score[1].textContent = 0;
    curReset(0);
    curReset(1);
    p1.classList.remove('player--winner');
    p0.classList.remove('player--winner');


    removeAdd(p1, p0);
    dice.classList.add('hide');
})

const scoreValue = function scoreValue(v, rn) {
    current[v].textContent = rn;
    score[v].textContent = Number(score[v].textContent) + Number(current[v].textContent);
}

//Roll the dice
btnRoll.addEventListener('click', () => {

    //Showing dice
    dice.classList.remove('hide');

    randNo = Math.floor(Math.random() * 6) + 1;
    if (p0.classList.contains('player--active')) {
        // imageFun(randNo);
        dice.src=`dice-${randNo}.png`;
        if (randNo == 1) {
            curReset(0);
            removeAdd(p0, p1);
        }
        else {
            current[0].textContent = Number(current[0].textContent) + Number(randNo);
        }
    }
    else if (p1.classList.contains('player--active')) {
        dice.src=`dice-${randNo}.png`;

        if (randNo == 1) {
            curReset(1);
            removeAdd(p1, p0);
        }
        else {
            current[1].textContent = Number(current[1].textContent) + Number(randNo);
        }
    }
})

