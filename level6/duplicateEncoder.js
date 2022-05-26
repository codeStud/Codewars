// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

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

// Other Solutions
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}
