// "use strict";
let firstName = prompt("What's your name?").toUpperCase();
let lastName = prompt("What's your last name?").toLowerCase();
let fullName = `${firstName} ${lastName}`; // firstName + " " + lastName
// Type casting / conversion
let age = Number(prompt("What's your age?"));

console.log(`your fullname is: ${fullName} and you are ${age} years old!`);
const currentYear = 2024;

console.log(`You were born in: ${currentYear - age}`);
console.log(`Next year you will be ${age + 1} years old`);
console.log(age + age);
console.log(String(age) + String(age));

console.log(typeof(age));
console.log(firstName.includes("KE"));
console.log(fullName.endsWith("lee"));
console.log(fullName.startsWith("ZU"));

