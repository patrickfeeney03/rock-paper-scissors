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
let playerCount = 0;
let computerCount = 0;
let roundCount = 0;
function game1() {
    

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

function userTurn() {
    let title = document.querySelector(".title");
    title.textContent = "User's Turn!";
}

function computerTurn() {
    let title = document.querySelector(".title");
    title.textContent = "Computer's Turn!";
}

function imageClicked() {
    // Gets the id of the image that causes the function to get called
    let choice = this.id;
    removeUserEventListener();
    let computerChoice = getComputerChoice();
    console.log(`User Choice: ${choice}, Computer Choice: ${computerChoice}`);
    let roundResult = playRound(choice, computerChoice);
    if (roundResult === "player") {
        playerCount++;
    } else if (roundResult === "computer") {
        computerCount++;
    }
    console.log(`Round Winner: ${roundResult}`);

    roundCount++;
    if (roundCount > 4) {
        if(playerCount === computerCount) {
            console.log("Draw");
        } else if(playerCount < computerCount) {
            console.log("Computer Wins");
        } else {
            console.log("Player Wins");
        }
    } else {
        setUserEventListener();
    }
    
    
    
}
function setUserEventListener() {
    // Main images code
    const images = document.querySelectorAll(".main-images");
    images.forEach(image => image.addEventListener("click", imageClicked));   
}
function removeUserEventListener() {
    const images = document.querySelectorAll(".main-images");
    images.forEach(image => image.removeEventListener("click", imageClicked));
}
let userInput = false;

function game() {
    let userChoice = "";
    userTurn();
    setUserEventListener();
}


game();
