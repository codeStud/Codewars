// My Solution
function spinWords(string) {
  let resWords = [];
  // Iterate over the string
  string.split(" ").forEach((word) => {
    // Find the length of each word
    if (word.length < 5) {
      // If the length < 5 -> append word to resString directly
      resWords.push(word);
    } else {
      // else -> append word to resString after reversing it
      resWords.push(word.split("").reverse().join(""));
    }
  });

  return resWords.join(" ");
}
