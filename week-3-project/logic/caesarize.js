/* Caesar Cipher

  this is a simple encoding algorithm that replaces letters in a message with a new letter

  the new letter is determined by shifting N spaces across the alphabet

  for example, caesarize("A", 3) will return : "D"
  because "D" is three letters past "A".
*/


const caesarizeTests = [
  { name: 'first', args: ["aBcD", 3], expected: 'dEfG' },
  { name: 'second', args: ["aBcD", -3], expected: 'xYzA' },
  { name: 'third', args: ["heLLo worLd!", 0], expected: 'heLLo worLd!' },
  { name: 'fourth', args: ["heLLo worLd!", 1], expected: 'ifMMp xpsMe!' },
  { name: 'fifth', args: ["", 5], expected: '' },
  { name: 'sixth', args: ["mnOpQr", 26], expected: 'mnOpQr' },
  { name: 'seventh', args: ["#@&&^F*(#", 7], expected: '#@&&^L*(#' },
];
function caesarize(str, shiftNum) {
  // write me!

          let src = str.split(''), ctr1 = '' ;
          let splChars = "^*|,\":<>[]{}`\';()@&$#%\\\/";
          let letters = /[A-Za-z]/;
          let space= " ";
          let encrypted = '' ;
          let result = '';
          let charcode = 0;
  
        for (var x = 0; x < src.length; x++) 
            {
  
               if(src[x]=== space) {
              
                ctr1 = ' ';
                
              
               }
  
              else if(src[x].match(letters))
              {
                if (src[x] == src[x].toUpperCase()) {
                  ctr1 = src[x].toLowerCase();
                 }
                 else if(src[x] == src[x].toLowerCase()){
                  ctr1 = src[x].toUpperCase();
                 }
  
              }
  
            else if (splChars.indexOf(src[x] ) != -1) {
                
                ctr1 = ' ';
  
            } 
  
            else if(!isNaN(src[x])) {
              
                
                ctr1 = ' ';
              
            }
  
            result += ctr1;
              ctr1 = '';
  
            }
            
            for (var z = 0; z < result.length; z++) {
              if (result[z].match(letters)){
                charcode = result[z].charCodeAt() + shiftNum;
                
                encrypted += String.fromCharCode(charcode);
                  
                  
                  
              } else if (result[z] == ' ') {
                encrypted += ' ';
                
              }
            }
            
              
           return encrypted;
  }

evaluate(caesarize, caesarizeTests);
