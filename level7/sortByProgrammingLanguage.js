// Given an array of objects, Write a function that returns the array sorted alphabetically by the programming language. In case there are some developers that code in the same language, sort them alphabetically by the first name.

function sortByLanguage(list) {
  return list.sort((a, b) => {
    let lang1 = a.language;
    let lang2 = b.language;
    if (lang1 === lang2) {
      return a.firstName < b.firstName ? -1 : 1;
    } else {
      return lang1 < lang2 ? -1 : 1;
    }
  });
}
