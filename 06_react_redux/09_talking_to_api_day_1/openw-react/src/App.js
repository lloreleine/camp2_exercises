import React, { Component } from 'react';
import logo from './logo.svg';
import CallApi from './CallApi';
import './App.css';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY2;

function fetchWeather(city){
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(function(result){
      let arrayWeather = [];
      arrayWeather.push(result.main.temp);
      arrayWeather.push(result.weather[0].main);
      return arrayWeather;
    })
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: '',
      weather: [],
      temp : '',
      loading: false,
      error: false
    };
  }

  handleInput = (evt) => {
    this.setState({city: evt.target.value});
  }

  submitOpenW = (evt) => {
    evt.preventDefault();
    this.setState({loading: true}, () =>
      fetchWeather(this.state.city)
      .then(temp => {
        this.setState({
          weather: temp,
          loading: false
        })
      })
    )
  }

  displayWeather() {
    if(this.state.weather[0]){
      return (
        <p>Weather: {this.state.weather[1]}<br/>
        Temperature: {this.state.weather[0]}°C
        </p>
      )
    }
  }
  render() {
    const loadPage = <h5>Loading...</h5>
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Open Weather</h1>
        </header>
        <p className="App-intro">
        </p>
        <CallApi state={this.state} handleInput={this.handleInput} submitOpenW={this.submitOpenW}/>
        <div>
        {this.state.loading && loadPage}
        {this.displayWeather()}
        </div>
      </div>
    );
  }
}

export default App;
export { fetchWeather };
