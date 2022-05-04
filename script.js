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

var playerWinCount = 0;
var computerWinCount = 0;
var gameOver = false;

function playRound(e) {

    if (gameOver === true){
        document.getElementById('game-over').textContent = ``;
        gameOver = false;
        playerWinCount = 0;
        computerWinCount = 0;
        document.getElementById('compwins').textContent = computerWinCount;
        document.getElementById('playerwins').textContent = playerWinCount;
    }

    const computerSelection = computerPlay();
    const playerSelection = e.currentTarget.id;
    if ((playerSelection === 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection === 'Paper' && computerSelection == 'Rock')) {
            playerWinCount++;
            document.getElementById('playerwins').textContent =  `Player Score: ` + playerWinCount;
            document.getElementById('result').textContent = `WIN!  ${playerSelection} beats ${computerSelection}!`;
        }
        else if (playerSelection === computerSelection) {
            document.getElementById('result').textContent =`TIE!  You both picked ${playerSelection}!`;
        }
         else {
             computerWinCount++;
             document.getElementById('compwins').textContent = `Computer Score: ` + computerWinCount;
             document.getElementById('result').textContent = `LOSE! ${playerSelection} loses to ${computerSelection}!`;
        }

        
        if (playerWinCount >= 5) {
            gameOver = true;
            document.getElementById('game-over').textContent = `GAME OVER!  Player wins!`;
        }

        if (computerWinCount >= 5) {
            gameOver = true;
            document.getElementById('game-over').textContent = `GAME OVER!  Computer wins!`;
        }


}

const choices = document.querySelectorAll('.choice');
choices.forEach(choice => {choice.addEventListener('click', playRound)});

