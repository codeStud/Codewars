// My Solution
function moveZeros(arr) {
  // PREP
  // since you are modifying the array concurrently, loop the array backwards
  // otherwise you might miss elements For eg - [ 9, 0, 0, 2] would give [9, 0, 2, 0]
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
}

// Other Solutions
