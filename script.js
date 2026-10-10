let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let setNumber = Math.floor(Math.random() * 3) + 1;
  if (setNumber === 1) {
    return "rock";
  } else if (setNumber === 2) {
    return "paper";
  } else return "scissors";
}

function getHumanChoice() {
  let humanValue = prompt("Give me rock, paper or scissors.");
  return humanValue;
}

function playRound(humanChoice, computerChoice) {
  let humanChoiceLowerCase = humanChoice.toLowerCase();
  if (computerChoice === "paper" && humanChoiceLowerCase === "rock") {
    console.log("Computer Wins! Paper beats rock.");
    computerScore = computerScore + 1;
  } else if (
    computerChoice === "scissors" &&
    humanChoiceLowerCase === "paper"
  ) {
    console.log("Computer Wins! Scissors beats paper.");
    computerScore = computerScore + 1;
  } else if (computerChoice === "rock" && humanChoiceLowerCase === "scissors") {
    console.log("Computer Wins! Rock beats scissors.");
    computerScore = computerScore + 1;
  } else if (
    computerChoice === "paper" &&
    humanChoiceLowerCase === "scissors"
  ) {
    console.log("You Win! Scissors beats paper.");
    humanScore = humanScore + 1;
  } else if (computerChoice === "scissors" && humanChoiceLowerCase === "rock") {
    console.log("You Win! Rock beats scissors.");
    humanScore = humanScore + 1;
  } else if (computerChoice === "rock" && humanChoiceLowerCase === "paper") {
    console.log("You Win! Paper beats rock");
    humanScore = humanScore + 1;
  } else {
    console.log("It's a tie!");
  }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
