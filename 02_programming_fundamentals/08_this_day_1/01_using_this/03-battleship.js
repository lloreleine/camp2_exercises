// This Day 2 - BATTLESHIP

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const grid = {
  1: Array(6).fill(null),
  2: Array(6).fill(null),
  3: Array(6).fill(null),
  4: Array(6).fill(null),
  5: Array(6).fill(null),
  6: Array(6).fill(null)
};

const shipPosition ={
  1: Array(6).fill(null),
  2: Array(6).fill(null),
  3: [null, null, "O", null, null, null],
  4: [null, null, "O", null, null, null],
  5: [null, null, "O", null, null, null],
  6: Array(6).fill(null)
}

function renderCell(cell){
  if(cell === null){
    return "_";
  } else {
    return cell;
  }
}

function renderRow(number){
  const cells = grid[number];
  const row = cells.map(renderCell).join(" ");
  return `${number}  ${row}`;
}

function renderBoard(){
  const header = "   A B C D E F";
  const numbers = Object.keys(grid);
  const rows = numbers.map(renderRow).join("\n");
  return `${header}\n${rows}`;
}

function getCoordinate(input){
  const letter = input[0];
  const number = input[1];
  const regex1 = new RegExp("^[a-fA-F]");
  const regex2 = new RegExp("^[0-6]");

  if (input.length === 2 && regex1.test(letter) && regex2.test(number)) {
    return { letter: letter, number: number };
  } else {
    return null;
  }
}

function switchLetterToNumber(letter){
  if(letter === "a" || letter === "A"){
    return 0;
  } else if(letter === "b" || letter === "B"){
    return 1;
  }  else if(letter === "c" || letter === "C"){
    return 2;
  } else if(letter === "d" || letter === "D"){
    return 3;
  } else if(letter === "e" || letter === "E"){
    return 4;
  } else if(letter === "f" || letter === "F"){
    return 5;
  } else {
    return letter;
  }
}

function updateState(coordinates){
  const coordLetter = coordinates.letter;
  const newIndex = switchLetterToNumber(coordLetter);
  let line = grid[coordinates.number];
  const ship = shipPosition[coordinates.number];
  if(line[newIndex] !== null){
    console.log("Coordonnées déjà jouées.");
  } else if (ship[newIndex] !== null){
    line[newIndex] = "X";
    console.log("Touché");
  } else{
    line[newIndex] = " ";
  }
}

function handleInput(input){
  const coordinates = getCoordinate(input);
  if(coordinates){
    updateState(coordinates);
    start();
  } else {
    console.log("Ces coordonnées ne sont pas valides");
    start();
  }
}

function start(){
  console.log(renderBoard());
  reader.question("Where do you want to launch a bomb? ie b2\n", handleInput);
  console.log("\n");
}

start();
