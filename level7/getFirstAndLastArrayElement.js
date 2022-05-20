// My Solution
const first = function (arr) {
  if (this) return this[0];
};

const last = function (arr) {
  if (this) return this[this.length - 1];
};

Array.prototype.first = first;
Array.prototype.last = last;
