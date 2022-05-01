// e.g. "The score is four nil" should return [4,0]

// Either teams score has a range of 0-9, and the ref won't say the same string every time e.g.

// "new score: two three"

// "two two"

// "Arsenal just conceded another goal, two nil"
// Note:

// Please return an array

// My Solution
function scoreboard(string) {
  let scores = {
    nil: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let res = [];

  string.split(" ").forEach((el) => {
    if (el in scores) {
      res.push(scores[el]);
    }
  });

  return res;
}

// Other Solutions
function scoreboard(string) {
  var arr = string.split(" ");
  var a = [
    "nil",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  return [a.indexOf(arr[arr.length - 2]), a.indexOf(arr[arr.length - 1])];
}

function scoreboard(string) {
  let score = [
    "nil",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  return string
    .split(" ")
    .filter((x) => score.includes(x))
    .map((x) => score.lastIndexOf(x));
}
