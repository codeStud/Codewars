// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 * ... * N

// Be careful 1000! has 2568 digits...

// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.

// My Solution
function zeros(n) {
  let res = 0;
  let denominator = 5;
  while (Math.floor(n / denominator) > 0) {
    res += Math.floor(n / denominator);
    denominator *= 5;
  }

  return res;
}

// Other Solutions
function zeros(n) {
  var zs = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    zs += n;
  }
  return zs;
}
