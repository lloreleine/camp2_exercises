import React from 'react';
import { createStore, combineReducers } from 'redux';
import './App.css';

const initialState = {
  userName: null,
  currentValue: "",
  nbOfUsers: 0,
  newMessage: "",
  messages: [],
};

function handleData(state = initialState, action){
  switch(action.type){
    case "CONNECTION_START":
      return {
        ...state,
        nbOfUsers: state.nbOfUsers
      };
    case "LOGIN":
      return {
        ...state,
        userName: state.userName
      };
    case "MESSAGES":
      return {
        ...state,
        messages: state.messages
      }
    default :
      return state;
  }
  // this.setState({ userName: userName });
  // this.websocket.send(
  //   JSON.stringify({
  //     type: "LOGIN",
  //     userName: userName
  //   })
  // );
};

function handleChange(state = initialState, action) {
  switch(action.type){
    case "LOGIN_USER":
      return {
        ...state,
        currentValue: action.value
      }
    default:
      return state;
  }
}

function handleSubmit(state = initialState, action) {
  switch(action.type){
    case "LOAD_CHAT":
      return {
        ...state,
        userName: action.value
      }
    default:
      return state;
  }
}


  // this.websocket.send(
  //   JSON.stringify({
  //     type: "NEW_MESSAGE",
  //     userName: this.state.userName,
  //     message: message
  //   })
  // );


let allFcts = combineReducers({
  handleChange: handleChange,
  handleSubmit: handleSubmit
});

let store = createStore(allFcts);

export default store;
