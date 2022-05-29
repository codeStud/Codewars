// My Solution
var uniqueInOrder = function (iterable) {
  let arr = iterable;
  if (typeof iterable === "string") {
    arr = iterable.split("");
  }
  return arr.filter((el, i, arr) => i === 0 || arr[i] !== arr[i - 1]);
};
