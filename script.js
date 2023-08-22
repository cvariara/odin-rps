const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();

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

let playerScore = 0;
let computerScore = 0;

function game() {
  for (let i = 1; i <= 5; i++) {
    console.log("Game: " + i);
    const playerSelection = prompt("What do you choose?: ");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    getScore(playRound(playerSelection, computerSelection));
  }
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

function getScore(message) {
  console.log("getScore: " + message);
  if (message.includes("Win")) {
    playerScore++;
    console.log("new player score: " + playerScore);
  } else if (message.includes("Lose")) {
    computerScore++;
    console.log("new computer score: " + computerScore);
  }
}

game();
