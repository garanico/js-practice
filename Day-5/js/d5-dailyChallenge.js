//Day 5 Daily Challenge
//Write a Function that accepts a number as an argument
//Alert the user whether the give number is even or odd
//Call your function



//let num = prompt("Enter a number."); //ask the user to enter in a number
//console.log(num); //logs what the user inputted
//console.log(typeof(num)); //checks the data type of the input: string, number, boolean

//let convertNum = Number(num); //converts user input into a number - if value cannot be converted, expected return is NaN
//console.log(convertNum);//logs the converted input

//if(isNaN(convertNum)){
//prompt("Enter a valid number."); 
//} //if input is NaN, prompts user to enter a valid number
//else{
// console.log(convertNum);
//};//if a number, logs number

//if (convertNum % 2 == 0){
// alert("The number is even!");
//}//checks if number is divisible by 2, it's even!
//else{
// alert("The number is odd!");
//}; //if number is not divisible by 2, it's odd!


//Day 5 Take Home
//Write a function that accepts a password (string)
//Validate the password using the following rules:
//Must be 6-20 characters long
//Must start with a letter
//Alert the user if their password has been accepted or why their passoword was rejected



let password = prompt("Please enter a password that is 6-20 charaters long.  Password must start with a letter."); //ask the user to input a password with required parameters.

//console.log(typeof (password)); //checks the data type of the input

let firstCharacter = console.log(password.charAt(0)); //logs + charAt(0) identifies the first character in the variable 'password'.

let validLength = console.log(password.length);
//console.log(password.length); //logs + .length checks the number of charcters in the variable 'password'.

//Validates first character is a letter

//if (firstCharacter == [/a-z, A-Z/]) {
    //console.log(firstCharacter);
//} 
//else (firstCharacter !== [/a-z, A-Z/]); {
    //prompt("Password must start with a letter")
//};



//Validates Password Minimum and Maximum Length

//if (password.length <= 6 || password.length >= 20) {
    //console.log(password.length);
//} 
//else (password.length < 6 || password.length > 20); {
    //prompt("Password is the incorrect number of characters.")
//};


//if ((firstCharacter && password.length)){
    //alert ("Your password has been accepted!");
//}
//else (prompt ("Your password is incorrect" ));
