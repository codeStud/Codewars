// Given an array of Object, Your task is to return either:

// true if all developers in the list code in the same language; or
// false otherwise.

// My Solution
function isSameLanguage(list) {
  let count = 1;
  for (let i = 1; i < list.length; i++) {
    if (list[i - 1].language === list[i].language) {
      count++;
    }
  }

  return count === list.length;
}

// Other Solutions
function isSameLanguage(list) {
  return list.every((e) => e.language === list[0].language);
}

const isSameLanguage = (list) => {
  return [...new Set(list.map((el) => el["language"]))].length === 1;
};
