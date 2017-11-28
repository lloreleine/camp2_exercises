// You have to write a function pattern which
// returns the following Patter
// (See Pattern & Examples) up to n number of rows.
//
// *Note: Returning the pattern is not the same as
// Printing the pattern.*
//
// If n < 1 then it should return "" i.e. empty string.
//
// There are no whitespaces in the pattern
// other than the line breaks.
//
// * Hint: Use `\n` in string to jump to next line
// * Hint: `" abc\n ".trim()` will return `"abc"`
//
// ## Examples
//
// ```
// pattern(5)
// 1
// 22
// 333
// 4444
// 55555
//
// pattern(4)
// 1
// 22
// 333
// 4444


function pattern(size) {
  if(size<1){
    return "";
  } else {
    let numReturned = "";
    for (let i=1; i<=size; i++){
      for (let j=1; j<i; j++){
        numReturned = numReturned+j;
      }
    } return numReturned.trim();
  }
}

pattern(5);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = pattern;
