// My Solution
var countBits = function (n) {
  let count = 0;
  while (n) {
    if (n % 2) {
      count++;
    }
    n = Math.floor(n / 2);
  }
  return count;
};
