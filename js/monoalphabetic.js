key=document.getElementById('enteredKey').value;
plaintext = document.getElementById('inputMessage').value;
const substitutionTable = {
  'a': 'x',
  'b': 'n',
  'c': 'y',
  'd': 'a',
  'e': 'h',
  'f': 'p',
  'g': 'o',
  'h': 'g',
  'i': 'z',
  'j': 'q',
  'k': 'w',
  'l': 'b',
  'm': 't',
  'n': 's',
  'o': 'f',
  'p': 'l',
  'q': 'r',
  'r': 'c',
  's': 'v',
  't': 'm',
  'u': 'u',
  'v': 'e',
  'w': 'k',
  'x': 'j',
  'y': 'd',
  'z': 'i',
};

// Encode a plaintext message
function encode(plaintext) {
  let ciphertext = '';
  for (let i = 0; i < plaintext.length; i++) {
    const letter = plaintext[i].toLowerCase();
    const substitution = substitutionTable[letter];
    if (substitution) {
      ciphertext += substitution;
    } else {
      ciphertext += letter;
    }
  }
  return ciphertext;
}

// Decode a ciphertext message
function decode(plaintext) {
  let plain = '';
  for (let i = 0; i < plaintext.length; i++) {
    const letter = plaintext[i].toLowerCase();
    let substitution = '';
    for (const key in substitutionTable) {
      if (substitutionTable[key] === letter) {
        substitution = key;
        break;
      }
    }
    if (substitution) {
      plain += substitution;
    } else {
      plain += letter;
    }
  }
  return plain;
}



  // gets the message and key entered by user and ciphers it
  function cipherFunction(){

    var plaintext =document.getElementById("inputMessage").value;
  
    
  
      var result = encode(plaintext);
      document.getElementById("result").value = result;
    
    }
    
    // gets the message and key entered by user and deciphers it
    function decipherFunction(){
     var plaintext =document.getElementById("inputMessage").value;
  
  
      var result = decode(plaintext);
      document.getElementById("result").value = result;
    }