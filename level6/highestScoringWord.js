// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

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

// Other Solutions
