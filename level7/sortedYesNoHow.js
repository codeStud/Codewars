// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise

// Other Solutions
function isSortedAndHow(arr) {
  return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1])
    ? "yes, ascending"
    : arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1])
    ? "yes, descending"
    : "no";
}

const isSortedAndHow = (array) => {
  let ascending = array.filter((e, i, a) => e > a[i + 1]).length == 0;
  let descending = array.filter((e, i, a) => e < a[i + 1]).length == 0;

  return ascending ? "yes, ascending" : descending ? "yes, descending" : "no";
};

const isSortedAndHow = (a) => {
  const s = a.join``;
  return s === a.sort((x, y) => x - y).join``
    ? "yes, ascending"
    : s === a.sort((x, y) => y - x).join``
    ? "yes, descending"
    : "no";
};
