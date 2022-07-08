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
