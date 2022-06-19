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
