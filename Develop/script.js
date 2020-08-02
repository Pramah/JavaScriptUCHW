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
  var randomPassword = ''; 
  var strUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var strLower = 'abcdefghijklmnopqrstuvwxyz';
  var num = '0123456789';
  var splChar = '!@$%^&*()#';
  var pwdRule = '';

//Presenting a series of prompts for Password Criteria in the function
function generatePassword(){

  var pwdLength = prompt("What should be the length of your password?");
  if(pwdLength <=7 || pwdLength >= 128){
    alert("Minimum Password Length: 8 and Maximum Password Length: 128");
    return;
  }
  
  var splCharacters = confirm("Do you want special characters like & $ * in your password?");
  var upperCase = confirm("Do you want capital letters in your password?");
  var lowerCase = confirm("Do you want small letters in your password?");
  var numeric = confirm("Do you want numbers in your password?");
  
  //Generating the password based on the rules set by the user
  for (var i = 0; i < pwdLength; i++) { 
    
    if (lowerCase) {
      pwdRule += strLower;
    }
    if (upperCase) {
        pwdRule += strUpper;
    }
    if (numeric) {
        pwdRule += num;
    }
    if (splCharacters) {
        pwdRule += splChar;
    } 
    randomPassword += pwdRule.charAt(Math.floor(Math.random() * pwdRule.length + 1));
    console.log(randomPassword);
  }
  return randomPassword;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
