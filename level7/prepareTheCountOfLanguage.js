// Given an array of objects, Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

// My Solution
function countLanguages(list) {
  return list.reduce((acc, obj) => {
    // if the language is not present in the result, insert it
    // otherwise, simply increase its count
    if (!acc[obj.language]) {
      acc[obj.language] = 1;
    } else {
      acc[obj.language]++;
    }
    // explicit return
    return acc;
  }, {});
}

// Other Solution
function countLanguages(list) {
  return list.reduce(function (s, c) {
    if (c.language in s) s[c.language]++;
    else s[c.language] = 1;

    return s;
  }, {});
}

function countLanguages(list) {
  var count = {};
  list.forEach((x) => (count[x.language] = (count[x.language] || 0) + 1));
  return count;
}
