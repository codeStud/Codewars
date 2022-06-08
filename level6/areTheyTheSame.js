// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

// My Solution
function comp(array1, array2) {
  if (!array1 || !array2) return false;

  array1.forEach((el) => {
    let num = el * el;
    const idx = array2.indexOf(num);
    if (idx !== -1) {
      // to keep track of equal number of occurances, pop num from array2
      array2.splice(idx, 1);
    } else {
      return false;
    }
  });
  // check for extra remaining elements in array2
  return array2.length === 0;
}

// Other Solutions
function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.map((v) => v * v).every((v, i) => v == array2[i]);
}
