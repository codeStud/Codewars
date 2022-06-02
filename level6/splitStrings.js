// My Solution
function solution(str) {
  let arr = [];
  for (let i = 0; i < str.length; i += 2) {
    if (str[i + 1]) {
      arr.push(str[i] + str[i + 1]);
    } else {
      arr.push(str[i] + "_");
    }
  }
  return arr;
}
