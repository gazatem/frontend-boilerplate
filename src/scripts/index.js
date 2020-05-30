import '../styles/index.scss';
var template = require("../index.handlebars");
const axios = require('axios');


axios({
    url: 'http://localhost:8000/products',
    method: 'get',
    timeout: 8000,
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(res => render(res.data))
  .catch(err => {
    console.error(err);
  });


function render(products) {
  var div = document.createElement('div');
  div.innerHTML = template({
    title: "Products listing:",
    products: products.data
  });
  document.body.appendChild(div);
}
 