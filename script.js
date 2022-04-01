function randomInt(min,max) {
    return randomNumber = Math.floor(Math.random() * (max - min +1) + min);
    
}

function computerPlay() {

    let computerChoice = randomInt(1,3);
    return computerChoice;
    
}

let computer = computerPlay();
console.log(computer);