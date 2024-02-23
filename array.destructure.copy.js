// array destructure //

const array = [1, 2, 3];

// const [num1, num2, num3] = array;
// console.log(num1, num2, num3);

// array copy //
// using spread operator//
let new_array = [...array];
// console.log(new_array);

// using structured clone when array has object or array inside //
let new_array2 = structuredClone(array);
// console.log(new_array2);

let example = ["Bisal", "Amul", "Zaid"];
example.sort().reverse();
console.log(example);
