// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician_names: Array<string> = ["Nazim", "Bilawal", "Asif"];
function show_magicians(Magiciannames: Array<string>) {
  for (let name of Magiciannames) {
    console.log(name);
  }
}

show_magicians(magician_names);

export { show_magicians, magician_names };
// //second forEach method

// let magician_names1: string[] = ["Nazim", "Bilawala", "Asif"];

// function show_magicians1(Magiciannames: string[]): void {
//   magician_names1.forEach((name) => console.log(name));
// }
// show_magicians1(magician_names);

// // method for loop function

// let magician_names2: string[] = ["Nazim", "Bilawala", "Asif"];

// function show_magicians2(Magiciannames: string[]): void {
//   for (let t = 0; t < show_magicians2.length; t++) {
//     console.log(show_magicians2);
//   }
// }
// show_magicians2(magician_names);
