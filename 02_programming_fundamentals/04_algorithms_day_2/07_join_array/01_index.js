// Write a function `joinArray` and implement it using `reduce`:
// * Input: an array AND a string separator
// * Output: a string with each elements separated by
// the `separator`
//
// eg: join(["zero", "one", "two"], "-") => "zero - one - two"

function joinArray(array, separator){
  const joinedString = array.reduce(
    function(acc, elem) {
      return acc + separator + elem;
    }
  );

  return joinedString;
}

joinArray(["A", "B", "C"], " ~ ");

/* Ecriture simplifiée :
function joinArray(array, separator){
  return array.reduce((acc, elem) =>
    acc + separator + elem);
}
*/

let myArray =[1, 5, 5];

let myNewArray = myArray.reduce(function(acc, elem){
  return acc+elem+" ";
}, 1);

console.log(myNewArray);

let array2 = myArray.reduce(function(acc, elem){
  return acc+elem;
},1);

let array3 = myArray.reduce(function(acc, elem){
  return acc+elem;
},0);

let array4 = myArray.reduce(function(acc, elem){
  return acc+elem;
});



// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = joinArray;
