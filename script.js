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
            roundResult = "draw";
        }
        if (computerSelection === "paper") {
            roundResult = "computer";
        }
        if (computerSelection === "scissors") {
            roundResult = "player";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            roundResult = "player";
        }
        if (computerSelection === "paper") {
            roundResult = "draw";            
        }
        if (computerSelection === "scissors") {
            roundResult = "computer";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            roundResult = "computer";
        }
        if (computerSelection === "paper") {
            roundResult = "player";
        }
        if (computerSelection === "scissors") {
            roundResult = "draw";
        }
    }
    return roundResult;
}

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

function game() {
    let playerCount = 0;
    let computerCount = 0;

    for (let i = 0; i < 5; i++) {
        // Display results of each round
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let roundResult = playRound(playerChoice, computerChoice);

        if (roundResult === "draw") {
            console.log("Draw");
        } else if (roundResult === "player") {
            console.log(`${capitalizeFirstLetter(playerChoice)} Beats ${capitalizeFirstLetter(computerChoice)}`);
            playerCount++;
        } else if (roundResult === "computer") {
            console.log(`${capitalizeFirstLetter(computerChoice)} Beats ${capitalizeFirstLetter(playerChoice)}`);
            computerCount++;
        }
        
    }
    if (playerCount == computerCount) console.log("\nDraw! Nobody Wins");
    else if (playerCount > computerCount) console.log("\Player Wins!");
    else console.log("\nComputer Wins");

    // Display winner at the
}

game();
