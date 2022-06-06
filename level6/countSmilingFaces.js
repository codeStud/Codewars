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
