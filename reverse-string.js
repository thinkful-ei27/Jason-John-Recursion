'use strict';

// Write a function that reverses a string
// What is the input? A string
// What is the output? The input string, reversed
// What is the input to each recursive call? The string without the last character
// What is the output of each recursive call? The last character
const reverseString = (str) => {

  // Base case - an empty string
  if (str.length === 0) return '';

  return str[str.length - 1 ] + reverseString(str.slice(0, str.length - 1));
};

console.log(reverseString('hello'));