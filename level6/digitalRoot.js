// My Solution
function digital_root(n) {
  // initailise a sum variable to 0
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  if (sum > 9) {
    return digital_root(sum);
  } else {
    return sum;
  }
}
