let arr = [1, 2, 3, 4, 5];

// forEach - Iterates over elements and performs an action
arr.forEach((val) => {
  console.log(val);
});

// map - Returns a new array by applying a function to each element
let squared = arr.map((val) => val * val);
console.log(squared); // [1, 4, 9, 16, 25]

// filter - Returns a new array with elements that satisfy a condition
let evenNumbers = arr.filter((val) => val % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce - Reduces an array to a single value
let sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum); // 15

// find - Returns the first element that satisfies a condition
let firstEven = arr.find((val) => val % 2 === 0);
console.log(firstEven); // 2

// findIndex - Returns the index of the first element that satisfies a condition
let firstEvenIndex = arr.findIndex((val) => val % 2 === 0);
console.log(firstEvenIndex); // 1

// some - Returns true if at least one element satisfies the condition
let hasEven = arr.some((val) => val % 2 === 0);
console.log(hasEven); // true

// every - Returns true if all elements satisfy the condition
let allPositive = arr.every((val) => val > 0);
console.log(allPositive); // true

// includes - Checks if an element is present in the array
console.log(arr.includes(3)); // true

// indexOf - Returns the index of an element, or -1 if not found
console.log(arr.indexOf(4)); // 3

// lastIndexOf - Returns the last occurrence index of an element
console.log(arr.lastIndexOf(4)); // 3

// sort - Sorts an array (modifies the original array)
let unsortedArr = [3, 1, 5, 2, 4];
unsortedArr.sort((a, b) => a - b); // Ascending order
console.log(unsortedArr); // [1, 2, 3, 4, 5]

// reverse - Reverses the array (modifies the original array)
let reversedArr = [...arr].reverse();
console.log(reversedArr); // [5, 4, 3, 2, 1]

// concat - Combines arrays and returns a new array
let newArr = arr.concat([6, 7, 8]);
console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8]

// slice - Returns a portion of an array without modifying it
let slicedArr = arr.slice(1, 4);
console.log(slicedArr); // [2, 3, 4]

// splice - Adds/removes elements from an array (modifies the original array)
let splicedArr = [...arr];
splicedArr.splice(2, 1, 10); // Removes 1 element at index 2 and inserts 10
console.log(splicedArr); // [1, 2, 10, 4, 5]

// fill - Fills elements in an array with a static value
let filledArr = new Array(5).fill(0);
console.log(filledArr); // [0, 0, 0, 0, 0]

// join - Converts an array into a string
let joined = arr.join("-");
console.log(joined); // "1-2-3-4-5"

// flat - Flattens a nested array
let nestedArr = [1, [2, 3], [4, [5, 6]]];
console.log(nestedArr.flat(2)); // [1, 2, 3, 4, 5, 6]

// flatMap - Maps each element and flattens the result into a new array
let flatMapped = arr.flatMap((val) => [val, val * 2]);
console.log(flatMapped); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
