// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// My Solution
function generateHashtag(str) {
  if (str.trim().length === 0) {
    return false;
  }

  let hashtag = "#";
  str
    .trim()
    .split(" ")
    .forEach((word) => {
      hashtag += word
        .split("")
        .map((char, idx) =>
          idx === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join("");
      console.log(hashtag);
    });

  return hashtag.length > 140 ? false : hashtag;
}

// Other Solutions
function generateHashtag(str) {
  return str.length > 140 || str === ""
    ? false
    : "#" + str.split(" ").map(capitalize).join("");
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
