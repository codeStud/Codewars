// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

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

// Other Solutions
function longestConsec(strarr, k) {
  var n = strarr.length,
    str = "";

  if ((n = 0 || k > n || k <= 0)) {
    return str;
  }

  for (var i = 0; i < strarr.length; i++) {
    var currentStr = strarr.slice(i, k + i).join("");
    if (currentStr.length > str.length) {
      str = currentStr;
    }
  }
  return str;
}
