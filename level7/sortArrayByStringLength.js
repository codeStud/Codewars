// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest length to longest.

// My Solution
function sortByLength(array) {
  // Return an array containing the same strings, ordered from shortest length to longest
  return array.sort((first, second) => first.length - second.length);
}
