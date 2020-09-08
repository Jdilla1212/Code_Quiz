let highScores = JSON.parse(window.localStorage.getItem('highscores')) || [];
let highScoreList = document.querySelector("#highscorelist");
clearButton = document.querySelector("#clearbutton");


function appendHighScores() {
    // .sort to sort thru high scores
    for (let i = 0; i < highScores.length; i++) {
        let liNode = document.createElement("li");
        liNode.setAttribute("class", "list-group-item")
        liNode.textContent = "Player: " + highScores[i].init + " score: " + highScores[i].score;
        console.log(liNode)
        highScoreList.appendChild(liNode);

    }

};

// clearButton.addEventListener("click", function (event) {
//     event.preventDefault;
//     let highScoreList = [];

// }

appendHighScores();