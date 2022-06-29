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
