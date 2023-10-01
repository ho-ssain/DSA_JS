// Insertion
// Insertion	means	adding	a	new	element	inside	a	data	structure. TS/JS implements	array insertion	with	the	.push(element) method.This method	adds	a	new	element	at	the	end	of	the	array

let array: number[] = [1, 2, 3, 4];
array.push(5); // [1, 2, 3, 4, 5]
array.push(6); // [1, 2, 3, 4, 5, 6]
array.push(7); // [1, 2, 3, 4, 5, 6, 7]
array.push(8); // [1, 2, 3, 4, 5, 6, 7, 8]

// Deletion
// JavaScript implements array deletion	with	the	.pop() method. This method removes the	last-added element of the array. This	also	returns the	removed	element

array.pop(); // returns 8, [1, 2, 3, 4, 5, 6, 7]
array.pop(); // returns 7, [1, 2, 3, 4, 5, 6]

// Another way to remove an	element	from an	array is with the .shift() method. This	method	will remove	the	first	element	and return it.

array.shift(); // returns 1, [2, 3, 4, 5, 6]
array.shift(); // returns 2, [3, 4, 5, 6]

// Access
// Accessing an array at a specified	index only takes O(1) because	this process uses	that	index	to get the	value	directly from the address in memory. It is done by specifying	the	index	(remember	that indexing starts at	0).

let a = array[0]; // 3
let b = array[1]; // 4

// Iteration

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

array.forEach((i: number) => console.log(i));
