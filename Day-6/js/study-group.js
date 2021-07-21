const url = async(pokename)=>{
    // this is the API URL
    const apiUrl = "https://pokeapi.co/api/v2/";
    // this is the end point
    const endPoint = `pokemon/${pokename}`; 
    //this asks to find the data
    const pokeData = await fetch(apiUrl + endPoint)
    //if you find the API...
    .then(res => {
        //...returning the data and converting to json format...
        return res.json();
    }).then(data => {
        //..return the data
        return data;
    })
//logs 
    console.log(pokeData);
    //alert the user the name of the pokemon
    alert(pokeData.name)

    return pokeData;
}
//calling the function
url("cubone");







