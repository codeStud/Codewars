// take an array of numbers as its argument and return the two highest numbers within the array.

// My Solution
// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
  ages.sort((a, b) => b - a);
  return [ages[1], ages[0]];
}

// Other Solutions
// return the two oldest/oldest ages within the array of ages passed in.
const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2);
