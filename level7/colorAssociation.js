// You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

// For example:

// var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]

// My Solution
function colourAssociation(array) {
  let arr = [];
  array.forEach((el) => {
    arr.push({ [el[0]]: el[1] });
  });

  return arr;
}
