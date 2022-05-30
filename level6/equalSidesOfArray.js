// My Solution
// // O(n ^ 2) solution
// function findEvenIndex(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     let left = 0, right = 0;
//     // left sum
//     for(let j = i -1; j >= 0; j--) {
//       left += arr[j];
//     }
//     // right sum
//     for(let k = i + 1; k < arr.length; k++) {
//       right += arr[k];
//     }
//     if(left === right) {
//       return i;
//     }
//   }

//   return -1;
// }

// O(n) solution
function findEvenIndex(arr) {
  let obj = {};
  let leftSumSoFar = 0,
    rightSumSoFar = 0;

  // traverse the array from right to left once
  // each key in the obj will now have its right sum stored as value
  for (let i = arr.length - 1; i >= 0; i--) {
    // make current INDEX a 'key' in the obj and initialise an empty array as its value
    obj[i] = new Array();
    // at the 0th index of current element in the obj, store rightSumSoFar
    obj[i][0] = rightSumSoFar;
    // increase the rightSumSoFar for the next element in the arr
    rightSumSoFar += arr[i];
  }

  // traverse the array from left to right once
  // each key in the obj will have its left sum stored as value
  for (let i = 0; i < arr.length; i++) {
    // at 1st index -> store the leftSumSoFar for this current element
    obj[i][1] = leftSumSoFar;

    // check if leftSum === rightSum for this array element
    if (obj[i][0] === obj[i][1]) {
      // return the current index (lowest index for which left = right)
      return i;
    }

    // increament the leftSumSoFar for the next element in the arr
    leftSumSoFar += arr[i];
  }

  return -1;
}
