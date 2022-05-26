// My Solution
function duplicateEncode(word) {
  let str = word.toLowerCase();
  let freq = {};
  let resStr = "";
  for (let char of str) {
    if (freq.hasOwnProperty(char)) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }

  for (let char of str) {
    if (freq[char] > 1) {
      resStr += ")";
    } else {
      resStr += "(";
    }
  }

  return resStr;
}
