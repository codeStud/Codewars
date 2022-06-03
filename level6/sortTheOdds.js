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
