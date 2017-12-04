// This Day 2 - TIC TAC TOE

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const state = {
  a: Array(3).fill(null), // donne a: [null, null, null],
  b: Array(3).fill(null),
  c: Array(3).fill(null)
};

let currentPlayer;

function handleInput(input) {
  const coordinate = getCoordinate(input); // retourne un objet
  // coordinate = { letter: "a", digit: 0};
  if (coordinate){
    updateState(coordinate);
    nextPlayer();
  } else {
    console.log("This is not a valid move");
  }
  playTurn();
}

function updateState(coordinate){
  const line = state[coordinate.letter];
  // coordinate.letter -> "a"
  // state["a"] -> Array(3).fill(null) = ligne
  line[coordinate.digit] = currentPlayer;
  // coordinate.digit -> 0
  // donc on affecte le currentPlayer ("X" ou "O") au tableau line index 0
  // soit _ | _ | _ devient X | _ | _
}

function getCoordinate(input){
  const coordinates = input.split("");
  // crée un tableau avec les éléments séparés du string reçu
  // en prenant comme référence de split le paramètre en ()
  // "a1" devient "a" et "1"
  // "Je suis Kevin".split(" ") -> "Je" et "suis" et "Kevin"

  const letter = coordinates[0]; // récupère la 1ere entrée du tableau
  const digit = coordinates[1]-1; // -1 pour recouper avec les index

  /* possibilité de faire également sans le split :
  const letter = input[0];
  const digit = input[1] - 1;
  */
  if(state[letter] && state[letter][digit] === null){
    // if state[letter] -> vérifie s'il trouve dans state la letter entrée
    // state[letter][digit] -> propriété de state définie par l'index digit
    return { letter: letter, digit: digit};
  } else {
    return null;
  }
}

function nextPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function playTurn() {
  console.log(renderBoard());
  reader.question(`${currentPlayer}: What is your move? e.g: a1\n`, handleInput);
}

function start() {
  currentPlayer = ["X", "O"][Math.round(Math.random())];
  playTurn();
}

function renderCell(cell) {
  if (cell === null) {
    return "_";
  } else {
    return cell;
  }
}

function renderRow(letter) {
  const cells = state[letter]; // accède à l'objet state
  // et dynamiquement à la valeur de la key spécifiée dans [], soit "letter"
  // si "letter" = "a", on obtient cells = [null, null, null]

  const row = cells.map(renderCell).join(" | ");
  //.map(renderCell) -> applique la fonction renderCell sur chacune
  // des données du tableau mappé (cells)
  // soit "nullnullnull" transformé en "___" (3 x "_")
  // joiné avec " | " -> _ | _ | _ (on obtient une string globale)

  return `${letter} ${row}`;
  // return "a _ | _ | _"
}

function renderBoard() {
  const letters = Object.keys(state);
  // .keys accède et affiche chaque clé du tableau en paramètre
  // en string ds un nouveau tableau
  // letters = ["a","b","c"]

  const rows = letters.map(renderRow).join("\n");
  // -> map la fonction renderRow sur chaque élément du tableau letters
  // renderRow("a") puis renderRow("b") puis renderRow("c")
  // soit a _ | _ | _ puis b _ | _ | _ puis c _ | _ | _
  // joiné par "\n"
  // a _ | _ | _
  // b _ | _ | _
  // c _ | _ | _

  const header = "  1   2   3";
    // ajoute le header au dessus de la grille globale
  return `${header}\n${rows}`;
}

function playTurn(){
  console.log(renderBoard()),
  reader.question("Choisis une case : (ex : a2) ", handleInput);
}

function start() {
  currentPlayer = ["X", "O"][Math.round(Math.random())];
  playTurn();
}

start();


/* Mon code initital
let ligne=["  -----------"];
let array1=["  "," 1 "," "," 2 "," "," 3 "];
let array2=["A ","   ","|","   ","|","   "];
let array3=["B ","   ","|","   ","|","   "];
let array4=["C ","   ","|","   ","|","   "];
let affichageGrille = function(){
  console.log(array1.join(""));
  console.log(array2.join(""));
  console.log(ligne.join(""));
  console.log(array3.join(""));
  console.log(ligne.join(""));
  console.log(array4.join(""));
}

affichageGrille();

const grille ={
  case1: "   ",
  case2: "   ",
  case3: "   ",
  case4: "   ",
  case5: "   ",
  case6: "   ",
  case7: "   ",
  case8: "   ",
  case9: "   ",
  checkCase: function(){
  },
}
*/
