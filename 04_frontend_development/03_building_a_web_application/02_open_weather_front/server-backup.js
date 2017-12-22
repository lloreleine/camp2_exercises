const fetch = require("node-fetch")

const express = require("express");
const app = express();
const PG = require("pg");

const port = 3000;

const API_KEY = process.env.OPENWEATHER_API_KEY2;

app.use(express.static('./'));

app.get( "/:id", function (request, result) {
  return fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${request.params.id}&units=metric&APPID=${API_KEY}`,
      {method: "GET"}
    )
    .then((response) => response.json())
    .then((resultTemp) => {
      let weatherIcon;
      const sun = "./sun.png";
      const rain = "./rain.png";
      const clouds = "./clouds.jpg";
      const mist = "./mist.jpg";
      const drizzle = "./drizzle.png"
      const unknown = "./unknown.jpg";
      if(resultTemp.weather[0].main==="Mist"){
        weatherIcon = mist;
      } else if(resultTemp.weather[0].main==="Drizzle"){
        weatherIcon = drizzle;
      } else if(resultTemp.weather[0].main==="Rain"){
        weatherIcon = rain;
      } else if(resultTemp.weather[0].main==="Clear"){
        weatherIcon = sun;
      } else if(resultTemp.weather[0].main==="Clouds"){
        weatherIcon = clouds;
      } else{
        weatherIcon = unknown;
      };
      result.send(`<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf8"/>
          <title>Weather Page</title>
        </head>
        <body>
          <h1>Weather at ${request.params.id}</h1>
          <p>The weather in ${request.params.id} is: ${resultTemp.weather[0].main}<br/>
          You could enjoy the <img src=${weatherIcon} height="50" width="50"/><br/>
          And the temperature is: ${resultTemp.main.temp}°C</p>
        </body>
      </html>`);
    });
});


app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
