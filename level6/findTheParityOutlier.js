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
