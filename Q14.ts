//* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let mypeoplelist = ["Abid", "Rizwan", "Sajjad"];

let messages: string = "Would you like to dinner with me in my house?";

for (let t = 0; t < mypeoplelist.length; t++)
  [console.log(`Mr. ${mypeoplelist[t]}, ${messages}`)];

export default mypeoplelist;
