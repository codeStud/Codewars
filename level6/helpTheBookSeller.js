// My Solution
function stockList(listOfArt, listOfCat) {
  if (!listOfArt.length || !listOfCat.length) {
    return "";
  }

  let resStr = "";
  listOfCat.forEach((code) => {
    let sum = 0;
    listOfArt.forEach((book) => {
      const [name, qt] = book.split(" ");
      if (name[0] === code) {
        sum += +qt;
      }
    });
    resStr += `(${code} : ${sum}) - `;
  });

  return resStr.slice(0, resStr.length - 3);
}
