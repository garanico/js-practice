// Day 8 Daily Challenge

// Congrats, you got a new dog!
// Create an object named "dog"
// Name and describe your dog
// Add a property to your dog object called "name" and assign a name
// Add two more properties to describe your dog. (ex: How many legs, fur color, etc)
// Let's teach it some tricks
// Give your dog a property called “speak” and assign a function that will alert “woof!”
// Add another method to teach your dog one more trick
// BONUS: Display your dog object values in HTML



const dog = {
    name: "Molly", //property
    breedType: "Mini Poodle/St. Bernard",//another property
    age: 13,//another property
    speak: function(){
        alert("woof!");//function assigned to a property
    },
    getBall: function(){
        prompt("Get the ball!");
    }

}


console.log(dog);
