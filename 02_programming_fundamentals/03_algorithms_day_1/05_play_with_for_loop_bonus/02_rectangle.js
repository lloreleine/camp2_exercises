// ## A Rectangle of 10 by 10
//
// ```
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// ```

for (let j=0; j<10; j++){
  let stars = "*";
  let boxOfStars = [];
  for(let i=0; i<10; i++){
    boxOfStars.push(stars);
  }
  console.log(boxOfStars.join(""));
}
