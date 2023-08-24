const choices = ["Rock", "Paper", "Scissors"];

let playerScore = 0;
let computerScore = 0;

const moves = document.querySelectorAll('.move');
moves.forEach((move) => {
  move.addEventListener('click', () => getPlayerMove(move))
})

function getPlayerMove(move) {
  if (move.classList.contains('rock')) {
    displayResults(playRound("Rock", getComputerChoice()));
  } else if (move.classList.contains('paper')) {
    displayResults(playRound("Paper", getComputerChoice()));
  } else {
    displayResults(playRound("Scissors", getComputerChoice()));
  }
}

const pScore = document.querySelector('.player-score');
const cScore = document.querySelector('.computer-score');
const scores = document.querySelector('.scores');

const winner = document.createElement('div');
winner.classList.add('winner');

function displayResults(message) {
  console.log(message)
  if (message.includes("Win")) {
    playerScore++;
    pScore.textContent = `${playerScore}`;
  } else if (message.includes("Lose")) {
    computerScore++;
    cScore.textContent = `${computerScore}`;
  }

  if(checkWin()) {
    console.log('stop game!')
    scores.appendChild(winner);
    moves.forEach((move) => {
      move.removeEventListener('click', () => getPlayerMove(move));
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

function game() {
  // for (let i = 1; i <= 5; i++) {
  //   console.log("Game: " + i);
  //   const playerSelection = prompt("What do you choose?: ");
  //   const computerSelection = getComputerChoice();
  //   console.log(playRound(playerSelection, computerSelection));
  //   getScore(playRound(playerSelection, computerSelection));
  // }

  if (playerScore > computerScore) {
    alert(
      "Player wins!\nPlayer Score: " +
        playerScore +
        "\nComputer Score: " +
        computerScore
    );
  } else if (playerScore < computerScore) {
    alert(
      "Computer wins!\nPlayer Score: " +
        playerScore +
        "\nComputer Score: " +
        computerScore
    );
  } else {
    alert(
      "Tie game!\nPlayer Score: " +
        playerScore +
        "\nComputer Score: " +
        computerScore
    );
  }
}

// game();
