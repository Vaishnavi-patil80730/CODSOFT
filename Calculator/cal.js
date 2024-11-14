// Select the display element to show input/output
let display = document.getElementById('display');
let currentInput = '';  // Stores the current number being entered
let operator = '';      // Stores the current operator
let firstOperand = null; // Stores the first operand for calculations

// Clear the display and reset all variables
function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    display.innerText = '0';  // Reset display to show 0
}

// Append a number to the current input
function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number;  // Replace initial 0 with the new number (if it's not a decimal)
    } else {
        currentInput += number; // Concatenate the new number
    }
    display.innerText = currentInput; // Update display
}

// Set an operator and prepare for the next input
function appendOperator(op) {
    if (currentInput === '' && firstOperand !== null) {
        // Allows changing the operator if an operand is already set
        operator = op;
        return;
    }
    if (firstOperand === null) {
        // Store the first operand if it's not yet set
        firstOperand = parseFloat(currentInput);
    } else {
        // Calculate result with the current operator if we already have a first operand
        firstOperand = calculateResult();
    }
    operator = op;       // Set the new operator
    currentInput = '';   // Clear the current input for the next operand
}

// Perform the calculation when the "=" button is pressed
function calculate() {
    if (firstOperand === null || operator === '' || currentInput === '') {
        return;  // Return early if there’s not enough information for a calculation
    }
    const result = calculateResult();
    display.innerText = result;  // Display the result
    currentInput = result;       // Set the result as the current input for further operations
    firstOperand = null;         // Reset first operand
    operator = '';               // Reset operator
}

// Calculate the result based on the operator
function calculateResult() {
    let result;
    const secondOperand = parseFloat(currentInput); // Parse the second operand from the input
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = secondOperand === 0 ? 'Error' : firstOperand / secondOperand; // Handle division by zero
            break;
        default:
            return currentInput; // If no operator, return the current input
    }
    return result;  // Return the calculated result
}
