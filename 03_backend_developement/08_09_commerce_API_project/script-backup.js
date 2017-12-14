const request = require("request");
const PG = require("pg");

const client = new PG.Client();
client.connect();

// function insertCatIntoCommerceApi(object){
//   client.query(
//     "INSERT INTO categories VALUES ($1::uuid, $2::varchar(10), $3::text)",
//     [object.id, object.decathlon_id, object.label],
//     function(error, result){
//       if(error){
//         console.warn(error);
//       } else {
//         console.log(object);
//       }
//       // client.end();
//     }
//   );
// }
//
// function insertBrdIntoCommerceApi(object){
//   client.query(
//     "INSERT INTO brands VALUES ($1::uuid, $2::text)",
//     [object.id, object.title],
//     function(error, result){
//       if(error){
//         console.warn(error);
//       } else {
//         console.log(object);
//       }
//       // client.end();
//     }
//   );
// }
//
// function insertPrdIntoCommerceApi(object){
//   client.query(
//     "INSERT INTO products VALUES ($1::uuid, $2::varchar(10), $3::varchar(255), $4::text, $5::uuid, $6::float, $7::float, $8::float, $9::integer, $10::text, $11::float)",
//     [object.id, object.decathlon_id, object.title, object.description, object.brand_id, object.min_price, object.max_price, object.crossed_price, object.percent_reduction, object.image_path, object.rating],
//     function(error, result){
//       if(error){
//         console.warn(error);
//       } else {
//         console.log(object);
//       }
//       // client.end();
//     }
//   );
// }
//
//
// function fetchDataCategories(){
//   request(
//     {
//       url: "https://decath-product-api.herokuapp.com/categories",
//       method: "GET"
//     },
//     function(error, response, result){
//       const jsonCategories = JSON.parse(result);
//       console.log(jsonCategories);
//       return jsonCategories.forEach(insertCatIntoCommerceApi);
//     }
//   );
// }
//
// function fetchDataBrands(){
//   request(
//     {
//       url: "https://decath-product-api.herokuapp.com/brands",
//       method: "GET"
//     },
//     function(error, response, result){
//       const jsonBrands = JSON.parse(result);
//       console.log(jsonBrands);
//       return jsonBrands.forEach(insertBrdIntoCommerceApi);
//     }
//   );
// }
//
// function fetchDataProducts(){
//   request(
//     {
//       url: "https://decath-product-api.herokuapp.com/products",
//       method: "GET"
//     },
//     function(error, response, result){
//       const jsonProducts = JSON.parse(result);
//       console.log(jsonProducts);
//       return jsonProducts.forEach(insertPrdIntoCommerceApi);
//     }
//   );
// }


function fetchCategoriesId(objectCategory){
  const category_id = objectCategory.id;
  // console.log(object.id);
  // setInterval(fetchDataProductsFromCategories(object.id),3000);
  setInterval(() => {
    fetchDataProductsFromCategories(category_id);
  }, 3000);
}


function fetchCategories(){
  request(
    {
      url: "https://decath-product-api.herokuapp.com/categories",
      method: "GET"
    },
    function(error, response, result){
      const jsonCategories = JSON.parse(result);
      return jsonCategories.forEach(fetchCategoriesId);
    }
  );
}


function insertIntoTablePrdByCat(values){
  console.log(values);
  client.query(
    "INSERT INTO products_by_categories (category_id, product_id, product_title) VALUES ($1::uuid, $2::uuid, $3::varchar(255))",
    [values],
    function(error, result){
      if(error){
        console.warn(error);
      } else {
        // console.log(values);
      }
      // client.end();
    }
  );
}

function fetchDataProductsFromCategories(category_id){
  request(
    {
      url: `https://decath-product-api.herokuapp.com/categories/${category_id}/products`,
      method: "GET"
    },
    function(error, response, result){
      const jsonProductsbyCat = JSON.parse(result);
      return jsonProductsbyCat.forEach((object) => {
        insertIntoTablePrdByCat([category_id, object.id, object.title]);
      });
    }
  );
}

fetchCategories();

// fetchDataCategories();
// fetchDataBrands();
// fetchDataProducts();

// module.exports = {
//   fetchDataProducts: fetchDataProducts,
//   insertPrdIntoCommerceApi: insertPrdIntoCommerceApi
// };


// function insertIntoTablePrdByCat(object){
//   client.query(
//     "INSERT INTO products_by_cat (id, decathlon_id, title, description, brand_id, min_price, max_price, crossed_price, percent_reduction, image_path, rating) VALUES ($1::uuid, $2::varchar(10), $3::varchar(255), $4::text, $5::uuid, $6::float, $7::float, $8::float, $9::integer, $10::text, $11::float)",
//     [object.id, object.decathlon_id, object.title, object.description, object.brand_id, object.min_price, object.max_price, object.crossed_price, object.percent_reduction, object.image_path, object.rating],
//     function(error, result){
//       if(error){
//         console.warn(error);
//       } else {
//         console.log(object);
//       }
//       // client.end();
//     }
//   );
// }
