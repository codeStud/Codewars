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
