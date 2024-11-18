let age = 18;
// let firstName = prompt().toLowerCase();
let firstName = "putin";

if (age < 18 || firstName === "putin") {
    console.log("Please leave the premise");
} else {
    console.log("Please pay up 30$");
    if (age === 35 && firstName === "valery") { // nesting if statements
        console.log("You get a free drinks");
    }
}