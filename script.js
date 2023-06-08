function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1)
    let computerChoice;
    switch (randomNumber) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
        default:
            console.log("Something went very wrong.");
    }
    return computerChoice;
}

function getPlayerChoice() {
    let userChoice = prompt("Choose between Rock, Paper, or Scissors.");
    userChoice = userChoice.toLowerCase();
    do {
        if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
            alert("Input is not correct. Please try again.");
            userChoice = prompt("Choose between Rock, Paper, or Scissors.");
        userChoice = userChoice.toLowerCase();
        }        
    } while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors")
    
    return userChoice;
}

function playRound(playerSelection, computerSelection) {
    let roundResult;
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            roundResult = "Draw!";
        }
        if (computerSelection === "paper") {
            roundResult = "You Lose! Paper beats Rock";
        }
        if (computerSelection === "scissors") {
            roundResult = "You Win! Rock beats Scissors";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            roundResult = "You Win! Paper beats Rock";
        }
        if (computerSelection === "paper") {
            roundResult = "Draw";            
        }
        if (computerSelection === "scissors") {
            roundResult = "You Lose! Scissors beat Paper";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            roundResult = "You Lose! Rock beats Scissors";
        }
        if (computerSelection === "paper") {
            roundResult = "You Win! Scissors beat Paper";
        }
        if (computerSelection === "scissors") {
            roundResult = "Draw";
        }
    }
    return roundResult;
}

console.log(playRound(getPlayerChoice(), getComputerChoice()));

