// My Solution
function isPangram(string) {
  let alphabets = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false,
  };
  for (let i = 0; i < string.length; i++) {
    if (alphabets.hasOwnProperty(string[i].toLowerCase())) {
      alphabets[string[i].toLowerCase()] = true;
    }
  }

  for (let key in alphabets) {
    if (!alphabets[key]) {
      return false;
    }
  }

  return true;
}
