const fetch = require("node-fetch");
const API_KEY = process.env.OPENWEATHER_API_KEY2;

function weatherByCityName(city){
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(function(result){
      console.log(result);
      // console.log(`temp by City : ${result.main.temp} °C`);
      // return result.main.temp;
    });
}

function weatherByLatitudeAndLongitude(latitude, longitude){
  return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(function(result){
      console.log(`temp by Lat : ${result.main.temp} °C`);
      return result.main.temp;
    });
}


weatherByCityName("nancy");
// weatherByLatitudeAndLongitude(32.661343,51.680374);

module.exports = {
  weatherByLatitudeAndLongitude: weatherByLatitudeAndLongitude,
  weatherByCityName: weatherByCityName
};


/* Code de Mickaël (via reader question pour la variable location) :

const fetch = require("node-fetch");
const readline = require("readline");

const API_KEY = process.env.ID_WEATHERMAP;

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function localisation() {
  reader.question("What is you city?\n", (city) =>{
    weatherByCity(city)
      .then(() => {
        reader.close();
      });
  });
}

function weatherByCity(city) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result.main.temp;
    })
    .then(result_temp => {
      console.log(result_temp + "°C");
    })
    .catch(error => {
      console.warn(error);
    });
}

localisation();
*/
