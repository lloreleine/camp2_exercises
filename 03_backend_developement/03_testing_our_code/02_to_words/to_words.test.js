const toWords = require("./to_words");

test("check array well received", () => {
  expect(toWords.toWords("I'm okay")).toEqual(["I'm","okay"]);
});

test("check empty string", () => {
  expect(toWords.toWords("")).toEqual([]);
});

test("check error", () => {
  expect(toWords.toWords("I check; I win")).toEqual(["I","check","I","win"]);
});
