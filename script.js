
function getComputerChoice() {
    let randomArray = ["Rock", "Paper", "Scissors"];
    let numberOfChoices = randomArray.length;
    let randomNumber = Math.floor(Math.random() * numberOfChoices);
    let randomChoice = randomArray[randomNumber];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    
    let computerSelection = getComputerChoice;

    if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        return alert("You Lose! " + computerSelection + " beats " + playerSelection);
    } else {
        return alert("You Win!" + playerSelection + " beats " + computerSelection);
    }

}