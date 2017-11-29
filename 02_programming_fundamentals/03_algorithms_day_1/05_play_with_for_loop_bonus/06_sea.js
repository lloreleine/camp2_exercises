// # The sea with some whirlpools (30 by 9)
// And to spice things up,
//add an X at the positions 25:2 and 7:9
//and a 0 at the positions 6:4 and 18:7
//
// ```
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~X~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~0~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~0~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~X~~~~~~~~~~~~~~~~~~~~~~~
// ```

for (let j=0; j<9; j++){
  let tild = "~";
  let fish = "0";
  let boat = "X";

  let sea = [];
  for(let i=0; i<30; i++){
    if(i===24 && j===1 || i===6 && j===8){
      sea.push(boat);
    }else if(i===5 && j===3 || i===17 && j===6){
      sea.push(fish);
    }else{
      sea.push(tild);
    }}
  console.log(sea.join(""));
}
