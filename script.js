// Global Variables used to keep track of game easily
let playerCount = 0;
let computerCount = 0;
let roundCount = 0;

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



function addBounceSquaresClass() { // Rename to bounceChoiceSquares
    function addClass() {
        let squares = document.querySelectorAll(".choice-container");
        squares.forEach((square) => {
            square.classList.add("bounce");
        });
    }

    function removeClass() {
        let squares = document.querySelectorAll(".choice-container");
        squares.forEach((square) => {
            console.log("Once");
            // Remove the class once it finished animating!
            square.addEventListener("animationend", function handler() {
                square.classList.remove("bounce");
                square.removeEventListener("animationend", handler);
            });
        });  
    }

    addClass();
    removeClass();      
}

function imageClicked() {
    removeUserEventListener();
    addBounceSquaresClass(); // Run bouncing animation on choices
    
    // Player and Computer round choices
    let choice = this.id;
    let computerChoice = getComputerChoice();
    // This function will populate and update both choice squares
    setSquaresContentWithPlayerAndComputerChoices(choice, computerChoice);

    console.log(`User Choice: ${choice}, Computer Choice: ${computerChoice}`);
    let roundResult = playRound(choice, computerChoice);
    if (roundResult === "player") {
        updateUserCounter(++playerCount);
    } else if (roundResult === "computer") {
        updateComputerCounter(++computerCount);
    }
    console.log(`Round Winner: ${roundResult}`);

    roundCount++;
    
    if (roundCount > 4) {
        // The 3 images will disappear and the play again button will pop up instead of them.
        toggleMainImages();
        togglePlayAgainButton();

        if(playerCount === computerCount) {
            // Game Result: Draw
            console.log("Draw");
            let playerResult = document.querySelector("#player-result");
            let computerResult = document.querySelector("#computer-result");
            playerResult.textContent = "Draw";
            computerResult.textContent = "Draw";
            playerResult.style.display = "block";
            computerResult.style.display = "block";
        } else if(playerCount < computerCount) {
            // Game Result: Computer Wins
            console.log("Computer Wins");
            let playerResult = document.querySelector("#player-result");
            let computerResult = document.querySelector("#computer-result");
            playerResult.textContent = "Lost!";
            computerResult.textContent = "Won!";
            playerResult.style.display = "block";
            computerResult.style.display = "block";
        } else {
            // Game Result: Player Wins
            console.log("Player Wins");
            let playerResult = document.querySelector("#player-result");
            let computerResult = document.querySelector("#computer-result");
            playerResult.textContent = "Won!";
            computerResult.textContent = "Lost!";
            playerResult.style.display = "block";
            computerResult.style.display = "block";
        }
    } else {
        // roundCount is not higher than 4 yet, so the game continues
        setUserEventListener();
        updateRoundCounter(roundCount+1);
    }
}

function setSquaresContentWithPlayerAndComputerChoices(choice, computerChoice) {
    let square1 = document.querySelector("#img-sqr-1");
    square1.style.display = "block";    
    if (choice === "paper") {
        square1.src="./images/paper.svg";
    } else if (choice === "rock") {
        square1.src="./images/rock.svg";
    } else {
        square1.src="./images/scissors.svg";
    }
    let square2 = document.querySelector("#img-sqr-2");
    square2.style.display = "block";
    if (computerChoice === "paper") {
        square2.src="./images/paper.svg";
    } else if (computerChoice === "rock") {
        square2.src="./images/rock.svg";
    } else {
        square2.src="./images/scissors.svg";
    }
}

function emptyChoiceSquares() {
    let squares = document.querySelectorAll(".choice-images");
    squares.forEach((square) => {
        square.style.display = "none";
    })
}

function game() { // Change this to gameSetup?
    hidePlayersResultText(); // Hide Win/Lost titles at the beginning of the game
    setUserEventListener(); // Listen for player's clicks
    setButtonEventListener(); // Listen for Play Again button click
}

function hidePlayersResultText() {
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

function restartGame() {
    playerCount = 0;
    computerCount = 0;
    roundCount = 0;
    console.log("Restarting game");
    updateRoundCounter(roundCount+1);
    updateUserCounter(playerCount);
    updateComputerCounter(computerCount);
    toggleMainImages();
    togglePlayAgainButton();
    emptyChoiceSquares();
    game();
}

// Event Listeners
function setButtonEventListener() {
    let buttonElement = document.querySelector("#play-again");
    buttonElement.addEventListener("click", restartGame);
}
function setUserEventListener() {
    const images = document.querySelectorAll(".main-images");
    images.forEach(image => image.addEventListener("click", imageClicked));   
}
function removeUserEventListener() {
    const images = document.querySelectorAll(".main-images");
    images.forEach(image => image.removeEventListener("click", imageClicked));
}


// Counters functions
function updateRoundCounter(roundNumber) {
    let spanElement = document.querySelector("#round-count");
    spanElement.textContent = roundNumber;
}
function updateUserCounter(userScore) {
    let spanElement = document.querySelector("#player-score");
    spanElement.textContent = userScore;
}
function updateComputerCounter(computerScore) {
    let spanElement = document.querySelector("#computer-score");
    spanElement.textContent = computerScore;
}

game();
