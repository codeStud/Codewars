// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

// My Solution
function boredom(staff) {
  const accScores = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };

  let score = 0;
  for (let member in staff) {
    score += accScores[staff[member]];
  }

  if (score >= 100) {
    return "party time!!";
  } else if (score > 80) {
    return "i can handle this";
  } else {
    return "kill me now";
  }
}

// Other Solutions
const SCORES = {
  accounts: 1,
  finance: 2,
  canteen: 10,
  regulation: 3,
  trading: 6,
  change: 6,
  IS: 8,
  retail: 5,
  cleaning: 4,
  "pissing about": 25,
};

function boredom(staff) {
  let val = Object.keys(staff).reduce(
    (acc, cur) => acc + SCORES[staff[cur]],
    0
  );

  if (val <= 80) return "kill me now";
  if (val > 100) return "party time!!";
  return "i can handle this";
}
