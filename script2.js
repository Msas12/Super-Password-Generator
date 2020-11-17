
// Arrays for random generation of character types//
var specialChars = ['!', '?','@','#','$','%','^','&','*','_','='];
var numericChars = [0,1,2,3,4,5,6,7,8,9];
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Function to gather user input
function userRequirements() {
    //Prompts user to set password char length
    var userLength = parseInt(prompt('How many characters would you like your password to be?'));

    // Checks to make sure password is a numeric character
    if (isNaN(userLength) === true) {
        alert('Please provide a number');
        return;
    }

    // If user selects a number less than 8 the function will end
    if (userLength < 8) {
        alert('Please use a number greater than 8 to make your password more secure')
        return;
    }
    
    // If user selects a number greater than 128 the function will end
    if (userLength > 128) {
        alert('Please use a number less than 129')
        return;
    }

    // Variables to gather user input. User chooses character types to include
    var userSpecialChars = confirm('Do you want special characters in you password?');
    var userNumericChars = confirm('Do you want numberic characters in you password?');
    var userUpperChars = confirm('Do you want upper case letters in you password?');
    var userLowerChars = confirm('Do you want lower case letters in you password?');

    // If user does not choose any of available char types function will end
    if (userSpecialChars === false &&
        userNumericChars === false &&
        userUpperChars === false &&
        userLowerChars === false) {
            alert('Please choose at least ONE character type');
            return;
    }

    // Object storing user input
    var requirements = {
        userLength: userLength,
        userSpecialChars: userSpecialChars,
        userNumericChars: userNumericChars,
        userUpperChars: userUpperChars,
        userLowerChars: userLowerChars
    }

    // Stores User data for later
    return requirements;
}



// Function to generate password
function generatePassword() {
    var userOptions = userRequirements();

    // Variable to store password
    var result = [];

    // Array to store possible characters based on userOptions
    var possibleChars = [];

    // Array to guarantee that all user options make it into the password
    var guaranteedChars = [];

    // Adds special characters into array of possible characters based on user input
    // Pushes new random special character to guaranteedCharacters
    if (userOptions.userSpecialChars) {
        possibleChars = possibleChars.concat(specialChars);
        guaranteedChars.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
    }

    // Adds numeric characters into array of possible characters based on user input
    // Pushes new random numeric character to guaranteedCharacters
    if (userOptions.userNumericChars) {
        possibleChars = possibleChars.concat(numericChars);
        guaranteedChars.push(numericChars[Math.floor(Math.random() * numericChars.length)]);
    }

    // Adds upper characters into array of possible characters based on user input
    // Pushes new random upper character to guaranteedCharacters
    if (userOptions.userUpperChars) {
        possibleChars = possibleChars.concat(upperChars);
        guaranteedChars.push(upperChars[Math.floor(Math.random() * upperChars.length)]);
    }

    // Adds lower characters into array of possible characters based on user input
    // Pushes new random lower character to guaranteedCharacters
    if (userOptions.userLowerChars) {
        possibleChars = possibleChars.concat(lowerChars);
        guaranteedChars.push(lowerChars[Math.floor(Math.random() * lowerChars.length)]);
    }

    // For loop that concatenates random chars from the array of possible chars. And only concatenates up to the length chosen by the user that is stored in the options object
    for (var i = 0; i < userOptions.length; i++) {
        var possibleChar = (possibleChars[Math.floor(Math.random(possibleChars) * possibleChars.length)]);
        
        result.push(possibleChar)
    }
  
    // Add at least one of each guaranteed char in result
    for (var i = 0; i < guaranteedChars.length; i++) {
        result[i] = guaranteedChars[i];
    }
  
    // Transform result into a string and pass into writePassword
    return result.join('');
}



// Get references to #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);