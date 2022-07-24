// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner?

// The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

// perimeter(5)  should return 80
// perimeter(7)  should return 216

// My Solution
function sumOfFib(n) {
  let sum = 0;
  let prevNum = 0;
  let curNum = 1;
  for (let i = 0; i < n; i++) {
    sum += curNum;
    let temp = curNum;
    curNum += prevNum;
    prevNum = temp;
  }

  return sum;
}

function perimeter(n) {
  let squareCount = n + 1;
  return 4 * sumOfFib(squareCount);
}

// Other Solutions
function fib(n) {
  var a = 1,
    b = 1,
    tmp;
  while (n-- > 0) {
    tmp = a;
    a = b;
    b += tmp;
  }
  return a;
}

function perimeter(n) {
  return 4 * (fib(n + 2) - 1);
}
