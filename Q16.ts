/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */
import peoplelist from "./Exercisequ15";
let additionalGuest = ["Rizwan", "Salem", "Rasheed"];
// additionalGuest.push("Husnain");

// let addpeople1 = [...additionalGuest, "Husnain"];
// let finalGuestList = peoplelist.concat(additionalGuest);
let finalGuestList1 = [...peoplelist, ...additionalGuest];
// console.log(addpeople);
// console.log(addpeople1);

// console.log(additionalGuest);

// Add one new guest to the beginning of your array.
finalGuestList1.unshift("Kamran");
console.log(finalGuestList1);
// • Add one new guest to the middle of your array.
finalGuestList1.splice(2, 0, "Sunny");
console.log(finalGuestList1);
// • Use append() to add one new guest to the end of your list.
finalGuestList1.push("Zanny");
// • Print a new set of invitation messages, one for each person in your list. */
for (let m = 0; m < finalGuestList1.length; m++)
  [console.log(`you are invite in my home today, Mr. ${finalGuestList1[m]}`)];

console.log(finalGuestList1.length);

export default finalGuestList1;
