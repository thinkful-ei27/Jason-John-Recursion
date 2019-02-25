'use strict';

// Prints the nth fibonacci number
// What is the input? A number
// What is the output? The nth fibonacci number
// What is the input to each recursive call? The number less 1
// What is the output of each recursive call? 
const fib = (num) => {

  // Base case
  if (num <= 2) return 1;

  return fib(num - 1) + fib(num - 2);
  
};

console.log(fib(6));