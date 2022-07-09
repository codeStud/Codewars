// My Solution
function sumOfFib(n) {
  let sum = 0;
  let prevNum = 0;
  let curNum = 1;
  for (let i = 0; i < n; i++) {
    sum += curNum;
    let temp = curNum;
    curNum += prevNum;
    prevNum = temp;
  }

  return sum;
}

function perimeter(n) {
  let squareCount = n + 1;
  return 4 * sumOfFib(squareCount);
}
