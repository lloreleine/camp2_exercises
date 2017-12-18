const fetch = require("node-fetch");
const API_KEY2 = process.env.OPENWEATHER_API_KEY2;
const API_KEY = process.env.GOOGLEPLACES_API_KEY;

function getTempByLocation(location){
  return fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${location}&key=${API_KEY}`)
    .then(response => response.json())
    .then(result => result.results[0].geometry.location)
    .then(function weatherByLatitudeAndLongitude(result){
      return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${result.lat}&lon=${result.lng}&units=metric&APPID=${API_KEY2}`)
        .then(response => response.json())
        .then(function(resultQuery){
          console.log(`Temperature at ${location} : ${resultQuery.main.temp} °C`);
          console.log(`Geographics coords - Lat: ${result.lat} Long: ${result.lng}`);
          return resultQuery.main.temp;
        });
    });
}


getTempByLocation("decathlon Campus");

module.exports = getTempByLocation;
