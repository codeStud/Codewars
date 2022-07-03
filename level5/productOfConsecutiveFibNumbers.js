// My Solution
function productFib(prod) {
  // keeping only last two fibonacci numbers
  let prev = 0,
    cur = 1;
  let res = [];

  let i = 2;
  while (true) {
    if (prev * cur === prod) {
      res.push(prev, cur, true);
      break;
    } else if (prev * cur > prod) {
      res.push(prev, cur, false);
      break;
    } else {
      // keep calculating fibonacci by moving the variables ahead
      let temp = cur;
      cur = cur + prev;
      prev = temp;
    }
  }

  return res;
}
