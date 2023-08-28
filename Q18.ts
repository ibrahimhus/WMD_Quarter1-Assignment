/*18. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

// • Store the locations in a array. Make sure the array is not in alphabetical order.
let visitplaces: string[] = ["nepal", "india", "srilanka", "russia", "lebnan"];

//• Print your array in its original order.
console.log("Original Order:", visitplaces);

//• Print your array in alphabetical order without modifying the actual list.

let alphabeticalorder = [...visitplaces].sort();
console.log(alphabeticalorder);

//• Show that your array is still in its original order by printing it.

console.log(visitplaces);

//• Print your array in reverse alphabetical order without changing the order of the original list.

let reversealphabetical = [...visitplaces].sort().reverse();
console.log("Reverse Alphabetical Order", reversealphabetical);

//• Show that your array is still in its original order by printing it again.
console.log(visitplaces);

// Reverse the order of your list. Print the array to show that its order has changed.

let reverseorder = visitplaces.reverse();
console.log("Reverse Order", reverseorder);

// Reverse the order of your list again. Print the list to show it’s back to its original order.
let originalreverseorder = visitplaces.reverse();
console.log("Reverse into Original Order", originalreverseorder);

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

let alphabeticalorderonce = [...visitplaces].sort();
console.log(alphabeticalorderonce);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

let reversealphabeticalorder = [...visitplaces].sort().reverse();
console.log("Reverse Alphabetical Order once again", reversealphabeticalorder);
