let quadratic = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      document.write(i + j);
    }
  }
};

quadratic(5); //

// O(n^2) - Quadratic Time Complexity
