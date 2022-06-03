// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]

// My Solution
function sortArray(array) {
  let odds = [];
  array.forEach((el) => {
    if (el % 2 !== 0) {
      odds.push(el);
    }
  });
  // sort the odds
  odds.sort((a, b) => a - b);

  let oddIdx = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      array[i] = odds[oddIdx];
      oddIdx++;
    }
  }

  return array;
}
