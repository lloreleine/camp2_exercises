//  Function fixed
function go(options) {
  let {
    speed = 4,
    enable: { hyperdrive = false, frobnifier = true } = {}
  } = options;

  console.log("speed=", speed, "hyperdrive:", hyperdrive, "frobnifier:", frobnifier);
}

go({ speed: 5 });

// Fonction de base
function go(options) {
  let {
    speed = 4,
    enable: { hyperdrive = false, frobnifier = true }
  } = options;
}

// Equivaut à :
function go(options) {
  let speed = options.speed;
  let hyperdrive = options.enable.hyperdrive;
  let frobnifier = options.enable.frobnifier;
}


// Fonction de base
function lastIndexOf(arr, elt, start = arr.length) {
  for (let i = start - 1; i >= 0; i--) {
    if (arr[i] === elt) {
      return i;
    }
  }

  return -1;
}

console.log(lastIndexOf([1, 2, 1, 2], 2));


// Fonction corrigée

function lastIndexOf(arr, elt, start = arr.length - 1) {
  for (let i = start - 1; i >= 0; i--) {
    if (arr[i] === elt) {
      return i;
    }
  }

  return -1;
}

console.log(lastIndexOf([1, 2, 1, 2], 2));



//  Initial Function
function replace(array, from, to, elements) {
  array.splice.apply(array, [from, to - from].concat(elements));
}

let testArray = [1, 2, 100, 100, 6];
replace(testArray, 2, 4, [3, 4, 5]);
console.log(testArray);

//  Function fixed
function replace(array, from, to, elements) {
  array.splice(from, to - from, ...elements);
}

let testArray = [1, 2, 100, 100, 6];
replace(testArray, 2, 4, [3, 4, 5]);
console.log(testArray);

function copyReplace(array, from, to, elements) {
  const head = array.slice(0, from);
  const tail = array.slice(to);

  return [...head, ...elements, ...tail];
}

console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]));



const myFirstArray = [1, 2, 3];
const mySecondArray = [4, 5, 6];

const myUltimateArray = [...myFirstArray, ...mySecondArray];




function copyReplace(array, from, to, elements) {
  return array.slice(0, from).concat(elements).concat(array.slice(to));
}

console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]));


module.exports = {
  go: go
};
