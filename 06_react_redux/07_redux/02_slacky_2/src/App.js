import React, { Component } from "react";
import { connect } from 'react-redux';
import "./App.css";
import ConnectedLogin from "./Login";
import ConnectedChat from "./Chat";

const websocket = new WebSocket("ws://localhost:3000");

websocket.addEventListener("message", event => {
    const message = JSON.parse(event.data);
    console.log("Message from server ", message);
    switch (message.type) {
      case "CONNECTION_START":
      default:
        return;
      case "MESSAGES":
        return;
    }
  })

function App(props) {

  // componentDidMount() {
  //   // Listen for messages
  //   this.websocket.addEventListener("message", event => {
  //     const message = JSON.parse(event.data);
  //     console.log("Message from server ", message);
  //     switch (message.type) {
  //       case "CONNECTION_START":
  //       default:
  //         return;
  //       case "MESSAGES":
  //         this.setState({ messages: message.data });
  //         return;
  //     }
  //   });
  // }
  //
  // handleUserName = userName => {
  //   this.setState({ userName: userName });
  //   this.websocket.send(
  //     JSON.stringify({
  //       type: "LOGIN",
  //       userName: userName
  //     })
  //   );
  // };
  //
  // sendMessage = message => {
  //   this.websocket.send(
  //     JSON.stringify({
  //       type: "NEW_MESSAGE",
  //       userName: this.state.userName,
  //       message: message
  //     })
  //   );
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Slacky</h1>
      </header>

      {props.userName ? (
        <ConnectedChat sendMessage={props.sendMessage} messages={props.messages} />
      ) : (
        <ConnectedLogin handleChange={props.handleChange} />
      )}
    </div>
  );
}

function mapAppToProps(state){
  return {
    currentValue: state.handleChange.currentValue,
    userName: state.handleSubmit.userName
  }
}

function mapDispatchToProps(dispatch){
  return {
    handleChange: () => dispatch({type: "LOGIN_USER"})
  }
}

const ConnectedApp = connect(mapAppToProps, mapDispatchToProps)(App);
export default ConnectedApp;
