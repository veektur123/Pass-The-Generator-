// Assignment Code
var generateBtn = document.querySelector("#generate");

function getPasswordLength() {
  var passwordLength = window.prompt("Choose a password length between 8 and 128 characters")
  var parsedPasswordLength = parseInt(passwordLength)
  if (isNaN(parsedPasswordLength)) {
    window.alert("Input is not a number.")
    getPasswordLength()
  }
  var isPasswordTooLong = parsedPasswordLength > 128
  var isPasswordTooShort = parsedPasswordLength < 8
  if (isPasswordTooLong || isPasswordTooShort){
    window.alert("Password is NOT between 8 and 128 characters.")
    getPasswordLength()
  }
  return parsedPasswordLength
}
function getCharacterTypes() {
  var wantsLowercase = window.confirm("Click OK if you'd like lowercase letters in your password")
  var wantsUppercase = window.confirm("Click OK if you'd like uppercase letters in your password")
  var wantsNumbers = window.confirm("Click OK if you'd like numbers in your password")
  var wantsSpecialCharacters = window.confirm("Click OK if you'd like special characters in your password")
  if (!wantsLowercase && !wantsUppercase && !wantsNumbers && !wantsSpecialCharacters) {
    window.alert("Please select at least one option.")
    getCharacterTypes()
  }
  return {
    wantsLowercase,
    wantsUppercase,
    wantsNumbers,
    wantsSpecialCharacters,
  }
}

function generatePassword() {
  var generatedPasswordLength = getPasswordLength();
  var characterTypes = getCharacterTypes()
  
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789"
  var specialCharacters = "!@#$%^&*()~[]{}<>?"

  var chars = ""
  var password = ""

  if(characterTypes.wantsLowercase){
    chars += lowercase
  }

  if(characterTypes.wantsUppercase){
    chars += uppercase
  }
  if(characterTypes.wantsNumbers){
    chars += numbers
  }
  if(characterTypes.wantsSpecialCharacters){
    chars += specialCharacters
  }
  
  for (var i =0; i <= generatedPasswordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
  }
  

  return password


}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
      // Write password to the #password input
     // Convert from a string to an integer
      // Validate that input is actually a number
     // Validate that the number is between the correct lengths
     // If true continue
      // If false, notify the user, and ask again
      // Add event listener to generate button
  // 