const request = require("request");


function weatherByCityName(city){
  return fetch(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`,
      method: "GET"
    },
    function(error, response, result){
      const json = JSON.parse(result);
      console.log(`The weather at ${city} is: ${json.weather[0].main} and the temperature is: ${json.main.temp}°C`);
      return json.weather[0].main;
    }
  );
}

module.exports = weatherByCityName;
