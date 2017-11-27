// filter takes an array of integer and a function of filtering
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
const newArray=[];

function pickEvenNumbers(array){
  for(let i=0; i<array.length; i++){
    if(array[i] % 2 === 0 && array[i] !== 0){
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function filter(array, fn) {
  return fn(array);
}

filter([1, 2, 3, 4, 5], pickEvenNumbers);

// do not remove this line, it is for tests
module.exports = filter;
