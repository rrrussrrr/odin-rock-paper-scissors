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

    if ((playerSelection === 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection === 'Paper' && computerSelection == 'Rock')) {
            playerWinCount++;
            return `WIN!  ${playerSelection} beats ${computerSelection}!`;
        }
        else if (playerSelection === computerSelection) {
            return `TIE!  You both picked ${playerSelection}!`;
        }
         else {
             computerWinCount++;
            return `LOSE!  ${playerSelection} loses to ${computerSelection}!`;
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

let playerWinCount;
let computerWinCount;
let computerChoice;
let playerChoice;

function game() {

    playerWinCount = 0;
    computerWinCount = 0;
    computerChoice = 0;
    playerChoice = 0;

    for (i = 0; i < 5; i++) {
        // resetting values
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
        console.log(computerWinCount);
        console.log(playerWinCount);

    }

    if (playerWinCount > computerWinCount) {
        console.log('You win!');
    } else if (playerWinCount < computerWinCount){
        console.log('You lose!')
    } else console.log(`It's a draw!`);

    
}

game();