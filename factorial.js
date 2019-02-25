'use strict';

// Find the factorial of a given number
// What is the input? A number
// What is the output? The factorial of the input number
// What is the input to each recursive call? The number minus 1
// What is the output of each recursive call? The number times the number minus 1
const factorial = (num) => {
  // Base case
  if (num === 1) return 1;
  
  return num * factorial(num - 1);
};

console.log(factorial(5));