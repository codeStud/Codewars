// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// My Solution
function twoSort(s) {
  let firstString = s.sort()[0];
  return firstString.split("").join("***");
}

// Other Solution
function twoSort(s) {
  return s.sort()[0].split("").join("***");
}

const twoSort = (s) => [...s.sort()[0]].join("***");
