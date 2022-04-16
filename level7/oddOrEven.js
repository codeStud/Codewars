// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".

// My solution
function oddOrEven(array) {
  let sum = array.reduce((acc, el) => acc + el, 0);
  return sum % 2 === 0 ? "even" : "odd";
}
