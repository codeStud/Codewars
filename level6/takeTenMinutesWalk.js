// My Solution
function frequency(arr, char) {
  return arr.reduce((acc, el) => (el === char ? acc + 1 : acc), 0);
}

function isValidWalk(walk) {
  if (walk.length != 10) {
    return false;
  }

  let northCount = frequency(walk, "n");
  let southCount = frequency(walk, "s");
  let eastCount = frequency(walk, "e");
  let westCount = frequency(walk, "w");

  // will return to start if below condition satisfies
  return northCount === southCount && eastCount === westCount;
}
