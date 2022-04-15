// Given an array, returns the sum of the two lowest positive numbers

// My Solution
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}
