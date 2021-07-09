
const h1 = document.createElement('h1') 
document.body.appendChild(h1);

h1.innerHTML = 'Day 3 Take Home Challenge';

//Names
const firstName = prompt('What is your first name?');
const lastName = prompt('What is your last name?');
console.log('firstName, lastName');
alert(lastName);


//Bonus - Birthday
const birthday = prompt('When\'s your birthday?');
const correctBirthday = confirm(`Is ${birthday} your birthday?`);

if (correctBirthday){
    alert('Where\'s the party?')
} else {
    alert('incorrect birthday')
}



