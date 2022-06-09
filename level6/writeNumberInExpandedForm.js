// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// My Solution
function expandedForm(num) {
  let arr = [];
  let power = 0;
  while (num) {
    // get the last digit
    let last = num % 10;
    // update the num
    num = Math.floor(num / 10);
    // cal the extended form for last digit
    last = last * Math.pow(10, power);
    // increment the power
    power += 1;
    // if it's non-zero, unshift it to arr
    if (last) arr.unshift(last);
  }
  return arr.join(" + ");
}

// Other Solutions
const expandedForm = (n) =>
  n
    .toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join(" + ");
