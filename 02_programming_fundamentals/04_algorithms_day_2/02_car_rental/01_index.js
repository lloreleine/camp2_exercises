const driver = {
  driverLicense: "B1",
  licenseIssued: new Date().getFullYear() - 10, // 10 years old license
  numberOfAccident: 0,
  bonus: 0.8,
};

// Write a function canRentACar:
// * Input: a driver
// * Output: a boolean if the driver can rent a car

function canRentACar(conductor){
  if((conductor.driverLicense >= "B" || conductor.driverLicense === "B1")
  && conductor.licenceIssued <= 2015
  && (conductor.numberOfAccident === 0 || conductor.bonus >= 0.7)){
    return true;
  }
  else{
    return false;
  }
}

canRentACar(driver);

// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = canRentACar
