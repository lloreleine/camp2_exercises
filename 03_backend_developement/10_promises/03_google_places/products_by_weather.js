const fetch = require("node-fetch");
const express = require("express");
const app = express();
const PG = require("pg");

const port = 3000;

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const API_KEY2 = process.env.OPENWEATHER_API_KEY2;
const API_KEY = process.env.GOOGLEPLACES_API_KEY;

function getTempByLocation(location){
  return fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${location}&key=${API_KEY}`)
    // .then(function(response, error){
    //   if(error){
    //     console.log("I'm sorry, this is not a correct location");
    //   } else{
    //     console.log("Entré dans le else");
    //     return response.json();
    //   }
    // })

    .then(response => response.json())
    .then(result => result.results[0].geometry.location)
    .then(function weatherByLatitudeAndLongitude(result){
      return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${result.lat}&lon=${result.lng}&units=metric&APPID=${API_KEY2}`)
        .then(response => response.json())
        .then(function(resultQuery){
          console.log(`\nTemperature at ${location} : ${resultQuery.main.temp} °C`);
          console.log(`Geographics coords - Lat: ${result.lat} Long: ${result.lng}`);
          const weatherIndic = [resultQuery.main.temp,resultQuery.weather[0].main];
          return weatherIndic;
        })
        .then(function(result){
          fetchProductByWeather(result);
          console.log(`\nGo check your orders on => localhost:${port}/products-order right now ;)`);
        });
    })
    .catch(function() {
      console.log("Please try again");
      askLocalisation();
    });
}

function fetchProductByWeather(weatherIndic){
  console.log(weatherIndic[0]);
  console.log(weatherIndic[1]);
  let weatherTemp="";
  let weatherDetails="";
  if(weatherIndic[0]>17){
    weatherTemp="hot";
  } else if(weatherIndic[0]<5){
    weatherTemp="cold";
  }
  if(weatherIndic[1]==="Rain"){
    weatherDetails="rain";
  } else if(weatherIndic[1]==="Clear"){
    weatherDetails="sunny";
  }
  app.get( "/products-order", function (request, result) {
    const client = new PG.Client();
    client.connect();
    client.query(
      "SELECT decathlon_id, title, weather_category FROM products_by_weather WHERE weather_category IN ($1::text, $2::text)",
      [weatherTemp, weatherDetails],
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
}

function askLocalisation() {
  reader.question("Where are you?\n", (city) =>{
    getTempByLocation(city)
      .then(() => {
        reader.close();
      });
  });
}

// getTempByLocation("Honolulu");

app.listen(port, function () {
  console.log("Server listening on port:" + port);
  askLocalisation();
});
