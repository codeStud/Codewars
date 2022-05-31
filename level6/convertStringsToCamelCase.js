// My Solution
function toCamelCase(str) {
  return str
    .split(/[-_]+/)
    .map((el, idx) => (idx === 0 ? el : el[0].toUpperCase() + el.slice(1)))
    .join("");
}
