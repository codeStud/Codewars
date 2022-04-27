// Given an array of objects write a function that returns the average age of developers (rounded to the nearest integer).

// My Solution
function getAverageAge(list) {
  let avgAge = 0;
  list.forEach(function (dev) {
    avgAge += dev.age;
  });

  return Math.round(avgAge / list.length);
}

// Other Solutions
function getAverageAge(list) {
  return Math.round(list.reduce((sum, obj) => sum + obj.age, 0) / list.length);
}
