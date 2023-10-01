//

// const isPrime = (n) => {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// };

// const isPrime = (n) => {
//   for (let i = 2; i <= n / 2; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// };

const isPrime = (n) => {
  if (n < 2) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i < n; i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
};

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
if (isPrime(18)) {
  document.write("Wow! 😃, It's A Prime!");
} else {
  document.write("Opps! 🙂, Not A Prime!");
}

// The function starts with two base cases:

// If n is less than or equal to 1, it returns false because prime numbers must be greater than 1.
// If n is less than or equal to 3, it returns true because 2 and 3 are both prime numbers.
// The next check is for divisibility by 2 or 3:

// If n is divisible by 2 (i.e., n % 2 == 0) or 3 (i.e., n % 3 == 0), it returns false. This is because any integer divisible by 2 or 3 (except for 2 and 3 themselves) is not a prime number.
// The loop:

// The loop starts from i = 5 and continues as long as i * i is less than or equal to n. This is an optimization because if a non-prime number has a factor greater than its square root, it must also have a factor smaller than its square root.
// Inside the loop, there are two checks:

// If n is divisible by i (i.e., n % i == 0) or by i + 2 (i.e., n % (i + 2) == 0), it returns false. These checks are done to skip over numbers that are multiples of 5 and 7 because all other prime numbers will be of the form 6k ± 1 (where k is a positive integer). This optimization reduces the number of checks, making the function more efficient.

// If none of the conditions in the loop is met, the function returns true, indicating that n is a prime number.
