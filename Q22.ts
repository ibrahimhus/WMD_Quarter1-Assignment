// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
import { language } from "./Exercisequ20";

let Indexerror = 3;
let mylanguage = language[Indexerror];
console.log("Index Error", Indexerror, ":", mylanguage);

// now access it by correct index number.

let correcterror = 2;
let correctlanguage = language[correcterror];

console.log("Index Correct", correcterror, ":", correctlanguage);
