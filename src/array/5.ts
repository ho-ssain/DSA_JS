// spread operator
const add = (a: number, b: number, c: number, d: number): number => {
  return a + b + c + d;
};

const num: number[] = [1, 2, 3, 4, 5];
console.log(add(...num));
