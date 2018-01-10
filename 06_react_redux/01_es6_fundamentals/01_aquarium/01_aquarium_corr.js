class Aquarium {
  constructor(fishes, algaes) {
    this.fishes = fishes;
    this.algaes = algaes;
  }

  addFish(newFish) {
    this.fishes.push(newFish);
  }

  addAlgae(newAlgae) {
    this.algaes.push(newAlgae);
  }

  endTurn() {
    console.log(`There is ${this.algaes.length} algaes`);
    this.fishes.forEach((fish) => console.log(fish.toString()));

    this.removeElements("algaes", this.fishes.filter((fish) => fish.kind === KIND_OF_FISH.VEGAN).length);
    this.removeElements("fishes", this.fishes.filter((fish) => fish.kind === KIND_OF_FISH.CARNIVOROUS).length);
  }

  removeElements(list, nbItem) {
    for (let i = 1; i <= nbItem; i++) {
      this[list].pop();
    }
  }
}

const KIND_OF_FISH = {
  CARNIVOROUS: 0,
  VEGAN: 1
};

class Fish {
  constructor(name, sex, kind) {
    this.name = name;
    this.sex = sex;
    this.kind = kind;
  }

  toString() {
    return `Name: ${this.name} - Sex: ${this.sex}`;
  }
}

class Algae {
  constructor(size) {
    this.size = size;
  }
}

const fishes = [new Fish("Léon", "M", KIND_OF_FISH.CARNIVOROUS), new Fish("Jasmina", "F", KIND_OF_FISH.VEGAN)];
const algaes = [new Algae(12), new Algae(8)];

const aquarium = new Aquarium(fishes, algaes);
aquarium.endTurn();
