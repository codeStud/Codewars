// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

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
function validBraces(braces) {
  var matches = { "(": ")", "{": "}", "[": "]" };
  var stack = [];
  var currentChar;

  for (var i = 0; i < braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) {
      // opening braces
      stack.push(currentChar);
    } else {
      // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}

function validBraces(braces) {
  for (var i = 0, depth = []; i < braces.length; i++) {
    switch (braces[i]) {
      case "(":
      case "[":
      case "{":
        depth.push(braces[i]);
        break;
      case ")":
        if (depth.pop() != "(") return false;
        break;
      case "]":
        if (depth.pop() != "[") return false;
        break;
      case "}":
        if (depth.pop() != "{") return false;
        break;
    }
  }
  return depth.length == 0;
}
