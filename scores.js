//Javascript file for the leader board page
let highScores = JSON.parse(window.localStorage.getItem('highscores')) || [];
let highScoreList = document.querySelector("#highscorelist");
clearButton = document.querySelector("#clearbutton");

//Function to append new scores to the leader board
function appendHighScores() {
    for (let i = 0; i < highScores.length; i++) {
        let liNode = document.createElement("li");
        liNode.setAttribute("class", "list-group-item")
        liNode.textContent = "Player: " + highScores[i].init + " score: " + highScores[i].score;
        highScoreList.appendChild(liNode);
    
    }

};
//Clear button calls clearhighscores function when clicked
clearButton.addEventListener("click", function(event) {
    clearHighscores();
});

//Function to clear the high scores
function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  };
 
appendHighScores()