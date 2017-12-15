// const request = require("request");
const PG = require("pg");
const client = new PG.Client();
client.connect();

client.query(
  "SELECT title, decathlon_id FROM products WHERE title LIKE 's%' LIMIT 3",
  function(error, result){
    if(error){
      console.warn(error);
    } else {
      console.log(result.rows);
    }
    client.end();
  }
);
