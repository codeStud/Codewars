// My Solution
function sqInRect(lng, wdth) {
  if (lng === wdth) {
    return null;
  }

  let res = [];
  while (lng > 0 && wdth > 0) {
    if (lng > wdth) {
      res.push(wdth);
      lng -= wdth;
    } else {
      res.push(lng);
      wdth -= lng;
    }
  }

  return res;
}
