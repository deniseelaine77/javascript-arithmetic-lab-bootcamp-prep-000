function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

// var number = 1
// function inc(n) {
//   return number += n 
// }

function inc(n){ //Increment a by 1 and return the result.
  number = n + 1;
  return number;
}

function dec(a){ //Decrement a by 1 and return the result.
  number = a - 1;
  return number;
}

function makeInt(n) {
  return parseInt(n, 10)
}

function preserveDecimal(n) {
  return parseFloat(n)
}