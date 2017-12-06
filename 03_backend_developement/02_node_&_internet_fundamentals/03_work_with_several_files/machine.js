const container = require("./container");

function fillWithLitersOfCoffee(litersOfCoffee){
  container.putLitersOfCoffee(litersOfCoffee);
}

function expresso(){
  return container.consumeLitersOfCoffee(0.08);
}

function longCoffee(){
  return container.consumeLitersOfCoffee(0.15);
}

module.exports = {
  fillWithLitersOfCoffee: fillWithLitersOfCoffee,
  expresso: expresso,
  longCoffee: longCoffee
};
