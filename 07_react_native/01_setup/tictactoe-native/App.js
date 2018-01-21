import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TicTacToe from './TicTacToe';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      isLogged: false
    }
  }

  launchGame = () => {
    this.setState({
      isLogged: true
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isLogged === false &&
          <View style={styles.container}>
            <Text>Tic Tac Toe</Text>
            <Text>Game</Text>
            <TextInput
              style={styles.nameInput}
              placeholder=" Enter your name"
              returnKeyType="send"
              onChangeText={(text) => this.setState({userName: text})}
              onSubmitEditing={this.launchGame}
            />
            <Button
              onPress={this.launchGame}
              title="Start"
              color="#68a0cf"
            />
          </View>
        }

        {this.state.isLogged &&
          <TicTacToe userName={this.state.userName} />
        }

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameInput: {
    height: 20,
    width: 150,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
  }
});
