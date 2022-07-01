// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

// My Solution
function rgb(r, g, b) {
  let rgbString = "";
  const arr = [r, g, b];
  arr.forEach((num) => {
    // convert the r/g/b value to nearest valid integer
    if (num < 0) {
      num = 0;
    } else if (num > 255) {
      num = 255;
    }
    // take each number and convert it to hexadecimal-string
    let hexString = num.toString(16);
    // convert it to uppercase
    hexString = hexString.toUpperCase();
    // make it double digits if not already, by padding leading 0
    hexString = hexString.padStart(2, "0");
    // append it to final ans
    rgbString += hexString;
  });
  return rgbString;
}

// Other Solutions
function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(d) {
  if (d < 0) {
    return "00";
  }
  if (d > 255) {
    return "FF";
  }
  return ("0" + Number(d).toString(16)).slice(-2).toUpperCase();
}
