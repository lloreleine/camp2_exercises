import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

function onPressLearnMore(){
  return
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
          style={{width: 50, height: 50}} />
          <Text style={styles.elements}>My Awesome App Project</Text>

          <Text style={styles.elements}>Please enter your name:</Text>
          <TextInput
            style={{height: 20, width: 50, borderColor: 'gray', borderWidth: 1}}
            placeHolder="enter your name"
          />
          <Button
            style={styles.button}
            onPress={onPressLearnMore}
            title="Login"
            accessibilityLabel="Learn more about this purple button"
          />
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
