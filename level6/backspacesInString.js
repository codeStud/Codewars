// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

// My Solution
function cleanString(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#" && stack.length > 0) {
      stack.pop();
    } else if (s[i] !== "#") {
      stack.push(s[i]);
    } else {
    }
  }
  return stack.join("");
}

// Other Solutions
function cleanString(s) {
  let result = [];
  [...s].map((char) => (char === "#" ? result.pop() : result.push(char)));
  return result.join("");
}
