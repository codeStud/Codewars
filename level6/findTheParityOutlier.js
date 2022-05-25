// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// My Solution
function findOutlier(integers) {
  // figure out if the array contains evens or odds
  let evens = 0;
  let odds = 0;
  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }

  if (evens > 1) {
    // return the odd element from the even parity array
    return integers.filter((el) => el % 2 !== 0)[0];
  } else {
    return integers.filter((el) => el % 2 === 0)[0];
  }
}

// Other Solutions
function findOutlier(int) {
  var even = int.filter((a) => a % 2 == 0);
  var odd = int.filter((a) => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}
