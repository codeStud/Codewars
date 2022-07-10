// My Solution
function sumPairs(ints, s) {
  let mem = {};
  for (let num of ints) {
    if (mem[s - num]) return [s - num, num];
    else mem[num] = 1;
  }
}
