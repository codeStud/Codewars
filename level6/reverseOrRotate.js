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
