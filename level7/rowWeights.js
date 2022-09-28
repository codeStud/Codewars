// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
// My Solution
function rowWeights(array) {
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
