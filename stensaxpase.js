const getUserChoise = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Woops, något blev fel!');
    }
};

const getComputerChoise = () => {
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


const determineWinner = (userChoise, computerChoise) => {
    if (userChoise === computerChoise) {
        return 'The game was a tie!';
    }

    if (userChoise === 'rock') {
        if (computerChoise === 'paper') {
            return 'The computer won!';
        } else {
            return 'The user won!';
        }
    }

    if (userChoise === 'scissors') {
        if (computerChoise === 'rock') {
            return 'The computer won!';
        } else {
            return 'The user won!';
        }
    }

    if (userChoise === 'paper') {
        if (computerChoise === 'scissors') {
            return 'The computer won';
        } else {
            return 'The user won!';
        }
    }

    if (userChoise === 'bomb') {
        return 'You won!';
    }
};

const playGame = () => {
    const userChoise = getUserChoise('bomb');
    const computerChoise = getComputerChoise();
    console.log('You threw: ' + userChoise);
    console.log('The computer threw: ' + computerChoise);
    console.log(determineWinner(userChoise, computerChoise));
};
playGame();