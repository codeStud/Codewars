// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

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
