// My Solution
function colourAssociation(array) {
  let arr = [];
  array.forEach((el) => {
    arr.push({ [el[0]]: el[1] });
  });

  return arr;
}
