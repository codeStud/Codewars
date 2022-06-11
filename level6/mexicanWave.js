// Convert string into following form:
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// My Solution
function wave(str) {
  // Code here
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() !== str[i].toLowerCase()) {
      let temp = str.slice(0, i);
      temp += str[i].toUpperCase();
      temp += str.slice(i + 1);
      arr.push(temp);
    }
  }

  return arr;
}
