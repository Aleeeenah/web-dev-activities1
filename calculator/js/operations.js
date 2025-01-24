let previousInput = "";
let operator = "";
let currentInput = "0";

function setOperator(op) {
    if (currentInput === "Error") return;

    // Prevent entering two operators in a row
    if (operator !== "" && previousInput !== "") {
        return; // Do nothing if an operator is already set
    }

    previousInput = currentInput;
    currentInput = "0";
    operator = op;
    updateDisplay();
}