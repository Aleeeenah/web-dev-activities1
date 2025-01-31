let currentInput = "0"; // Tracks the current input
let operator = null; // Tracks the selected operator
let previousInput = null; // Tracks the previous input for calculations

function appendNumber(number) {
    if (currentInput === "0" || operatorPressed) {
        currentInput = number.toString();
    } else {
        currentInput += number.toString();
    }
    operatorPressed = false; // Reset flag
    updateDisplay();
}

function appendDot() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
    }
    updateDisplay();
}
