function getComputerChoice() {
    random_number = Math.random(0, 3);
    if (random_number < 0.33) {
        return 'rock';
    } else if (random_number >=0.33 && random_number < 0.66) {
        return 'paper';
    } else {
        return'scissors';
    }
}

function getUserChoice(round) {
    if (round == 1) {
        choice = prompt("Round: 1\nPlease enter one of the following: Rock, Paper, Scissors", "");
    } else {
        choice = prompt(`Round: ${round}\nYou: ${userScore} Computer: ${computerScore}\nPlease enter one of the following: Rock, Paper, Scissors`, "");
    }
    return choice;
}


const msg1 = "scissors beat paper";
const msg2 = "paper beats rock";
const msg3 = "rock beats scissors";

let userScore = 0;
let computerScore = 0;

function playRound(round) {
    const userChoice = getUserChoice(round).toLowerCase();
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




function playGame() {
    for (let i=0; i < 5; i++) {
        playRound(i+1);
    }
    // Compare user and computer score
    if (userScore > computerScore) {
        message = "You won the game!";
    } else {
        message = "You lost the game :(";
    }

    should_continue = prompt(`${message}\nYou: ${userScore} Computer: ${computerScore}\nDo you wanna play another one? y/n"`);
    if (should_continue === 'y') {
        userScore = 0;
        computerScore = 0;
        playGame()
    }
}

playGame();