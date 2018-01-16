// Your task is to implement a function decodeMorse(morseCode),
// that would take the morse code as input and return
// a decoded human-readable string.
//
// For example:
//
// decodeMorse(".... . -.--   .--- ..- -.. .") === "HEY JUDE";

// Here is the array of each letter in morse code
const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9"
};

function decodeMorse(morse) {
  let splitWord = morse.split("   ");
  let sentence = splitWord.map(translateWord).join(" ");
  // translateWord('.... . -.--') // 'HEY'
  // translateWord('.--- ..- -.. .') // 'JUDE'

  function translateWord(word){
    return word.split(" ").map(letter => MORSE_CODE[letter]).join("");
  }
  return sentence;
}

decodeMorse(".... . -.--   .--- ..- -.. .");
//should return "HEY JUDE"



// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = decodeMorse;
