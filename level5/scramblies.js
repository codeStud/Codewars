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
