// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// My Solution
function adjacentElementsProduct(array) {
  let maxProduct = -Infinity;
  array.forEach((el, idx, arr) => {
    if (idx !== 0) {
      if (maxProduct < el * arr[idx - 1]) {
        maxProduct = el * arr[idx - 1];
      }
    }
  });

  return maxProduct;
}
