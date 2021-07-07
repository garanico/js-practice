const list =[];
const h1 = document.createElement('h1');
document.body.appendChild(h1);
h1.innerHTML = 'List';

//creates the field to put enter data
const itemInput = document.createElement('input')
document.body.appendChild(itemInput);
itemInput.placeholder = 'Enter an Item Name';

//when you click the button, it creates a list of data
const addItemButton = document.createElement('button');
document.body.appendChild(addItemButton);
addItemButton.innerHTML = "Add Item";
addItemButton.addEventListener('click', function(){
    addToList();
    drawList();
});

//adds data to list
function addToList(){
    const value = itemInput.value;
    list.push(value); 
    list.sort(); //this will sort the list in alphabetical order
    itemInput.value = ''; //this will clear the input field after data has been added
}

//this draws out the data
function drawList(){
    ol.innerHTML = '';
    list.forEach(function(value){
        const li = document.createElement('li');
        li.innerHTML = value;
        ol.appendChild(li); 
    });
}
const ol = document.createElement('ol')
document.body.appendChild(ol)