// Given an array of integers, find the element which occurs odd number of times

// My Solution
function findOdd(A) {
  const countObj = A.reduce((obj, el) => {
    if (el in obj) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
    return obj;
  }, {});

  for (let key in countObj) {
    if (countObj[key] % 2 !== 0) {
      return +key;
    }
  }
}

// Other Solutions
