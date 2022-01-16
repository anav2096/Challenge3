// Assignment code here

// Get references to the #generate element - send all info to this variable?

var pWLength = parseInt(window.prompt("How many characters in your passoword?","0",  10));
console.log(pWLength);

var lengthArray = [];
lengthArray.length = (pWLength);
console.log(lengthArray.length);
console.log(lengthArray); 

var promptNumeric = window.prompt("Inlcude numbers?");
var promptUppercase = window.prompt("Inlcude uppercase letters?");
var promptLowercase = window.prompt("Inlcude lowercase letters?");
var promptSpec = window.prompt("Inlcude special characters?");




  var numericChars = function(){

    numFill = Math.floor(Math.random() * 9) + 1;
    
    return numFill;
  }

  var upperChars = function(){

    capFill = String.fromCharCode(65+Math.floor(Math.random() * 26));
    
    return capFill;
  }

  var lowerChars = function(){

    lowFill = String.fromCharCode(97+Math.floor(Math.random() * 26));
    
    return lowFill;
  }

  var specChars = function(){

     var specFill = ["!","@","#","$","%","^","&","*",];
    specRandom = specFill[Math.floor(Math.random() * specFill.length)];
    return specRandom;
  }
  debugger;
  var generate = function(){

    var iteratorOut = [
      numericChars(),
      upperChars(),
      lowerChars(),
      specChars(),
    ];
    randomCharacter = iteratorOut[Math.floor(Math.random() * iteratorOut.length)];
    return randomCharacter;
  
  }


  var iterator = function(){
  
  for (let i=0; i < lengthArray.length; i++)
  lengthArray [i] = generate();

}

if (promptNumeric && promptUppercase && promptLowercase && promptSpec){

var generate = function(){

  var iteratorOut = [
    numericChars(),
    upperChars(),
    lowerChars(),
    specChars(),
  ];
  randomCharacter = iteratorOut[Math.floor(Math.random() * iteratorOut.length)];
  return randomCharacter;

}
}


else if (promptNumeric && promptUppercase && promptLowercase && !specChars){

var generate = function(){

  var iteratorOut = [
    numericChars(),
    upperChars(),
    lowerChars(),
  ];
  randomCharacter = iteratorOut[Math.floor(Math.random() * iteratorOut.length)];
  return randomCharacter;

}
}

else if (promptNumeric && promptUppercase && !promptLowercase && !promptSpec){

var generate = function(){

  var iteratorOut = [
    numericChars(),
    upperChars(),
   
  ];
  randomCharacter = iteratorOut[Math.floor(Math.random() * iteratorOut.length)];
  return randomCharacter;
}
}

else if (promptNumeric && !promptUppercase && !promptLowercase && !promptSpec){

  var generate = function(){
  
    var iteratorOut = [
      numericChars(),
      ];
    randomCharacter = iteratorOut[Math.floor(Math.random() * iteratorOut.length)];
    return randomCharacter;
  
  }
}


{
  iterator();
  }

  const passString = [lengthArray];
  
  console.log(lengthArray.join(' '));




/*Can I make these functions instead and return a value, put the  return values in a new array
BOOLEAN if A and B are true run F1 and then F2...cycles in order, how to randomize? Could have all functions
serve to an array simultaneously and then select at random to fill the array. 



/*use Boolean test for each input option, then iteratively fill the array with the random char gen fns. Need to
store the results as a variable and make an if tree to determine which set of fill variables to call.
Set variables for each iterative fill condition and combine them (maybe if then statement?) based on user inputs.
Conditions: only lowercase, only uppercase, only numbers, only specials, lower and upper, lower and number, its 
too many, how to condense the options?*/







var generateBtn = document.querySelector("#generate");


// Write password to the #password input- this is the function to generate, do I pass values from #generate?

function writePassword() {
  var password = lengthArray.join(' ');
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
