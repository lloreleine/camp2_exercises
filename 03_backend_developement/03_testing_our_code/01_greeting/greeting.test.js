const greeting = require("./greeting");

test("display the user name", () => {
  expect(greeting.greet("Loreleine")).toBe("Hello LORELEINE!");
});

test("display World if no name", () => {
  expect(greeting.greet("")).toBe("Hello WORLD!");
});
