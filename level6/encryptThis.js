// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

// My Solution
var encryptThis = function (text) {
  const arr = text.split(" ").map((word) => {
    if (word.length === 1 || word.length === 2) {
      return word.charCodeAt(0) + word.slice(1);
    }

    const newLastChar = word[1];
    let res = "";
    res += word.charCodeAt(0);
    res += word[word.length - 1];
    res += word.slice(2, word.length - 1);
    res += newLastChar;
    return res;
  });

  return arr.join(" ");
};

// Other Solutions
const encryptWord = (word) =>
  word[0].charCodeAt() +
  (word.length > 2 ? word[word.length - 1] : "") +
  (word.length > 2 ? word.slice(2, -1) : "") +
  (word[1] || "");

const encryptThis = (text) =>
  text
    .split(" ")
    .map((word) => encryptWord(word))
    .join(" ");
