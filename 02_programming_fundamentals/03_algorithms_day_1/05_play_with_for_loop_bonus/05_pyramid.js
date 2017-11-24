// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```
for (let j=1; j<6; j++){
  for (let i=0; i<1; i++){
    const stars = [];
    if(j===0){
      stars.unshift("     ");
    }
    else if(j===1){
      stars.unshift("    ");
    }
    else if(j===2){
      stars.unshift("   ");
    }
    else if(j===3){
      stars.unshift("  ");
    }
    else if(j===4){
      stars.unshift(" ");
    }
    else{
      stars.unshift("");
    }
    for (let i=0; i<j; i++){
      if(i===0){
        stars.push("*");
      }
      else{
        stars.push("**");
      }
    }
    console.log(stars.join(""));
  }
}

/* Code de Dom :
const etoile = [" ", " ", " ", "*"];
let ligne = "";


ligne = etoile.join("");
console.log(ligne);

for (let i = 1; i < 4 ; i ++){

 etoile[3-i] = "*";
  etoile[3+i] = "*";
  ligne = etoile.join("");
  console.log(ligne);

}
*/
