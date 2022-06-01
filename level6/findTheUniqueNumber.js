// My Solution
function findUniq(arr) {
  // BASE CASES
  if (arr[0] !== arr[1] && arr[0] !== arr[2]) {
    return arr[0];
  }
  if (
    arr[arr.length - 1] !== arr[arr.length - 2] &&
    arr[arr.length - 1] !== arr[arr.length - 3]
  ) {
    return arr[arr.length - 1];
  }

  // Non-base cases
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
      return arr[i];
    }
  }
}
