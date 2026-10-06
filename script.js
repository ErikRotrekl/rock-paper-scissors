function getComputerChoice() {
  let setNumber = Math.floor(Math.random() * 3) + 1;
  if (setNumber === 1) {
    return "rock";
  } else if (setNumber === 2) {
    return "paper";
  } else return "scissors";
}
console.log(getComputerChoice());

function getHumanChoice() {
  let humanValue = prompt("Give me rock, paper or scissors.");
  return humanValue;
}
console.log(getHumanChoice());
