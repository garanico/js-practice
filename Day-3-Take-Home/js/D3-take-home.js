
const h1 = document.createElement('h1') 
document.body.appendChild(h1);

h1.innerHTML = 'Day 3 Take Home Challenge';

//Names
let firstName = prompt('What is your first name?');
let lastName = prompt('What is your last name?');
console.log('firstName, lastName');
alert(lastName);


//Bonus - Birthday
let birthday = prompt('What\'s your birthday?');
confirm(`Is ${birthday} your birthday?`);
alert('When\'s the party?');


