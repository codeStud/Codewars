// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// My Solution

// Other Solution
function scramble(str1, str2) {
  // assuming ascii characters only
  var hashtab = [...new Array(256)].map((x) => 0);

  str2.split("").forEach((ele) => hashtab[ele.charCodeAt()]++);
  str1.split("").forEach((ele) => hashtab[ele.charCodeAt()]--);

  hashtab = hashtab.filter((x) => x > 0);

  return hashtab.length == 0;
}
