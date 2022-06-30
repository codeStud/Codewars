// My Solution
function shallowCompare(x, y) {
  if (x === y) {
    return true;
  } else if (Object.keys(x).length !== Object.keys(y).length) {
    return false;
  } else {
    for (let char in x) {
      if (y.hasOwnProperty(char)) {
        if (x[char] !== y[char]) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  }
}

function anagrams(word, words) {
  // I can solve it easily by sorting the words but I wanna do it the little complicated way
  let countWord = {};
  word
    .split("")
    .forEach((char) => (countWord[char] = (countWord[char] || 0) + 1));

  return words.reduce((res, el) => {
    // split the el and then count the occurance of each character
    let countEl = {};
    el.split("").forEach((char) => (countEl[char] = (countEl[char] || 0) + 1));

    // compare the countWord & countEl
    if (shallowCompare(countWord, countEl)) {
      res.push(el);
    }

    return res;
  }, []);
}
