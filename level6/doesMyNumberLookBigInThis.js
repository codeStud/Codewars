// My Solution
function narcissistic(value) {
  let sum = 0;
  const digits = value.toString().split("");
  digits.forEach((digit) => {
    sum += Math.pow(+digit, digits.length);
  });
  if (value === sum) return true;
  return false;
}
