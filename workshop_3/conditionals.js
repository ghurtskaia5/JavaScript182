let age = 70;
// let age = Number(prompt());

if (age < 18) { // code block
    console.log("You are a minor!");
    console.log("You are not allowed you use this application");
} else {
    console.log("You are an adult!");
    console.log("Welcome Guest!");
}


if (age > 65) {
    console.log("You get free drinks!");
} // else can be omitted


if (age > 6) {
    console.log("You are in a middle schoole");
} else if (age > 17) {
    console.log("You finished the school");
} else if (age > 14) {
    console.log("You are in a highschool!");
} else {
    console.log("You are in a kindergarten");
}
