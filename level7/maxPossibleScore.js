// My Solution
function maxPossibleScore(obj, arr) {
  const subjects = Object.keys(obj);
  return subjects.reduce(
    (score, sub) =>
      arr.toString().includes(sub) ? score + obj[sub] * 2 : score + obj[sub],
    0
  );
}
