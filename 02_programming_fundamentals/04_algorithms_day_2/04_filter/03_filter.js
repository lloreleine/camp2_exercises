// filter takes an array of integer and a function of filtering
// by using an higher order function
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]


function pickEvenNumbers(number){
  return (number % 2 === 0 && number !== 0);
}

function filter(array, fn) {
  for(let i=0; i<array.length; i++){
    newArray.push(array[i]);
  }
  return fn(array);
}

const newArray=[].filter(pickEvenNumbers);


filter([1, 2, 3, 4, 5], pickEvenNumbers);

// do not remove this line, it is for tests
module.exports = filter;
