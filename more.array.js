let laptopList = [
  {
    name: "TUF F15",
    brand: "asus",
    price: 1044,
  },
  {
    name: "GF63",
    brand: "msi",
    price: 900,
  },
  {
    name: "macbook air m2",
    brand: "apple",
    price: 1400,
  },
  {
    name: "nitro",
    brand: "acer",
    price: 800,
  },

  {
    name: "inspiron 55",
    brand: "dell",
    price: 700,
  },
];

// ? remove laptops whose price is greater than 1000
// const filteredLaptops = laptopList.filter((laptop) => {
//   return laptop.price <= 1000;
// });

// console.log(filteredLaptops);

// ? remove laptops whose brand is apple //
// const removedLaptop = laptopList.filter((item) => {
//   return item.brand !== "apple";
// });
// console.log(removedLaptop);

// ? increase price of asus laptop by 5%
// const newPriceOfAsus = laptopList.map((item) => {
//   if (item.brand === "asus") {
//     return {
//       ...item,
//       price: item.price * 1.05, // increasing by 5% //
//     };
//   } else {
//     return item;
//   }
// });
// console.log(newPriceOfAsus);

// ?using ternary //
// const newPriceOfAsus = laptopList.map((item) =>
//   item.brand === "asus" ? { ...item, price: item.price * 1.05 } : item
// );
// console.log(newPriceOfAsus);

// ? due to sudden rise in tax, add 10% to the price of each laptop
// const priceAfterTax = laptopList.map((index) => {
//   index.price = ((index.price + 0.1) * index.price).toFixed(2);
//   return index;
// });

// console.log(priceAfterTax);

// ? decrease by 20 percent :
// const decrease_by_20Percent = laptopList.map((item) => {
//   item.price = item.price - item.price * 0.2;
//   return item;
// });
// console.log(decrease_by_20Percent);

//? Task 1: Use the filter function to extract only the laptops from the laptopList array that are from the brand "apple." Then, use the map function to create an array containing the names of these Apple laptops in uppercase.
// const new_array = laptopList.filter((item) => {
//   if (item.brand === "apple") {
//     return item;
//   }
// });

// const another_new_array = new_array.map((item) => {
//   return item.name.toUpperCase();
// });
// console.log(another_new_array);

// ? Task 2: Use the map function to create a new array containing objects with the same structure as laptopList, but with an additional property discountedPrice. Calculate the discounted price for each laptop by applying a 10% discount to its original price. Filter out laptops with a discounted price less than $800 using the filter function.
// const new_array = laptopList.map((item) => {
//   item.discountedPrice = item.price - 0.1 * item.price;
//   return item;
// });

// const another_new_array = new_array.filter((item) => {
//   if (item.discountedPrice < 800) {
//     return item;
//   }
// });
// console.log(another_new_array);

// ? task 3
// Use the filter function to extract laptops from the laptopList array that have a price higher than $1000.

const new_array = laptopList.filter((item) => {
  if (item.price > 1000) {
    return item;
  }
});

// Now use the map function to create an array containing objects with only the name and brand of these expensive laptops.

const another_new_array = new_array.map((item) => {
  console.log(item.brand);
  console.log(item.name);
});

// console.log(another_new_array);
