// The goal of this code is to create an array of objects that stores a player's name and contact number from a given string.

// The method should return an empty array if the argument passed is an empty string or nil/None/null.

// Examples
// player_manager("John Doe, 8167238327, Jane Doe, 8163723827") returns [{player: "John Doe", contact: 8167238327}, {player: "Jane Doe", contact: 8163723827}]
// player_manager(nil) returns []
// player_manager("") returns []

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

// Other Solutions
