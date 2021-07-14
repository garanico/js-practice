const h1 = document.createElement('h1') 
document.body.appendChild(h1);
h1.innerHTML = 'Day 4 Take Home Challenge';


//------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number


//Prompt the user for two different numbers.  Do not let the user enter NaN

//const means it can be only be assigned once, cannot be updated once set!  Memory counts.

//let means it can be reassigned

let number1 = prompt ("Enter a number");
let number2 = prompt ("Enter another number");


console.log(number1, number2);


//typeof function checks to verify what data type is entered
console.log(typeof(number1, number2));

//converts string into integer
const number1ToInt = parsInt(numberOne);

//converts strings into numbers. need to convert number1, number2 to let for this to work.
number1 = parseInt(number1);
number2 = parseInt(number2);

//alert the larger number
//alert (Math.max(number1, number2));

if(number1 > number2){
    alert("the larger number is" + number1);
}
else {
    alert ("the larger number is" + number2);
}





//const number2 = prompt('Enter another number.')
//parseInt(number1, number2);



