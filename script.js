// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercasearray = ["a","b","c","d"];
var uppercasearray = ["A", "B", "C", "D"];
var numberarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialarray = ["$", "&", "!"];
function generatePassword() {
  console.log("Hey! You clicked the button!")
var passlength = prompt ("How long")
var addlower = confirm("addlower?")
var addupper = confirm("addupper?")
var addnumbers = confirm("addnumbers?")
var addspecial = confirm("addspecial?")
var totalarray = []
if(addlower) {
  totalarray = totalarray.concat(lowercasearray)
}
if(addupper) {
  totalarray = totalarray.concat(uppercasearray)
}
if(addnumbers) {
  totalarray = totalarray.concat(numberarray)
}
if(addspecial) {
  totalarray = totalarray.concat(specialarray)
}
var results = ""
for(var i = 0; i < passlength; i ++) {
  var index = Math.floor(Math.random()*totalarray.length)
  var digit = totalarray[index]
  results += digit
}
console.log(results)
// 1.prompt the user for the password criteris
//  a- password length 8-28
//  b- lowercase, uppercase, and special characters
// 2. validate the input
// 3. generate pw based on criteria


// 4. display 'password' on the page
  return results
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
