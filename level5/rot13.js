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
