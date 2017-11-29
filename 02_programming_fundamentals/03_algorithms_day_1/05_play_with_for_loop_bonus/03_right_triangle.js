// ## Right triangle of size 5
//
//
// ```
// *
// **
// ***
// ****
// *****
// ```
for (let j=1; j<6; j++){
  const stars = [];
  for (let i=0; i<j; i++){
    stars.push("*");
  }
  console.log(stars.join(""));
}
