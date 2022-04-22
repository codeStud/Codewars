// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// My Solution
function countDevelopers(list) {
  return list.reduce((acc, cur) => {
    if (cur.language === "JavaScript" && cur.continent === "Europe") {
      return (acc += 1);
    }

    return acc;
  }, 0);
}
