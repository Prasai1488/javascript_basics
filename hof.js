// ? Higher order functions
// higher-order functions are functions that can take other functions as arguments, return functions as values, or both //

// ? CallBack functions
// function which is passed as an argument to another function //
const getSum = (x, y, printValue) => {
  const sum = x + y;
  printValue(sum);
};

const printValue = (value) => {
  console.log(value);
};

getSum(2, 3, printValue);
