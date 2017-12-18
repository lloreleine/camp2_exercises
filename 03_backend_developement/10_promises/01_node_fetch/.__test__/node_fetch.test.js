require("sepia");
const myFunctionRequest = require("../node_fetch");

// myFunctionRequest = variable fetchProductById (exportée dans module.exports)
// cette variable en appelé en tant que fonction avec ();

test("function fetchProductById should return brand name", () => {
  expect.assertions(1);

  return myFunctionRequest("efe288cb-fb63-4b23-b8df-529f04b8b02b").then(brand => {
    expect(brand).toBe("QUECHUA");
  });
});
