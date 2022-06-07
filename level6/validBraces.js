// My Solution
function matched(opening, closing) {
  const joined = opening + closing;
  const valid = ["()", "[]", "{}"];
  return valid.includes(joined);
}

function validBraces(braces) {
  let stack = [];
  for (let i = 0; i < braces.length; i++) {
    const current = braces[i];

    if (current === "(" || current === "{" || current === "[") {
      // push to stack
      stack.push(current);
    } else if (current === ")" || current === "}" || current === "]") {
      // extra closing braces
      if (stack.length === 0) {
        return false;
      }

      if (matched(stack[stack.length - 1], current)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  // extra opening braces
  if (stack.length > 0) {
    return false;
  } else {
    return true;
  }
}

// Other Solutions
