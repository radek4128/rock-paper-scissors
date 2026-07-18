function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'Rock';
    } else if (randomNumber === 1) {
        return 'Paper';
    } else {
        return'Scissors';
    }
}

let userScore = 0;
let cpuScore = 0;
const score =  document.querySelector("#score span")


function playRound(choice) {
    const userChoice = choice;
    const computerChoice = getComputerChoice();


    if (userChoice === computerChoice) {
        displayMessage(userChoice, computerChoice, 
            "It's a tie");
        return;
    }
    switch (userChoice) {
        case 'Scissors': {
            if (computerChoice === 'Paper') {
                userScore++
                displayMessage(userChoice, computerChoice,
                    `You won!`);
                return;
            } else {
                cpuScore++
                displayMessage(userChoice, computerChoice,
                    `You lost`);
                return;
            }
        }
        case 'Paper': {
            if (computerChoice === 'Rock') {
                userScore++;
                displayMessage(userChoice, computerChoice,
                    `You won!`);
                return;
            } else {
                cpuScore++;
                displayMessage(userChoice, computerChoice,
                    `You lost`);
                return;
            }
        }
        case 'Rock': {
            if (computerChoice === 'Scissors') {
                userScore++;
                displayMessage(userChoice, computerChoice, 
                    `You won!`);
                return;
            } else {
                cpuScore++;
                displayMessage(userChoice, computerChoice,
                    `You lost`);
                return;
            }
        }
    }

};

test = {
    'Rock': 0,
    'Paper': 0,
    'Scissors': 0
};

const mainWindow = document.querySelector(".info");
const msgLine1 = document.createElement("p");
const msgLine2 = document.createElement("p");
const msgLine3 = document.createElement("p");
msgLine3.classList.add("result");
mainWindow.appendChild(msgLine1);
mainWindow.appendChild(msgLine2);
mainWindow.appendChild(msgLine3);




function displayMessage(userChoice, computerChoice, msg) {
    i = 0;
    score.textContent = (`${userScore}/${cpuScore}`);
    msgLine1.textContent = `You: ${userChoice}`;
    msgLine2.textContent = `Cpu: ${computerChoice}`;
    msgLine3.textContent = msg;


    if (userScore >= 5 || cpuScore >= 5) {
        if (userScore > cpuScore) {
            gameEnd();
        } else {
            gameEnd();
        };
    }
};

const buttonContainer = document.querySelector(".button-container");

function gameEnd() {
    /// replace buttons with play again button for game reset ///
    const originalHtml = buttonContainer.innerHTML;
    buttonContainer.textContent = "";

    const playAgainBtn =  document.createElement("button");
    playAgainBtn.textContent = "Play Again";

    buttonContainer.appendChild(playAgainBtn)
    playAgainBtn.addEventListener("click", startGame);
};

function startGame() {
    buttonContainer.textContent = "";
    const rockBtn = document.createElement("button");
    rockBtn.textContent = "Rock";
    rockBtn.setAttribute("id", "Rock");
    const paperBtn = document.createElement("button");
    paperBtn.textContent = "Paper";
    paperBtn.setAttribute("id", "Paper");
    const scissorsBtn = document.createElement("button");
    scissorsBtn.textContent = "Scissors";
    scissorsBtn.setAttribute("id", "Scissors");

    buttonContainer.appendChild(rockBtn);
    buttonContainer.appendChild(paperBtn);
    buttonContainer.appendChild(scissorsBtn);

    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            round = playRound(button.id);
        });
    });

    userScore = 0;
    cpuScore = 0;
    score.textContent = `${userScore}/${cpuScore}`;
    msgLine1.textContent = "";
    msgLine2.textContent = "";
    msgLine3.textContent = "";


}

startGame()










