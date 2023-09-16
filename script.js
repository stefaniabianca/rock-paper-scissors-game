// Get buttons
const gameOptions = document.querySelectorAll("i");
const resultContainer = document.querySelector(".resultContainer");

let userChoice;
let playerChoice;
let result;

let score = 0;
const gameScore = document.querySelector(".updatedScore");

const resetButton = document.querySelector(".resetScoreBtn");


// Run game when user picks choice
gameOptions.forEach(option => option.addEventListener("click", (e) => {
    userChoice = e.target.id;
    pickPlayerChoice();
    getResult();
    updateScore()

    resultContainer.innerHTML = `Your choice: ${userChoice}<br> Player choice: ${playerChoice}<br> Result: ${result}`
    gameScore.innerHTML = score;
}))

// Pick random choice for computer
function pickPlayerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    if(randomNum === 1) {
        playerChoice = "rock";
    } else if (randomNum === 2) {
        playerChoice = "paper";
    } else if (randomNum === 3) {
        playerChoice = "scissors"
    }
}


// Set game rules to get result
function getResult() {
    if (userChoice === playerChoice) {
        result = "It's a tie";
    } else if (userChoice === "rock" && playerChoice === "paper") {
        result = "You lose";
    } else if (userChoice === "rock" && playerChoice === "scissors") {
        result = "You win";
    } else if (userChoice === "paper" && playerChoice === "rock") {
        result = "You win";
    } else if (userChoice === "paper" && playerChoice === "scissors") {
        result = "You lose";
    } else if (userChoice === "scissors" && playerChoice === "rock") {
        result = "You lose";
    } else if (userChoice === "scissors" && playerChoice === "paper") {
        result = "You win";
    }
}

function updateScore() {
    if (result === "You win") {
        score++;
    } else {
        score = score;
    }
}

//Reset score
resetButton.addEventListener("click", () => {
    score = 0;
    gameScore.innerHTML = score;

})