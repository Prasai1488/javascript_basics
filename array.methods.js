// push in array = adds element to end of an array //

// const studentDetails = ["Ram"];
// studentDetails.push("Shyam");
// studentDetails.push("Hari");
// console.log(studentDetails);

// pop = removes last item from an array //
// studentDetails.pop();
// console.log(studentDetails);

// The unshift() method is another built-in method in JavaScript that is used to add one or more elements to the beginning of an array.//
// studentDetails.unshift("Prakash");
// console.log(studentDetails);

// The shift() method is used to remove the first element from an array and return that element. //
// studentDetails.shift();
// console.log(studentDetails);

// The map() method in JavaScript is used to create a new array by applying a function to each element of an existing array.
// const oldScores = [12, 33, 45, 66];

//new scores :
// const newScores = oldScores.map((item) => {
//   return item * 2;
// });

// console.log(newScores);

// const markLists = [10, 20, 30, 40];

// lets use map //
// const newMarkslist = markLists.map((item,index,self) => item + 10

// );

// console.log(newMarkslist);

// const name = ["hari", "ram", "sita"];
// lets use push //
// newName = name.map((item, index, self) => {
//   return item.toUpperCase();
// });

// console.log(newName);

//? find() returns first matching item based on condition  //
// const array = [11, 29, 35, 40, 60, 73];

// const newArray = array.find((item) => {
//   if (item % 2 === 0) {
//     return item;
//   }
// });
// console.log(newArray);

//? Map revision :
// const price = [100, 500, 200, 350];
// const newPrice = price.map((item) => {
//   if (item === 500) {
//     let newExample = item - 100;
//     return newExample;
//   } else {
//     return item;
//   }
// });
// console.log(newPrice);

const studentData = [
  {
    name: "A",
    score: 85,
  },
  {
    name: "B",
    score: 91,
  },
  {
    name: "C",
    score: 75,
  },
];
// increase each score by 5 //
// const new_Student_Data = studentData.map((item) => {
//   item.score = item.score + 5;
//   return item;
// });
// console.log(new_Student_Data);

// list only those details of students whose marks is greater than 80 //
// const filtered_details = studentData.filter((item) => {
//   if (item.score > 80) {
//     return item;
//   }
// });
// console.log(filtered_details);

// const array = [10, 44, 111, 3, 7, 8];

const new_array = array.sort((a, b) => {
  return b-a;
});
console.log(new_array);

// increase the score of C from 75 to 95 //

// const new_score_of_c = studentData.map((item) => {
//   if (item.name === "C") {
//     let new_score = item.score + 20;
//     let new_item = { ...item, score: new_score };
//     return new_item;
//   }
//    else {
//     return item;
//   }
// });

// console.log(new_score_of_c);

// const new_score_of_c = studentData.map((item) =>
//   item.name === "C" ? { ...item, score: item.score + 20 } : item
// );

// console.log(new_score_of_c);


