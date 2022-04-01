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

let computer = computerPlay();
console.log(computer);