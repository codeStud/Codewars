// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// My Solution
function partsSums(ls) {
  let partsSum = [];
  let sum = ls.reduce((acc, el) => acc + el, 0);
  partsSum.push(sum);

  for (let i = 0; i < ls.length; i++) {
    sum -= ls[i];
    partsSum.push(sum);
  }

  return partsSum;
}

// Other Solutions
function partsSums(ls) {
  ls.unshift(0);
  let sum = ls.reduce((p, c) => p + c, 0);
  return ls.map((v) => (sum = sum - v));
}
