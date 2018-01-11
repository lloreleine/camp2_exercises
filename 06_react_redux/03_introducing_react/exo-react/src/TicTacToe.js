import React, { Component } from 'react';
import './App.css';
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


class TicTacToe extends Component {
  constructor(props){
    super(props);
    this.state = {
      grid: {
        a: Array(3).fill('_'),
        b: Array(3).fill('_'),
        c: Array(3).fill('_')
      },
      player: 'X',
      game: ''
    };
  }

  handlePlay = (letter, index, cell, player) => {
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
        game: 'win'
      })
    }
    return testWin;
  }

  gameIsFinished(){
    if(this.state.game === 'tie'){
      return <h4>Looks like its a tie. Thanks for playing!</h4>
    }
    else if(this.state.game === 'win'){
      return <h4>Well done, you won!</h4>
    }
  }

  render() {
    return (
      <div className="global">
        <h3>Player {this.state.player}, your turn!</h3>
        <div className="playBoard">
          <Board
            grid={this.state.grid}
            player={this.state.player}
            handlePlay={this.handlePlay} />
          {this.gameIsFinished()}
        </div>
      </div>
    );
  }
}



export default TicTacToe;
