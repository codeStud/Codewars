// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

// F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(n) being the smallest one such as F(n) * F(n+1) > prod.

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

// Other Solutions
function productFib(prod) {
  var n = 0;
  var nPlus = 1;
  while (n * nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n * nPlus === prod];
}
