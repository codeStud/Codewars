// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

// My Solution
function squareOrSquareRoot(array) {
  return array.map((num) =>
    Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num ** 2
  );
}

// Other Solutions
function squareOrSquareRoot(array) {
  return array.map((x) => {
    const r = Math.sqrt(x);
    return r % 1 == 0 ? r : x * x;
  });
}
