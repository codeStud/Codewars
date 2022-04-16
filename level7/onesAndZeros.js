// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// My Solution
const binaryArrayToNumber = (arr) => {
  let power = arr.length - 1;
  let binary = 0;

  for (let el of arr) {
    binary += el * Math.pow(2, power);
    power -= 1;
  }

  return binary;
};

// Other Solutions
const binaryArrayToNumber = (arr) => parseInt(arr.join(""), 2);

//   The parseInt() function parses a string argument and returns an integer of the specified radix
