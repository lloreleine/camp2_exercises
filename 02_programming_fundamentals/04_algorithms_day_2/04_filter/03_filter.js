// filter takes an array of integer and a function of filtering
// by using an higher order function
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]

function pickEvenNumbers(number){
  return (number % 2 === 0 && number !== 0);
}


const filter = [1, 2, 10, 20, 35, 50].filter(pickEvenNumbers);
console.log(filter);

// do not remove this line, it is for tests
module.exports = filter;
