// variables with query selectors
var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector ("#decrement");
var countEl = document.querySelector("#count");
var initialsInput = document.querySelector("#initials");
var scoreInput = document.querySelector("#score");
var questions = document.querySelector();
var answer =

// click the start button with an array
 
// add event function
 
// timer starts
function countdown() {
    var timeLeft = 30;
  
    // setInterval to call a function to execute a new question
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining ';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' seconds remaining ';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }

         // add local storage to save initials and score
 
       localStorage.setItem("initials", initials);
       localStorage.setItem("score", score);
       renderLastRegistered();
   }, 1000);
}

 