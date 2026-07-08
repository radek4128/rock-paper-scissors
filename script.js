function getComputerChoice() {
    random_number = Math.random(0, 3);
    console.log(random_number);
    if (random_number < 0.33) {
        return 'rock';
    } else if (random_number >=0.33 && random_number < 0.66) {
        return 'paper';
    } else {
        return'scissors';
    }
}

function getUserChoice() {
    choice = prompt("Please enter one of the following: Rock, Paper, Scissors", "");
    return choice;
}


const msg1 = "scissors beat paper";
const msg2 = "paper beats rock";
const msg3 = "rock beats scissors";

let userScore = 0;
let computerScore = 0;

function playRound() {
    const userChoice = getUserChoice().toLowerCase();
    const computerChoice = getComputerChoice();
    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    if (userChoice === computerChoice) {
        console.log(`Computer also choose ${computerChoice}!`);
        return;
    }
    switch (userChoice) {
        case 'scissors': {
            if (computerChoice === 'paper') {
                console.log(`You won, ${msg1}`);
                userScore++;
                return;
            } else {
                console.log(`You lost, ${msg3}`);
                computerScore++;
                return;
            }
        }
        case 'paper': {
            if (computerChoice === 'rock') {
                console.log(`You won, ${msg2}`);
                userScore++;
                return;
            } else {
                console.log(`You lost, ${msg1}`);
                computerScore++;
                return;
            }
        }
        case 'rock': {
            if (computerChoice === 'scissors') {
                console.log(`You won, ${msg3}`);
                userScore++;
                return;
            } else {
                console.log(`You lost, ${msg2}`);
                computerScore++;
                return;
            }
        }
    }
    console.log("Wrong choice, you have to type either paper, scissors or rock")

}


playRound();
console.log(`Computer score: ${computerScore}`);
console.log(`User score: ${userScore}`);
