// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

// You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

// Example
// findMissing([1, 3, 5, 9, 11]) == 7

// My Solution
var findMissing = function (list) {
  let d = [list[1] - list[0], list[2] - list[1]];
  let commonDiff = Math.min(...d) < 0 ? Math.max(...d) : Math.min(...d);
  const oddOne = list.find(
    (el, idx, list) => idx !== 0 && list[idx] - list[idx - 1] !== commonDiff
  );
  return oddOne - commonDiff;
};

// Other Solutions
var findMissing = function (list) {
  var step = (list[list.length - 1] - list[0]) / list.length;
  return (
    list.filter(function (val, index) {
      return val !== list[0] + index * step;
    })[0] - step
  );
};
