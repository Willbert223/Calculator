const numberButton = document.querySelectorAll('.btnNumber');
const operatorButton = document.querySelectorAll('.btnOperator');
const clearButton = document.querySelector('.btnClear');
const deleteButton = document.querySelector('.btnDelete')
const decimalButton = document.querySelector('.btnDecimal')
const showResult = document.querySelector('.result');
const displayValue = document.querySelector('.display')
const num1Display = document.querySelector('.firstnum')
const num2Display = document.querySelector('.secondnum')
const operatorDisplay = document.querySelector('.operator')
const equalsKey = document.querySelector('.btnEquals');
const percentButton = document.querySelector('.btnPercent')


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
  if (secondnum === 0) {
    return "Error: Can't divide by 0"
    }
  return firstnum / secondnum;
}
// return percentage of numbers
function percentage (firstnum, secondnum) {
  return (firstnum * secondnum) / 100;
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
  case '%':
    return percentage(firstnum, secondnum)  
    
 }

 
}



// store the first value in a variable
let storedNumber = '';
// store the first num, operator, second num
let firstnum = '';
let firstOperator = '';
let secondnum = '';
let secondOperator = '';
let result = '';
let inputDisplay = ''
displayValue.innerText = 0;

// function that populates numbers when clicked
// for each button
numberButton.forEach((number) => {
  // listen for a click of the first number
  number.addEventListener('click', (event) => {
    const clickedNumber = event.target.value;
   if (firstOperator === '' && secondnum === '') { 
    firstnum = parseFloat(firstnum + clickedNumber);
    inputDisplay = firstnum;
    
   } else {
    secondnum = parseFloat(secondnum + clickedNumber);
    console.log("secondNumber", secondnum);
    inputDisplay = secondnum.toString();
   }
   

   /*if (firstnum !== '' && secondnum !== '') {
    firstnum = firstOperator, firstnum, secondnum;
    secondnum = '';
    secondnum = (secondnum + clickedNumber)
    inputDisplay = secondnum.toString();

   }*/
   displayValue.innerText = firstnum + firstOperator + secondnum; // displays all numbers plus operator


  })
})

// function that listens for operator clicked
operatorButton.forEach((operator) => {
  operator.addEventListener('click',  function(event) {

if (firstnum === '' && result !== '') {
  firstnum = result;
} // fixes result not displaying.

   if (secondnum !== '') {
     inputDisplay = operate(firstnum, secondnum, firstOperator)
      firstnum = inputDisplay.toString();
      secondnum = '';
      
    } else if (secondnum === ''  && firstOperator !== '') {
      return;
      
    }
    
    // stores the operator pressed and displays it after first number
    firstOperator = operator.innerText;
    displayValue.innerText = firstnum + firstOperator + secondnum;
    
    
 
  })
  
})

// funtion that listens for equal button
equalsKey.addEventListener('click', () => {
  // display the value of added numbers.
  if (firstnum === '' || firstOperator === '' || secondnum === '') return;

  // parse both numbers to floats
  const num1 = parseFloat(firstnum);
  const num2 = parseFloat(secondnum);
  
  inputDisplay = operate(num1, num2, firstOperator)// did not work because the order was wrong. 
  result = inputDisplay;
  
  console.log(typeof inputDisplay)
  if (typeof inputDisplay === 'number') {
    
    displayValue.textContent = parseFloat(inputDisplay.toFixed(2));
  } else {
    
    displayValue.textContent = inputDisplay;
  }
  
  
  
  
  firstnum = '';
  secondnum = '';
  firstOperator = '';
 
  

  
  
})


// function that listens for clear button click

clearButton.addEventListener('click',  (event) => {
  // removes number from display not. They are still stored inside of console.
  firstnum = '';
  result = ''
  secondnum = '';
  firstOperator = '';
  displayValue.innerText = '0';
})
// function that listens for delete button 

deleteButton.addEventListener('click', () => {

  const displayText = displayValue.innerText;

  if (!displayText || displayText === '0') return;

  const updatedText = displayText.slice(0, -1); // remove last character

  displayValue.innerText = updatedText || '0';

  // Update firstnum, operator, and secondnum based on what's left
  const operatorMatch = updatedText.match(/[+\-*/%]/);
  if (operatorMatch) {
    const operatorIndex = updatedText.indexOf(operatorMatch[0]);
    firstnum = updatedText.slice(0, operatorIndex);
    firstOperator = operatorMatch[0];
    secondnum = updatedText.slice(operatorIndex + 1);
  } else {
    firstnum = updatedText;
    firstOperator = '';
    secondnum = '';
  }
})


// fucntion that listens for decimal click allowing only one to appear

decimalButton.addEventListener('click', () => {
  if (firstOperator === '') /* makes the deciaml not append more then 1*/ {
    if (!firstnum.toString().includes('.')) {
      firstnum += '.';
      displayValue.textContent = firstnum + firstOperator;
    }
  } else {
    if (!secondnum.toString().includes('.')) {
      secondnum += '.';
      displayValue.textContent = (`${firstnum} ${firstOperator} ${secondnum}`);
    }
  }
})

// function that listens for percent button

percentButton.addEventListener('click', () => {
  if (firstnum !== '' && secondnum !== '') {
    result = operate(firstnum, secondnum, '%'); // Use percentage calculation
    displayValue.innerText = result;
    firstnum = result.toString(); // Set result as firstNumber for next operation
    secondnum = ''; // Reset second number
    firstOperator = ''; // Clear operator
    console.log(typeof secondnum)
  }
})


