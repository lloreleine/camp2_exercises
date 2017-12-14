const express = require("express");
const app = express();
const PG = require("pg");

const port = 3000;

app.get( "/categories", function (request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM categories",
    function(error, resultQuery){
      if(error){
        console.warn(error);
      } else {
        console.log(resultQuery);
        result.send(resultQuery.rows);
      }
      client.end();
    }
  );
}
);

app.get( "/categories/:id", function (request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM categories WHERE id = $1::uuid",
    [request.params.id],
    function(error, resultQuery){
      if(error){
        console.warn(error);
      } else {
        result.send(resultQuery.rows);
      }
      client.end();
    }
  );
}
);

app.get( "/categories/:id/products", function (request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM categories WHERE id = $1::uuid",
    [request.params.id],
    function(error, resultQuery){
      if(error){
        console.warn(error);
      } else {
        result.send(resultQuery.rows);
      }
      client.end();
    }
  );
}
);

app.get( "/brands", function (request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM brands",
    function(error, resultQuery){
      if(error){
        console.warn(error);
      } else {
        result.send(resultQuery.rows);
      }
      client.end();
    }
  );
}
);

app.get( "/brands/:id", function (request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM brands WHERE id = $1::uuid",
    [request.params.id],
    function(error, resultQuery){
      if(error){
        console.warn(error);
      } else {
        result.send(resultQuery.rows);
      }
      client.end();
    }
  );
}
);

app.get( "/products", function (request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM products",
    function(error, resultQuery){
      if(error){
        console.warn(error);
      } else {
        result.send(resultQuery.rows);
      }
      client.end();
    }
  );
}
);

app.get( "/products/:id", function (request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM products WHERE id = $1::uuid",
    [request.params.id],
    function(error, resultQuery){
      if(error){
        console.warn(error);
      } else {
        result.send(resultQuery.rows);
      }
      client.end();
    }
  );
}
);


app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
