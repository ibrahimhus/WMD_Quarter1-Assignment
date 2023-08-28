/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list */
import mypeoplelist from "./Exercisequ14";
let guestWhocantMakeit = mypeoplelist.pop();
console.log(guestWhocantMakeit);
console.log(mypeoplelist);

//step:- modify list with new guest for invitation.
let newGuest = mypeoplelist.push("Ikhlaq");

// step:- Print a second set of invitation messages, one for each person who is still in your list
// by for loop method
for (let q = 0; q < mypeoplelist.length; q++)
  [console.log(`you are inviting to dinner with me, Mr. ${mypeoplelist[q]}`)];

// by forEach Method
mypeoplelist.forEach((people, index) =>
  console.log(`${index},  You are invited to dinner with me, Mr. ${people}`)
);
// by Map Method
let dinnerInvition = mypeoplelist.map(
  (jazz, index) => `${index}: You are invited with me, Mr ${jazz}`
);
console.log(dinnerInvition);
// export let mypopList = mypeoplelist
export default mypeoplelist;
