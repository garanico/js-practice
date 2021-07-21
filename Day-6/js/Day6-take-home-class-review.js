//Day 6 Take Home In-Class Review

// Create a new pen in codepen
// Make a reaquest to this Cat Facts API
// Get a random cat fact
// Display the cat fact in an alert


const BASE_URL = "https://cat-fact.herokuapp.com"; //define base url of API

const FACTS_ENDPOINT = "/facts"; //defines endpoint for facts data in API


fetch(BASE_URL + FACTS_ENDPOINT)//this asks to find the data

//if you find the API...
.then(res => {
    return res.json();//...return the data and convert to json format
 }).then( function(facts){
     const factsLength = facts.length;//determines how many facts there are.  There are a total of 5 facts for this example.

     const randomNumber = Math.random() * factsLength;//generates a random number using Math.random and multiplying it by the number of facts available (variable - factsLength).  The expected outcome is to generate any number between 0-5.

     const flooredNumber = Math.floor(randomNumber);// Math.floor rounds down the number to the nearest whole number. The expected outcome is to create a whole number between 0-4. 
     alert(facts[flooredNumber].text); //alert user with a cat fact selected by a random number.
 });

 //Lines 20-23: Expected output is to generate alert a random cat fact to the user.  