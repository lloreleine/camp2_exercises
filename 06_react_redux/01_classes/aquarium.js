// An aquarium contain fishes and algaes
// Fish has name and sex
// The aquarium has a method to add a fish
// The aquarium has a method to add an algue
// The aquarium has a method to pass time, each turn we make some actions
// Each turn, we want to display the number of algaes and list fishes with name and sexes
// The aquarium should contain different kind of fishes (some carnivorous and some vegan)
// Each turn, fishes try to eat something (algue or other fishes if they are vegan or carnivorous)
// If something was eaten, it should be removed from the aquarium

class Aquarium {
  constructor(fishNumber, algaeNumber){
    this.fishNumber = fishNumber;
    this.algaeNumber = algaeNumber;
    this.manageTank = [];
  }
  addFish(fish) {
    this.manageTank.push(fish);
    this.fishNumber = this.fishNumber + 1;
  }
  addAlgae(algae) {
    this.manageTank.push(algae);
    this.algaeNumber = this.algaeNumber + 1;
  }
  passTime() {
    console.log(`fishNumber: ${this.fishNumber}, algaeNumber: ${this.algaeNumber}`);
    for(let i=0; i<this.manageTank.length; i++){
      console.log("Tank contains: "+this.manageTank[i]);
    }
  }
}

class Fish {
  constructor(name, sex){
    this.name = name;
    this.sex = sex;
  }
}

class Carnivorous extends Fish {

}

let nemo = new Fish("Nemo","Male");
let dory = new Fish("Dory","Female");
let myTank = new Aquarium(0,0);

console.log(myTank);

myTank.addFish(nemo);
console.log(`Adding Nemo:`);
console.log(myTank);

myTank.addFish(dory);
console.log(`Adding Dory:`);
console.log(myTank);

myTank.passTime();
