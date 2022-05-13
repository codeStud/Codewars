// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

// My Solutions
function combine(...objArr) {
  //   let combinedObj = {};
  //   for (obj of objArr) {
  //     for (prop in obj) {
  //       if (prop in combinedObj) {
  //         combinedObj[prop] += obj[prop];
  //       } else {
  //         combinedObj[prop] = obj[prop];
  //       }
  //     }
  //   }
  //   return combinedObj;
  return objArr.reduce((combinedObj, curObj) => {
    for (prop in curObj) {
      if (prop in combinedObj) {
        combinedObj[prop] += curObj[prop];
      } else {
        combinedObj[prop] = curObj[prop];
      }
    }
    return combinedObj;
  }, {});
}

// Other Solutions
function combine(...arg) {
  return arg.reduce((result, obj) => {
    Object.keys(obj).forEach(
      (key) => (result[key] = (result[key] || 0) + obj[key])
    );
    return result;
  }, {});
}
