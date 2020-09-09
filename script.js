//Main javascript file
const timeEl = document.querySelector(".time");
const question = document.querySelector("#question");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");
const highScoreButton = document.querySelector("#highscore");
const scoreInput = document.querySelector("#scoreinput");
const endScore = document.querySelector("#endscore");
const scoreButton = document.querySelector("#scorebutton");
const highScoreList = document.querySelector("#highscorelist");

//Some variables for the timer to function and some HTML elements to be hidden until needed
let secondsLeft = 60;
let questionDisplay = document.querySelector("#quizdiv");
questionDisplay.style.display = "none";
let welcomeHeader = document.querySelector("#welcomeheader");
let timerInterval;
scoreInput.style.display = "none";

//timer function
function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
      secondsLeft = 0;
      timeEl.textContent = secondsLeft + " seconds left";
    }

  }, 1000);
};

//Function to end the quiz and allow user to input their initials for the leader board
function endQuiz() {
  clearInterval(timerInterval);
  endScore.textContent = secondsLeft;
  questionDisplay.style.display = "none";
  scoreInput.style.display = "block";
}

// Start button starts the timer/quiz 
startButton.addEventListener("click", function (event) {
  event.preventDefault;
  if (secondsLeft = 60) {
    setTime();
  } else {
    clearInterval(timerInterval);
    return;
  };
  questionDisplay.style.display = "block";
  welcomeHeader.style.display = "none";
});

// reset button reloads the page to start over
resetButton.addEventListener("click", function (event) {
  location.reload();
});

//Array of objects for the questions, wrong answers and correct answers
let questionAnswerArray = [{
    Question: "An array gets wrapped in ___",
    Answers: ["[   ]", "<   >", "{   }", "|   |"],
    CorrectAnswer: "[   ]"
  },
  {
    Question: "An 'If/Else' statement can contain ...",
    Answers: ["Just an 'If' statement", "an 'If' AND an 'Else'", "An 'If', 'Else If' and 'Else'", "All of the above"],
    CorrectAnswer: "All of the above"
  },
  {
    Question: "CSS stands for ___",
    Answers: ["Circulating style sheets", "Cascading style sheets", "Circulating syntax sheets", "Cascading syntax sheets"],
    CorrectAnswer: "Cascading style sheets"
  },
  {
    Question: "Javascript is ...",
    Answers: ["The same thing as Java", "The same thing as JQuery", "Essential for any web page/application", "a language built into every modern web browser"],
    CorrectAnswer: "a language built into every modern web browser"
  },
  {
    Question: "An easy way to 'debug' your code in javascript is to use ___",
    Answers: ["an if/else statement", "Math.random", "console.log", "CTRL+Z"],
    CorrectAnswer: "console.log"
  }
];

//Global variables for the newQuestion function
let index = 0;
let currentQuestion = questionAnswerArray[0];
newQuestion();

//Function that brings up the next question after one has been answered
function newQuestion() {
  if (index >= questionAnswerArray.length) {
    endQuiz();
  } else {
    currentQuestion = questionAnswerArray[index];
    question.textContent = currentQuestion.Question;
    button1.textContent = currentQuestion.Answers[0];
    button2.textContent = currentQuestion.Answers[1];
    button3.textContent = currentQuestion.Answers[2];
    button4.textContent = currentQuestion.Answers[3];
  }
}


//Button functionality for the user to input initials
scoreButton.addEventListener("click", function(event) {
  event.preventDefault;
  let playerInitials = document.querySelector("#playerinitials");
  let value = playerInitials.value;
  console.log(value);
  playerInitials.textContent = "";
  
  //Object to use JSON to navigate to scores.js file to properly store high scores
  let player = {
    init: value,
    score: secondsLeft
  };
  
  let highScores = JSON.parse(window.localStorage.getItem('highscores')) || [];
  
  highScores.push(player);
  
  window.localStorage.setItem('highscores', JSON.stringify(highScores));
  
  window.location.href = "highscore.html";
  
})

//Button listener to check if correct answer is selected
button1.addEventListener("click", function (event) {
  event.preventDefault;
  if (button1.textContent === currentQuestion.CorrectAnswer) {
    alert("correct");
  } else {
    alert("wrongggg");
    secondsLeft -= 10;
    timeEl.textContent = secondsLeft + " seconds left";
  };
  index++;
  newQuestion();
});
//Button listener to check if correct answer is selected
button2.addEventListener("click", function (event) {
  event.preventDefault;
  if (button2.textContent === currentQuestion.CorrectAnswer) {
    alert("correct");
  } else {
    alert("wrongggg");
    secondsLeft -= 10;
    timeEl.textContent = secondsLeft + " seconds left";
  };
  index++;
  newQuestion();
});
//Button listener to check if correct answer is selected
button3.addEventListener("click", function (event) {
  event.preventDefault;
  if (button3.textContent === currentQuestion.CorrectAnswer) {
    alert("correct");
  } else {
    alert("wrongggg");
    secondsLeft -= 10;
    timeEl.textContent = secondsLeft + " seconds left";
  };
  index++;
  newQuestion();
});
//Button listener to check if correct answer is selected
button4.addEventListener("click", function (event) {
  event.preventDefault;
  if (button4.textContent === currentQuestion.CorrectAnswer) {
    alert("correct");
  } else {
    alert("wrongggg");
    secondsLeft -= 10;
    timeEl.textContent = secondsLeft + " seconds left";
  };
  index++;
  newQuestion();
});