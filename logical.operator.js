// !Logical AND (&&):
// Returns true if both operands are true, otherwise, it returns false.

//! Logical OR (||):
// Returns true if at least one of the operands is true, otherwise, it returns false.

//! Logical NOT (!):
// Returns the opposite boolean value of the operand. If the operand is true, ! returns false, and if the operand is false, ! returns true

// let a = 15;
// let b = "5";
// console.log(a <= b);

// let a = "Dinesh";
// let b = "Dinesh";
// console.log(a === b);

let a = 2;
let b = -3;
let c=5;
let d=10;
let e=9;
// ? a>b AND c<=d //
// let firstCalculation  = a>b;
// let secondCalculation = c<=d;
// console.log(firstCalculation && secondCalculation);

// ? a+b<c OR d*a>=c //
// * both steps are true :
// let firstCalculation = (a+b)<c;    
// let secondCalculation = (d*a)>=c;
// console.log(firstCalculation || secondCalculation);

// ? (a**c===d AND d===e+a-1)  OR d % e!==1 //
// * false
// let firstCalculation = (a**c) === d;
//* true
// let secondCalculation = d === (e+a-1);
//* false
// let thirdCalculation = d % e !== 1;
// console.log( (firstCalculation && secondCalculation) || thirdCalculation );

// ? 2^a+b>d OR c-d>b //
  let firstCalculation = (2**a + b) > d;
  let secondCalculation = (c-d) > b;
  console.log(firstCalculation || secondCalculation);

// let isEarthRound = false;
// console.log(!isEarthRound);







