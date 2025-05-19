const numberButton = document.querySelectorAll('.btnNumber');
const operatorButton = document.querySelectorAll('.btnOperator');
const clearButton = document.querySelector('.btnClear');
const deleteButton = document.querySelector('.btnDelete')
const decimalButton = document.querySelector('.btnDecimal')
const showResult = document.querySelector('.result');
const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');
const equalsKey = document.querySelector('.btnEquals');

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
let firstnum = '';
let firstOperator = '';
let secondnum = '';
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

// function that listens for operator clicked
operatorButton.forEach((operator) => {
  operator.addEventListener('click', function() {

    // store first number clicked
    firstnum = storedNumber;
   // store second number clicked
   secondnum = result
    // displays which operator i clicked
    firstOperator = operator.textContent;
    previousOperand.textContent = storedNumber + firstOperator;
    // remove current operand from display
    currentOperand.textContent = '';
    storedNumber = '';
  })
})





equalsKey.addEventListener('click', function() {
  // when equals key is clicked call operate() function
  result = operate(parseFloat(firstnum), parseFloat(storedNumber), firstOperator)
  // display result of numbers pressed
  currentOperand.textContent = result;
  previousOperand.textContent = firstnum + ' ' + firstOperator + ' ' + storedNumber;
  storedNumber = result;
  
})

// function that listens for clear button
// if the user presses c button
clearButton.addEventListener('click', function() {
  // reset operand value to 0
  currentOperand.textContent = '0';
  previousOperand.textContent = '';
  result = '';
})

// function that listens for decimal click and rounds them
decimalButton.addEventListener('click', function() {
  
})