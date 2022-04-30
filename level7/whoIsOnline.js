// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out list of friends who are online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// My Solution
const whosOnline = (friends) => {
  if (friends.length === 0) {
    return {};
  }

  let res = {};
  friends.forEach((friend) => {
    if (friend.status === "online" && friend.lastActivity > 10) {
      res.away
        ? res.away.push(friend.username)
        : (res.away = [friend.username]);
    } else if (friend.status === "online") {
      res.online
        ? res.online.push(friend.username)
        : (res.online = [friend.username]);
    } else if (friend.status === "offline") {
      res.offline
        ? res.offline.push(friend.username)
        : (res.offline = [friend.username]);
    }
  });

  return res;
};

// Other Solutions
const whosOnline = (friends) => {
  let output = {};
  friends.forEach((e) => {
    let status = e.status;
    if (status === "online" && e.lastActivity > 10) status = "away";
    if (output[status]) {
      output[status].push(e.username);
    } else {
      output[status] = [e.username];
    }
  });
  return output;
};
