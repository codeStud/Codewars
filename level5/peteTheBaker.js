// My Solution
function cakes(recipe, available) {
  // 1. even if 11 item is unavailable, return 0
  // 2. find the bottleneck - find the lowest availableQuantity / reqQuantity
  let bottleNeck = Number.MAX_VALUE;
  for (let item in recipe) {
    if (!available.hasOwnProperty(item)) {
      return 0;
    }
    // find the availableQuantity / reqQuantity ratio of current item
    let ratio = Math.floor(available[item] / recipe[item]);
    // update the bottleneck
    bottleNeck = Math.min(bottleNeck, ratio);
  }
  return bottleNeck;
}
