
function getComputerChoice() {
    let randomArray = ["Rock", "Paper", "Scissors"];
    let numberOfChoices = randomArray.length;
    let randomNumber = Math.ceil(Math.random() * numberOfChoices);
    return randomChoice = randomArray[randomNumber];
}