'use strict';

function preview(arr) {
  return arr.length-1;
}

function multiBracketValidation(str) {
  
  const stack = [];

  const openBrackets = ['(', '[', '{'];
  const closedBrackets = {
    ')' : '(',
    ']' : '[',
    '}' : '{',
  };

  for(let char of str) {
    
    if(openBrackets.includes(char)) {
      stack.push(char);
    } else if(Object.keys(closedBrackets).includes(char)) {
      if(stack.length === 0) {
        return false;
      } else if(preview(stack) === closedBrackets[char]){
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;

}


module.exports = multiBracketValidation;