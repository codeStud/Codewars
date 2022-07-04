// My Solution
function orderWeight(strng) {
  if (strng.length === 0) {
    return "";
  }

  console.log(strng);
  return strng
    .split(" ")
    .sort((wt1, wt2) => {
      let sum1 = wt1.split("").reduce((acc, num) => acc + +num, 0);
      let sum2 = wt2.split("").reduce((acc, num) => acc + +num, 0);
      if (sum1 === sum2) {
        // sort lexographically
        return wt1 < wt2 ? -1 : 1;
      } else if (sum1 < sum2) {
        // wt1 comes before wt2
        return -1;
      } else {
        // wt2 comes before wt1
        return 1;
      }
    })
    .join(" ");
}
