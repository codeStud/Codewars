// My Solution
function eureka(num) {
  let power = 1;
  let res = 0;
  num
    .toString()
    .split("")
    .forEach((digit) => (res += Math.pow(+digit, power++)));
  return num === res;
}

function sumDigPow(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }

  return arr.filter((num) => eureka(num));
}
