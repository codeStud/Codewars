// My Solution
function rowWeights(array) {
  //your code here
  //   let teamWeights = [0, 0];
  //   array.forEach((wt, idx) => idx % 2 === 0 ? teamWeights[0] += wt : teamWeights[1] += wt);
  //   return teamWeights;

  return array.reduce(
    (acc, wt, idx) => {
      idx % 2 === 0 ? (acc[0] += wt) : (acc[1] += wt);
      return acc;
    },
    [0, 0]
  );
}
