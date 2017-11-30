// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```

for (let j=1; j<5; j++){
  const stars = [];
  for (let k=4; k>j; k--){
    stars.unshift(" ");
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

/* Code d'Ahmid (excluant les lignes paires) :
let str = "*******";
let output="";
let myStr ="";

for (let i = str.length; i >= 0; i--) {
  if (i % 2 === 0) {
    myStr = " ".repeat((i - 1)/2 + 1);
    output = [str.slice(i, 0 ), myStr, str.slice(i - str.length)].join("");
    console.log(output);

 }

}

   Code de Dom :
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
