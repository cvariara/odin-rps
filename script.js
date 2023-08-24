const choices = ["Rock", "Paper", "Scissors"];

let playerScore = 0;
let computerScore = 0;

const pScore = document.querySelector('.player-score');
const cScore = document.querySelector('.computer-score');
const scores = document.querySelector('.scores');
const turns = document.querySelector('.turns');
const playerChoice = document.querySelector('.player-choices');
const computerChoice = document.querySelector('.computer-choices');

const moves = document.querySelectorAll('.move');

const winner = document.createElement('div');
winner.classList.add('winner');



moves.forEach((move) => {
  move.addEventListener('click', handleMoveClick)
})

function handleMoveClick(event) {
  getPlayerMove(event.currentTarget);
}

function getPlayerMove(move) {
  if (move.classList.contains('rock')) {
    displayScores(playRound("Rock", getComputerChoice()));
  } else if (move.classList.contains('paper')) {
    displayScores(playRound("Paper", getComputerChoice()));
  } else {
    displayScores(playRound("Scissors", getComputerChoice()));
  }
}

function displayTurn(message) {
  while (turns.hasChildNodes()) turns.firstChild.remove();
  const p = document.createElement('p');
  p.textContent = `${message}`;
  turns.appendChild(p);
}

function displayScores(message) {
  console.log(message)
  displayTurn(message);
  if (message.includes("Win")) {
    playerScore++;
    pScore.textContent = `${playerScore}`;
  } else if (message.includes("Lose")) {
    computerScore++;
    cScore.textContent = `${computerScore}`;
  }

  if(checkWin()) {
    console.log('stop game!')
    turns.firstChild.remove();
    turns.appendChild(winner);
    moves.forEach((move) => {
      move.removeEventListener('click', handleMoveClick);
    })
  }
}

function checkWin() {
  if (playerScore === 5) {
    console.log("PLAYER WINS!");
    winner.textContent = 'Winner: Player!';
    return true;
  } else if (computerScore === 5) {
    console.log("COMPUTER WINS!");
    winner.textContent = 'Winner: Computer!';
    return true;
  }

  return false;
}

function getComputerChoice() {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playRound(playerSelection, computerSelection) {
  const player = document.createElement('p');
  const computer = document.createElement('p');

  player.textContent = `${playerSelection}`;
  computer.textContent = `${computerSelection}`;

  playerChoice.appendChild(player);
  computerChoice.appendChild(computer);

  switch (playerSelection) {
    case "Rock":
      if (computerSelection === "Paper") {
        return "You Lose! Paper beats Rock";

      } else if (computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";
      }
      break;

    case "Paper":
      if (computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper";
      } else if (computerSelection === "Rock") {
        return "You Win! Paper beats Rock";
      }
      break;

    case "Scissors":
      if (computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors";
      } else if (computerSelection === "Paper") {
        return "You Win! Scissors beats Paper";
      }
      break;
  }
  return "It's a tie!";
}