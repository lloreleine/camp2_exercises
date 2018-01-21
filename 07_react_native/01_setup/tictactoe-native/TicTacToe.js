import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Board from './Board';

const WINNING_COORDINATES = [
  [{letter: "a", digit: "0"}, {letter: "a", digit: "1"}, {letter: "a", digit: "2"}],
  [{letter: "b", digit: "0"}, {letter: "b", digit: "1"}, {letter: "b", digit: "2"}],
  [{letter: "c", digit: "0"}, {letter: "c", digit: "1"}, {letter: "c", digit: "2"}],
  [{letter: "a", digit: "0"}, {letter: "b", digit: "1"}, {letter: "c", digit: "2"}],
  [{letter: "a", digit: "2"}, {letter: "b", digit: "1"}, {letter: "c", digit: "0"}],
  [{letter: "a", digit: "0"}, {letter: "b", digit: "0"}, {letter: "c", digit: "0"}],
  [{letter: "a", digit: "1"}, {letter: "b", digit: "1"}, {letter: "c", digit: "1"}],
  [{letter: "a", digit: "2"}, {letter: "b", digit: "2"}, {letter: "c", digit: "2"}]
];


export default class TicTacToe extends Component {
  constructor(props){
    super(props);
    this.state = {
      grid: {
        a: Array(3).fill('_'),
        b: Array(3).fill('_'),
        c: Array(3).fill('_')
      },
      player: 'X',
      game: '',
      winner: ''
    };
  }

  handlePlay = (letter, index, player) => {
    if(this.state.game !== 'win' && this.state.grid[letter][index] === '_'){
      let newGrid = this.state.grid;

      newGrid[letter][index] = player;
      if(player === 'X'){
        this.setState({
          grid: newGrid,
          player: 'O'
        });
      } else {
        this.setState({
          grid: newGrid,
          player: 'X'
        });
      }
      let arrayOfArray=(Object.values(newGrid));
      let isFull = arrayOfArray.reduce((newArray, array) => newArray.concat(array), []);

      let testNull = isFull.every((value) => value !== '_');

      if(testNull){
        this.setState({
          game: 'tie'
        });
      }
      this.hasWinner();
    }
  }


  hasWinner() {
    const isWinningLine = (line) => {
      const pattern =
        line
          .map((coordinate) => this.state.grid[coordinate.letter][coordinate.digit])
          .join("");

      return pattern === "XXX" || pattern === "OOO";
    };

    let testWin = (WINNING_COORDINATES.some(isWinningLine));
    if(testWin){
      this.setState({
        game: 'win',
        winner: this.state.player
      })
    }
    return testWin;
  }

  displayPlayer(){
    if(this.state.game !== 'win' && this.state.game !== 'tie'){
      if(this.state.player === 'X'){
        return <Text style={styles.marginTop}>Player {this.state.player}, your turn !</Text>
      }
      else if(this.state.player === 'O'){
        return <Text style={styles.marginTop}>Player {this.state.player}, your turn !</Text>
      }
    }
  }

  restart = () => {
    this.setState({
      grid: {
        a: Array(3).fill('_'),
        b: Array(3).fill('_'),
        c: Array(3).fill('_')
      },
      player: 'X',
      game: '',
      winner: ''
    })
  }

  gameIsFinished(){
    if(this.state.game === 'tie'){
      return (
        <View style={styles.boxElement}>
          <Text>Looks like its a tie. Thanks for playing!</Text>
          <Button onPress={this.restart} title="Play Again"/>
        </View>
      )
    }
    else if(this.state.game === 'win'){
      return (
        <View style={styles.boxElement}>
          <Text style={styles.textColor}>Well done {this.state.winner}, you won!</Text>
          <Button onPress={this.restart} title="Play Again" />
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigTitle}>- TicTacToe Game -</Text>
        <Text style={styles.welcomeText}>Welcome {this.props.userName}</Text>
        <View style={styles.playBoard}>
          <Board
            grid={this.state.grid}
            player={this.state.player}
            handlePlay={this.handlePlay} />
          {this.displayPlayer()}
          {this.gameIsFinished()}
        </View>
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
  playBoard: {
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
  boxElement:{
    marginTop: 20,
  },
  bigTitle: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  textColor: {
    color: 'rgba(91,10,12,.8)',
    fontWeight: 'bold',
    fontSize: 18,
  },
  welcomeText: {
    color: '#f56d67',
    fontSize: 14,
    marginTop: 25,
  },
  marginTop: {
    marginTop: 20,
  }
});
