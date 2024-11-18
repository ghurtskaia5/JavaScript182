let wentToMovies = false;
let atePopcorn = false;
let didFulfilPromise = wentToMovies && atePopcorn;
// let didFulfilPromise = wentToMovies || atePopcorn;
// let didWeLie = !wentToMovies || !atePopcorn;
let didWeLie = !didFulfilPromise;

// && - and 
// || - or
// ! - not

console.log(`Did we fulfil our promise? ${didFulfilPromise}`);
// console.log(!true);
// console.log(!false);

