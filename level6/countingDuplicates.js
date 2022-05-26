// My Solution
function duplicateCount(text) {
  let str = text.toLowerCase();
  let freq = {};
  let count = 0;
  for (let char of str) {
    if (freq.hasOwnProperty(char)) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }
  for (let prop in freq) {
    if (freq[prop] > 1) {
      count++;
    }
  }

  return count;
}
