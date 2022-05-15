// I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.

// You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:

// {
//   'algebra': 6,
//   'history': 8,
//   'physics': 9,
//   'geography': 2,
//   'chemistry': 9
// }
// Return please :

// 'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.

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
