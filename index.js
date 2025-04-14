document.addEventListener('DOMContentLoaded', function() {
    var number1 = '';
    var number2 = '';
    var firstOperator = null;
    var secondOperator = null;
    let result = null;
    let displayValue = 0;
    let display = document.getElementById('display');
    
    
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
        if (number2 === 0) {
            return "Error: Can't divide by 0";
        }
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
    
    function listener () {
    
    const input = document.querySelector("#keys");
    const operator = document.querySelectorAll(".operator-btn");
    const numberButtons = document.querySelectorAll(".number-btn");
    const equalsButton = document.querySelector('.equals-btn');
    const clearButton = document.querySelector('.clear-btn')
    const decimal = document.querySelector('.decimal-btn')

    clearButton.addEventListener("click", function(event) {
        clearDisplay();
    })
 
    equalsButton.addEventListener("click", function(event) {
       
        num1_parsed = parseFloat(number1);
        number2 = display.value.slice(number1.length + 1)      
        num2_parsed = parseFloat(number2);

        operate(firstOperator, num1_parsed, num2_parsed);


    })
        

    numberButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            appendToDisplay(event.target.textContent);
        });
    });

    for (let i = 0; i < operator.length; i++) {
        operator[i].addEventListener("click", function(event) {
          if (firstOperator !== null) {
            num1_parsed = parseFloat(number1);
            num2_parsed = parseFloat(display.value);
            result = operate(firstOperator, num1_parsed, num2_parsed);  // Perform the operation
            display.value = result;  // Update display with the result
            number1 = result;  // Store the result as the new first number
          }

          firstOperator = event.target.textContent;
          number1 = display.value;
          appendToDisplay(firstOperator);

        });
    }
    
    }
    listener();
    
  });
  

  