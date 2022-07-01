// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// 1. ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"] -> ['WEST']
// 2. In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

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

// Other Solutions
function dirReduc(plan) {
  var opposite = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST",
  };
  return plan.reduce(function (dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
    else dirs.push(dir);
    return dirs;
  }, []);
}
