const spread =  require("../02_spread_destructuring.js");

test("fct go should show all options when called without parameter", () => {
  spread.go();

  expect(spread.go.speed).toEqual(4);
  expect(spread.go.hyperdrive).toBe("false");
});

test("fct go should show all options with speed modified", () => {
  spread.go({ speed: 5 });

  expect(spread.go.speed).toEqual(5);
  expect(spread.go.hyperdrive).toBe("false");
});
