/* scramble!

Write a function that does these things to a string:
- sort each word (anything with only numbers or letters, separated by spaces)
- reverse chunks (anything between two punctuation marks, a new line or the beginning/end of the string)
- preserve formatting (leave tabs and newlines in place);

*/

const thirdArg = `a list of drinks:
  - milk
  - sugar free coke
  - soy sauce`;
const thirdExpected = `diknrs fo ilst a:
  - iklm
  - ceko eefr agrsu
  - acesu osy`;

const scrambleTests = [
  { name: 'first', args: ['the road works.'], expected: 'korsw ador eht.' },
  { name: 'second', args: ["name: 'second'"], expected: "aemn: 'cednos'" },
  { name: 'third', args: [thirdArg], expected: thirdExpected },
];
function scramble(str) {
  // write me!
  {
    var scrambled = '',
    src = str.split(''),
    randomNum;
  
 while (src.length > 1)
 {
    randomNum = Math.floor(Math.random() * src.length);
    scrambled += src[randomNum];
    src.splice(randomNum, 1);
 }
   scrambled += src[0];
   return scrambled;
}  
}
evaluate(scramble, scrambleTests);


function scrambleHandler() {

  // read and process user input (this works, no need to change it!)
  const toScramble = document.getElementById('scramble-input').value;

  // pass user input through core logic (this works! no need to change it)
  const scrambled = scramble(toScramble);

  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById('scramble-output');
  outputField.innerHTML = scrambled;

  console.log('\n--- scrambleHandler ---');
  console.log('toScramble:', typeof toScramble, ',', toScramble);
  console.log('scrambled:', typeof scrambled, ',', scrambled);
};
const scrambleButton = document.getElementById('scramble-button');
scrambleButton.addEventListener('click', scrambleHandler);
