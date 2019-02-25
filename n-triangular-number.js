'use strict';

// Write a function that calculates the nth triangular number 
// (number of dots composing a triangle with n dots on a side)
// What is the input? A number (Number of sides in an equilateral triangle)
// What is the output? A number (number of dots in a triangle of nth sequence)
// What is the input to each recursive call? Input number minus 1
// What is the output of each recursive call? 
const nthTriangularNumber = (num) => {

  // Base case - 1 side
  if (num === 1) return 1;

  return num + nthTriangularNumber(num - 1);

};

console.log(nthTriangularNumber(9));