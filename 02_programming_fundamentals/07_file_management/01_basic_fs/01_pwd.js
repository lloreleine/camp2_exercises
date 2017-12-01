const path = require("path");

// Add a function `pwd` which takes no arguments and return the current folder name we are in
//
// Example
//
// pwd() # => "/Users/john/Workspace/my_folder"

function pwd(){
  const directory = ".";
  return path.resolve(directory);
}

module.exports = pwd
