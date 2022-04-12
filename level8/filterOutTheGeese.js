// return an array containing all of the strings in the input array birds except those that match strings in geese

// my solution
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((bird) => geese.indexOf(bird) === -1);
}

// other solutions
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((b) => !geese.includes(b));
}
