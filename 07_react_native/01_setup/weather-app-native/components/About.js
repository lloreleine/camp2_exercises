import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Image, Button } from 'react-native';
import style from '../Style';

export default class About extends Component {

  static navigationOptions = {
    title: 'Everything you need to know',
    tabBarIcon: () => {
      return <Image source={require('./icons/icon_about.png')}
                style={{width:45, height:45}}/>
    }
  }

  search() {
    this.props.navigation.navigate('Search');
  }

  render() {
    return (
      <View style={style.container}>
        <Text style={style.title}>About me</Text>
        <Text>Lorem ipsum dolor sit amet</Text>
        <Button
          style={style.button}
          onPress={() => this.search()}
          title='Rechercher une ville' />
        <ActivityIndicator style={style.container} color="#FF0000" size="large" animating={true} />
      </View>
    )
  }
}
