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
