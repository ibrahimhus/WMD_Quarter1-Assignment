/*31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/

import user_Name from "./Exercisequ30";
console.log(user_Name.length);
if (user_Name.length === 0) {
  console.log(`we need to find some users`);
} else {
  user_Name.splice(0, user_Name.length);
  console.log(`all usernames have been removed`);
}
