// A factorial is the multiplication of a number
// by all numbers
// preceding it until 1.
// For instance, fact(5) = 5 * 4 * 3 * 2 * 1 = 120
// It does not work for negative numbers and
// your function should return `null` if tried
// with a negative number or
// with something else than a number.
//
// Remember that you can call `fact` inside of itself


function fact(n) {
  let resultFactorial;
  if(n<0){
    return "null";
  } else if (n===1){
    return 1;
  } else{
    resultFactorial = (n * fact(n-1));
    return resultFactorial;
  }
}

fact(5);


// do not remove this line, it is for tests
module.exports = fact;
