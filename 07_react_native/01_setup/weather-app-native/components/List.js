import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList, ScrollView, Image } from 'react-native';
import style from '../Style';
import WeatherRow from './weather/Row';

export default class List extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: `Météo / ${navigation.state.params.city}`,
      tabBarIcon: () => {
        return <Image source={require('./icons/icon_home.png')}
                  style={{width:45, height:45}}/>
      }
    }
  }

  constructor(props){
    super(props);
    this.state = {
      city: this.props.navigation.state.params.city,
      report: this.props.navigation.state.params.report,
      loading: this.props.navigation.state.params.loading
    }
  }

  render() {

    if(this.state.report === null){
      return (
        <ActivityIndicator style={style.container} color="#FF0000" size="large" animating={true} />
      )
    } else {
      return (
        <ScrollView>

        {this.state.report.list.map((row, index) =>
          <FlatList
              data={[row]}
              keyExtractor={item => item.dt}
              renderItem={({item}) =>
                  <WeatherRow dayReport={item} index={index} />
              }
          />
        )}

        </ScrollView>
      )
    }
  }
}
