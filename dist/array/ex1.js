"use strict";
const solve = (a, w) => {
    let hashTable = {};
    let len = a.length;
    for (let i = 0; i < len; i++) {
        let currentValue = a[i];
        let diff = w - currentValue;
        if (hashTable[diff] !== undefined) {
            return [hashTable[diff], i];
        }
        else {
            hashTable[currentValue] = i;
        }
    }
    return null;
};
console.log(solve([1, 4, 3, 2, 5], 9));
