// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// My Solution
function count(string) {
  let count = {};
  string
    .split("")
    .forEach((char) => (count[char] = count[char] ? count[char] + 1 : 1));

  return count;
}

// Other Solutions
function count(string) {
  var result = {};

  for (let i = 0; i < string.length; i++) {
    if (result.hasOwnProperty(string[i])) {
      result[string[i]] += 1;
    } else {
      result[string[i]] = 1;
    }
  }

  return result;
}
