// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sand_wiches(item: string[]): void {
  console.log("sandwich ordered:", item.join(" : "));
}

let item1: string[] = ["Chicken", "Fruits", "Beef"];
let item2: string[] = ["Club", "BBQ", "Fish"];
let item3: string[] = ["Potato", "Egg Salad", "Creamy"];

sand_wiches(item1);
sand_wiches(item2);
sand_wiches(item3);
