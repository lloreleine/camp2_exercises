import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import moment from 'moment';
import 'moment/locale/fr';
import FadeInView from '../animation/FadeInView';

moment.locale('fr');

export default class Row extends Component {

  day(){
    let day = moment(this.props.dayReport.dt * 1000).format('ddd - hA');
    return (
      <Text style={style.bold}>{day.toUpperCase()}</Text>
    )
  }

  date(){
    let date = moment(this.props.dayReport.dt * 1000).format('DD/MM');
    return (
      <Text>{date}</Text>
    )
  }

  icon(size = 50){
    const typeWeather = this.props.dayReport.weather[0].main.toLowerCase();
    let image;
    switch(typeWeather) {
      case 'clear':
        image = require('./icons/sun.png')
        break;
      case 'rain':
        image = require('./icons/rain.png')
        break;
      case 'haze':
        image = require('./icons/haze.png')
        break;
      case 'snow':
        image = require('./icons/snow.png')
        break;
      case 'clouds':
        image = require('./icons/cloud.png')
        break;
      default:
        image = require('./icons/partly-sunny.png')
    }
    return (
      <Image source={image} style={{width: size, height: size}} />
    )
  }

  render() {
    if(this.props.index === 0){
      return (
        <FadeInView delay={this.props.index * 50}>
        <View style={style.firstView}>
          <View style={style.flexFirstView}>
            {this.icon(90)}
            <Text style={[style.temp, {fontSize: 35, color: '#000'}]}>{Math.round(this.props.dayReport.main.temp)}°C</Text>
          </View>
          <Text style={style.firstReport}>{this.day()}    {this.date()}</Text>
        </View>
        </FadeInView>
      )
    }
    else {
      return (
        <FadeInView delay={this.props.index * 50}>
        <View style={style.view}>
          <View style={style.flex}>
            <Text>{this.day()}    {this.date()}</Text>
            {this.icon()}
          </View>
          <Text style={style.temp}>{Math.round(this.props.dayReport.main.temp)}°C</Text>
        </View>
        </FadeInView>
      )
    }

  }
}

const style = StyleSheet.create({
  bold: {
    fontWeight: 'bold'
  },
  firstReport: {
    color: 'chocolate',
    fontSize: 18,
    fontWeight: 'bold'
  },
  flex: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  firstView: {
    backgroundColor: 'bisque',
    borderWidth: 0,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center'
  },
  flexFirstView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  view: {
    backgroundColor: 'aquamarine',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center'
  },
  temp: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22
  }
})
