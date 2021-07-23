//Day 8 Take Home 

// Let's say you're a car manufacturer and need to create many cars to build your inventory
// Create a class called "car"
// Add some properties like "make", "model", "year", "color", etc
// Use your car class to construct 4 (or more) different cars
// console log your code so you can see the results!
// BONUS: Display the details for each of your cars in your HTML


class Car{
    constructor(make, model, year, color, bodyStyle){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.bodyStyle = bodyStyle;
    }
}

let carList = new Car [("Subaru", "Ascent", 2021, "white", "SUV"), new Car ("Toyota", "Tacoma", 2008, "black" "truck"), new Car ("Little Tikes", "Patrol Police Car", 2018, "black" "coupe"), new Car ("Chevrolet", "Camaro", 1999, "silver", "coupe")];
console.log(carList);