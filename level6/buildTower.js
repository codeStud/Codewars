// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

// My Solution
function towerBuilder(nFloors) {
  let pattern = [];
  // count of stars in last row = 2*n - 1
  // count of stars grows as 1, 3, 5 ... 2*n - 1
  // count of spaces (on each side of star) shrink as floor((2*n-1)/2), (2*n-1)/2 - 1, .... 0
  const lastRowStarCount = 2 * nFloors - 1;
  let spaces = Math.floor(lastRowStarCount / 2);
  let stars = 1;

  for (let i = 0; i < nFloors; i++) {
    let str = "";
    // print spaces
    for (let j = 0; j < spaces; j++) {
      str += " ";
    }
    // print stars
    for (let k = 0; k < stars; k++) {
      str += "*";
    }
    // again print spaces to right side of stars
    for (let j = 0; j < spaces; j++) {
      str += " ";
    }

    // push str into pattern
    pattern.push(str);
    // update the count of spaces and stars
    spaces -= 1;
    stars += 2;
  }

  return pattern;
}

// Other Solutions
