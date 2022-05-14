// My Solution
function remove(str, what) {
  for (key in what) {
    while (what[key] > 0) {
      // remove the first occurance of the key from str
      str = str.replace(key, "");
      what[key] -= 1;
    }
  }
  return str;
}
