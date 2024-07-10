const buttons = document.querySelectorAll(".calculator-buttons .digits");
const display = document.querySelector(".calculator-display #calculation");
const result = document.querySelector(".calculator-display #result");
const clear = document.querySelector(".clear-button .operators");
const operations = document.querySelectorAll(".calculator-buttons .operators");

let firstOperand = 0;
let operator = "";
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
    return (operand1 / operand2).toFixed(2);
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

let selectedNumber = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(selectedNumber.includes(".") && button.textContent === "."){
            selectedNumber += "";
            display.value += "";
        }
        selectedNumber += button.textContent;
        display.value += button.textContent;
    });
});

operations.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.textContent === "="){
            if(secondOperand == 0 && operator === "/"){
                display.value = "";
                result.style.fontSize = "18px";
                result.style.fontWeight = "bold";
                result.value = "DIVISION BY ZERO DETECTED";
            }else if(firstOperand == 0 && secondOperand == 0){
                selectedNumber = "";
                display.value = "";
                result.value = 0;
            }else{
                secondOperand = Number(selectedNumber);
                let results = operate(operator, firstOperand, secondOperand);
                selectedNumber = results;
                result.value = selectedNumber;
                display.value = "";
                firstOperand = 0;
                secondOperand = 0;
            }
        }else{
            if(secondOperand == 0 && operator === "/"){
                display.value = "";
                result.style.fontSize = "18px";
                result.style.fontWeight = "bold";
                result.value = "DIVISION BY ZERO DETECTED";
            }
            if(firstOperand != 0 && secondOperand == 0){
                secondOperand = Number(selectedNumber);
                let results = operate(operator, firstOperand, secondOperand);
                operator = button.textContent;
                display.value = results + operator;
                firstOperand = results;
                secondOperand = 0;
                selectedNumber = "";
            }else if(firstOperand == 0 && secondOperand == 0){
                operator = button.textContent;
                if(operator === "-" && selectedNumber.length === 0){
                    selectedNumber += operator;
                    display.value += operator; 
                }else{
                    firstOperand = Number(selectedNumber);
                    selectedNumber = "";
                    display.value += operator;
                }
            }
        }
    })
});

clear.addEventListener("click", () => {
    selectedNumber = "";
    display.value = "";
    result.value = "";
    firstOperand = 0;
    secondOperand = 0;
    operator = null;
});
