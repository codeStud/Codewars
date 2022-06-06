// My Solution
function high(x) {
  let maxScoreWord = "";
  let maxScore = 0;
  x.split(" ").forEach((word) => {
    // calc score of the word
    const score = word
      .split("")
      .reduce(
        (acc, char) => acc + (char.charCodeAt() - "a".charCodeAt() + 1),
        0
      );
    if (maxScore < score) {
      maxScoreWord = word;
      maxScore = score;
    }
  });
  return maxScoreWord;
}
