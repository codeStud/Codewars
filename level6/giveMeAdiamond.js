// My Solution
function diamond(n) {
  if (n < 3 || n % 2 === 0) return null;

  let diam = "";
  let space = Math.floor((n - 1) / 2);
  let star = 1;

  // print top
  while (space > 0) {
    for (let i = 0; i < space; i++) {
      diam += " ";
    }
    for (let i = 0; i < star; i++) {
      diam += "*";
    }

    space -= 1;
    star += 2;
    diam += "\n";
  }

  // print the middle
  for (let i = 0; i < n; i++) {
    diam += "*";
  }
  diam += "\n";

  // print bottom
  space = 1;
  star = n - 2;
  while (star > 0) {
    for (let i = 0; i < space; i++) {
      diam += " ";
    }
    for (let i = 0; i < star; i++) {
      diam += "*";
    }

    space += 1;
    star -= 2;
    diam += "\n";
  }

  return diam;
}
