// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1. 2.3.4
// 1.2.3.4\n
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid

// My Solution
function isValidIP(str) {
  console.log(str);
  const arr = str.split(".");
  console.log(arr);
  if (arr.length !== 4) {
    return false;
  }

  return arr.every(
    (num) =>
      num === "0" ||
      (/^[1-9][0-9]*$/.test(num) && !isNaN(num) && num >= 0 && num <= 255)
  );
}
