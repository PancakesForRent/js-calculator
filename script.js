const buttons = document.querySelectorAll(".calculator-buttons .digits");
const display = document.querySelector(".calculator-display #calculation");
const clear = document.querySelector(".clear-button .operators");

let firstOperand = 0;
let operator = null;
let secondOperand = 0;

let add = function(operand1, operand2) {
    return operand1 + operand2;
};

let subtract = function(operand1, operand2) {
    return operand1 - operand2;
};

let multiply = function(operand1, operand2) {
    return operand1 * operand2;
};

let divide = function(operand1, operand2) {
    return operand1 / operand2;
};

function operate(operator, operand1, operand2){
    switch (operator) {
        case "+":
            return add(operand1, operand2);
        case "-":
            return subtract(operand1, operand2);
        case "*":
            return multiply(operand1, operand2);
        case "/":
            return divide(operand1, operand2);
    }
}

let selectedNumbers = "";
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        selectedNumbers += button.textContent;
        display.value = selectedNumbers;
    });
});

clear.addEventListener("click", () => {
    selectedNumbers = "";
    display.value = "";
});
