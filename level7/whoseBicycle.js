// My Solution
function calcScore(marksheet) {
  let score = 0;
  for (sub in marksheet) {
    score += marksheet[sub];
  }
  return score;
}

function whoseBicycle(diary1, diary2, diary3) {
  let score1 = calcScore(diary1);
  let score2 = calcScore(diary2);
  let score3 = calcScore(diary3);
  const output =
    score1 > score2
      ? score1 > score3
        ? "first"
        : "third"
      : score2 > score3
      ? "second"
      : "third";
  return `I need to buy a bicycle for my ${output} son.`;
}
