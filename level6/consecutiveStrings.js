// My Solution
function longestConsec(strarr, k) {
  if (strarr.length === 0 || k <= 0 || k > strarr.length) {
    return "";
  }

  console.log(strarr, k);

  let longestStr = "";
  let arr = [];
  for (let i = 0; i < k; i++) {
    arr.push(strarr[i]);
  }
  longestStr = arr.join("");

  // keep moving the sliding window
  for (let i = k; i < strarr.length; i++) {
    // remove the front element from arr
    arr.shift();
    // include the current element at the end
    arr.push(strarr[i]);
    // update the longestStr
    if (arr.join("").length > longestStr.length) {
      longestStr = arr.join("");
    }
  }

  return longestStr;
}
