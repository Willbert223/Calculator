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
  // store the number thats clicked

  // Variable to store the number that's clicked
let currentInput = "";

// Function that displays numbers from HTML when clicked
function handleNumberClick(event) {
  const number = event.target.textContent;
  currentInput += number;
  document.getElementById("display").textContent = currentInput; // You can update a display element instead
}

// Example usage:
// Assuming you have buttons in HTML like <button class="number">1</button>
const numberButtons = document.querySelectorAll(".btnNumber");

numberButtons.forEach(button => {
  button.addEventListener("click", handleNumberClick);
});
