// Insert code here
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
  constructor(){
    this.tankFish = [];
    this.tankAlgae = 0;
  }
  addFish(fish) {
    this.tankFish.push(fish);
  }
  addAlgae(algae) {
    this.tankAlgae = this.tankAlgae+algae;
  }
  passTime() {
    console.log(`Number of algaes: ${this.tankAlgae}`);
    displayListOfFishes(this.tankFish);
    eatSomething(this.tankFish);
  }
}

function eatSomething(tank){
  console.log("function eatSomething launched");
  for(let i=0; i<tank.length; i++){
    let randomNumber = Math.round(Math.random() * tank.length);

    if(tank[i].eat === "carnivorous" && tank[i]===tank[randomNumber]){
      console.log(tank[i].name);
      console.log("did try to eat himself!");
    }
    else if(tank[i].eat === "carnivorous"){
      myTank.tankFish.splice(randomNumber,1);
    } else{
      myTank.tankAlgae=myTank.tankAlgae-1;
    }
  }
}

function displayListOfFishes(tankFish){
  for(let i=0; i<tankFish.length; i++){
    console.log(`Fish${i+1}: ${tankFish[i].name}, ${tankFish[i].sex}, ${tankFish[i].eat}`);
  }
}

class Fish {
  constructor(name,sex,eat){
    this.name = name;
    this.sex = sex;
    this.eat = eat;
  }
}


const myTank = new Aquarium();

myTank.addFish(new Fish("Dory","F","vegan"));
myTank.addFish(new Fish("Marin","M","vegan"));
myTank.addFish(new Fish("Bigboss","M","carnivorous"));
myTank.addFish(new Fish("Monster","F","carnivorous"));
myTank.addFish(new Fish("Marc","M","vegan"));
myTank.addFish(new Fish("Lilou","F","vegan"));
myTank.addFish(new Fish("Serial","M","carnivorous"));
myTank.addFish(new Fish("Marie","F","carnivorous"));
myTank.addFish(new Fish("Jacqueline","F","vegan"));
myTank.addFish(new Fish("Milou","M","carnivorous"));

myTank.addAlgae(16);

myTank.passTime();

console.log("function passTime launched");
console.log(myTank);


module.exports = {
  aquarium: Aquarium,
  fish:Fish
};

// Version with class extends
/*
const piranha = new Carnivorous("BigBoss","M");
const goldFish = new Vegan("Romu","M");

class Carnivorous extends Fish{
  constructor(name, sex){
    super(name,sex);
  }
  eatSomething(){
    myTank.tankFish.splice(0,1);
  }
}

class Vegan extends Fish{
  constructor(name, sex){
    super(name,sex);
  }
  eatSomething(){
    myTank.tankAlgae=myTank.tankAlgae-1;
  }
}
*/
