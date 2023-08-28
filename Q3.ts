// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// lowercase
let persname: string = "Muhammad Husnain";
let result2: string = persname.toLowerCase();
console.log(result2);

// uppercase

let personame1: string = "Muhammad Husnain";
let result3: string = personame1.toUpperCase();

console.log(result3);

// TitleCase
let personame2: string = "Muhammad Husnain"
  .split(" ")
  .map((word) => {
    word[0].toUpperCase() + word.slice(1).toLowerCase();
  })
  .join(" ");
console.log(`Hello ${personame2}, would you like to learn some Python today?`);

export {};
