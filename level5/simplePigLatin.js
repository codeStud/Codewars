// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// My Solution
function pigIt(str) {
  // PREP
  // convert string into array
  // loop through each word, if the first char is alphabet, do the processing
  // joing the array to return a string
  return str
    .split(" ")
    .map((word) => {
      if (word[0].toLowerCase() !== word[0].toUpperCase()) {
        word = word.slice(1) + word.slice(0, 1) + "ay";
        console.log(word);
      }
      return word;
    })
    .join(" ");
}

// Other Solutions
function pigIt(str) {
  var arrayWord = str.split(" ");
  return arrayWord
    .map(function (word) {
      var firstLetter = word.charAt(0);
      return word.slice(1) + firstLetter + "ay";
    })
    .join(" ");
}
