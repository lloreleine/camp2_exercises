import React, { Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import Slack from './Slack';

class App extends Component {
  constructor(props){
    super(props);
    this.launchDashboard = this.launchDashboard.bind(this);
    this.state = {
      isLoggedIn: false,
      userName: ''
    };
  }

  launchDashboard(){
    this.setState({
      isLoggedIn: true
    })
  }

  handleMsg(){
    return
  }

  render() {
    return (
      <View style={styles.container}>
          {this.state.isLoggedIn === false &&
          <View style={styles.form}>

            <Image
              source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
              style={{width: 50, height: 50}} />
            <Text style={styles.elements}>My Awesome App Project</Text>

            <Text style={styles.elements}>Please enter your name:</Text>
            <TextInput
              style={{height: 20, width: 100, borderColor: 'gray', borderWidth: 1}}
              placeHolder="enter your name"
              returnKeyType="send"
              onChangeText={(text) => this.setState({userName: text})}
              onSubmitEditing={this.launchDashboard}
            />
            <View style={{marginTop: 20}}>
              <Button
                onPress={this.launchDashboard}
                title="Login"
                color="#68a0cf"
              />
            </View>

          </View>
          }

          {this.state.isLoggedIn === true &&
            <Slack userName={this.state.userName}/>
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'papayawhip',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  elements: {
    margin:10,
  },
  button: {
    color:'red',
    margin:10,
    padding:20,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

export default App;
