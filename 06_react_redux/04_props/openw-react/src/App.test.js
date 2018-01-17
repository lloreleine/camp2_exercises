import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { fetchWeather } from './App';

const fakeFetch = require("../.__mocks__/mock-app.js");
const city = 'Lille';
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY2;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

fetch = fakeFetch;

test("fetchWeather should gives us temperature and weather", () => {
  expect.assertions(3);
  const expectedResult = [5.99, "Mist"];
  return fetchWeather(city)
    .then(weather => {
      expect(weather).toEqual(expectedResult);
      expect(fakeFetch).toHaveBeenCalled();
      expect(fakeFetch).toHaveBeenCalledWith(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`);
    })
});
