var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//set up password criteria
const Numbers="0123456789"
const Lowercase="abcdefghijklmnopqrstuvwxyz"
const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const Symbols="!@#$%^&*(()_-=+:'><,.?/~`,.|\/?:;-+"


const passwordText=document.getElementById("password");

function generatePassword(){

  //******remove documented elements after guidance from a tutor.*******

  // created the window prompt for users to choose and confirm their password criteria// 


  // window prompt//
var length= Number(window.prompt("Enter your password Length between 8 and 128 characters "))

// prompt user to comfirm their choice 
var useUppercase= window.confirm("Do you want to use Upercase letters?")
var useLowercase= window.confirm("Do you want to use Lowercase letters?")
var useNumbers= window.confirm("Do you want to use Numbers?")
var useSymbols= window.confirm("Do you want to use Symbols letters?")


// if statement ( conditions for user to use inorder to select how they want to set up their password )
let usedCharacters = ''

if (useUppercase) {
  usedCharacters += Uppercase
}
if (useLowercase) {
  usedCharacters += Lowercase

  
}

// if statement for  numbers and Symbols
if (useNumbers){usedCharacters += Numbers}

if (useSymbols){usedCharacters += Symbols}


// declaring random character, symbols and numbers  and for loop
let usedCharsLength = usedCharacters.length
let finalPassword = ''
for (let index = 0; index < length; index++) {
  
  let n = Math.floor(Math.random() * usedCharsLength)
  let char = usedCharacters[n]
  finalPassword += char
  
}

console.log({finalPassword})

  return finalPassword
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// citations
//Loops and iteration - JavaScript | MDN. (2023, February 21). https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement

//if. . .else - JavaScript | MDN. (2023, February 21). https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if. . .else

//Window.prompt() - Web APIs | MDN. (2023, February 23). https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
