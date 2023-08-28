// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

let citiCountry = (city: string, country: string): string => {
  return `${city}, ${country}`;
};
let citiCountr1: string = citiCountry("Pakistan", "Islamabad");
let citiCountr2: string = citiCountry("Srilanka", "Colombo");
let citiCountr3: string = citiCountry("Bangladesh", "Dhaka");

console.log(citiCountr1);
console.log(citiCountr2);
console.log(citiCountr3);
