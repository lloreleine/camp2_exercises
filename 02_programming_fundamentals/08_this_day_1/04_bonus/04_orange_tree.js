// See Sparta courses for the exercise summary
let randomAge = (Math.floor((100-50)*Math.random())+50);

const orangeTree = {
  height: 0,
  age: 0,
  oranges: 0,
  alive: false,
  seed: function(){
    this.height = 0;
    this.age = 0;
    this.oranges = 0;
    this.alive = true;
    return this;
  },
  pickAnOrange: function(){
    if(this.oranges!==0){
      this.oranges = this.oranges - 1;
      return true;
    } else {
      return false;
    }
  },
  ageOneYear: function(){
    if (this.age>=0 && this.age<100){
      this.age = this.age + 1;
      this.growing();
      this.produceOrange();
      this.isTreeAlive();
    } else if(this.age === 100){
      this.alive = false;
    }
    return this;
  },
  growing: function(){
    if(this.age<10){
        this.height = this.height + 25;
    } else if (this.age>=10 && this.age<20){
        this.height = this.height + 10;
    }
    return this.height;
  },
  produceOrange: function(){
    if(this.age>=5 && this.age<10){
      this.oranges = 10;
    }
    else if (this.age>=10 && this.age<20){
      this.oranges = 20;
    }
    else if (this.age>=20 && this.age<40){
      this.oranges = 5;
    }
    else if (this.age>=40){
      this.oranges = 0;
    }
    return this.oranges;
  },
  isTreeAlive: function(){
    if (this.age === randomAge){
      this.alive = false;
    }
  }
}

module.exports = orangeTree;
