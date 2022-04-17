// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// My Solution
function removeSmallest(numbers) {
  if (numbers.length === 0) {
    return numbers;
  }

  // CREATE A DEEP COPY TO AVOID MUTATING THE ORIGINAL ARRAY
  let temp = [...numbers];

  // storing smallest element's INDEX
  let smallest = 0;
  for (let i = 1; i < temp.length; i++) {
    if (temp[i] < temp[smallest]) {
      smallest = i;
    }
  }

  temp.splice(smallest, 1);
  return temp;
}

// Other's Solutions
function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}
