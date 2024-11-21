let nums = [2, 4, 5, 6, 7, 10, -10, 11, 12];

console.log(nums);
// Accessing array elements
console.log(`First element is: ${nums[0]}`);
console.log(`Second is: ${nums[1]}`);

console.log(`Length is: ${nums.length}`);

// Updating array elements
nums[0] = 27;


console.log(nums);

// Creating new elements
nums.push(5);
nums.unshift(7);

console.log(nums);

// Deleting array elements
nums.pop();
nums.shift();

console.log(nums);

// nums.splice(5, 0, 28);

// console.log(nums);
