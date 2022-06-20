// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

// My Solution
function titleCase(title, minorWords) {
  if (!title) {
    return "";
  }
  // convert both strings into array
  const words = title.split(" ");
  let exceptions = [];

  if (minorWords) {
    exceptions = minorWords.split(" ");
    // convert everything in exceptions to lowercase
    exceptions = exceptions.map((word) => word.toLowerCase());
  }
  // declare a result array
  let res = [];

  // loop through the words[]
  for (let [idx, word] of words.entries()) {
    console.log(word);
    // if 1st word
    if (idx === 0) {
      res.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
    // if present in exception
    else if (exceptions.includes(word.toLowerCase())) {
      res.push(word.toLowerCase());
    }
    // not present in exception
    else {
      res.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
  }

  return res.join(" ");
}
