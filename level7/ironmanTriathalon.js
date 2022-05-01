// An Ironman Triathlon is one of a series of long-distance triathlon races organized by the World Triathlon Corporaion (WTC). It consists of a 2.4-mile swim, a 112-mile bicycle ride and a marathon (26.2-mile)

// If the distance is zero, return 'Starting Line... Good Luck!'.

// If the athlete will be swimming, return an object with 'Swim' as the key, and the remaining race distance as the value.

// If the athlete will be riding their bike, return an object with 'Bike' as the key, and the remaining race distance as the value.

// If the athlete will be running, and has more than 10 miles to go, return an object with 'Run' as the key, and the remaining race distance as the value.

// If the athlete has 10 miles or less to go, return return an object with 'Run' as the key, and 'Nearly there!' as the value.

// Finally, if the athlete has completed te distance, return "You're done! Stop running!".

// All distance should be calculated to two decimal places.

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
