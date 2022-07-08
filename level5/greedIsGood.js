// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

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
