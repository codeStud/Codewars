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
