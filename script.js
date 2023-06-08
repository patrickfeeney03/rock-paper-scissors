function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1)
    let computerChoice;
    switch (randomNumber) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
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

