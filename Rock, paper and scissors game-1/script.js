const choices = ["Rock" , "Paper" , "Scissors"];

const userChoice = prompt("Choose Rock, Paper, Scissors");
if (userChoice){
    console.log(`You choose: ${userChoice}`);
}else {
    console.log("You cheated !")
}

const randomNumber = Math.floor(Math.random() * 3);
const computerChoice = choices[randomNumber];
console.log(`Computer chooses: ${computerChoice}`);

if (userChoice === computerChoice){
    console.log("It's tie");
}else if (userChoice === "Rock"){
    if (computerChoice === "Scissors"){
        console.log("You win !")
    }else {
        console.log("You lose !")
    }
}else if (userChoice === "Paper"){
    if (computerChoice === "Rock"){
        console.log("You win !")
    }else{
        console.log("You lose")
    }
}else if (userChoice === "Scissors"){
    if (computerChoice === "Paper"){
        console.log("You win !")
    }else{
        console.log("You lose !")
    }
}
