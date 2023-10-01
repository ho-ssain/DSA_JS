// Count Primes

// Given an integer n, return the number of prime numbers that are strictly less than n.

const isPrime = (i) => {
  if (i < 2) return false;
  if (i <= 3) return true;
  if (i % 2 === 0 || i % 3 === 0) return false;
  for (let k = 5; k * k < i; k = k + 6) {
    if (i % k === 0 || i % (k + 2) === 0) return false;
  }
  return true;
};

var countPrimes = function (n) {
  let count = 0;
  if (n === 2) return count;
  if (n === 3) return (count = 1);

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) count++;
  }
  return count;
};
