// Your task is to create a function that will sort
// every number contained in a given array.
//
// For example:
//
// sort([24, 7, 9, 72, -8]) === [-8, 7, 9, 24, 72]
//
// Note: You should not use Array.sort()

function sort(unsortedArray) {
  let newArray = unsortedArray.map(sortNumbers);

  function sortNumbers(numberOne, numberTwo){
    let numberOne = unsortedArray[i];
    let numberTwo = unsortedArray[i+1];
    let diffNumbers = numberOne - numberTwo;
    for(let i=0; i<unsortedArray.length; i++){
      if(diffNumbers<0){
        numberOne[i]<numberTwo[i];
        newArray.push(numberOne);
      }
      else if(diffNumbers>0){
        numberOne[i]>numberTwo[i];
        newArray.push(numberTwo);
      }
    }
  }
}

sort([24, 7, 9, 72, -8]);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = sort;
