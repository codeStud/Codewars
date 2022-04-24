// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers

// My Solution
function evenNumbers(array, number) {
  let evens = [];
  for (let i = array.length; i >= 0; i--) {
    if (evens.length === number) {
      return evens;
    }
    if (array[i] % 2 === 0) {
      evens.unshift(array[i]);
    }
  }
  return evens;
}

// Other Solution
var evenNumbers = (arr, num) => arr.filter((el) => el % 2 == 0).slice(-num);
