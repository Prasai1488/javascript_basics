// ? Write a function that takes a number and prints value from 0 to that number//
// const example = (num) => {
//     i = 0;
//   while (i <= num) {
//     console.log(i)
//     i++;
//     }
  
  
// }
//  example(10);

// ? Write a function that takes “add”/“subtract”/”multiply”/”divide” and two numbers as parameters and perform appropriate operations.
// const calculator = (operation,num1,num2) => {
//         if (operation === "add") {
//             return num1 + num2;
//         } 
//         else if (operation === "subtract") {
//             return num1-num2;
//         }
//         else if (operation === "multiply"){
//             return num1*num2;
//         }
//         else if (operation === "divide"){
//             return num1/num2;
//         }
//         else{
//             return "Enter a valid operator";
//         }
// }
// let result = calculator("divide",1,2);
// console.log(result);

// ? Write a function that takes day of week as parameter and returns 1,2,3,4,5,6. Example.. Provided sunday should return 1,monday returns 2
// const weeklyTasks = (day) => {
    
//     let stringCase = day.tolowercase(); 
//     if (day === ("Sunday")){
//         return 1;
//     } 
//     else if (day === "Monday" ){
//         return 2;
//     }
//     else if (day === "Tuesday"){
//         return 3;
//     }
//     else if (day === "Wednesday"){
//         return 4;
//     }
//     else {
//         return "Sorry";
//     }
// }
// let output = weeklyTasks("sunday");
// console.log(output);

// ? Write a function that takes 5 numbers and calculates the average of the provided numbers.//

// const average = (a,b,c,d,e)  => {
//     let avg = (a+b+c+d+e)/5;
//     return avg;
// }
// let result = average(1,2,3,4,5);
// console.log(result);

// const average = (a,b,c) => (a+b+c)/3;
// let result = average(1,2,3);
// console.log(result)

// ? dollar to cent //
// const conversion = (dollar) => cents = dollar*10;
// let output = conversion(10);
// console.log(output);

// ? Celsius to Fahrenheit //
// const conversionCelsiusToFahrenheit = (celsius) => fah = ((9/5)*celsius) + 32;
// let result = conversionCelsiusToFahrenheit(-40);
// console.log(result);

// ? Prime number or not //
// const isPrime = (num) => {
//     if (num <= 1) {
//         return false; // 0 and 1 are not prime numbers
//     }

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false; // If the number is divisible by any number other than 1 and itself, it's not prime
//         }
//     }

//     return true; // If no divisors other than 1 and itself are found, the number is prime
// };

// Example usage:
// console.log(isPrime(7)); // Output: true
// console.log(isPrime(12)); // Output: false


// ? factorial of a number :

// const factorialCalculation = (num)  => {
//     if (num === 0) {
//         return 1;
//     }

//     else{
//         return num * factorialCalculation(num - 1) ;
//     }    
// }

// let result = factorialCalculation(5);
// console.log(result);


// ? calculation of +ve values only //

// const addition = (num1,num2) => {
//     if (num1 <0 || num2 <0) {
//         return "Sorry, Enter only positive values";
//     }
//     else {
//         return num1+num2;
//     }
// } 

// let output = addition(1,2);
// console.log(output);

// ? odd even //
// const checkOddEven = (num)  => (num % 2 === 0) ? "even" : "odd";

// ? WAF that accepts first name and last name as argument and returns full name

// const fullName = (fName,lName) => `${fName} ${lName}`;

// let result = fullName("Prithvi" ,"Prasai");
// console.log(result);

