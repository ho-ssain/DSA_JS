// Helper function
// slice(b, e)

let array1: number[] = [1, 2, 3, 4, 5];
console.log(array1.slice(1, 3));
console.log(array1.slice(3));
console.log(array1.slice());
console.log(array1 === array1.slice());

let array2 = array1;

// array1: // [1, 2, 3, 4, 5]
// array2: // [1, 2, 3, 4, 5]

array2[0] = 50;

// array1: [50, 1, 2, 3, 4, 5]
// array2: [50, 1, 2, 3, 4, 5]

console.log(array1);
console.log(array2);

// The changing element of array2 changed the original array by accident because it is a reference to	the	original array. To create	a new array, you can use .from().

let array3 = Array.from(array1);

array3[0] = 100;
console.log(array1);
console.log(array3);
