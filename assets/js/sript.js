// // variables with query selectors

// create a header variable
var quizTitle = document.createElement('h1');

// create a button variable
var startBtn = document.querySelector("#start");

// create timer variables
var timerEl = document.getElementById('countdownQuestions');

// add query Selector to get questions 
var questions = document.querySelector("#questions");

var correctAnswer = 
// var count = 0;
// var incrementEl = document.querySelector("#increment");
// var decrementEl = document.querySelector ("#decrement");
// var countEl = document.querySelector("#count");
// var initialsInput = document.querySelector("#initials");
// var scoreInput = document.querySelector("#score");

// click the start button with an array

// timer starts using countdown function
function countdown() {
    var timeLeft = 100;

    // setInterval can call to start a new question after 1000 milliseconds

    var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining ';
        timeLeft--;
    } else if (timeLeft === 1) {
        timeLeft--;
    } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage("You are out of time!");
    }
}, 1000);
}

// Make question array

var questions = [
   { Q: "What is the name of Katy Perry's cat?",
    options: [ 
        a: 'Kitty Purry'
        b: 'Left Shark'
        c: 'Doug'
        d: 'Taylor Swift'
    ],
    correctAnswer: "Kitty Purry"
    },

    { Q: "What is Taylor Swift's favorite TV show?",
    options: [
        a: 'Grey Anatomy'
        b: 'The Office'
        c: 'Jane the Virgin'
        d: 'Law and Order: Special Victims Unit'
    ],
    correctAnswer: "Law and Order: Special Victims Unit"
},

]

// Create ask questions function that goes through other questions once previous question is answered

var askQuestions () {
    (questions[i])
    var === TRUE ||
    if ()
}

// when i answer a question, i am then presented with another question

// event listener to start countdown

startBtn.addEventListener("click", function() {
    countdown();
});

// 
 
// var questions = []
 
// var askQuestion () {
//    (questions[i]) var askQuestion === TRUE ||
//    if (var === TRUE) {
//        alert("You are correct! Great job!");
//    }
//    else {
//        alert("That is incorrect! Keep learning!");
//        )
//    }
// }

// function setCounterText() {
//     countEl.textContent = count;
//  }
  
//  incrementEl.addEventListener("click", function() {
//     count++;
//     setCounterText();
//  });
  
//  decrementEl.addEventListener("click", function() {
//     if(count > 0) {
//         count--;
//         setCounterText();
//     }
//  });



  
//  // when i answer a question incorrectly, time is subtracted from the clock
  
//  // when all questions, are answered or the timer reaches 0, the game is over
//  // condition
  
//  // when the game is over then i can save my initials and score
  
//  // listener
 

 // var questions = [
    // Q: "what is the name of Katy Perty's cat?",
    // answers: [
      //   a: 'Kitty Purry'
        // b: 'Left Shark'
        // c: 'Doug'
        // d: 'Taylor Swift'
    // ]

    // for (
       // count+1
   // )
 // ]

 // var score = 0;
 // var output = [];
 // var answers;
 // for(var i=0; i< questions.length)

 // function trackScore ()
// var scoreInput = JSON.parse(scoreInput);
// if (!scoreInput) {
//     return false;
// }

// trackScore = JSON.parse(scoreInput);
// for (var i = 0; i < scoreInput.length; i++) {
//     // show score
// }

// startBtn.addEventListener("click", function() {
   // countdown();
   // startBtn.style.display = "none";
// }

// function main() {
   // homeEl.setAttribute("class'<"hidden")
   // quizTitle.removeAttribute("class")
   // quizTitle();
// }