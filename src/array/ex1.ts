// For example, in an	array	like [1,2,3,4,5] what numbers add up to 9?
// [4, 5]

// const solve = (a: number[], w: number): number[] => {
//   let len = a.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       if (a[i] + a[j] === w) return [i, j];
//     }
//   }
//   return [];
// };

// optimized solution

const solve = (a: number[], w: number) => {
  let hashTable: { [key: number]: number } = {};
  let len: number = a.length;

  for (let i = 0; i < len; i++) {
    let currentValue: number = a[i];
    let diff: number = w - currentValue;
    if (hashTable[diff] !== undefined) {
      return [hashTable[diff], i];
    } else {
      hashTable[currentValue] = i;
    }
  }
  return null;
};

console.log(solve([1, 4, 3, 2, 5], 9));
