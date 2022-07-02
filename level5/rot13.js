// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// My Solution
function rot13(message) {
  return message
    .split("")
    .map((char) => {
      if (char >= "A" && char <= "Z") {
        char = String.fromCharCode(65 + ((char.charCodeAt() - 65 + 13) % 26));
      } else if (char >= "a" && char <= "z") {
        char = String.fromCharCode(97 + ((char.charCodeAt() - 97 + 13) % 26));
      }

      return char;
    })
    .join("");
}
