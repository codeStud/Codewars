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
