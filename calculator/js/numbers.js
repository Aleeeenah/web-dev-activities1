function appendNumber(number) {
    if (currentInput === "0" || currentInput === "Error") {
        currentInput = number.toString();
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendDot() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById("display").value = previousInput + " " + operator + " " + currentInput;
}