/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

import mynewupdatelist from "./Exercisequ16";
console.log(`you can invite only two people for dinner`);

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

for (let h = mynewupdatelist.length - 1; h >= 2; h--) {
  let removedguests = mynewupdatelist.pop();
  console.log(`Sorry, Mr. ${removedguests}, I can't invite them to diner`);
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let remaininggguest of mynewupdatelist) {
  console.log(`mr. ${remaininggguest}, you are still invited for dinner`);
}

// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

mynewupdatelist.splice(0, 2);
console.log(`my final guest list ${mynewupdatelist}+" empty "`);
