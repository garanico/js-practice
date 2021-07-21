//Day 7 Class Project - Instructor's code


const BASE_URL = 'http://fea2d139a33e.ngrok.io';//defines API base url
const FACTS_ENDPOINT = '/facts';//Lines 5-8 define endpoints.
const USERS_ENDPOINT = '/users';
const REGISTER_ENDPOINT = '/register';
const LOGIN_ENDPOINT = '/login';

const username = document.querySelector('#username'); //user input for username field in DOM
const registerButton = document.querySelector('#register'); //user input for register field in DOM
const loginButton = document.querySelector('#login'); //user input for login field in DOM

registerButton.addEventListener( 'click', register);//waiting for user to click on register button
loginButton.addEventListener('click', login);//waiting for user to click on login button




function post(endpoint, data) {
    return fetch(BASE_URL + endpoint, 
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            }
        })
    .then( res => {
        return res.json();
    })
}

function get(endpoint) {
    return fetch(BASE_URL + endpoint)
    .then(function(res) {return res.json();})
}


function register() {
    post(REGISTER_ENDPOINT, {username: username.value})
    .then( function (data) {
       console.log(data);
    });
}

function login() {
    post(LOGIN_ENDPOINT, {username: username.value, password: 'password'}).then( data => console.log(data));
}
