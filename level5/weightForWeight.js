// The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:

// "100 180 90 56 65 74 68 86 99"
// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// My Solution
function orderWeight(strng) {
  if (strng.length === 0) {
    return "";
  }

  console.log(strng);
  return strng
    .split(" ")
    .sort((wt1, wt2) => {
      let sum1 = wt1.split("").reduce((acc, num) => acc + +num, 0);
      let sum2 = wt2.split("").reduce((acc, num) => acc + +num, 0);
      if (sum1 === sum2) {
        // sort lexographically
        return wt1 < wt2 ? -1 : 1;
      } else if (sum1 < sum2) {
        // wt1 comes before wt2
        return -1;
      } else {
        // wt2 comes before wt1
        return 1;
      }
    })
    .join(" ");
}
