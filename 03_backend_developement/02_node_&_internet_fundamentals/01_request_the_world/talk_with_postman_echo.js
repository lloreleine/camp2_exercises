// A First Query

const request = require("request");

function simpleGet(callback){
  request(
    {
      url: "https://postman-echo.com/get",
      method: "GET"
    },
    function(error, response, result){
      callback(result);
    }
  );
}

function simpleGetWithParams(callback){
  request(
    {
      url: "https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis",
      method: "GET"
    },
    function(error, response, result){
      const tradResult = JSON.parse(result);
      callback(tradResult.args);
    }
  );
}

function validateTimestamp(callback){
  const date = new Date();
  const fullYearDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  request(
    {
      url: `https://postman-echo.com/time/valid?timestamp=${fullYearDate}`,
      method: "GET"
    },
    function(error, response, result){
      callback(result);
    }
  );
}

function callback(result){
  console.log(result);
}

simpleGet(callback);
simpleGetWithParams(callback);
validateTimestamp(callback);

module.exports = {
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp: validateTimestamp
};
