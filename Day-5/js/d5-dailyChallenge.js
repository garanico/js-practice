//Day 5 Daily Challenge
//Write a Function that accepts a number as an argument
//Alert the user whether the give number is even or odd
//Call your function



let num = prompt("Enter a number."); //ask the user to enter in a number

console.log(num); //logs what the user inputted

console.log(typeof(num)); //checks the data type of the input: string, number, boolean

let convertNum = Number(num); //converts user input into a number. If value cannot be converted, expected return is NaN

console.log(convertNum);//logs the converted input

if(isNaN(convertNum)){
prompt("Enter a valid number."); 
} //if input is NaN, prompts user to enter a valid number
else{
 console.log(convertNum);
}; //if a number, logs number

if (convertNum % 2 == 0){
alert("The number is even!");
}//checks if number is divisible by 2, it's even!
else{
alert("The number is odd!");
}; //if number is not divisible by 2, it's odd!

