const numberButton = document.querySelectorAll('.btnNumber');
const operatorButton = document.querySelectorAll('.btnOperator');
const clearButton = document.querySelector('.btnClear');
const deleteButton = document.querySelector('.btnDelete')
const showResult = document.querySelector('.result');
const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');
const equalsKey = document.querySelector('.equals-key');

currentOperand.textContent = '';
previousOperand.textContent = '';

// add the first num, and second num
function add(firstnum, secondnum) {
  return firstnum + secondnum;
}
// subtract first num, second num
function subtract(firstnum, secondnum) {
  return firstnum - secondnum;
}
// multiply first and second num
function multiply(firstnum, secondnum) {
  return firstnum * secondnum;
}
// divide first and second num.
function divide(firstnum, secondnum) {
  return firstnum / secondnum;
}

// operate on two stored numbers depending on operator I click
function operate (firstnum, secondnum, operator) {
// if operator is + return add function
 switch (operator) {
  case '+':
    return add(firstnum, secondnum)
// if operator is - return subtract function
  case '-':
    return subtract(firstnum, secondnum)
// if operator is * return multiply function
  case '*':
    return multiply(firstnum, secondnum)
// if operator is / return divide function
  case '/':
    return divide(firstnum, secondnum)    
 }
 
}

// store the numbers in a variable
let storedNumber = '';
// store the first num, operator, second num
let firstnum = parseInt('');// converts string to integer
let operator = '';
let secondnum = parseInt('');
let result = '';
currentOperand.textContent = 0;

// function that populates numbers when clicked
// for each button
numberButton.forEach((number) => {
  // listen for a click
  number.addEventListener('click', function() {
    storedNumber += number.value;
    currentOperand.textContent = storedNumber;
  })
})

