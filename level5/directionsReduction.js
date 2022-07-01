// My Solution
function dirReduc(arr) {
  let opp = { NORTH: "SOUTH", SOUTH: "NORTH", EAST: "WEST", WEST: "EAST" };
  let stack = [];
  for (let dir of arr) {
    let flag = 0;
    // pop all the opposite directions
    if (stack.length > 0 && stack[stack.length - 1] === opp[dir]) {
      stack.pop();
    } else {
      stack.push(dir);
    }
  }
  return stack;
}
