// Your task is to extend JavaScript Array object, with methods .first() and .last(), so you can get respectively first or last element of the array.

// var a = [2, 5, 7, 3 ,4];

// a.first();  // 2
// a.last();   // 4

// My Solution
const first = function (arr) {
  if (this) return this[0];
};

const last = function (arr) {
  if (this) return this[this.length - 1];
};

Array.prototype.first = first;
Array.prototype.last = last;
