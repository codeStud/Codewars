// My Solution
function order(words) {
  let arr = words.split(" ");
  let resArr = new Array(arr.length);
  for (let word of arr) {
    const idx = word
      .split("")
      .filter((char) => char.toUpperCase() === char.toLowerCase())[0];
    resArr[idx - 1] = word;
  }
  return resArr.join(" ");
}
