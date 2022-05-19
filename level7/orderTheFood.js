// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

// { vegetarian: 2, standard: 1, vegan: 1 }

// My Solution
function orderFood(list) {
  return list.reduce((menu, obj) => {
    if (!menu[obj.meal]) {
      menu[obj.meal] = 1;
    } else {
      menu[obj.meal]++;
    }

    return menu;
  }, {});
}

// Other Solutions
function orderFood(list) {
  var orders = {};
  list.forEach((d) => {
    if (orders[d.meal]) orders[d.meal]++;
    else orders[d.meal] = 1;
  });
  return orders;
}

function orderFood(list) {
  var res = {};

  list.forEach(function (item) {
    res[item.meal] = res.hasOwnProperty(item.meal) ? res[item.meal] + 1 : 1;
  });

  return res;
}

//
