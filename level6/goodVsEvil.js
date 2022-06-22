// My Solution
function goodVsEvil(good, evil) {
  const goodPowers = [1, 2, 3, 3, 4, 10];
  const badPowers = [1, 2, 2, 2, 3, 5, 10];
  let goodScore = 0,
    badScore = 0,
    idx = 0;

  good.split(" ").forEach((count) => {
    goodScore += +count * goodPowers[idx];
    idx++;
  });
  idx = 0;
  evil.split(" ").forEach((count) => {
    badScore += +count * badPowers[idx];
    idx++;
  });

  let res = `Battle Result: `;
  return goodScore > badScore
    ? res + `Good triumphs over Evil`
    : badScore > goodScore
    ? res + `Evil eradicates all trace of Good`
    : res + `No victor on this battle field`;
}
