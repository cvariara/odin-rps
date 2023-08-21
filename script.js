function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const random = Math.floor(Math.random() * choices.length);
  // console.log(random);
  // console.log(choices[random])
  return choices[random]
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
    return "You Lose! Scissors beats Paper"
  } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
    return "You Win! Rock beats Scissors"
  } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
    return "You Lose! Rock beats Scissors"
  } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
    return "You Win! Paper beats Rock"
  } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
    return "You Lose! Paper beats Rock"
  } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
    return "You Win! Paper beats Rock"
  }
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log('compSelect: ' + computerSelection);