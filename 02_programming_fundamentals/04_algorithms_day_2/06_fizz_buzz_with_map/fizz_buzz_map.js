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

function fizzBuzz(number){
  let newElement;
  if(number % 3 && number % 5){
    newElement === "FizzBuzz";
  } else if (number % 3){
    newElement === "Fizz";
  } else if (number % 5){
    newElement === "Buzz";
  } else {
    newElement = number;
  }
  return newElement;
}

function map(array, fn){
  let newArray = [];
  for (let i=0; i<array.length; i++){
    newArray[i]=fn(array[i]);
  }
  return newArray;
}

const fizzbuzzList = map([1, 2, 3, 4, 5, 6], fizzBuzz);


module.exports = fizzBuzz;
