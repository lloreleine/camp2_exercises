// const request = require("request");
const PG = require("pg");
const client = new PG.Client();
client.connect();

client.query(
  "SELECT id FROM categories LIMIT 4",
  function(error, result){
    if(error){
      console.warn(error);
    } else {
      const resultTable = result.rows.map(function(object){
        return object.id;
      });
      console.log(resultTable);
      console.log(result.rows);
    }
    client.end();
  }
);
