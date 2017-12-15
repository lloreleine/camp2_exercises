const fetch = require("node-fetch");
const API_KEY = process.env.OPENWEATHER_API_KEY2;

function weatherByCityName(city){
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(function(result){
      console.log(`temp by City : ${result.main.temp} °C`);
    });
}

function weatherByLatitudeAndLongitude(latitude, longitude){
  return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(function(result){
      console.log(`temp by Lat : ${result.main.temp} °C`);
    });
}


weatherByCityName("Paris");
weatherByLatitudeAndLongitude(32.661343,51.680374);
