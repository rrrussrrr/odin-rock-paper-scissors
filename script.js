function randomInt(min,max) {
    return randomNumber = Math.floor(Math.random() * (max - min +1) + min);
    
}

function computerPlay() {

    let compChoose = randomInt(1,3);
    if (compChoose === 1) {
        return 'Rock';
    } else if (compChoose === 2) {
        return 'Paper';
    } else if (compChoose === 3) {
        return 'Scissors';
    }   
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return `TIE!  You both picked ${playerSelection}!`;
    } else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            return `LOSE!  ${playerSelection} loses to ${computerSelection}!`;
        } else return `WIN!  ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            return `LOSE!  ${playerSelection} loses to ${computerSelection}!`;
        } else return `WIN!  ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            return `LOSE!  ${playerSelection} loses to ${computerSelection}!`;
        } else return `WIN!  ${playerSelection} beats ${computerSelection}!`;
    }
}

function capitalizeFirst(string){
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// playerInputCheck
// Checks if input is rock, paper, or scissors.  Defaults to Rock in a conflict
function playerInputCheck(input) {
    if (input === 'Rock' || input === 'Paper' || input === 'Scissors' ) {
        return input;
    } else {
        alert("Invalid choice! Defaulting to Rock");
        return 'Rock';
    }
}

function game() {

    let playerWinCount = 0;
    let computerWinCount = 0;
    let computerChoice;
    let playerChoice;
    for (i = 0; i < 5; i++) {
        // Making choices
        computerChoice = computerPlay(); // computer pick
        console.log(computerChoice);
        playerChoice = window.prompt("Rock, Paper, or Scissors?"); // user pick
        console.log(playerChoice);
        playerChoice = capitalizeFirst(playerChoice); // formatting input
        console.log(playerChoice);
        playerChoice = playerInputCheck(playerChoice); // checking valid input
        console.log(playerChoice);

        console.log(playRound(playerChoice, computerChoice)); // play!

        

    }

    
}

game();