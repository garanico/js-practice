//Day 5 Take Home
//Write a function that accepts a password (string)
//Validate the password using the following rules:
//Must be 6-20 characters long
//Must start with a letter
//Alert the user if their password has been accepted or why their passoword was rejected



function askForValidPassword(){
    let password = prompt("Please enter a password that is 6-20 charaters long.  Password must start with a letter."); //ask the user to enter a password with required parameters.
    
    let firstCharacter = (password.charAt(0));//charAt(0) identifies the first character in the variable.

    const isValidCharacter = /[a-z, A-Z]/.test(firstCharacter);//checks if first character is a letter.
    const isValidLength = password.length >= 6 && password.length <= 20;//checks if input is between 6-20 characters.

    if (!isValidCharacter){
        alert("Password must start with a letter.");//if first character is not a letter, alert user what is wrong.
    }
    if(!isValidLength){
        alert("Password is not the right length.");//if password is not the right length, alert user what is wrong.
    }

    if ((isValidCharacter && isValidLength)){
        alert ("Your password has been accepted!");//both conditions must be true.
    } else {
        askForValidPassword();//if one of the conditions is not true, it will alert user what is wrong (Line 19 or Line 22), then function starts all over again.
    }
    
};

askForValidPassword();//call the function.
