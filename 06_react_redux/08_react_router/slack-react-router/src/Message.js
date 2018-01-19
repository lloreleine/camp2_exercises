import React from 'react';
import './App.css';

function Message(props){
  let textColor = "red";
  if(props.currentUser === props.nameUser){
    textColor="blue";
  }
  return(
    <div>
      <span className={textColor}>{props.nameUser}</span>
      <span className="message">{props.message}</span>
    </div>
  )
}

export default Message;
