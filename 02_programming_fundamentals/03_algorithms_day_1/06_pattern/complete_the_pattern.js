// Modify this value to test with other values
const numberOfLine = 5;
// Your code here ⬇
function pattern(size){
  let returnedNumber = "";
  // boucle de haut en bas
  for (let i=1; i<=size ;i++){
    // boucle de gauche à droite
    for (let j=size; j>=i; j--){
      returnedNumber = returnedNumber+j;
    }
    returnedNumber = returnedNumber+"\n";
  }
  // retrait du dernier saut de ligne inutile avec .trim()
  return console.log(returnedNumber.trim());
}

pattern(12);


/* de Dominique (sans utilisation de fonction) :
const numberOfLine = 5;
// Your code here :flèche_bas:
let i = numberOfLine;
let arrayTemp = [];
let compteur = 0;

for (let z = 0; z < numberOfLine; z++) {
  for (let j = 0; j < numberOfLine-compteur; j++) {
    arrayTemp.push(i);
    i--;
  }
  //console.log(arrayTemp);
  console.log(arrayTemp.join(“”));
  arrayTemp = [];
  compteur++;
  i=numberOfLine;
}*/
