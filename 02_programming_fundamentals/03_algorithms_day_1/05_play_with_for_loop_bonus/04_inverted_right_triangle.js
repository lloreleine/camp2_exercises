// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```
for (let j=5; j>0; j--){
  for (let i=0; i<1; i++){
    const stars = [];
    for (let k=5; k>j; k--){
      stars.unshift(" ");
    }
    for (let i=0; i<j; i++){
      stars.push("*");
    }
    console.log(stars.join(""));
  }
}
