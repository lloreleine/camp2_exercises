const PG = require("pg");
const express = require("express");
const app = express();
const port = 3000;

const client = new PG.Client();
client.connect();

app.get("/decathlon", function(request, result){
  client.query(
    "SELECT products.title FROM products WHERE products.title LIKE 's%' LIMIT 3",
    function(error, resultQuery){
      if(error){
        console.warn(error);
      } else {
        result.send(resultQuery.rows);
      }
      client.end();
    }
  );
  console.log(request.params);
});

app.listen(port, function(){
  console.log("Serveur launched on port: "+port);
});
