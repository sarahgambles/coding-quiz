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

// presented with a question
 
// when i answer a question, i am then presented with another question
 
var questions = []
 
var askQuestion () {
   (questions[i]) var askQuestion === TRUE ||
   if (var === TRUE) {
       alert("You are correct! Great job!");
   }
   else {
       alert("That is incorrect! Keep learning!");
       )
   }
}

function setCounterText() {
    countEl.textContent = count;
 }
  
 incrementEl.addEventListener("click", function() {
    count++;
    setCounterText();
 });
  
 decrementEl.addEventListener("click", function() {
    if(count > 0) {
        count--;
        setCounterText();
    }
 });
  
 // when i answer a question incorrectly, time is subtracted from the clock
  
 // when all questions, are answered or the timer reaches 0, the game is over
 // condition
  
 // when the game is over then i can save my initials and score
  
 // listener
 

 