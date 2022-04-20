// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// My Solution
function minValue(values) {
  //your code here
  let uniqueDigits = [];
  values.forEach((el) => {
    if (!uniqueDigits.includes(el)) {
      uniqueDigits.push(el);
    }
  });
  //   return Number(uniqueDigits.sort().join(''))
  return +uniqueDigits.sort().join("");
}

// Other Solutions
function minValue(values) {
  let arr = Array.from(new Set(values));
  return parseInt(arr.sort().join(""));
}

function minValue(values) {
  const n = values
    .filter((e, i, arr) => arr.indexOf(e) === i)
    .sort()
    .join("");
  return Number(n);
}
