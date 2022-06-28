// My Solution
multiplicationTable = function (size) {
  let res = [];
  for (let i = 1; i <= size; i++) {
    let arr = [];
    let j = 1;
    while (j <= size) {
      arr.push(i * j);
      j++;
    }
    res.push(arr);
  }

  return res;
};
