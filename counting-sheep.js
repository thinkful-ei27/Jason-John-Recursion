'use strict';

// What is the input? A number (of sheep you have)
// What is the output? Display the number with a message until no more numbers
// What is the input to each recursive call? The new number
// What is the output of each recursive call? A console log
const countingSheep = (num) => {
  const defaultMessage = 'Another sheep jump over the fence';

  // Base case
  if (num <= 0) return '';

  console.log(`${num} - ${defaultMessage}`);

  countingSheep(num-1);
  
};

console.log(countingSheep(3));