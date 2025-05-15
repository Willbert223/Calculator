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
 
  function percentage(a, b) {
    return (a * b) / 100;
  }
  
 // store the varaibles for numbers and operators to click or type 
 const num1 = Number('5')
 const operator = '/'
 const num2 = Number('6')
// create function called operate that takes operator and two numbers
function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    let result;
  
    if (operator === '+') {
      result = add(a, b);
    } else if (operator === '-') {
      result = subtract(a, b);
    } else if (operator === '*') {
      result = multiply(a, b);
    } else if (operator === '/') {
      result = divide(a, b);
    } else if (operator === '**') {
      result = exponate(a, b);
    } else if (operator === '%') {
      result = percentage(a, b);
    } else {
      return "Invalid operator";
    }
  
    // Round to 2 decimal places if it's a float
    if (typeof result === "number" && !Number.isInteger(result)) {
      result = parseFloat(result.toFixed(2));
    }
  
    return result;
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
  
    // use that result as first number in next operation
    // If we're entering the second number, reset it
    if (isSecond) {
      secondNumber += num;  // Concatenate to second number
      updateDisplay(`${firstNumber} ${currentOperator} ${secondNumber}`);
    } else {
      firstNumber += num;  // Concatenate to first number
      updateDisplay(firstNumber);
    }
  }
  
 

// --- Handle operator click ---
// Handle operator click
// Handle operator click
function handleOperatorClick(event) {
    const clickedOperator = event.target.textContent;

    if (firstNumber === '') return;

    // If user clicks "*" twice, treat it as "**"
    if (clickedOperator === '*' && currentOperator === '*') {
        currentOperator = '**';
        isSecond = true;
        updateDisplay(`${firstNumber} **`);
        return;
    }

    // Prevent accidental evaluation if second number hasn't been entered yet
    if (isSecond && secondNumber === '') {
        currentOperator = clickedOperator;
        updateDisplay(`${firstNumber} ${currentOperator}`);
        return;
    }

    // Only compute if second number has been entered
    // Only compute if a second number exists and user isn't just pressing operators repeatedly
if (secondNumber !== '') {
    result = operate(currentOperator, firstNumber, secondNumber);
    updateDisplay(result);
    firstNumber = result.toString();
    secondNumber = '';
} else if (isSecond) {
    // Just replace the operator if second number isn't typed yet
    currentOperator = clickedOperator;
    updateDisplay(`${firstNumber} ${currentOperator}`);
    return;
}


    currentOperator = clickedOperator;
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

function handlePercentClick() {
    if (firstNumber !== '' && secondNumber !== '') {
      result = operate('%', firstNumber, secondNumber); // Use percentage calculation
      updateDisplay(result);
      firstNumber = result.toString(); // Set result as firstNumber for next operation
      secondNumber = ''; // Reset second number
      currentOperator = ''; // Clear operator
      isSecond = false;
    }
  }
  
  function handleDecimalClick() {
    if (!isSecond) {
      if (!firstNumber.includes('.')) {
        firstNumber += '.';
        updateDisplay(firstNumber);
      }
    } else {
      if (!secondNumber.includes('.')) {
        secondNumber += '.';
        updateDisplay(`${firstNumber} ${currentOperator} ${secondNumber}`);
      }
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
  document.querySelector(".btnPercent").addEventListener("click", handlePercentClick);
  document.querySelector(".btnDecimal").addEventListener("click", handleDecimalClick);


  
// function that handles % click
// function that handles decimal click
// handles clicking * operator twice

// round decimals 


