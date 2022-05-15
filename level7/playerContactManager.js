// My Solution
function playerManager(players) {
  if (!players) {
    return [];
  }

  let res = [];
  let arr = players.split(", ");
  for (let i = 0; i < arr.length; i += 2) {
    res.push({ player: arr[i], contact: +arr[i + 1] });
  }

  return res;
}
