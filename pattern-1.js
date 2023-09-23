// solving technic
// 1. run the outer loop (row-times)
// 2. run the inner loop (column-times)
// 3. identify for every row no, how many col are there.
// 4. Types of element

let pattern = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      document.write(j + 1 + " ");
    }
    document.write("<br />");
  }
  for (let i = 0; i <= n; i++) {
    for (let j = n; j > i; j--) {
      document.write(j - i + " ");
    }
    document.write("<br />");
  }
};

pattern(5);
