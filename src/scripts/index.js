import '../styles/index.scss';
var template = require("../index.handlebars");
const axios = require('axios');

var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
myHeaders.append('Access-Control-Allow-Origin', '*');



function render(products) {
  var div = document.createElement('div');
  div.innerHTML = template({
    title: "Products listing:",
    products: products.data
  });
  document.body.appendChild(div);
}
 