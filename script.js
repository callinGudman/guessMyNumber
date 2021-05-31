'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent =
  '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;
let btnCheck = document.querySelector('.check');

const  displayMessage = function(message){
 document.querySelector('.message').textContent = message;
}

const check = function(){

 const guess = Number(document.querySelector('.guess').value);

 // When there is no input
  if(!guess){
   displayMessage('⛔ No number!')

   //When guess is correct
  }else if(guess === secretNumber){
   displayMessage('🎉 Correct Number!')

   document.querySelector('body').style.backgroundColor = '#60b347';

   document.querySelector('.number').style.width = '30rem';

   document.querySelector('.number').textContent = secretNumber;

   if(score > highscore){
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
   }

   //When guess is wrong
  }else if(guess !== secretNumber){
   if(score > 1){
    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
    score = score -1;
    document.querySelector('.score').textContent = score;
   }else {
    displayMessage('🤯 You lost the game!');
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = 'darkred';
   }
  }
};

document.querySelector('.again').addEventListener('click',function(){
 score = 20;
 secretNumber = Math.trunc(Math.random()*20) + 1;

 displayMessage('Start guessing...');
 document.querySelector('.score').textContent = score ;
 document.querySelector('.number').textContent = '?';
 document.querySelector('.guess').value = '';

 document.querySelector('.number').style.width = '15rem';
 document.querySelector('body').style.backgroundColor = '#222';
});
btnCheck.addEventListener('click',check)
document.addEventListener('keydown', function(e){
 if(e.key==='Enter') {
  check();
 }});





