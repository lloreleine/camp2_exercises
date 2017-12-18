require("sepia");
const myFunctionRequest = require("../fetch_temp_by_googleplaces");

// myFunctionRequest = fetchProductById(); (fonction exportée dans module.exports)

test("function getTempByLocation should return a Temperature", () => {
  expect.assertions(1);

  return myFunctionRequest("decathlon Campus").then(temp => {
    expect(temp).toBeGreaterThanOrEqual(3);
  });
});
