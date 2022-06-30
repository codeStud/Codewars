// My Solution
function humanReadable(seconds) {
  let hours = String(Math.floor(seconds / 3600));
  // update the remaining seconds
  seconds -= hours * 3600;
  let mins = String(Math.floor(seconds / 60));
  // update the remaining seconds
  seconds -= mins * 60;
  let sec = String(seconds);

  return `${hours.padStart(2, "0")}:${mins.padStart(2, "0")}:${sec.padStart(
    2,
    "0"
  )}`;
}
