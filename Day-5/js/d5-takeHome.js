//Day 5 Take Home
//Write a function that accepts a password (string)
//Validate the password using the following rules:
//Must be 6-20 characters long
//Must start with a letter
//Alert the user if their password has been accepted or why their passoword was rejected



let password = prompt("Please enter a password that is 6-20 charaters long.  Password must start with a letter."); //ask the user to input a password with required parameters.

console.log(typeof (password)); //checks the data type of the input

let firstCharacter = console.log(password.charAt(0)); //logs + charAt(0) identifies the first character in the variable

console.log(password.length);
//console.log(password.length); //logs + .length checks the number of charcters in the variable

//Validates first character is a letter

if (firstCharacter == [/a-z, A-Z/]) {
    console.log(firstCharacter);
} else (firstCharacter !== [/a-z, A-Z/]); {
    prompt("Password must start with a letter")
};



//Validates Password Minimum and Maximum Length

if (password.length <= 6 || password.length >= 20) {
    console.log(password.length);
} else (password.length < 6 || password.length > 20); {
    prompt("Password is the incorrect number of characters.")
};


if ((firstCharacter && password.length)){
    alert ("Your password has been accepted!");
}
else (prompt ("Your password is incorrect" ));