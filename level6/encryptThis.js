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
