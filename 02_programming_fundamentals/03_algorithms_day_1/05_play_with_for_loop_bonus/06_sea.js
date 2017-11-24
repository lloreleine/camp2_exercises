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

for (let j=0; j<10; j++){
  let tild = "~";
  let fish = "0";
  let boat = "X";

  let sea = [];
  for(let i=0; i<30; i++){
    if(i===25 && j===2 || i===7 && j===9){
      sea.push(boat);
    }else if(i===6 && j===4 || i===18 && j===7){
      sea.push(fish);
    }else{
      sea.push(tild);
    }}
  console.log(sea.join(""));
}
