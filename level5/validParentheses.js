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
