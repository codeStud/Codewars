// My Solution
function iTri(s) {
  //2.4-mile swim, a 112-mile bicycle ride and a marathon (26.2-mile)
  let total = 2.4 + 112 + 26.2;
  if (s === 0) {
    return `Starting Line... Good Luck!`;
  } else if (s <= 2.4) {
    return { Swim: `${(total - s).toFixed(2)} to go!` };
  } else if (s <= 2.4 + 112) {
    return { Bike: `${(total - s).toFixed(2)} to go!` };
  } else if (s <= 2.4 + 112 + 26.2 && total - s > 10) {
    return { Run: `${(total - s).toFixed(2)} to go!` };
  } else if (total - s > 0) {
    return { Run: "Nearly there!" };
  } else {
    return "You're done! Stop running!";
  }
}

// Other Solutions
