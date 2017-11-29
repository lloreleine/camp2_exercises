const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let randomNumb = Math.floor((Math.random() * 100) + 1);

function reload(number){
  if(randomNumb === parseInt(number, 10)){
    console.log("BAZINGA! You just found the right number! Well done!");
    reader.close();
  } else if(number<1 || number>100){
    console.log("Respect the range!");
    reader.question("Try again: ", reload);
  } else if(number<randomNumb){
    console.log("Too low.");
    reader.question("Try again: ", reload);
  } else if(number>randomNumb){
    console.log("Too high.");
    reader.question("Try again: ", reload);
  } else{
    console.log("What is wrong with you?");
    reader.question("Try again: ", reload);
  }
}

reader.question("Guess the number I chose between 1 and 100.\nReady? Y or N: ", (launch) => {
  console.log(`*Hint* le random number est : ${randomNumb}. *Hint*`);
  reader.question("Choose a number: ", reload);
});
