// Do not pay attention to this line for the moment
const driverData = require('./.driver_data');

// These are the variables against which you should test
// driverLicense is a string with the kind of license (ex: AM, B, D...)
const driverLicense = driverData.driverLicense;
// licenceIssued is an integer with the year it was issued (ex: 2001)
const licenceIssued = driverData.licenceIssued;
// numberOfAccident is an integer with the number of accidents.
const numberOfAccident = driverData.numberOfAccident;
// bonus is a float that represent the driver's bonus
const bonus = driverData.bonus;

// Assign a boolean to this variable:
//   `true` if the driver can rent a car
//   `false` if not
let canRentACar = false;

// Your code here:

function driver(name,license,licenseYear,accidentsCount,bonus){
  this.name = name;
  this.license = license;
  this.licenseYear = licenseYear;
  this.accidentsCount = accidentsCount;
  this.bonus = bonus;
}
const conductorA = new driver('Dom','Toto','B',2004,0,0.7);

const result = {
  if(driver.licenseYear<2015 && (driver.accidentsCount = 0 || driver.bonus > 0.7){
    canRentACar = true;
  }
  else {
    canRentACar = false;
  }
};

result(conductorA);
