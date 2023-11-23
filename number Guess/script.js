const randomNumber = Math.ceil(Math.random() * 100);
let numberOfGuess = 1;
console.log(randomNumber);

const validateNumber = (value) => {
  if (isNaN(value)) {
    return "Please enter a valid number";
  } else if (+value < 1 || +value > 100) {
    return "Please enter a number between 1 to 100";
  }
};

const checkGuess = (guess) => {
  numberOfGuess++;
  if (guess === randomNumber) {
    console.log("You guessed correctly.");
  } else if (guess < randomNumber) {
    console.log("Too Low! Try Again");
    play();
  } else {
    console.log("Too High! Try Again");
    play();
  }
};

const play = () => {
  const number = prompt("Enter a number between 1 to 100");

  if (number === null) return;

  console.log(`Your Guess : ${numberOfGuess}`);
  if (numberOfGuess >= 5) {
    console.log("Game over");
    return;
  }

  const validation = validateNumber(number);
  if (validation) {
    console.log(validation);
    return play();
  }
  checkGuess(+number);
};
play();
