// My Solution
String.prototype.camelCase = function () {
  return this.split(" ")
    .map((el) => {
      if (el) {
        return el[0].toUpperCase() + el.slice(1);
      }
    })
    .join("");
};
