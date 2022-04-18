// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// My Solution
function gimme(triplet) {
  const minVal = Math.min(...triplet);
  const maxVal = Math.max(...triplet);
  for (let i = 0; i < 3; i++) {
    if (minVal !== triplet[i] && maxVal !== triplet[i]) {
      return i;
    }
  }
}

// Other Solution
const gimme = function (arr) {
  return arr.indexOf([...arr].sort((x, y) => x - y)[1]);
};

var gimme = function (inputArray) {
  return inputArray.indexOf(
    inputArray.slice(0).sort(function (a, b) {
      return a - b;
    })[1]
  );
};
