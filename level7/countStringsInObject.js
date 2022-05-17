// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
//   //returns 3

// My Solution
function strCount(obj) {
  // Your code here
  if (obj === null || Object.keys(obj).length === 0) return 0;

  let total = 0;
  const props = Object.keys(obj);
  for (let keys of props) {
    if (typeof obj[keys] !== "object") {
      if (typeof obj[keys] === "string") {
        total++;
      }
    } else {
      let count = strCount(obj[keys]);
      total += count;
    }
  }

  return total;
}

// Other Solutions
function strCount(obj) {
  let count = 0;
  for (key in obj) {
    if (typeof obj[key] == "string") count++;
    if (typeof obj[key] == "object") count += strCount(obj[key]);
  }
  return count;
}
