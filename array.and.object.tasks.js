let products = [
  { name: "Laptop", quantity: 8 },
  { name: "Mouse", quantity: 15 },
  { name: "Keyboard", quantity: 12 },
  { name: "Monitor", quantity: 6 },
];

// Your function should transform the products array to:
// [
//   { name: "Mouse", quantity: 20 },
//   { name: "Keyboard", quantity: 17 },
// ]
// Write a function that takes the array and returns a new array containing only the products with a quantity greater than 10. For those products, increase the quantity by 5.

const updatedProducts = products.map((item) => {
  if (item.quantity > 10) {
    return {
      ...item,
      quantity: item.quantity + 5,
    };
  }
  return item;
});

console.log(updatedProducts);
