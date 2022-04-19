// My Solution
function maxMultiple(divisor, bound) {
  //your code here
  let N = 0;
  for (let i = 1; i <= bound; i++) {
    if (i % divisor === 0) {
      N = i;
    }
  }

  return N;
}
