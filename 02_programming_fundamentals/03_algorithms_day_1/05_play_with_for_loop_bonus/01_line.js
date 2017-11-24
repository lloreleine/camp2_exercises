// ## A simple line of 10 stars
//
// ```
// **********
// ```
let stars = "*";
let boxOfStars = [];

for(let i=0; i<10; i++){
  boxOfStars.push(stars);
}
console.log(boxOfStars.join(""));
