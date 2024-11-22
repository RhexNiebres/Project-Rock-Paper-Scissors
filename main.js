function getComputerChoice() {
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
  const userInput = prompt(
    "Choose from, (rock, paper or scissors):"
  ).toLowerCase();

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

const humanChoice = getHumanChoice();
console.log(`You choose: ${humanChoice}`);
