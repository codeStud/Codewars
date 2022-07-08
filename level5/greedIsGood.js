// My Solution
function tripletScore(cnt, tripleValue, singleValue, score) {
  score += Math.floor(cnt / 3) * tripleValue;
  cnt = cnt % 3;
  score = score + cnt * singleValue;
  return score;
}

function score(dice) {
  let count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  for (let num of dice) {
    count[num]++;
  }

  let score = 0;
  for (const val in count) {
    let cnt = count[val];
    if (val === "1") {
      score = tripletScore(cnt, 1000, 100, score);
    } else if (val === "2") {
      score = tripletScore(cnt, 200, 0, score);
    } else if (val === "3") {
      score = tripletScore(cnt, 300, 0, score);
    } else if (val === "4") {
      score = tripletScore(cnt, 400, 0, score);
    } else if (val === "5") {
      score = tripletScore(cnt, 500, 50, score);
    } else if (val === "6") {
      score = tripletScore(cnt, 600, 0, score);
    } else {
    }
  }

  return score;
}
