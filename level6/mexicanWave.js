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

// Other Solutions
function wave(str) {
  let result = [];

  str.split("").forEach((char, index) => {
    if (/[a-z]/.test(char)) {
      result.push(
        str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
      );
    }
  });

  return result;
}

function wave(str) {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    let copy = str.split("");
    if (copy[i] !== " ") {
      copy[i] = copy[i].toUpperCase();
      newArr.push(copy.join(""));
    }
  }
  return newArr;
}
