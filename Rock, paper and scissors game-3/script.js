const choices = ["rock", "paper", "scissers"];
let playerScore = 0;
let computerScore = 0;

const checkWinner = (player, computer) => {
  if (player === computer) {
    return "draw";
  } else if (player === "rock") {
    // if (computer === "scissors") {
    //   return "player";
    // } else {
    //   return "computer";
    // }
    // const res = computer === "scissors" ? "player" : "computer";
    // return res;
    return computer === "scissors" ? "player" : "computer";
  } else if (player === "paper") {
    // if (computer === "rock") {
    //   return "player";
    // } else {
    //   return "computer";
    // }
    return computer === "rock" ? "player" : "computer";
  } else {
    // if (computer === "paper") {
    //   return "player";
    // } else {
    //   return "computer";
    // }
    return computer === "paper" ? "player" : "computer";
  }
};

const showResult = (result) => {
  if (result === "player") {
    console.log("You Win.");
    playerScore++;
  } else if (result === "computer") {
    console.log("You Lose!");
    computerScore++;
  } else {
    console.log("It's a tie.");
  }
  console.log(`Your score: ${playerScore}`);
  console.log(`Computer's score: ${computerScore}`);
  console.log(".......................");
};

const play = () => {
  const playerChoice = prompt("Choose rock , paper , scissers");
  // if (playerChoice === "" || playerChoice === null) {
  //   console.log("You cheated!");
  // }
  if (choices.indexOf(playerChoice?.toLowerCase()) !== -1) {
    console.log(`You choose : ${playerChoice}`);
  } else {
    console.log("You cheated :) ");
    return;
  }

  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomNumber];
  console.log(`Computer chooses : ${computerChoice}`);

  const gameResult = checkWinner(playerChoice, computerChoice);
  showResult(gameResult);
  play();
};

play();
