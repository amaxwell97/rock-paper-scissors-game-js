
function getComputerChoice() {
    let randomArray = ["Rock", "Paper", "Scissors"];
    let numberOfChoices = randomArray.length;
    let randomNumber = Math.floor(Math.random() * numberOfChoices);
    let computerSelection = randomArray[randomNumber];
    return computerSelection;
}

let win = 0;
let lose = 0;
let tie = 0;

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock")) {
        console.log("You lost that round!");
        return lose++;
    } else if (playerSelection == computerSelection) {
        console.log("You tied that round!");
        return tie++;
    } else {
        console.log("You won that round!");
        return win++;
    }
}

function game() {
    while (lose < 5 && win < 5) {
        playRound(prompt("Rock, Paper, or Scissors?"), getComputerChoice());
    }

    if (win > lose) {
        return alert("You win! The final score was " + win + "-" + lose);
    } else if (lose > win) {
        return alert("You lose! The final score was " + win + "-" + lose);
    } else {
        return alert("You tied! The final score was " + win + "-" + lose);
    }
}

// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound(prompt("Rock, Paper, or Scissors?"), getComputerChoice());
//     }

//     if (win > lose) {
//         return alert("You win! The final score was " + win + "-" + lose);
//     } else if (lose > win) {
//         return alert("You lose! The final score was " + win + "-" + lose);
//     } else {
//         return alert("You tied! The final score was " + win + "-" + lose);
//     }
// }

game();