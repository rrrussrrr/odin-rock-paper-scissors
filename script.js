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
function playerInputCheck() {
    let input = window.prompt("Rock, Paper, or Scissors?");
    input = capitalizeFirst(input);
    if (input === 'Rock' || input === 'Paper' || input === 'Scissors' ) {
        playerChoice = input;
        return true;
    } else {
        alert("Invalid choice!");
        return false;
    }
}

function game() {
    let playerChoice = window.prompt("Rock, Paper, or Scissors?");
    capitalizeFirst(playerChoice);
    if (playerInputCheck(player.choice) === false) {
        
    }
    
}

let playerChoice;
playerInputCheck();




let computerChoice = computerPlay();
let message;
console.log(capitalizeFirst(playerChoice));
console.log(computerChoice);
message = playRound(playerChoice, computerChoice);
console.log(message);