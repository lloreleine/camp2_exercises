require("sepia");

const myFunctions = require("../fetch_open_weather");


test("function weatherByLatitudeAndLongitude should return Temperature", () =>{
  expect.assertions(1);

  return myFunctions.weatherByLatitudeAndLongitude(32.661343,51.680374).then(temp =>{
    expect(temp).toBeGreaterThanOrEqual(4);
  });
});

test("function weatherByCityName should return Temperature", () =>{
  expect.assertions(1);

  return myFunctions.weatherByCityName("Paris").then(temp =>{
    expect(temp).toBeGreaterThanOrEqual(4);
  });
});

// describe ("My functions should return temperatures", () => {
//   test("function weatherByLatitudeAndLongitude should return Temperature", () =>{
//     expect.assertions(1);
//     return myFunctions.weatherByLatitudeAndLongitude(32.661343,51.680374).then(temp =>{
//       expect(temp).toBeGreaterThanOrEqual(4);
//     });
//   });
//   test("function weatherByCityName should return Temperature", () =>{
//     expect.assertions(1);
//     return myFunctions.weatherByCityName("Paris").then(temp =>{
//       expect(temp).toBeGreaterThanOrEqual(4);
//     });
//   });
// })
