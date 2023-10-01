"use strict";
const add = (a, b, c, d) => {
    return a + b + c + d;
};
const num = [1, 2, 3, 4, 5];
console.log(add(...num));
