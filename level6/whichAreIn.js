// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// NO DUPLICATES

// My Solution
function inArray(array1, array2) {
  let substrings = [];
  for (let sub of array1) {
    for (let word of array2) {
      if (word.includes(sub) && substrings.indexOf(sub) === -1) {
        substrings.push(sub);
      }
    }
  }
  return substrings.sort();
}

// Other Solutions
function inArray(arr1, arr2) {
  return arr1
    .filter(function (needle) {
      return arr2.some(function (haystack) {
        return haystack.indexOf(needle) > -1;
      });
    })
    .sort();
}

function inArray(a1, a2) {
  var str = a2.join(" ");
  return a1.filter((s) => str.indexOf(s) !== -1).sort();
}
