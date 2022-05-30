// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.

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

// Other Solutions
function findEvenIndex(arr) {
  let left = 0;
  let right = arr.reduce((s, n) => s + n, 0);
  for (let i = 0; i < arr.length; i++) {
    right -= arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return -1;
}
