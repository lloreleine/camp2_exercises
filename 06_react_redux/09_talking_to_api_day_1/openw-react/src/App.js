import React, { Component } from 'react';
import logo from './logo.svg';
import CallApi from './CallApi';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: '',
      weather: [],
      temp : ''
    };
  }

  handleInput = (evt) => {
    this.setState({city: evt.target.value});
  }

  submitOpenW = (evt) => {
    evt.preventDefault();
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&APPID=${this.props.apiKey}`)
    .then(response => response.json())
    .then(function(result){
      let arrayWeather = [];
      arrayWeather.push(result.main.temp);
      arrayWeather.push(result.weather[0].main);
      return arrayWeather;
    })
    .then(temp => {
      this.setState({
      weather: temp
      })
      console.log(this.state.weather);
    })
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
        {this.displayWeather()}
        </div>
      </div>
    );
  }
}

export default App;
