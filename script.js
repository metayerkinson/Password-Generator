var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//set up password criteria
const Numbers=" 0123456789"
const Letters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const Symbols="!@#$%^&*(()_-=+:'><,.?/~`,.|\/?:;-+"

//2. started targeting elements in html  citation "(Build a Configurable Random Password Generator With JavaScript. (n.d.). Web Design Envato Tuts+. Retrieved March 13, 2023, from https://webdesign.tutsplus.com/tutorials/build-a-configurable-random-password-generator-with-javascript--cms-93262)'
const passwordText=document.getElementById("password");
const length=document.getElementById("length")
const myNumber=document.getElementById("numbers")
const passwordSymbols=document.getElementById("symbols")




function writePassword() {
  var password = generatePassword("writePassword");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// created the window propmt    citation->  "Window.prompt() - Web APIs | MDN. (n.d.). Developer.mozilla.org. Retrieved March 13, 2023, from https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt



var sign =prompt("Click OK to select your password criteria!")
prompt("Do you want to use Symbols?")
prompt("Do you want to use Numbers?")
prompt("Do you want to use Upercase Letters?")
prompt("Do you want to use Lowercase Letters?")





// 1. define password criteria/ 
//lowercase, uppercase, numeric, and/or special characters WHEN I answer each prompt
//length of at least 8 characters and no more than 128 characters

//2.input should be validated and at least one character type should be selected
//3.either displayed in an alert or written to the page

//3.presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password