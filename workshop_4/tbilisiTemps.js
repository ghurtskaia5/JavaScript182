const temps = [];

for (let i = 0; i < 20; i++) {
    const tempToday = parseInt(Math.random() * (40 + 14) - 14);

    temps.push(tempToday);
}

console.log(temps);

console.log(`First day was: ${temps[0]}`);
console.log(`Today was: ${temps[temps.length - 1]}`);


// Average temperature
let sum = 0;

for (let i = 0; i < temps.length; i++) {
    console.log(`Day ${i + 1} was ${temps[i]}°C`);
    sum += temps[i];
}

console.log(`Total Temperature was ${sum}`);
console.log(`Average Temperature was ${sum / temps.length}`);


let max = temps[0];
let day = 1;

for (let i = 0; i < temps.length; i++) {
    if (max < temps[i]) {
        max = temps[i];
        day = i + 1;
    }
}

console.log(`Maximum recorded temperature was at ${day} day and it was ${max}°C`);


/*
დავუშვათ მინ. ტემპერატურა არის პრიველივე დღეზე
შევამოწმოთ თითოეული დღის ტემპერატურა მინ. ტემპერატურასთან
თუ მეტია {
    მინ განვაახლოთ შესაბამისი დღის ტემპერატურით
}
*/
let min = temps[0];

for (let i = 0; i < temps.length; i++) {
    if (min > temps[i]) {
        min = temps[i];
        day = i + 1;
    }
}

console.log(`Minimum temperature was recorded at ${day} and it was ${min}°C`);




