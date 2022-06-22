// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

// My Solution
function revrot(str, sz) {
  if (sz <= 0 || sz > str.length) {
    return "";
  }

  // console.log(str, sz)
  const strArr = str.split("");
  let nums = [];
  for (let i = 0; i + sz < strArr.length; i += sz) {
    const num = strArr.slice(i, i + sz).join("");
    // console.log(num);
    nums.push(num);
  }

  let res = "";
  nums.forEach((num) => {
    // check sum of cube of it's digit % 2
    const cubeSum = num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Math.pow(+digit, 3), 0);
    // console.log(num, cubeSum);
    if (cubeSum % 2 === 0) {
      res += num.toString().split("").reverse().join("");
    } else {
      let arr = num.toString().split("");
      arr.push(arr[0]);
      arr.shift();
      res += arr.join("");
    }
  });

  return res;
}
