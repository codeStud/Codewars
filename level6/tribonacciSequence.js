// Given a signature consisting of 3 numbers, return the tribonacci sequence till nth number.
// Tribonacci sequence means sum of last 3 digits

// My Solution
function tribonacci(signature, n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [signature[0]];
  } else if (n === 2) {
    return signature.slice(0, n);
  } else if (n === 3) {
    return signature.slice(0, n);
  } else {
    let arr = signature.slice(0, 3);
    for (let i = 3; i < n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
    }
    return arr;
  }
}

// Other Solutions
function tribonacci(signature, n) {
  const result = signature.slice(0, n);
  while (result.length < n) {
    result[result.length] = result.slice(-3).reduce((p, c) => p + c, 0);
  }
  return result;
}
