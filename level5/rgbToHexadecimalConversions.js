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
