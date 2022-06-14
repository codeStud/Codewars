// My Solution
function solution(roman) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let intVal = 0;
  // assming valid roman number given
  for (let i = roman.length - 1; i >= 0; i--) {
    if (i > 0) {
      if (obj[roman[i]] > obj[roman[i - 1]]) {
        intVal += obj[roman[i]] - obj[roman[i - 1]];
        // no need to process i - 1th char now
        i--;
        continue;
      }
    }
    intVal += obj[roman[i]];
  }

  return intVal;
}
