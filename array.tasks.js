// Sample array
// var myArray = [1, 2, 3, 4, 5];

// Using a for loop to iterate over the array
// for (var i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// ? 1. Create an array called friendsList and add your friends name. Print out your friend's name one by one.//
const friendsList = ["Ram", "Hari", "Shyam"];


// lets print the name one by one ://
// console.log(friendsList[0]);
// console.log(friendsList[1]);
// console.log(friendsList[2]);

// ? 2. Create an array called favourite sportsPerson and use a for loop to print the player's name.
// const favoriteSportsPerson = ["Ronaldo", "Mbappe", "Haaland"];
// now lets use for loop to print the players name :
// for (i = 0; i < favoriteSportsPerson.length; i++) {
//   console.log(favoriteSportsPerson[i]);
// }

// ? 3. Create an array called myFavourite actors and print out who is your best actor among all actors.
// const myFavoriteActors = ["Brad", "Tom", "Chris"];

// let bestActor = myFavoriteActors[1];
// console.log(`My best actor is ${bestActor}`);

// ? 4. Make an array of numbers that double the items.
// const numberLists = [1, 2, 3, 4, 5];

// lets use map //
// const doubleLists = numberLists.map((item, index, self) => {
//   return item*2;
// });
// console.log(doubleLists);

// ?5. Make an array of numbers filter even numbers only.//
const numLists = [1, 2, 3, 4, 5, 6, 7, 8];
//lets use filter() method now //
const evenOnly = numLists.filter((item) => {
  return item % 2 === 0;
});
// console.log(evenOnly);

// ?6. Make an array of numbers and print whether the numbers are odd or even.

// const checkOddEven = numLists.map((items) => {
//   if (items % 2 === 0) {
//     return `${items} is even`;
//   } else {
//     return `${items} is odd`;
//   }
// });
// console.log(checkOddEven);

// ? 7. There is array called laptopBrands = [“Dell”,”Asus”,”Acer”,”Hp”],
// Run map on it and print all elements
const laptopBrands = ["Dell", "Asus", "Acer", "Hp"];
// lets use map to print all elements ://
// const result = laptopBrands.map((items) => {
//   return items;
// });
// console.log(result);

// Filter out Hp only
const filteredValue = laptopBrands.filter((items) => {
  return items === "Hp";
});

// console.log(filteredValue);

// Use slice,splice, sort,reverse on this array.

// using slice:
// let result = laptopBrands.slice(0, 3);
// console.log(result);

// using splice (to insert a new element inside an array in whatever index/order we like ):
// laptopBrands.splice(1, 0, "Lenovo"); // inserts Lenovo at index 1
// laptopBrands.splice(2, 2, "MSI"); // inserts MSI at index 2 and removes the previous element present in index 2
// console.log(laptopBrands);

// using reverse.(It reverses the order of elements inside a particular array) :
// let result = laptopBrands.reverse();
// console.log(result);

// using sort
// let result = laptopBrands.sort();
// console.log(result);

// ?Create an array called laptopPriceList and run map,filter, find, slice,splice,every,some,findIndex,reverse on it.
const laptopPriceList = [20000, 10000, 50000, 90000];
// lets run map function //
laptopPriceList.map((items) => {
  return items;
});
// console.log(laptopPriceList);

// lets use filter function to filter out price bigger than or equals to 50,0000//
let filteredPrice = laptopPriceList.filter((items) => {
  return items >= 50000;
});
// console.log(filteredPrice);

// lets use slice method :
let result = laptopPriceList.slice(0, 3);
// console.log(result);

// lets use splice method :
//laptopPriceList.splice(0, 0, 5000); //lets use splice to put a new item in index 0 without removing its existing item in that index//
//console.log(laptopPriceList);

// lets use reverse method now :
let reversedArray = laptopPriceList.reverse();
// console.log(reversedArray);
