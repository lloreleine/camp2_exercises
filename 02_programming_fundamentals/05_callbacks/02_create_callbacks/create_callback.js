

// A function that takes two parameters, this first one
// being an object like below
// and the second one being a callback function.
const log = (text) => console.log(text);

const getInput = (objectGrep, func) => {
  func(objectGrep.key);
  // When finished, we want to log the key params...
};

getInput({user: "Lorem", key: "arrow_up"}, log);
