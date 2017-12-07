const request = require("request");
const API_KEY = process.env.OPENWEATHER_API_KEY;

function weatherByLatitudeAndLongitude(coordLat, coordLong) {
  return request(
    {
      url: `http://api.openweathermap.org/data/2.5/forecast?lat=${coordLat}&lon=${coordLong}&units=metric&APPID=e57eebb16bf1aed37366e43b39d220af`,
      method: "GET"
    }, function(error, response, result) {
      const json = JSON.parse(result);
      const weatherByDate = json.list.map((forecast) => {
        let testDate = new Date(forecast.dt_txt);
        // forecast.dt => date en UTC millisecondes : penser à faire (forecast.dt *1000)
        let dayOnly = testDate.getDate();
        let fullYear = testDate.getFullYear();
        let month = testDate.getMonth()+1;
        return console.log({
          date : `${dayOnly}/${month}/${fullYear}`,
          temperature: forecast.main.temp,
          weather: forecast.weather[0]
        });
      });
      return weatherByDate;
    });
}

function weatherByZipcode(zipCode, country){
  request(
    {
      url : `http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},${country}&units=metric&APPID=e57eebb16bf1aed37366e43b39d220af`,
      method: "GET"
    }, function (error, response, result){
      const jsonZip = JSON.parse(result);
      const weatherByDateZip = jsonZip.list.map((forecast) => {
        return console.log({
          date : forecast.dt_txt,
          temperature: forecast.main.temp,
          weather: forecast.weather[0]
        });
      });
      return weatherByDateZip;
    });
}

module.exports = {
  weatherByLatitudeAndLongitude: weatherByLatitudeAndLongitude,
  weatherByZipcode: weatherByZipcode
};

// curl -X GET "api.openweathermap.org/data/2.5/forecast?lat=35&lon=39&units=metric&APPID=e57eebb16bf1aed37366e43b39d220af"
// weatherByLatitudeAndLongitude(39, 135);
// weatherByZipcode(60200, "fr");
