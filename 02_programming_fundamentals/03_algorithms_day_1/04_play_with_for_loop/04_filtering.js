// ## Iteration on arrays with filter
//
// -  Create an array called `litteralDigits` from `zero` to `nine` where each array entry is a spelled-out number;
const litteralDigits = ["zero","one","two","three","four","five","six","seven","eight","nine"];
// -  Using `length`, write on `stdout` each odd values of the table.

for (let i = 1;i<litteralDigits.length; i+=2){
  console.log(litteralDigits[i]);
}
