// Prime factorization is the process of breaking down a composite number into its prime factors, which are the prime numbers that multiply together to give the original number. This is an important concept in number theory and has various applications in mathematics and computer science. There are several algorithms for prime factorization, with some of the most commonly used ones being trial division, Pollard's rho algorithm, and the quadratic sieve. The first algorithm is the simplest and most intuitive, but it is also the slowest. The second algorithm is faster than the first, but it is still too slow for large numbers. The third algorithm is the fastest, but it is also the most complicated.

// Trial Division Algorithm:

const primeFactorization = (n) => {
  let record = [];
  let divisor = 2;
  while (n > 1) {
    if (n % divisor === 0) {
      record.push(divisor);
      n = n / divisor;
    } else divisor++;
  }
};
