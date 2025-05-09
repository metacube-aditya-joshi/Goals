const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber;
let attemptsLeft;
let guessedNumbers = [];

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  guessedNumbers = [];
  console.log('\n Welcome to "Guess the Number"!');
  console.log('I\'m thinking of a number between 1 and 100.');
  console.log('You have 10 attempts to guess it.');
  askGuess();
}

function askGuess() {
  rl.question('Enter your guess: ', (input) => {
    const guess = parseInt(input, 10);

    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log('Please enter a valid number between 1 and 100.');
      return askGuess();
    }

    guessedNumbers.push(guess);
    attemptsLeft--;

    if (guess === secretNumber) {
      console.log(`Correct! You guessed the number ${secretNumber} in ${10 - attemptsLeft} attempt(s).`);
      return askToPlayAgain();
    } else {
      if (attemptsLeft === 0) {
        console.log(` Game Over! The number was ${secretNumber}.`);
        return askToPlayAgain();
      } else {
        const hint = guess < secretNumber ? 'Too low!' : 'Too high!';
        console.log(`${hint} You have ${attemptsLeft} guess(es) left.`);
        console.log(`Previous guesses: ${guessedNumbers.join(', ')}`);
        askGuess();
      }
    }
  });
}

function askToPlayAgain() {
  rl.question('\n Do you want to play again? (yes/no): ', (answer) => {
    if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
      startGame();
    } else {
      console.log('Thanks for playing!');
      rl.close();
    }
  });
}


startGame();
