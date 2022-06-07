// My Solution
function isPrime(num) {
  if (num > 1) {
    let factorCount = 1;
    for (let i = 1; i * i <= num; i++) {
      if (factorCount > 2) {
        return false;
      }
      if (num % i === 0) {
        factorCount++;
      }
    }
    return factorCount <= 2;
  } else {
    return false;
  }
}

// Other Solutions
