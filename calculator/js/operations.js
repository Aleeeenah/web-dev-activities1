function setOperator(op) {
    if (operator && !operatorPressed) {
        calculate(); // Perform the existing operation
    }
    operator = op;
    previousInput = currentInput;
    operatorPressed = true;
}

function clearDisplay() {
    currentInput = "0";
    operator = null;
    previousInput = null;
    operatorPressed = false;
    updateDisplay();
}

function calculate() {
    if (!operator || !previousInput) return;

    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case "+":
            currentInput = (num1 + num2).toString();
            break;
        case "-":
            currentInput = (num1 - num2).toString();
            break;
        case "*":
            currentInput = (num1 * num2).toString();
            break;
        case "/":
            currentInput = num2 !== 0 ? (num1 / num2).toString() : "Error";
            break;
    }

    operator = null;
    previousInput = null;
    operatorPressed = false;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = currentInput;
}
