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
 const num1 = ''
 const operator = ''
 const num2 = ''

// create function called operate that takes operator and two numbers
function operate(operator, a, b) {
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
  console.log(operate());