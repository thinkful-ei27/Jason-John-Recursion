'use strict';

// What is the input? 
// What is the output? 
// What is the input to each recursive call? 
// What is the output of each recursive call? 
const bRep = (num) => {

  // Base case
  if (num === 0) return '';
  
  const binary = Math.floor(num%2);
  return bRep(Math.floor(num/2)) + binary;
  
};

console.log(bRep(25));