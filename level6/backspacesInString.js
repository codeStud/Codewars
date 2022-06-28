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
