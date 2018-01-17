import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import store from './Store';
import ConnectedTitle from './Title';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Counter React - Redux</h1>
      </header>
      <p className="App-intro">
        <ConnectedTitle />
        <button onClick={props.decrement}>-</button>
        {props.counter}
        <button onClick={props.increment}>+</button>
      </p>
    </div>
  );
}


function mapCounterToProps(state) {
  return {
    counter: state.counterCombine.counter,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({type: "INCREMENT"}),
    decrement: () => dispatch({type: "DECREMENT"})
  }
}


const ConnectedApp = connect(mapCounterToProps, mapDispatchToProps)(App);
export default ConnectedApp;
