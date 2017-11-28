/* Implement a fizzBuzz function as such: `fizzBuzz(list)`,
where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:
   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.

   YOU MUST USE array.map
*/

function fizzBuzz(element) {
  let newElement;
  if (element % 3 === 0 && element % 5 === 0){
    newElement = "FizzBuzz";
  } else if (element % 3 === 0){
    newElement = "Fizz";
  } else if (element % 5 === 0){
    newElement = "Buzz";
  } else {
    newElement = element;
  }
  return newElement;
}

function map(array, fn){
  const myArray = [];
  for (let i=0; i<array.length; i++){
    myArray[i] = fn(array[i]);
  }
  return myArray;
}

const fizzbuzzList = map([1, 2, 3, 4, 5, 6], fizzBuzz);


module.exports = fizzBuzz;
