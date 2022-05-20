// Write a function doubleValue that accepts 1) an object of questions (as keys) and points (values) and 2) an array of new questions. The function should return the test's maximum possible score as an integer, where questions that are new are worth double points.

// You can assume that all questions are unique.

// Questions are case sensitive.

// Example: maxPossibleScore({"a": 1, "b": 2, "c": 3}, ["a", "c"]); // 1 * 2 + 2 + 3 * 2 = 10

// Note: array elements need not neccessarily be strings, but object keys are always strings

// My Solution
function maxPossibleScore(obj, arr) {
  const subjects = Object.keys(obj);
  return subjects.reduce(
    (score, sub) =>
      arr.toString().includes(sub) ? score + obj[sub] * 2 : score + obj[sub],
    0
  );
}

// Other Solutions
