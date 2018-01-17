import React from 'react';
import { createStore, combineReducers } from 'redux';
import './App.css';

const initialState = {
  counter: 0,
  title: "My f***ing counter"
};

function counter(state = initialState, action){
  switch(action.type){
    case "INCREMENT":
      return {
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1
      };
    default :
      return state;
  }
}

function changeTitle(state = initialState, action){
  switch(action.type){
    case "CHANGE":
      return {
        title: 'BAZINGA!'
      };
    default :
      return state;
  }
}


let allFcts = combineReducers({
  counterCombine: counter,
  titleCombine: changeTitle
});

let store = createStore(allFcts);

export default store;
