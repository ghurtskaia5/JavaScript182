"use strict";
// naming convetion
// camelCase
// thisIsAReallyBigWord
let firstName = "Josh";
// let firsTName = "";
let firstName2 = "Nick";
let $firstName = "Nick";
// const firstName = "Zura";
// snake_case
// let other_name = "NIck";
// hard coded
const lastName = "Doe";
const PI = 3.14;
// SCREAMING_SNAKE_CASE
// const THIS_IS_REALLY_BIG_WORD = "";
// lastName = "Gigi";
const fullName = `${firstName} ${lastName}`;  // computed / dynamic value

console.log(firstName);
// ""
console.log("Hello " + firstName);
// template strings are in backticks (``)
console.log(`Hello ${firstName}`);

// declaration - initialization
let a = 1;
let b = 5;
console.log("a + b =", a + b);
console.log(`a + b = ${a + b}`);
console.log(`${a} + ${b} = ${a + b}`);
a = 9;

console.log(`a = ${a}`);

// const fn;
// const l = 1;
// const O = 0;
// middleName = 25;
// console.log(middleName);
