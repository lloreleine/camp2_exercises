// See Sparta courses for the exercise summary

const car = {
  speedInit: 0,
  driveMinutes: 0,
  km: 0,
  start: function(){
    // Reset all the data
    this.speedInit = 0;
    this.driveMinutes = 0;
    this.km = 0;
    return this;
  },
  changeSpeed: function(speed){
    // change the km/h spped of the car
    this.speedInit = speed;
    return this;
  },
  drive: function(minutes){
    // make the car drive at the previously set speed
    // for that amount of time in minutes
    this.driveMinutes = minutes;
    this.km = this.km + ((this.speedInit * this.driveMinutes) / 60);
    return this;
  },
  showDistance: function(){
    // print the distance you drove as the number of km
    if(this.speedInit !== 0 && this.driveMinutes !== 0){
      console.log(`${this.km} Km`);
    }
    else{
      console.log("0 Km");
    }
    return this.km;
  }
}

car.start().changeSpeed(130).drive(42).showDistance();
// Should display 91 km.

module.exports = car;
