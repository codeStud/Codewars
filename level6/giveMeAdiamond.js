// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

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

// Other Solutions
function diamond(n) {
  if (n < 0 || n % 2 == 0) return null;
  for (var i = 0, diamond = ""; i < n; i++) {
    var stars = n - Math.abs(n - 2 * i - 1);
    var spaces = (n - stars) / 2;
    while (spaces-- > 0) diamond += " ";
    while (stars-- > 0) diamond += "*";
    diamond += "\n";
  }
  return diamond;
}
