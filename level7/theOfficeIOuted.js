// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

// My Solution
function outed(meet, boss) {
  let score = 0;
  for (let people in meet) {
    people === boss
      ? (score = score + meet[people] * 2)
      : (score += meet[people]);
  }
  // decision. Note that there is no function like meet.length
  if (score / Object.keys(meet).length <= 5) {
    return "Get Out Now!";
  } else {
    return "Nice Work Champ!";
  }
}

// Other Solutions
function outed(meet, boss) {
  let names = Object.keys(meet);
  let score = names.reduce((s, v) => s + meet[v], 0) + meet[boss];
  return score / names.length > 5 ? "Nice Work Champ!" : "Get Out Now!";
}
