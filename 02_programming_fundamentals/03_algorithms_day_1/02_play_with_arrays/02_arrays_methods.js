/*
 ## Use some methods
 */
// Rewrite your array `digits` using `push`;

const digits = [];
digits.push(0);
digits.push(1);
digits.push(2);
digits.push(3);
digits.push(4);
digits.push(5);
digits.push(6);
digits.push(7);
digits.push(8);
digits.push(9);

/* Ecritures alternatives du push :

digits.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

ou

for (let i=0; i<10, i++){
  digits.push(i);
}
*/

// rewrite your variable `last` using `length`;

const last = digits[digits.length-1];
// create another array called `litteralDigits` from `zero` to `nine` where each array entry is a spelled-out number;

const litteralDigits = ["zero","one","two","three","four","five","six","seven","eight","nine"];
// use `join` to create, into the variable `allDigits`, a string like this : `zero - one ...`.

const allDigits = litteralDigits.join(" - ");
