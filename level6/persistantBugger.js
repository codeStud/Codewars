// My Solution
function persistence(num) {
  let count = 0;

  while (Math.floor(num / 10)) {
    let numArr = num.toString().split("");
    num = numArr.reduce((acc, el) => acc * el, 1);
    count++;
  }

  return count;
}
