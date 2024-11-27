function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;
const maxScore = 5;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// update Function to update the score display
function updateScore() {
  document.getElementById("youScore").textContent = `${humanScore}`;
  document.getElementById("computerScore").textContent = `${computerScore}`;
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice(); // Get the computer's choice
  const resultDiv = document.getElementById("result"); // Get the result div
  let resultMessage;
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    resultMessage = `It's a draw! Both chose ${capitalizeFirstLetter(
      humanChoice
    )}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    resultMessage = `You win! ${capitalizeFirstLetter(
      humanChoice
    )} beats ${capitalizeFirstLetter(computerChoice)}.`;
  } else {
    computerScore++;
    resultMessage = `You lose! ${capitalizeFirstLetter(
      computerChoice
    )} beats ${capitalizeFirstLetter(humanChoice)}.`;
  }

  resultDiv.textContent = resultMessage;
  updateScore(); //update score display
  checkForWinner();
}

function checkForWinner() {
  const resultDiv = document.getElementById("result");
  if (humanScore === maxScore) {
    alert("Congratulations! You are the champion!");
    resultDiv.textContent = "Congratulations! You are the champion!";
    resetGame();
  } else if (computerScore === maxScore) {
    alert("Sorry! The computer is the champion!");
    resultDiv.textContent = "Sorry! The computer is the champion!";
    resetGame();
  }
}

// Function to reset the game
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  updateScore();
}

document.getElementById("rockButton").addEventListener("click", function () {
  playRound("rock");
});
document.getElementById("paperButton").addEventListener("click", function () {
  playRound("paper");
});
document
  .getElementById("scissorsButton")
  .addEventListener("click", function () {
    playRound("scissors");
  });
