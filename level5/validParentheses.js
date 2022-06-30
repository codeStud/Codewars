// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// My Solution
function validParentheses(parens) {
  // assuming only valid chars '(' &')' given in parens string
  let stack = [];
  for (let paren of parens) {
    if (paren === "(") {
      stack.push(paren);
    } else if (paren === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

// Other Solutions
