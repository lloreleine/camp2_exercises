const request = require("request");
const API_KEY = process.env.OPENWEATHER_API_KEY;

function weatherByCity(city){
  return request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`,
      method: "GET"
    },
    function(error, response, result){
      const json = JSON.parse(result);
      console.log(`${json.main.temp} °C`);
      return `${json.main.temp} °C`;
    }
  );
}

module.exports = weatherByCity;
