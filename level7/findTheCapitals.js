// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// My Solution
var capitals = function (word) {
  // Write your code here
  let res = [];
  word.split("").forEach((ch, idx) => {
    if (ch === ch.toUpperCase()) {
      res.push(idx);
    }
  });
  return res;
};

// Other Solutions
var capitals = function (word) {
  return word.split("").reduce(function (memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};

var capitals = function (word) {
  return word.split("").reduce(function (result, c, i) {
    if (c.toUpperCase() === c) result.push(i);
    return result;
  }, []);
};
