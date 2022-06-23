// My Solution
// Return the output array, and ignore all non-op characters
function parse(data) {
  let output = [];
  let value = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "i") {
      value += 1;
    } else if (data[i] === "d") {
      value -= 1;
    } else if (data[i] === "s") {
      value *= value;
    } else if (data[i] === "o") {
      output.push(value);
    } else {
    }
  }

  return output;
}
