import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';

function Chat(props) {
  // handleChange = event => {
  //   this.setState({ newMessage: event.target.value });
  // };
  //
  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.sendMessage(this.state.newMessage);
  //   this.setState({ newMessage: "" });
  // };
  //
  // componentDidUpdate() {
  //   // https://reactjs.org/docs/react-component.html#componentdidupdate
  //   // This will make the list of messages scroll to the bottom each time
  //   // the component update, that way, the last message will always be visible
  //   this.messageListDiv.scrollTop = this.messageListDiv.scrollHeight;
  // }
  return (
    <div className="Chat">
      <div
        className="Chat-messages"
        ref={(node) => {
          // refs allows you to have a reference to an element of the DOM
          // You should use this parcimoniously and don't change the DOM or React
          // will go crazy
          // See https://reactjs.org/docs/refs-and-the-dom.html
          this.messageListDiv = node;
        }}
      >
        {props.messages.map((message, index) =>
          (
            <div className="message-container" key={index}>
              <span className="author">{message.userName}</span>
              <span className="message">{message.message}</span>
            </div>
          )
        )}
      </div>
      <div className="Chat-form">
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            value={props.state.newMessage}
            onChange={props.handleChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

function mapChatToProps(state){
  return {
    userName: state.userName,
    currentValue: state.currentValue,
    nbOfUsers: state.nbOfUsers,
    newMessage: state.newMessage,
    messages: state.messages
  }
}

function mapDispatchToProps(dispatch){
  return {
    handleChange: () => ({type: "CHANGE"}),
    handleSubmit: () => ({type: "SUBMIT"})
  }
}

const ConnectedChat = connect(mapChatToProps, mapDispatchToProps)(Chat);
export default ConnectedChat;
