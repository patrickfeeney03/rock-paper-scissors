// Global Variables used to keep track of game easily
let playerWinsCount = 0;
let computerWinsCount = 0;
let roundCount = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1)
    switch (randomNumber) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
}

function getRoundWinner(playerSelection, computerSelection) {
    let roundResult;
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            roundResult = "draw";
        }
        else if (computerSelection === "paper") {
            roundResult = "computer";
        }
        else if (computerSelection === "scissors") {
            roundResult = "player";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            roundResult = "player";
        }
        else if (computerSelection === "paper") {
            roundResult = "draw";            
        }
        else if (computerSelection === "scissors") {
            roundResult = "computer";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            roundResult = "computer";
        }
        else if (computerSelection === "paper") {
            roundResult = "player";
        }
        else if (computerSelection === "scissors") {
            roundResult = "draw";
        }
    }
    return roundResult;
}

function addAnimationToElement(elementId, animationName) {
    let element = document.querySelector(elementId);
    element.classList.remove(animationName);
    void element.offsetWidth;
    element.classList.add(animationName);

    element.addEventListener("animationend", function handler() {
        element.classList.remove(animationName);
        element.removeEventListener("animationend", handler);
    });
}

function runRound() {
    let playerChoice = this.id;
    let computerChoice = getComputerChoice();
    setChoiceContainersWithChoices(playerChoice, computerChoice);
    let roundWinner = getRoundWinner(playerChoice, computerChoice);
    console.log(`User Choice: ${playerChoice}\nComputer Choice: ${computerChoice}\nRound Winner: ${roundWinner}`);
    
    if (roundWinner === "player") {
        updatePlayerCounter(++playerWinsCount);
        addAnimationToElement("#square-container1", "bounce-and-green-shadow");
        addAnimationToElement("#square-container2", "bounce-and-red-shadow");
    } else if (roundWinner === "computer") {
        updateComputerCounter(++computerWinsCount);
        addAnimationToElement("#square-container1", "bounce-and-red-shadow");
        addAnimationToElement("#square-container2", "bounce-and-green-shadow");
    } else {
        addAnimationToElement("#square-container1", "bounce-and-yellow-shadow");
        addAnimationToElement("#square-container2", "bounce-and-yellow-shadow");
    }
    roundCount++;
    
    if (roundCount > 4) {
        toggleRockPaperScissorsImages();
        togglePlayAgainButton();
        showWinnerLooser();        
    } else {
        updateRoundCounter(roundCount+1);
    }
}

function showWinnerLooser() {
    let playerResultSpan = document.querySelector("#player-result");
    let computerResultSpan = document.querySelector("#computer-result");
    playerResultSpan.style.display = "block";
    computerResultSpan.style.display = "block";
    if(playerWinsCount === computerWinsCount) {
        console.log("Game Result: Draw");
        playerResultSpan.textContent = "Draw";
        computerResultSpan.textContent = "Draw";
    } else if(playerWinsCount < computerWinsCount) {
        console.log("Game Result: Computer Wins");
        playerResultSpan.textContent = "Lost!";
        computerResultSpan.textContent = "Won!";
    } else if(playerWinsCount > computerWinsCount) {
        console.log("Game Result: Player Wins");
        playerResultSpan.textContent = "Won!";
        computerResultSpan.textContent = "Lost!";
    }
}

function setChoiceContainersWithChoices(playerChoice, computerChoice) {
    let imageChoiceLeft = document.querySelector("#img-sqr-1");
    imageChoiceLeft.style.display = "block";    
    if (playerChoice === "paper") {
        imageChoiceLeft.src="./images/paper.svg";
    } else if (playerChoice === "rock") {
        imageChoiceLeft.src="./images/rock.svg";
    } else {
        imageChoiceLeft.src="./images/scissors.svg";
    }
    let imageChoiceRight = document.querySelector("#img-sqr-2");
    imageChoiceRight.style.display = "block";
    if (computerChoice === "paper") {
        imageChoiceRight.src="./images/paper.svg";
    } else if (computerChoice === "rock") {
        imageChoiceRight.src="./images/rock.svg";
    } else {
        imageChoiceRight.src="./images/scissors.svg";
    }
}

function emptyChoiceSquares() {
    let images = document.querySelectorAll(".choice-images");
    images.forEach((image) => {
        image.style.display = "none";
    })
}

function hideWinnerLooserResultTexts() {
    let playerResult = document.querySelector("#player-result");
    playerResult.style.display = "none";
    let computerResult = document.querySelector("#computer-result");
    computerResult.style.display = "none";
}

function toggleRockPaperScissorsImages() {
    let mainImages = document.querySelectorAll(".main-images");
    let displayTypeImage1 = window.getComputedStyle(mainImages[0]).getPropertyValue("display");
    if (displayTypeImage1 === "inline") {
        mainImages.forEach((image) => {
            image.style.display = "none";
        });
    } else {
        mainImages.forEach((image) => {
            image.style.display = "inline";
        });
    }
}

function togglePlayAgainButton() {
    let playAgainButton = document.querySelector("#play-again");
    let displayType = window.getComputedStyle(playAgainButton).getPropertyValue("display");
    if (displayType === "inline-block") {
        playAgainButton.style.display = "none";
    } else {
        playAgainButton.style.display = "inline";
    }
}

// Event Listeners
function setPlayAgainButtonEventListener() {
    let buttonElement = document.querySelector("#play-again");
    buttonElement.addEventListener("click", gameSetup);
}
function setImagesClickEventListener() {
    const images = document.querySelectorAll(".main-images");
    images.forEach(image => image.addEventListener("click", runRound));   
}

// Counters functions
function updateRoundCounter(roundNumber) {
    let spanElement = document.querySelector("#round-count");
    spanElement.textContent = roundNumber;
}
function updatePlayerCounter(userScore) {
    let spanElement = document.querySelector("#player-score");
    spanElement.textContent = userScore;
}
function updateComputerCounter(computerScore) {
    let spanElement = document.querySelector("#computer-score");
    spanElement.textContent = computerScore;
}

function gameSetup() {
    playerWinsCount = 0;
    computerWinsCount = 0;
    roundCount = 0;
    hideWinnerLooserResultTexts();
    updateRoundCounter(roundCount+1);
    updatePlayerCounter(playerWinsCount);
    updateComputerCounter(computerWinsCount);
    // Toggling works because the initial state of the images is none, so it gets set to inline.
    togglePlayAgainButton();
    toggleRockPaperScissorsImages();
    emptyChoiceSquares();
    setImagesClickEventListener();
    setPlayAgainButtonEventListener();
}

gameSetup();
