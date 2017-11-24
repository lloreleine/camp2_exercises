// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]
function filter(array, str) {
  // Your code here
  const newArray=[];
  if(str === "even"){
    for(let i=0; i<array.length; i++){
      if(array[i] % 2 === 0 && array[i] !== 0){
        newArray.push(array[i]);
      }
    }
  }
  else if(str === "odd"){
    for(let i=0; i<array.length; i++){
      if(array[i] % 2 !== 0 || array[i] !== 0){
        newArray.push(array[i]);
      }
    }
  } return newArray;
}


filter([1, 2, 3, 4, 5], "even");

// do not remove this line, it is for tests
module.exports = filter;
