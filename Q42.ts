// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase "the Great" to each magician’s name. Call show_magicians() to see that the list has actually been modified.

import { show_magicians, magician_names } from "./Exercisequ41";

// import variable magician_names and store it an magicianNames.

let magicianNames = magician_names;
export function make_great(magicians: Array<string>) {
  let GreatMagician: Array<string> = magicians.map((magician) => {
    return "the Great:" + magician;
  });
  return GreatMagician;
}

let GreatMagicianNAMES = make_great(magicianNames);
// call function of show magicians from Exercise 41 showing the list has been modidifed.
show_magicians(GreatMagicianNAMES);
