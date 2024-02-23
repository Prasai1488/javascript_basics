const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
// console.log(sum);

const values = [10, 25, 35, 5];

const product = values.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  1
);

console.log(product);

