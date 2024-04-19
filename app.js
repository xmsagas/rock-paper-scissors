// rock paper scissors game
// play against computer (create computer choice function)

function getComputerChoice(){
    const optionsGame = ['rock', 'paper', 'scissors'];
    let computerChoice = optionsGame[Math.floor(Math.random() * 3)];
    
    if (computerChoice == 'rock') {
        computerChoiceImg = "img/rock.png";
    } else if (computerChoice == 'paper') {
        computerChoiceImg = "img/paper.png";
    } else {
        computerChoiceImg = "img/scissors.png";
    }

    return computerChoice;
}

// round of game, take computer and user choice 

function playRound(playerSelection, computerSelection){
    // return winner (rock beats scissors, paper beats rock, scissors beat paper)
    let winner;
    if (playerSelection == 'rock'){
        if(computerSelection == 'scissors'){
            winner = 'player';
        } else if (computerSelection == 'paper'){
            winner = 'computer';
        } else {
            winner = 'tie';
        }
    } else if (playerSelection == 'paper'){
        if(computerSelection == 'scissors'){
            winner = 'computer';
        } else if (computerSelection == 'paper'){
            winner = 'tie';
        } else {
            winner = 'player';
        }
    } else {
        if(computerSelection == 'scissors'){
            winner = 'tie';
        } else if (computerSelection == 'paper'){
            winner = 'player';
        } else {
            winner = 'computer';
        } 
    }
    return winner;
}

function game(playerSelection){
    let computerSelection = getComputerChoice();
    imgComputer.src = computerChoiceImg;
    animate(imgComputer);

    let winner = playRound(playerSelection, computerSelection);
        
    if(winner == 'computer'){
        computerWins++;
    } else if(winner == 'player'){
        playerWins++;
    } else {
        ties++;
    }
    
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;

    if(computerWins > playerWins && computerWins == 5){
        winnerH2.textContent = "You lost :(";
        computerWins = playerWins = ties = 0;
    } else if (computerWins < playerWins && playerWins == 5){
        winnerH2.textContent = "You won! :D";
        computerWins = playerWins = ties = 0;
    }
}

const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const choicesDiv = document.querySelector(".choices");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultDiv = document.querySelector("#results");
const imgComputer = document.querySelector("#computerChoice");
const winnerH2 = document.querySelector("h2");
let computerChoiceImg;

let computerWins = playerWins = ties = 0;

rockBtn.addEventListener("click", function () {
    winnerH2.textContent = "";
    animate(rockBtn);
    game("rock");
});

paperBtn.addEventListener("click", function () {
    winnerH2.textContent = "";
    animate(paperBtn);
    game("paper");
})

scissorsBtn.addEventListener("click", function () {
    winnerH2.textContent = "";
    animate(scissorsBtn);
    game("scissors");
})

function animate(btn) {
    btn.classList.add("animationjs");

    setTimeout(function () {
        btn.classList.remove("animationjs");
    }, 1500);
}