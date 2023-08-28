/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/

// solution

// Tests for equality and inequality with strings

let class2: string = "Batch 47";
let timing: string = "eveningshift";

console.log("Equality Test:", class2 === timing);
console.log("Equality Test:", class2 !== timing);

//Tests using the lower case function
let lowerfunction: string = "Husnain";
console.log(
  "lower case function:",
  lowerfunction == lowerfunction.toLocaleLowerCase()
);
//Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to

let num = 5;
let num1 = 10;

console.log("Euqality:", num == num1);
console.log("Ineuqality:", num !== num1);
console.log("Greater than :", num > num1);
console.log("Less than :", num >= num1);
console.log("Less than or equal to :", num <= num1);

// Tests using "and" and "or" operators

console.log("And:", num > num1 && num1 > num);
console.log("Or:", num < num1 || num1 > num);

//Test whether an item is in a array
let myfruits = ["Apple", "Mango", "Gawa"];
console.log("Fruits whether in an array", myfruits.includes("Mango"));

//Test whether an item is not in a array

console.log("Fruits whether is not in an array", myfruits.includes("Grapes"));
