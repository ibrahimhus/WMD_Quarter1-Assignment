// Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.
//Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

import { show_magicians, magician_names } from "./Exercisequ41";
import { make_great } from "./Exercisequ42";
//step 2
let originalMagiciansNames = [...magician_names];
//with spread operator
console.log("originalMagiciansNames:", originalMagiciansNames);

let great_magician = make_great(originalMagiciansNames);
console.log("Great Magicians:", great_magician);

//step 3. call show_magician wit both array showing that original magician and great magician.
show_magicians(great_magician);
show_magicians(originalMagiciansNames);
