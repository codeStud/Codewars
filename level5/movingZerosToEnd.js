// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

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
var moveZeros = function (arr) {
  return arr.filter((val) => val !== 0).concat(arr.filter((val) => val === 0));
};
