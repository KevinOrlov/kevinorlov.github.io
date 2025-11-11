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
    var computerNumber = getComputerMove();

    var playerMove = numberToMove(playerNumber);
    var computerMove = numberToMove(computerNumber);

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
    }
    // Otherwise lose scenario
    else {
        result = "You lose!";
    }

    document.getElementById("result").innerHTML = result;
}