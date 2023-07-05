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
    
// game function - 5 rounds game keeps score and reports winner or loser

function game(){
    let computerWins = playerWins = ties = 0;
    for(let round = 1; round <= 5; round++){
        let playerSelection = prompt('write your choice (rock, paper, scissors): ').toLowerCase();
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
    }

    if(computerWins > playerWins){
        console.log("You lost :(");
    } else if (computerWins < playerWins){
        console.log("You won!");
    } else {
        console.log('You tied!');
    }
}