const timeEl = document.querySelector(".time");
const question = document.querySelector(".question");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");
const highScoreButton = document.querySelector("#highscore");

let secondsLeft = 60;
let questionDisplay = document.querySelector("#quizdiv");
questionDisplay.style.display = "none";
let welcomeHeader = document.querySelector("#welcomeheader");

//timer function
function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
};

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
    question: "q1",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
    correctAnswer: "correct answer"
  },
  {
    question: "q2",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
    correctAnswer: "correct answer"
  },
  {
    question: "q3",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
    correctAnswer: "correct answer"
  },
  {
    question: "q4",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
    correctAnswer: "correct answer"
  },
  {
    question: "q5",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
    correctAnswer: "correct answer"
  }
];