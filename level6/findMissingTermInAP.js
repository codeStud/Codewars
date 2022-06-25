// My Solution
var findMissing = function (list) {
  let d = [list[1] - list[0], list[2] - list[1]];
  let commonDiff = Math.min(...d) < 0 ? Math.max(...d) : Math.min(...d);
  const oddOne = list.find(
    (el, idx, list) => idx !== 0 && list[idx] - list[idx - 1] !== commonDiff
  );
  return oddOne - commonDiff;
};
