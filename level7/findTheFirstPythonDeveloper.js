// Given an array of objects, Your task is to return one of the following strings:

// < firstName here >, < country here > of the first Python developer who has signed up; or
// There will be no Python developers if no Python developer has signed up.

// My Solution
function getFirstPython(list) {
  let res = list.find((obj) => obj.language === "Python");
  if (res) {
    return `${res.firstName}, ${res.country}`;
  } else {
    return `There will be no Python developers`;
  }
}
