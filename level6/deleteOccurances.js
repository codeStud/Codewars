// My Solution
function deleteNth(arr, n) {
  const res = [];
  const count = {};
  // store the count of each number in the arr
  for (let i = 0; i < arr.length; i++) {
    if (count.hasOwnProperty(arr[i])) {
      count[arr[i]] += 1;
      // push if the count is <= n
      if (count[arr[i]] <= n) {
        res.push(arr[i]);
      }
    } else {
      count[arr[i]] = 1;
      // push if the count is <= n
      if (count[arr[i]] <= n) {
        res.push(arr[i]);
      }
    }
  }

  return res;
}
