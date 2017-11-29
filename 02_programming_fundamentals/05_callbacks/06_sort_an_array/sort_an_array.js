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

  function sortNumbers(number){
    let minNumber;
    for(let i=0; i<number.length; i++){
      if(number[i]<=0){

      }
      newArray.push(minNumber);
    }
  return newArray;
}


sort([24, 7, 9, 72, -8]);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = sort;
