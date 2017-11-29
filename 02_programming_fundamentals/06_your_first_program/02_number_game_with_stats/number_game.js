const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let randomNumb = Math.floor((Math.random() * 100) + 1);
let numberOfTry = 0;

console.log(`*Hint* le random number est : ${randomNumb}. *Hint*`);

function reload(number){
  if (numberOfTry>4){
    console.log("You loose. You had only 4 tries");
    reader.close();
  }
  else {
    if(randomNumb === parseInt(number, 10) && numberOfTry===1){
      console.log("You win in one shot! Congrats!");
      reader.close();
    } else if(randomNumb === parseInt(number, 10)){
      console.log("BAZINGA! You just found the right number! Well done!");
      console.log("Number of tries: " + numberOfTry);
      reader.close();
    } else if(randomNumb > parseInt(number, 10)){
      console.log("Too low.");
      numberOfTry++;
      reader.question("Try again: ", reload);
    } else if(randomNumb < parseInt(number, 10)){
      console.log("Too high.");
      numberOfTry++;
      reader.question("Try again: ", reload);
    } else{
      console.log("What is wrong with you?");
      numberOfTry++;
      reader.question("Try again: ", reload);
    }
  }
}
reader.question("Choose a number between 1 and 100: ", (answer) => {
  numberOfTry++;
  reload(answer);
});
