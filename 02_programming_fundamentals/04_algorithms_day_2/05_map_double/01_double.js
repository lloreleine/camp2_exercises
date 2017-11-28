// Create a function `double` which take an array of integer
// as parameter and return a new array with all values doubled.
// WARNING: You're not allowed to use `Array.map`!

// Your code here...
function double(array){
  for (let i=0; i<array.length; i++){
    array[i]*=2;
  }
  return array;
}

const doubleArray = double([1, 2, 3, 4]);
// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = double;
