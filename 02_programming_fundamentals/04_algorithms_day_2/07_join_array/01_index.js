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

/* Ecriture simplifiée :
function joinArray(array, separator){
  return array.reduce((acc, elem) =>
    acc + separator + elem);
}
*/



// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = joinArray;
