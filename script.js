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

let index = 0;
let currentQuestion = questionAnswerArray[0];
newQuestion();


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

// scoreButton.addEventListener("click", function(event) {
//   event.preventDefault;
//   let playerInitials = document.querySelector("#playerinitials");
//   let value = playerInitials.value;
//   console.log(value);
//   playerInitials.textContent = "";
//   let liNode = document.createElement("li");
//   liNode.textContent = "Player: " + value + " score: " + secondsLeft;
//   highScoreList.appendChild(liNode);
// })

scoreButton.addEventListener("click", function(event) {
  event.preventDefault;
  let playerInitials = document.querySelector("#playerinitials");
  let value = playerInitials.value;
  console.log(value);
  playerInitials.textContent = "";
  // create an object to store initials and score
  let player = {
    init: value,
    score: secondsLeft
  };
  // grab current saved high scores -- need object formation for JSON readability 
  let highScores = JSON.parse(window.localStorage.getItem('highscores')) || [];
  // add new player to high scores list
  highScores.push(player);
  // set localstorage to new high scores list -- JSON format going in 
  window.localStorage.setItem('highscores', JSON.stringify(highScores));
  // send them to high scores page
  window.location.href = "highscore.html";
  //  ** move this functionality to another js page and connect that page to highscore.html
  // let liNode = document.createElement("li");
  // liNode.textContent = "Player: " + player.init + " score: " + player.score;
  // console.log(liNode)
  // highScoreList.appendChild(liNode);
})

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