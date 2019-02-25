'use strict';

// Split a string based on a seperator
// What is the input? string and separator
// What is the output? An array of strings
// What is the input to each recursive call? Remaining string and sep (what if undefined?)
// What is the output of each recursive call? Array
const stringSplitter = (str, sep) => {

  // Base case should be empty string, or no instance of sep
  if (str === '') return '';
  if (str.indexOf(sep) === -1) return str;

  // Should find first instance of sep, extract string from beginning till sep,
  // Then push extracted into an array, and run stringSplit on remaining string
  // return [str.slice(0, str.indexOf(sep)), ...stringSplitter(str.indexOf(sep), sep)];
  
  const newString = str.slice(str.indexOf(sep)+1);
  return [str.slice(0, str.indexOf(sep)), ...stringSplitter(newString, sep)];
};

console.log(stringSplitter('hello - I am - here', '-'));