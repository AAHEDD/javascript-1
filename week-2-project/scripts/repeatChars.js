/* repeat charecters

write a function that repeats the charecters in a string according to these rules:
- letters are doubled
- numbers are tripled
- anything else is quadrupled

*/

const repeatCharsTests = [
  { name: 'first', args: ['abc'], expected: 'aabbcc' },
  { name: 'second', args: ['123'], expected: '111222333' },
  { name: 'third', args: ['%-*>'], expected: '%%%%----****>>>>' },
  { name: 'fourth', args: ['h3LL0 W@r!|)'], expected: 'hh333LLLL000 WW@@@@rr!!!!||||))))' },
  { name: 'fifth', args: ['{:-<*>-:}'], expected: '{{{{::::----<<<<****>>>>----::::}}}}' },
  { name: 'sixth', args: [''], expected: '' },
  { name: 'seventh', args: [' '], expected: '    ' },
];




function repeatChars(str) {
  // write this!
    let letters = /[A-Za-z]/;
    let repeated = '',
    src = str.split(''),
    ctr1 = '';
    let splChars = "^*|,\":<>[]{}`\';()@&$#%\\\/";

    
    for (var x = 0; x < src.length; x++) {
     

                          if(src[x].match(letters))
                        {
                          for (var y = 0; y < 3; y++) {
                            ctr1 += src[x];
                          }
                        }
                      else
                      if (splChars.indexOf(src[x] ) != -1) {
                        for (var z = 0; z < 4; z++) {
                          ctr1 += src[x];
                        }
                      } else if (!isNaN(src[x])){
                        for (var y = 0; y < 2; y++) {
                          ctr1 += src[x];
                        }
                      }
           
            
      repeated += ctr1;
      ctr1 = '';
    }
  
 
   return repeated;
  
}
evaluate(repeatChars, repeatCharsTests);



function repeatCharsHandler() {

  // read and process user input (this works, no need to change it!)
  const stringInput = document.getElementById('repeatChars-input').value;

  // pass user input through core logic (this works!  no need to change it)
  const repeatCharsed = repeatChars(stringInput);

  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById('repeatChars-output');
  outputField.innerHTML = repeatCharsed;

  console.log('\n--- repeatCharsHandler ---');
  console.log('stringInput:', typeof stringInput, ',', stringInput);
  console.log('repeatCharsed:', typeof repeatCharsed, ',', repeatCharsed);
};
const repeatCharsButton = document.getElementById('repeatChars-button');
repeatCharsButton.addEventListener('click', repeatCharsHandler);
