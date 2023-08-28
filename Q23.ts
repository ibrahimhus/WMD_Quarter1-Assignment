// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

//* Solution:-
let a = 5,
  b = 10;
//   test 1
console.log("a == b? I predict false");
console.log("Equality Test:", a == b);
// test 2
console.log("a !== b? I predict true");
console.log("Inequality Test:", a !== b);
// test 3

console.log("a>b? I predict false");
console.log("Greater than:", a > b);

// test 3
console.log(a <= b); // I predict true

//test 4

console.log(a != b); // I predict true

//test 5
console.log(a > b); // I predict false

//test 6
console.log(a >= b && a <= b); // I predict false
// test 7
console.log(!(a <= b || a < b)); // I predict false

// test 8
console.log(!(a >= b)); // I predict true

// test 9
console.log(!(a >= b)); // I predict true

// test 10
console.log(a >= b || a == b); // I predict false
