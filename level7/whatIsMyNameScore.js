// My Solution
function nameScore(name) {
  // alpha is the object with scores available in this function
  let score = { [name]: 0 };
  for (char of name) {
    for (group in alpha) {
      if (group.includes(char.toUpperCase())) {
        score[name] += alpha[group];
        break;
      }
    }
  }
  return score;
}
