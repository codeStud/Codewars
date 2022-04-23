// We want to generate a function that computes the series starting from 0 and ending until the given number in the formatted string.

// My Solution
SequenceSum.showSequence = function (count) {
  if (count < 0) {
    return `${count}<0`;
  } else if (count === 0) {
    return "0=0";
  } else {
    let str = "0";
    let sum = 0;
    for (let i = 1; i < count; i++) {
      sum += i;
      str = str + "+" + i;
    }
    sum += count;
    str = str + "+" + count + " = " + sum;
    return str;
  }
};
