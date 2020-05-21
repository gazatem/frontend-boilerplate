import '../styles/index.scss';
const axios = require('axios');

axios.get('https://gorest.co.in/public-api/posts?_format=json&access-token=tWqpGCFRlWqAAw_X9jDhLtQHZ76kC7WO2SJo')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
