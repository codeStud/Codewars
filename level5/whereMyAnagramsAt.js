// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

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
  // I can solve it easily by sorting the words but I wanna do it the little complicated way ; )
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

// Other Solutions
String.prototype.sort = function () {
  return this.split("").sort().join("");
};

function anagrams(word, words) {
  return words.filter(function (x) {
    return x.sort() === word.sort();
  });
}
