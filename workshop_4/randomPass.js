let pass = "";
for (let i = 0; i < 100; i++) {
    const randomNum = parseInt((Math.random() * (126 - 33)) + 33);
    const randomChar = String.fromCharCode(randomNum);
    pass += randomChar;
    // console.log(randomChar);
}

console.log(pass);

