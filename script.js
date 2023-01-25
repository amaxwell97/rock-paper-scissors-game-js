
function getComputerChoice() {
    let randomArray = ["Rock", "Paper", "Scissors"];
    let numberOfChoices = randomArray.length;
    let randomNumber = Math.floor(Math.random() * numberOfChoices);
    let computerSelection = randomArray[randomNumber];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock")) {
        return alert("You Lose! " + computerSelection + " beats " + playerSelection);
    } else if (playerSelection == computerSelection) {
        return alert("It\'s a Tie! " + playerSelection + " ties " + computerSelection);
    } else {
        return alert("You Win! " + playerSelection + " beats " + computerSelection);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {

    }

    if (xx)
    return 
}

// playRound(prompt("Rock, Paper, or Scissors?"), getComputerChoice());