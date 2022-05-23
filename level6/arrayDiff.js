// My Solution
function arrayDiff(a, b) {
  let res = [];
  for (let el of a) {
    if (!b.includes(el)) {
      res.push(el);
    }
  }
  return res;
}
