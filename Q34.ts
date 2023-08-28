/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
35. Animals: Think of at least*/

// Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let favorite_Pizza: string[] = [
  "pepperoni pizza",
  "chicken cheese pizza",
  "chicken fagita",
];
for (let j = 0; j < favorite_Pizza.length; j++) {
  console.log(favorite_Pizza[j]);
}
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

for (let j = 0; j < favorite_Pizza.length; j++) {
  console.log(` I like ${favorite_Pizza[j]}`);
}
// final message
console.log("i really love pizza");
