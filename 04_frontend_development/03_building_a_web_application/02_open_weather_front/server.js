const fetch = require("node-fetch")

const express = require("express");
const app = express();
const PG = require("pg");

const port = 3000;

const API_KEY = process.env.OPENWEATHER_API_KEY2;

app.use(express.static('images'));

app.get( "/:id", function (request, result) {
  return fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${request.params.id}&units=metric&APPID=${API_KEY}`,
      {method: "GET"}
    )
    .then((response) => response.json())
    .then((resultTemp) => {
      result.send(`<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf8"/>
          <title>Weather Page</title>

          <style>
            body{
              width:300px;
              margin:auto;
              text-align:center;
            }
          </style>
        </head>
        <body>
          <h1>Weather at ${request.params.id}</h1>
          <h3>Where do you want to go?</h3>
          <form>
            <input id="input" type="text" placeholder="Search">
            <button id="myButton" type="button">Search</button>
          </form>
          <p>The weather in ${request.params.id} is: ${resultTemp.weather[0].main}<br/>
          Check this out!<br/>
          <img src=${resultTemp.weather[0].main}.jpeg width="300"/><br/>
          And the temperature is: ${resultTemp.main.temp}°C</p>

          <script>
          const userInput = document.querySelector("#input");
          const myButton = document.querySelector("#myButton");

          myButton.addEventListener("click", () => {
            window.location.href = "http://localhost:3000/" + userInput.value;
          });

          </script>
        </body>
      </html>`);
    });
});


app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
