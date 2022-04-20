// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// My Solution
function smallEnough(a, limit) {
  for (let el of a) {
    if (el > limit) return false;
  }

  return true;
}

// Other Solutions
function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}

smallEnough = (a, l) => a.every((e) => e <= l);
