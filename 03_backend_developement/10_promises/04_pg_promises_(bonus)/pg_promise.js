const PG = require("pg");
const fetch = require("node-fetch");


function insertIntoTablePrdByCat(values){
  console.log(values);
  const client = new PG.Client();
  client.connect();
  client.query(
    "INSERT INTO test_prds_by_cat (id, title, category_id) VALUES ($1::uuid, $2::text, $3::text)",
    values,
    function(error, result){
      if(error){
        console.warn(error);
      } else {
        // console.log(result);
      }
      client.end();
    }
  );
}

function fetchDataProductsFromCategories(category_id){
  return fetch(`https://decath-product-api.herokuapp.com/categories/${category_id}/products`)
    .then(response => response.json())
    .then(function(result){
      return result.forEach((object) => {
        insertIntoTablePrdByCat([object.id, object.title, category_id]);
      });
    });
}

fetchDataProductsFromCategories("004770d0-da57-4bf4-8e0c-f597be8b0b3c");
