// function that adds two numbers
function add(a, b) {
    return a + b;
  }
  
  // function that subtracts two numbers
  function subtract(a, b) {
    return a - b;
  }
  
  // function that multiplies two numbers
  function multiply(a, b) {
    return a * b;
  }
  
  // function that divides two numbers
  function divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
  
  // function that exponates two numbers
  function exponate(a, b) {
    return a ** b;
  }
 
 // store the varaibles for numbers and operators to click or type 
 const num1 = Number('5')
 const operator = '/'
 const num2 = Number('6')
// create function called operate that takes operator and two numbers
function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (operator === '+') {
      return add(a, b);
    } else if (operator === '-') {
      return subtract(a, b);
    } else if (operator === '*') {
      return multiply(a, b);
    } else if (operator === '/') {
      return divide(a, b);
    } else if (operator === '**') {
      return exponate(a, b);
    } else {
      return "Invalid operator";
    }
  }
  
  // log the result to console
  console.log(operate(operator, num1, num2));
  
  // function that displays numbers from html when clicked in display box
  // store the first number thats clicked
  // store the second numer thats clicked
  // function that listens for btnOperators 
  // function that listen for delete button
  // function that listens for clear button
  // function that listens for equals button

  
let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
let result = null;
let isSecond = false;

// --- Update display ---
function updateDisplay(value) {
    const display = document.getElementById('display');
    display.textContent = value;
}

// --- Handle number button click ---
function handleNumberClick(event) {
  const num = event.target.textContent;

  if (!isSecond) {
    firstNumber += num;
    updateDisplay(firstNumber);
  } else {
    secondNumber += num;
    updateDisplay(`${firstNumber} ${currentOperator} ${secondNumber}`);
  }
}

// --- Handle operator click ---
function handleOperatorClick(event) {
  if (firstNumber === '') return;

  currentOperator = event.target.textContent;
  isSecond = true;
  updateDisplay(`${firstNumber} ${currentOperator}`);
}

// --- Handle equals ---
function handleEqualsClick() {
  if (firstNumber !== '' && currentOperator !== '' && secondNumber !== '') {
    result = operate(currentOperator, firstNumber, secondNumber);
    updateDisplay(result);
    // Prepare for next input
    firstNumber = result.toString();
    secondNumber = '';
    currentOperator = '';
    isSecond = false;
  }
}

// --- Handle clear ---
function handleClearClick() {
  firstNumber = '';
  secondNumber = '';
  currentOperator = '';
  result = null;
  isSecond = false;
  updateDisplay('0');
}

// --- Handle delete (backspace last digit) ---
function handleDeleteClick() {
  if (!isSecond) {
    firstNumber = firstNumber.slice(0, -1);
    updateDisplay(firstNumber || '0');
  } else {
    secondNumber = secondNumber.slice(0, -1);
    updateDisplay(secondNumber || '0');
  }
}
  // Attach listeners
  document.querySelectorAll(".btnNumber").forEach(btn =>
    btn.addEventListener("click", handleNumberClick)
  );
  
  document.querySelectorAll(".btnOperator").forEach(btn =>
    btn.addEventListener("click", handleOperatorClick)
  );
  
  document.querySelector(".btnEquals").addEventListener("click", handleEqualsClick);
  document.querySelector(".btnClear").addEventListener("click", handleClearClick);
  document.querySelector(".btnDelete").addEventListener("click", handleDeleteClick);
  
