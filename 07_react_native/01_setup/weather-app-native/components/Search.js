import React, { Component } from 'react';
import { View, TextInput, Image, Button, Keyboard } from 'react-native';
import style from '../Style';
import List from './List';
import { StackNavigator } from 'react-navigation';

// const API_KEY = process.env.REACT_APP_OPENWEATHER_APIKEY;

export class Search extends Component {

  static navigationOptions = {
    title: 'Rechercher une ville',
    tabBarIcon: () => {
      return <Image source={require('./icons/icon_home.png')}
                style={{width:45, height:45}}/>
    }
  }

  constructor(props){
    super(props);
    this.state = {
      city: '',
      report: null,
      loading: true
    }
  }

  fetchOpenWeather = (city) => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${API_KEY}`)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          report: result,
          loading: false
        });
      })
      .then(() => this.redirect())
      .catch((error) => {
        console.error(error);
      });
  }

  redirect(){
    Keyboard.dismiss();
    this.props.navigation.navigate('List', {city: this.state.city, report: this.state.report, loading: this.state.loading});
  }

  render(){
    return(
      <View style={style.container}>
        <TextInput
          underlineColorAndroid='transparent'
          style={style.input}
          value={this.state.city}
          onSubmitEditing={() => this.fetchOpenWeather(this.state.city)}
          onChangeText={(text) => this.setState({city: text})}
        />
        <Button
          style={style.button}
          onPress={() => this.fetchOpenWeather(this.state.city)} title='Envoyer' />
      </View>
    )
  }
}

const navigationOptions = {
  headerStyle: style.header,
  headerTitleStyle: style.headerTitle
}

export default StackNavigator({
  Search: {
    screen: Search,
    navigationOptions
  },
  List: {
    screen: List,
    navigationOptions
  }
})
