// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey! You clicked the button!")

// 1.prompt the user for the password criteris
//  a- password length 8-28
//  b- lowercase, uppercase, and special characters
// 2. validate the input
// 3. generate pw based on criteria


// 4. display 'password' on the page
  return "Generated password will go here!"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
