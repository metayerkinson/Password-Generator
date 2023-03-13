var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//set up password criteria
const Numbers=" 0123456789"
const Letters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const Symbols="!@#$%^&*(()_-=+:'><,.?/"


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// 1. define password criteria/ 
//lowercase, uppercase, numeric, and/or special characters WHEN I answer each prompt
//length of at least 8 characters and no more than 128 characters

//2.input should be validated and at least one character type should be selected
//3.either displayed in an alert or written to the page

//3.presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password