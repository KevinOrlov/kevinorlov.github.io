// Week 9 additions - 2 variables
let rounds = 0;
let userBeatRound = false;


// Assign Numbers to moves
function numberToMove(num) {
    if (num === 1) return "Rock";
    if (num === 2) return "Paper";
    if (num === 3) return "Scissors";
}

// Randomly pick 1, 2, or 3
function getComputerMove() {
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber;
}

// Main game function
function rps(playerNumber) {

    // Week 9 - Loop addition - 3 round unless user wins once
    while (rounds < 3 && userBeatRound == false) {
        rounds++; // if conditions above persist add count to rounds

        // Get random number
        var computerNumber = getComputerMove();
        // Link move to number
        var playerMove = numberToMove(playerNumber);
        var computerMove = numberToMove(computerNumber);
        // Send back computer move
        document.getElementById("computer").innerHTML =
            "Computer played: " + computerMove;
        var result = "";
        // Tie
        if (playerNumber === computerNumber) {
            result = "It's a tie!";
        }
        // Player wins scenarios
        // 1-Rock beats 3-Scissors
        // 3-Scissors beats 2-Paper
        // 2-Paper beats 1-Rock
        else if (
            (playerNumber === 1 && computerNumber === 3) ||
            (playerNumber === 3 && computerNumber === 2) ||
            (playerNumber === 2 && computerNumber === 1)
        ) {
            result = "You win!";
            userBeatRound = true; // Week 9 - Variable changes to true if user won game satisfying round ending condition in loop above
        }
        // Otherwise lose scenario
        else {
            result = "You lose!";
        }

        document.getElementById("result").innerHTML = "Round " + rounds + ":" + result;
        break; // one time per round
    }
    // Week 9 - End game if user won or rounds reached 3, delay endGame to allow user to see result
    if (userBeatRound || rounds === 3) {
        setTimeout(endGame, 1500); // Source W3schools - JavaScript Timing Events
    }
}

// Week 9 - Hides the playable area/div end of rounds and shows simple button that has .reload
function endGame() {
    document.getElementById("game").style.display = "none";

    document.getElementById("endMessage").innerHTML = '<h2> Game Over </h2> <br> <button onclick="location.reload()"> Play Again </button>';
}






