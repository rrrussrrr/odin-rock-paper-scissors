function randomInt(min,max) {
    return randomNumber = Math.floor(Math.random() * (max - min +1) + min);
    
}

function computerPlay() {

    let computerChoice = randomInt(1,3);
    if (computerChoice === 1) {
        return 'Rock';
    } else if (computerChoice === 2) {
        return 'Paper';
    } else if (computerChoice === 3) {
        return 'Scissors';
    }   
}

function playRound(playerSelection, computerSelection) {

    let pl
    let winBool = false;
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

let playerChoice = 'Rock';
let computerChoice = computerPlay();
let message;
console.log(playerChoice);
console.log(computerChoice);
message = playRound(playerChoice, computerChoice);
console.log(message);