document.addEventListener('DOMContentLoaded', function() {
    var number1 = '';
    var number2 = '';
    var firstOperator = null;
    var secondOperator = null;
    let result = null;
    let displayValue = 0;
    let display = document.getElementById('display');
    let shouldResetDisplay = false;
    
    
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
    
  
    const operator = document.querySelectorAll(".operator-btn");
    const numberButtons = document.querySelectorAll(".number-btn");
    const equalsButton = document.querySelector('.equals-btn');
    const clearButton = document.querySelector('.clear-btn')
    const decimalButton = document.querySelector('.decimal-btn')

    clearButton.addEventListener("click", function(event) {
        clearDisplay();
        number1 = '';
        number2 = '';
        firstOperator = null;
        secondOperator = null;
        result = null;
        shouldResetDisplay = false;
    })

    decimalButton.addEventListener("click", function(event) {
        const currentValue = display.value;
        const lastNumber = currentValue.split(/[\+\-\*\/]/).pop();
        if (!lastNumber.includes('.')) {
            appendToDisplay('.');
        }
    })
 
    equalsButton.addEventListener("click", function(event) {
       
        if(!number1 || !firstOperator){
            return;
        }
       
        number2 = display.value.slice(number1.length + 1)   
        num1_parsed = parseFloat(number1);
   
        num2_parsed = parseFloat(number2);

        result = operate(firstOperator, num1_parsed, num2_parsed);

        if (typeof result === 'string') {
            display.value = result;
        } else if(Number.isInteger(result)) {
           display.value = result;
        } else {
            result = result.toFixed(2);
            display.value = result;
        }
        number1 = result;
        firstOperator = null;
        shouldResetDisplay = true;

    })
        

    numberButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            if (shouldResetDisplay) {
                // If the last character is an operator, don’t clear display
                if (!['+', '-', '*', '/'].includes(display.value.slice(-1))) {
                    display.value = '';
                }
                shouldResetDisplay = false;
            }    
            appendToDisplay(event.target.textContent);
        });
    });

    operator.forEach(button => {
        button.addEventListener("click", function(event) {
            const operatorValue = event.target.textContent;
    
            // Prevent entering two operators in a row
            if (['+', '-', '*', '/'].includes(display.value.slice(-1))) {
                return;
            }
    
            // If there is a result from previous operation and we're starting a new one
            if (shouldResetDisplay && result !== null) {
                number1 = result.toString();
                firstOperator = operatorValue;
                display.value = number1 + firstOperator;
                result = null;
                shouldResetDisplay = false;
                return;
            }
    
            // If chaining (like 12 + 7 - 3)
            if (firstOperator !== null && !shouldResetDisplay) {
                number2 = display.value.slice(number1.length + 1);
                if (number2 === '') return;
    
                let num1_parsed = parseFloat(number1);
                let num2_parsed = parseFloat(number2);
                result = operate(firstOperator, num1_parsed, num2_parsed);
    
                if (typeof result === 'string') {
                    display.value = result;
                    number1 = '';
                    firstOperator = null;
                    shouldResetDisplay = true;
                    return;
                }
    
                result = Number.isInteger(result) ? result : result.toFixed(2);
                display.value = result + operatorValue;
                number1 = result.toString();
                firstOperator = operatorValue;
                shouldResetDisplay = false;
            } else {
                // First time selecting an operator
                number1 = display.value;
                firstOperator = operatorValue;
                appendToDisplay(operatorValue);
            }
        });
    });
    
    
    }
    listener();
    
    
  });
  

  