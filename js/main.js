const differentButton = document.createElement('button') //This means make a thing (a button)
document.body.appendChild(differentButton) // appendChild - This tells you where to put the thing (put the button in the body of the document)

const myButton = document.querySelector ('#this-button') // querySelector - this give the thing a name (myButton is the nam)

//this is styling the button using css elements
myButton.style.color = 'green';
myButton.styles.fontSize = '50px';


myButton.innerText = 'Changed'; //this changes text 
myButton.innerHTML = 'Different' //this applies html properities

/* addEventListener - looks for the action, 'mouseout' is the action, function says if you do the action (mouseout), then alert fires*/

myButton.addEventListener ('mouseout', fuction(){
    alert('hello')
})
