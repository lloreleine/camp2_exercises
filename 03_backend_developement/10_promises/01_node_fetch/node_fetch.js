const fetch = require("node-fetch");

// function fetchProductById(id){
//   return fetch(`https://decath-product-api.herokuapp.com/products/${id}`)
//     .then(response => response.json())
//     .then(function(result){
//       console.log(result);
//     });
// }


function fetchProductById(id){
  return fetch(`https://decath-product-api.herokuapp.com/products/${id}`)
    .then(response => response.json())
    .then(result => result.brand_id)
    .then(result => fetch(`https://decath-product-api.herokuapp.com/brands/${result}`))
    .then(response => response.json())
    .then(function(result){
      // console.log(result.title);
      return result.title;
    });
}

fetchProductById("efe288cb-fb63-4b23-b8df-529f04b8b02b");

module.exports = fetchProductById;
