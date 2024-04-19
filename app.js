// rock paper scissors game
// play against computer (create computer choice function)

function getComputerChoice(){
    const optionsGame = ['rock', 'paper', 'scissors'];
    let computerChoice = optionsGame[Math.floor(Math.random() * 3)];
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

    let winner = playRound(playerSelection, computerSelection);
        
    if(winner == 'computer'){
        computerWins++;
        console.log('The computer won the round');
    } else if(winner == 'player'){
        playerWins++;
        console.log('You won the round');
    } else {
        ties++;
        console.log("It's a tie");
    }
    
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;

    if(computerWins > playerWins && computerWins == 5){
        alert("You lost :(");
        computerWins = playerWins = ties = 0;
    } else if (computerWins < playerWins && playerWins == 5){
        alert("You won!");
        computerWins = playerWins = ties = 0;
    }
}

const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultDiv = document.querySelector("#results");

let computerWins = playerWins = ties = 0;

rockBtn.addEventListener("click", function () {
    game("rock");
});

paperBtn.addEventListener("click", function () {
    game("paper");
})

scissorsBtn.addEventListener("click", function () {
    game("scissors");
})