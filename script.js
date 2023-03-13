// Assignment Code
var generateBtn = document.querySelector("#generate");
//pulled password  id from html

// Write password to the #password input
// step 1 determine what needs in the password generator(lowercase, uppercase, numeric, and/or special characters)
const alpha =("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
const Number=" 0123456789";
const symbols ="!@#$%^&*(()_-=+:'><,.?/"

// step 2 add the variables
const passwordText=document.getElementById("password");
const length=document.getElementById("length")
const myNumber=document.getElementById("numbers")
const passwordSymbols=document.getElementById("symbols")
const passwordletters=document.getElementById("letters")

//var password=document.getElementById("password")
var generateBtn=document.getElementById("generate")

console.log()


// make function to generate 
function generatePassword(passwordLength, chars){
  let passwordStr = "";

  for (let i = 0; i < passwordLength; i++){
    let randomNumer = Math.floor(Math.random() * chars.length);
    passwordStr += chars.substring(randomNumer, randomNumer + 1)
  }
  console.log(passwordStr);
   return passwordStr;
}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  let characters = myNumber.value + passwordSymbols.value + passwordletters.value;
  passwordText.value = generatePassword(length.value, characters);
});


