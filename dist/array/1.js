"use strict";
let array = [1, 2, 3, 4];
array.push(5);
array.push(6);
array.push(7);
array.push(8);
array.pop();
array.pop();
array.shift();
array.shift();
let a = array[0];
let b = array[1];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
let c = 0;
while (c < array.length) {
    console.log(array[c]);
    c++;
}
for (let i in array) {
    console.log(array[i]);
}
for (let v of array) {
    console.log(v);
}
array.forEach((i) => console.log(i));
