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
