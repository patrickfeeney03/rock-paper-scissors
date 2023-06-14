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
// Variables used to keep track of the scores and rounds
let playerCount = 0;
let computerCount = 0;
let roundCount = 0;

function imageClicked() {
    // Gets the id of the image that causes the function to get called
    let choice = this.id;
    
    // use the id to populate the first div and show changing display type from none to block
    let square1 = document.querySelector("#img-sqr-1");
    square1.style.display = "block";
    if (choice === "paper") {
        square1.src="./images/paper.svg";
    } else if (choice === "rock") {
        square1.src="./images/rock.svg";
    } else {
        square1.src="./images/scissors.svg";
    }
    removeUserEventListener();
    let computerChoice = getComputerChoice();

    let square2 = document.querySelector("#img-sqr-2");
    square2.style.display = "block";
    if (computerChoice === "paper") {
        square2.src="./images/paper.svg";
    } else if (computerChoice === "rock") {
        square2.src="./images/rock.svg";
    } else {
        square2.src="./images/scissors.svg";
    }


    console.log(`User Choice: ${choice}, Computer Choice: ${computerChoice}`);
    let roundResult = playRound(choice, computerChoice);
    if (roundResult === "player") {
        playerCount++;
        let playerScore = document.querySelector("#player-score");
        playerScore.textContent = playerCount;
    } else if (roundResult === "computer") {
        computerCount++;
        let computerScore = document.querySelector("#computer-score");
        computerScore.textContent = computerCount;
    }
    console.log(`Round Winner: ${roundResult}`);

    roundCount++;
    // Game ends after 5 rounds
    if (roundCount > 4) {
        if(playerCount === computerCount) {
            console.log("Draw");
            let playerResult = document.querySelector("#player-result");
            let computerResult = document.querySelector("#computer-result");
            playerResult.textContent = "Draw";
            computerResult.textContent = "Draw";
            playerResult.style.display = "block";
            computerResult.style.display = "block";
        } else if(playerCount < computerCount) {
            console.log("Computer Wins");
            let playerResult = document.querySelector("#player-result");
            let computerResult = document.querySelector("#computer-result");
            playerResult.textContent = "Lost!";
            computerResult.textContent = "Won!";
            playerResult.style.display = "block";
            computerResult.style.display = "block";
        } else {
            console.log("Player Wins");
            let playerResult = document.querySelector("#player-result");
            let computerResult = document.querySelector("#computer-result");
            playerResult.textContent = "Won!";
            computerResult.textContent = "Lost!";
            playerResult.style.display = "block";
            computerResult.style.display = "block";
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
    setUserEventListener();

    // Hide Win/Lost titles at the beginning of the game
    let playerResult = document.querySelector("#player-result");
    playerResult.style.display = "none";
    let computerResult = document.querySelector("#computer-result");
    computerResult.style.display = "none";
}

function toggleMainImages() {
    let mainImages = document.querySelectorAll(".main-images");
    let displayType = window.getComputedStyle(mainImages[0]).getPropertyValue("display");
    if (displayType === "inline") {
        console.log("Setting display to none");
        mainImages.forEach((image) => {
            image.style.display = "none";
        });
    } else if (displayType === "none") {
        console.log("Setting display to inline");
        mainImages.forEach((image) => {
            image.style.display = "inline";
        });
    } else {
        console.log("Something isn't right. Setting display property of images to inline");
        mainImages.forEach((image) => {
            image.style.display = "inline";
        })
    }
}

function togglePlayAgainButton() {
    let playAgainButton = document.querySelector("#play-again");
    let displayType = window.getComputedStyle(playAgainButton).getPropertyValue("display");
    if (displayType === "inline-block") {
        console.log("Setting display to none");
        playAgainButton.style.display = "none";
    } else if (displayType === "none") {
        console.log("Setting display to inline");
        playAgainButton.style.display = "inline";
    } else {
        console.log("Something isn't right. Setting display property of button to inline");
        playAgainButton.style.display = "inline";
    }
}


game();
