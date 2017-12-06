
let litersOfCoffee = 0;

function putLitersOfCoffee(numberOfLiters){
  litersOfCoffee = litersOfCoffee + numberOfLiters;
  return numberOfLiters;
}

function consumeLitersOfCoffee(numberOfLiters){
  if(litersOfCoffee >= numberOfLiters){
    litersOfCoffee = litersOfCoffee - numberOfLiters;
    // litersOfCoffee -= numberOfLiters;
    return true;
  } else {
    return false;
  }
}

module.exports = {
  putLitersOfCoffee: putLitersOfCoffee,
  consumeLitersOfCoffee: consumeLitersOfCoffee
};
