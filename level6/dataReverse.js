// My Solution
function dataReverse(data) {
  let res = [];
  for (let i = 0; i < data.length; i += 8) {
    res.unshift(data.slice(i, i + 8));
  }
  return [].concat(...res);
}
