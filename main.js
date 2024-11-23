function getComputerChoice() {
  //computer returns a random string
  const randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

const ComputerChoice = getComputerChoice();
console.log(ComputerChoice);

function getHumanChoice() {
  // get input from user
  const userInput = prompt(
    "Choose from, (rock, paper or scissors):"
  ).toLowerCase(); // to be changed if not relevant

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    alert("Invalid choice. Please enter rock, paper or scissors.");

    return getHumanChoice();
  }
}

const humanChoice = getHumanChoice(); // returns the choices of the user
console.log(`You choose: ${humanChoice}`);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // function that will determine the winner of a round
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(
      `It's a draw! both choose ${
        humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
      }.`
    );
    return;
  }
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    console.log(
      `You win! ${
        humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
      }beats ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }.`
    );
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors")
  ) {
    computerScore++;
    console.log(
      `You lose! ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      } beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`
    );
  } else {
    console.log(
      `Invalid choice: ${humanChoice}. Please choose rock, paper, or scissors.`
    );
    return;
  }
}

function playGAME() {
  for (let i = 0; i < 3; i++) {
    const humanSelection = getHumanChoice();
    console.log(`You chose: ${humanSelection}`);

    const computerSelection = getComputerChoice();
    console.log(`Computer chose: ${computerSelection}`);

    console.log(`Round ${i + 1}:`);
    playRound(humanSelection, computerSelection);
  }

  console.log(`Final Scores: You - ${humanScore}, Computer - ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("The game is a draw!");
  }
}

playGAME();
