// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let mountains = ["k-2", "Himaliya", "Siachan"];
let rivers = ["Jhelum", "Jinab", "Ravi"];
let countries = ["Pakistan", "Iran", "Syria"];
let cities = ["Kasur", "Lahore", "Gujranwala"];
export let language = ["Punjabi", "Sidhi", "Blochi"];

let programlist = [
  ...mountains,
  ...rivers,
  ...countries,
  ...cities,
  ...language,
];
console.log(programlist);
