// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Declaring all the variables needed in the function
var pwdLength = "";
var splCharacters;
var upperCase;
var lowerCase;
var numeric;

//Presenting a series of prompts for Password Criteria in the function

function generatePassword(){
  var pwdLength = prompt("What should be the length of your password?");
  if(pwdLength <=7 || pwdLength >= 128){
    alert("Minimum Password Length: 8 and Maximum Password Length: 128");
  }
  else{
  var splCharacters = confirm("Do you want special characters like & $ * in your password?");
  var upperCase = confirm("Do you want capital letters in your password?");
  var lowerCase = confirm("Do you want small letters in your password?");
  var numeric = confirm("Do you want numbers in your password?");
  }
  
  var randomPassword = ''; 
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'; 
  for (var i = 0; i < pwdLength; i++) { 
    var char = Math.floor(Math.random() * str.length + 1);
    randomPassword += str.charAt(char);
    console.log(randomPassword);
  }
  return randomPassword;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
