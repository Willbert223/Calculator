var number1 = '';
var number2 = '';
var firstOperator = null;
var secondOperator = null;
let result = null;
const displayValue = 0;
document.getElementById('display');

function add (number1, number2) {
    return number1 + number2
}
function subtract (number1, number2) {
    return number1 - number2
}
function multiply (number1, number2) {
    return number1 * number2
}
function divide (number1, number2) {
    return number1 / number2
}

function operate (operator, number1, number2) {
   switch (operator) {
    case '+':
    return add(number1, number2);
    case '-':
    return subtract(number1, number2);
    case '*':
    return multiply(number1, number2);
    case '/':
    return divide(number1, number2);  
   }
    

}

function appendToDisplay (input) {
    display.value += input
}

function clearDisplay () {
    display.value = '';
}