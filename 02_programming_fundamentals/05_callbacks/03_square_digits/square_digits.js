// Your task is to square **EACH** digit of a number
// via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number
// but the square of each digits
// Note: The function accepts an integer
// and returns an integer

// function squareDigits(number) {
//   let intToStr = number.toString();
//   let squaredNumbers;
//   for (let i=0; i<intToStr.length; i++){
//     let strToInt = parseInt(intToStr[i], 10);
//     squaredNumbers = strToInt*strToInt;
//   }
//   return squaredNumbers;
// }

function squareDigits(number){
  let intToStr = number.toString();
  return parseInt(intToStr.split("").map(num => num*num).join(""), 10);
}

squareDigits(9);
squareDigits(9129);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;
