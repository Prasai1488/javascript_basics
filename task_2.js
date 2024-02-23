// ? Assignment Operators, string/number conversion //

// Q No:01 //
// 1.Compute following using assignment operators
// x = x +5,where x = 2
// y= y-2,where y=8
// z = z*4,where z = 4
// a = a/5, where a=25
// b =b**2, where b =3
// m = m%2,where m=3 //

//  let x = 2;
//  x += 5;
//  console.log(x);

//  let y = 8;
//  y -= 2;
//  console.log(y);

// let z = 4;
// z *= 4;
// console.log(z);

//  let a = 25;
//  a /= 5;
//  console.log(a);

//  let b = 3;
//  b **= 2;
//  console.log(b);

//  let m = 3;
//  m %= 2;
//  console.log(m);

// ? Q No.02 //
// Create a variable named totalAmount and store your number as a string. Convert it into a number type.//
// let totalAmount = "9812345735";
// let conv = Number(totalAmount);
// console.log(conv, typeof conv);

// ? Q No.03 //
// Create a variable named phoneNumber and store it as a number. Convert  it into string type.//
//  let phoneNumber = 123456;
// let conv = String(phoneNumber);
// console.log(conv, typeof conv);
// let number = `${phoneNumber}`;
// console.log(typeof number);

// ? Q No.04 //
// Convert string “20ebp” to number and print out the result.//
// let a = "20ebp";
// let b = Number(a);
// console.log(b);

// ? Q No.05 //
//  Convert “nep10” to number and print out the result to console.Explain the result. //

// let a = "nep10";
// let b = Number(a);
// console.log(b);
// ! output NaN. This is because "nep10" is not a string representation of a number in a format that these functions can recognize and convert. The presence of non-numeric characters at the beginning of the string makes it impossible for these functions to parse it into a number.

// ! Note : Use Number() for a stricter, more versatile conversion that can handle different types of numeric representations.
// ! Use parseInt() or parseFloat() when dealing with strings that might contain non-numeric characters and you want to extract the numeric part at the beginning.
// ! Each function has its own use case, and the choice largely depends on the nature of the data you are working with and the desired outcome.