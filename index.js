

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

// store the first num, operator, second num
let firstnum = parseInt('3');// converts string to integer
let operator = '/';
let secondnum = parseInt('3');

console.log(operate(firstnum, secondnum, operator))