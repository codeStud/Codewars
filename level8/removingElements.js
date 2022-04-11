// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// My Soltuion
function removeEveryOther(arr) {
  //your code here
  return arr.filter((el, idx) => {
    if (idx % 2 === 0) {
      return el;
    }
  });
}

// Other Solutions
function removeEveryOther(arr) {
  //your code here
  return arr.filter((el, idx) => idx % 2 === 0);
}
