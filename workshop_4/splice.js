const fruits = ["apple", "AAple", "Apple", "Grapes", "Dragonfruit", "Oranges"];

fruits.splice(parseInt(fruits.length / 2), 0, "Pineapple");
console.log(fruits);

console.log(fruits.indexOf("Pineapple"));
// console.log(nums.indexOf("Apfel"));
// console.log(nums[30]);

fruits.splice(fruits.indexOf("Grapes") + 1, 0, "Jigo");
console.log(fruits);

console.log(fruits.join(" -> "));

fruits.sort();

console.log(fruits);