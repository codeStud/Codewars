// My Solution
function twoSum(numbers, target) {
  let res = [];
  for (let i = 0; i < numbers.length; i++) {
    if (
      numbers.indexOf(target - numbers[i]) !== -1 &&
      numbers.indexOf(target - numbers[i]) !== i
    ) {
      res.push(i);
      res.push(numbers.indexOf(target - numbers[i]));
      break;
    }
  }

  return res;
}
