// You will receive an array of tennis balls and banana peels, which will each be represented by their weight. Tennis balls weigh exactly 58 grams, and banana peels weigh 60 grams upwards.

// Your job is to gather up just the tennis balls and return them in a sack. The sack will be represented by an object that has a 'weight' property, the value of which should be equal to the combined weight of all tennis balls in the array. If the array contains no tennis balls, then the weight value of the returned sack object should be 0.

function ballCollector(detritus) {
  return detritus.reduce(
    (obj, el) => {
      if (el === 58) {
        obj.weight += el;
      }
      return obj;
    },
    { weight: 0 }
  );
}

// Other Solutions
function ballCollector(detritus) {
  return { weight: detritus.filter((x) => x == 58).length * 58 };
}

function ballCollector(detritus) {
  var sack = 0;

  detritus.forEach(function (item) {
    if (item == 58) {
      sack += 58;
    }
  });

  return { weight: sack };
}
