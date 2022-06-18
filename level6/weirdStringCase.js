// My Solution
function toWeirdCase(string) {
  const words = string.split(" ");
  return words
    .map(function (word) {
      return word
        .split("")
        .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
        .join("");
    })
    .join(" ");
}
