import React from 'react';
import './App.css';

function Chat(props){
  return (
    <div>
      <h3>Welcome {props.userLoggedIn.name} to the Chat page</h3>
      <form className="margin-top" onSubmit={props.submitMsg}>
        <input type="text" placeholder="Please write your first message" rows="4" cols="60" onChange={props.handleMsg} />
      </form>
    </div>
  )
}

export default Chat;
