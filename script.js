// Variables used
const input = document.getElementById('guessInput');
const button = document.getElementById('guessButton');
const numbersSpan = document.getElementById('numbers');
const countSpan = document.getElementById('count');


// Main function - Get user number and count++ the number if === Math.Random
button.addEventListener('click', (event) => {
    event.preventDefault(); // stop form submission
    const guess = parseInt(input.value);

    // Validate 1-10 input. dont allow empty selection
    if (guess < 1 || guess > 10 || isNaN(guess)) {
        alert("Please enter a number between 1 and 10.");
        return; // stop if conditions arent met
    }
    // Generate 5 random numbers and fill array
    const numbers = [];
    for (let i = 0; i < 5; i++) {
        numbers.push(Math.floor(Math.random() * 10) + 1); // Append the array list each iteration
    }

    // Count how many times the users guess appears
    let count = 0;
    for (let num of numbers) {
        if (num === guess) count++;
    }

    // Return the values
    document.getElementById('numbers').textContent = numbers;
    document.getElementById('count').textContent = count;

});