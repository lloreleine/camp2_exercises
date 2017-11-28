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

function squareDigits(number) {
  let intToStr = number.toString();
  let separatedNumbers=[];
  for (let i=0; i<intToStr.length; i++){
    separatedNumbers.push[intToStr.substr(i, 1)];
  }
  return separatedNumbers;
}

squareDigits(9);
squareDigits(9129);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;











function isolateNum(number){
  let intToStr = number.toString();
  let separatedNumbers;
  let strToInt = parseInt(separatedNumbers, 10);
  for (let i=0; i<intToStr.length; i++){
    separatedNumbers = intToStr.substr(i, 1);
    console.log(strToInt);
  }
  return console.log(strToInt*strToInt);
}

function squareDigits(fullNum, func){
  let result = func(fullNum);
  return console.log(result);
}

squareDigits(567, isolateNum);
