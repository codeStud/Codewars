// My Solution
var maxSequence = function (arr) {
  if (arr.length === 0) {
    return 0;
  }

  let maxSum, curSum;
  maxSum = curSum = 0;
  for (let num of arr) {
    curSum = Math.max(num, curSum + num);
    maxSum = Math.max(maxSum, curSum);
  }

  return maxSum;
};
