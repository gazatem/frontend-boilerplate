import '../styles/index.scss';
import $ from 'jquery';
const axios = require('axios');

window.$ = window.jQuery = $;

$('.login').on('click', function () {
  console.log('Login Meee');
  let email = $('#email').val();
  let password = $('#password').val();

  let data = JSON.stringify({
    password: password,
    email: email
  }); 

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
        
  fetch("http://backend-boilerplate.test/get-token", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  
   
console.log('login');