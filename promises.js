//? error handling

// console.log("hi");
// const x = 5;

// try {
//   x = 7;
// } catch (error) {
//   console.log(error.message);
// }

// let fName = "Pritvi";
// console.log(`My friends name is ${fName}`);

// console.log("I am from nepal");

// ? Async/await :

const loadPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

// loadPosts();

const loadPosts2 = async () => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

loadPosts2();
