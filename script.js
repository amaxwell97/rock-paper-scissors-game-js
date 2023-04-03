// Computers choice for each round

function getComputerChoice() {
    let randomArray = ["rock", "paper", "scissors"];
    let numberOfChoices = randomArray.length;
    let randomNumber = Math.floor(Math.random() * numberOfChoices);
    let computerSelection = randomArray[randomNumber];
    console.log(computerSelection);
    return computerSelection;
}


// Begining scores

let win = 0;
let lose = 0;
let tie = 0;


// Function that takes both the Comptuers choice and Players choice each round, determines and displays who won, 
// sums up the wins and losses, and announces a winner after one player has 5 wins

let results = document.querySelector('#results');
let score = document.querySelector('#score');

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
        results.textContent = 'You lost that round!';
        lose++;
    } else if (playerSelection == computerSelection) {
        results.textContent = 'You tied that round!';
        tie++;
    } else {
        results.textContent = 'You won that round!';
        win++;
    }

    score.textContent = 'You: ' + win + ' Computer: ' + lose + ' Ties: ' + tie

    if ((win >= 5) || (lose >=5)) {
        return whoWon(win, lose)
    }

    // if ((win >= 5) && (lose < 5)) {
    //     alert("You win! The final score was " + win + "-" + lose)
    // } else if ((lose >=5) && (win < 5)) { 
    //     alert("You lose! The final score was " + win + "-" + lose)
    // }
}


// Event listener that stores Players choice and calls the playRound() function

let btns = document.querySelectorAll('button');

btns.forEach((button) => {
button.addEventListener('click', function () {
    playRound(button.id, getComputerChoice());
    console.log(button.id);
})});

function whoWon(userScore, computerScore) {
    if ((userScore >= 5) && (computerScore < 5)) {
        alert("You win! The final score was " + win + "-" + lose);
    } else if ((computerScore >=5) && (userScore < 5)) { 
        alert("You lose! The final score was " + win + "-" + lose);
    }
}



//------------------------------------------------------------

// Old code that does not utilize the DOM

// function playRound(playerSelection, computerSelection) {
//     if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
//         // console.log("You lost that round!");
//         results.textContent = 'You lost that round!';
//         return  lose++;
//     } else if (playerSelection == computerSelection) {
//         // console.log("You tied that round!");
//         results.textContent = 'You tied that round!';
//         return tie++;
//     } else {
//         // console.log("You won that round!");
//         results.textContent = 'You won that round!';
//         return win++;
//     }
// }

// function game() {
//     while (lose < 5 && win < 5) {
//         playRound(prompt("Rock, Paper, or Scissors?"), getComputerChoice());
//     }

//     if (win > lose) {
//         return alert("You win! The final score was " + win + "-" + lose);
//     } else if (lose > win) {
//         return alert("You lose! The final score was " + win + "-" + lose);
//     } else {
//         return alert("You tied! The final score was " + win + "-" + lose);
//     }
// };

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

// game();