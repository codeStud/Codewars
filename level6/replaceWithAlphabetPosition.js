// My Solution
function alphabetPosition(text) {
  let str = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i].toUpperCase() !== text[i].toLowerCase()) {
      str += text[i].toLowerCase().charCodeAt() - "a".charCodeAt() + 1 + " ";
    }
  }
  return str.trim();
}
