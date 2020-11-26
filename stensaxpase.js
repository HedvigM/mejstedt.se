const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Woops, något blev fel!');
    }
};

const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};


const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game was a tie!';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'The user won!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'The user won!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won';
        } else {
            return 'The user won!';
        }
    }

    if (userChoice === 'bomb') {
        return 'You won!';
    }
};

const answerElement = document.getElementById("answer")

const playGame = (choice) => {
    const userChoice = getUserChoice(choice);
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
    answerElement.innerText = `
        Du valde ${userChoice}\n
        Datorn valde ${computerChoice}\n
        ${determineWinner(userChoice, computerChoice)}
    `
};

const handleClick = (event) => {
    const choice = event.target.value;
    playGame(choice);
};

const rockButton = document.getElementById("rock")
rockButton.addEventListener('click', handleClick);

const scissorsButton = document.getElementById("scissors")
scissorsButton.addEventListener('click', handleClick);

const paperButton = document.getElementById("paper")
paperButton.addEventListener('click', handleClick);






/*
1. gör en knapp som anropar en funktion och visar nått i konsollen.
* inputfält (<input />) av typen text
* knapp (<button>) med en onclick-metod
* text-element (<div><p>)
* onclickmetoden:
    * när man trycker på knappen, läs värdet i input-fältet (getelementbyid)
    * anropa getUserChoic med det värdet
    * anropa computerchoice
    * anropa determineWinner
    * sätt värdet på textelementet till resultatet


p tagg

*/