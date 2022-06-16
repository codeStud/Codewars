// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2)

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

// Other Solutions
