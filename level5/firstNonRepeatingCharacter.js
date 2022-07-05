// My Solution
function firstNonRepeatingLetter(s) {
  let str = s.toLowerCase(); // bcz we want to ignore casing while comparision
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      // return the correctly cased character
      return s[i];
    }
  }

  return "";
}
