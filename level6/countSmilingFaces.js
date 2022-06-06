// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

// My Solution
//return the total number of smiling faces in the array
function countSmileys(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const validChars = [":", ";", "-", "~", ")", "D"];

  return arr.reduce((count, face) => {
    console.log(face);
    // ignore invalid face
    if (face.length > 3) {
      return count;
    }
    // for valid faces, check each character
    for (let i = 0; i < face.length; i++) {
      // if even one of the char is invalid, skip the entire face
      if (validChars.indexOf(face[i]) === -1) {
        return count;
      }
    }
    // if the face doesn't contain an eye or a mouth, ignore it
    if (
      (face.indexOf(";") === -1 && face.indexOf(":") === -1) ||
      (face.indexOf(")") === -1 && face.indexOf("D") === -1)
    ) {
      return count;
    }
    // it's a valid face, increment count
    return count + 1;
  }, 0);
}

// Other Solutions
function countSmileys(arr) {
  var smileys = [
    ":)",
    ";)",
    ":-)",
    ";-)",
    ";~)",
    ":~)",
    ":D",
    ";D",
    ":-D",
    ":~D",
    ";-D",
    ";~D",
  ];
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < smileys.length; j++) {
      if (arr[i] === smileys[j]) {
        count++;
      }
    }
  }
  return count;
}
