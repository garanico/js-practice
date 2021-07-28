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

function speakTrick() {
    let btn = document.createElement("button");//created a button 
    btn.innerHTML = "Speak!";//added text in the button
    document.body.appendChild(btn);//places the button to DOM
    btn.addEventListener("click", dog.speakTrick);//calls function on the click
   
 };

 function ballTrick() {
     let btn = document.createElement("button");
       btn.innerHTML = "Get the Ball!";
       document.body.appendChild(btn);
       btn.addEventListener("click", dog.getBall)
 };

const dog = {
    name: "Molly", //property
    breedType: "Mini Poodle/St. Bernard",//another property
    age: 13,//another property
    speakTrick(){
        alert("Woof!");
    },
    getBall(){
        alert("Get the Ball!");
  }
    };  

console.log(dog);
document.getElementById("dog").addEventListener("click", function (){
    document.getElementById("breedType").innerText=dog.breedType;
    document.getElementById("age").innerText=dog.age;
    document.getElementById("name").innerText=dog.name;
    let speakButton = speakTrick();//makes the button show
    let ballButton = ballTrick();
});
