'use strict';

// What is the input? An array that contains an unknown set of numbers, and an output array
// What is the output? An array of doubled numbers
// What is the input to each recursive call? A new array minus the first number
// What is the output of each recursive call? The doubled number
const arrayDouble = (arr) => {
  
  // Base case
  if (!arr.length) {
    return [];
  }

  return [arr[0]*2, ...arrayDouble(arr.slice(1))];
  
};

console.log(arrayDouble([1, 2, 3]));
console.log(arrayDouble([2, 4, 6]));